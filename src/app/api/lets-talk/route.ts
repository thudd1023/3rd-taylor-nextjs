import { NextRequest, NextResponse } from "next/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { promises as dns } from "node:dns";

function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error("[lets-talk] Missing Supabase URL or key — cannot write website_leads");
    return null;
  }
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@([a-z0-9-]+\.)+[a-z]{2,}$/i;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "10minutemail.com", "tempmail.com",
  "temp-mail.org", "yopmail.com", "trashmail.com", "sharklasers.com",
  "getnada.com", "dispostable.com", "throwawaymail.com", "maildrop.cc",
  "fakeinbox.com", "mailnesia.com", "mohmal.com", "example.com", "test.com",
]);

// Max confirmation emails per rolling hour, across all visitors. Circuit
// breaker so a bot run can never bounce more than this many messages.
const MAX_CONFIRMATIONS_PER_HOUR = 5;

// Only send a confirmation if the domain can actually receive mail.
async function domainAcceptsMail(email: string): Promise<boolean> {
  const domain = email.split("@")[1];
  if (!domain || DISPOSABLE_DOMAINS.has(domain)) return false;
  try {
    const mx = await dns.resolveMx(domain);
    return mx.length > 0;
  } catch {
    return false;
  }
}

function notifyRecipients() {
  return (process.env.LEAD_NOTIFY_EMAILS ?? "tiffany.nwahiri@3rdandtaylor.com")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

async function addToGHL(contact: {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  source: string;
}) {
  if (!process.env.GHL_API_KEY) {
    console.error("[lets-talk] GHL_API_KEY missing — skipping CRM sync");
    return;
  }
  const res = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
    },
    body: JSON.stringify({
      locationId: process.env.GHL_LOCATION_ID,
      email: contact.email,
      firstName: contact.firstName,
      lastName: contact.lastName,
      companyName: contact.companyName,
      tags: ["website-lead", contact.source],
      source: "Website Form",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("[lets-talk] GHL error:", res.status, body);
  }
}

export async function POST(request: NextRequest) {
  const base = new URL(request.url).origin;

  // Block requests not originating from the real site
  const origin = request.headers.get("origin") ?? "";
  const referer = request.headers.get("referer") ?? "";
  const allowed = ["https://www.3rdandtaylor.com", "https://3rdandtaylor.com"];
  const fromSite =
    allowed.some((d) => origin.startsWith(d)) ||
    allowed.some((d) => referer.startsWith(d));

  if (!fromSite) {
    return new NextResponse(null, { status: 403 });
  }

  const formData = await request.formData();

  // Honeypot — bots fill this in, real users don't
  const honeypot = formData.get("website_url")?.toString() ?? "";
  if (honeypot) {
    return NextResponse.redirect(`${base}/submission-thank-you`, 303);
  }

  // Cloudflare Turnstile — FAIL-CLOSED. A missing/invalid token is a bot: drop
  // the submission silently (no DB row, no notification, no confirmation email).
  // Only if Cloudflare's siteverify endpoint itself is unreachable do we let the
  // lead through, and in that case no confirmation email is sent to the visitor.
  let humanVerified = false;
  if (process.env.TURNSTILE_SECRET_KEY) {
    const turnstileToken = formData.get("cf-turnstile-response")?.toString() ?? "";
    if (!turnstileToken) {
      console.error("[lets-talk] Blocked: missing Turnstile token");
      return NextResponse.redirect(`${base}/submission-thank-you?status=error`, 303);
    }
    try {
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
          remoteip: request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "",
        }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        console.error("[lets-talk] Blocked: Turnstile verification failed:", verifyData["error-codes"]);
        return NextResponse.redirect(`${base}/submission-thank-you?status=error`, 303);
      }
      humanVerified = true;
    } catch (err) {
      console.error("[lets-talk] Turnstile siteverify unreachable (allowing lead, skipping confirmation email):", err);
    }
  }

  const fullName = formData.get("full_name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const interest = formData.get("interest")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const source       = formData.get("source")?.toString() ?? "website";
  const utm_source   = formData.get("utm_source")?.toString()   ?? null;
  const utm_medium   = formData.get("utm_medium")?.toString()   ?? null;
  const utm_campaign = formData.get("utm_campaign")?.toString() ?? null;
  const utm_term     = formData.get("utm_term")?.toString()     ?? null;
  const utm_content  = formData.get("utm_content")?.toString()  ?? null;

  if (!fullName || !email) {
    return NextResponse.redirect(`${base}/submission-thank-you?status=error`, 303);
  }

  // Reject malformed addresses outright — they can only bounce.
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.redirect(`${base}/submission-thank-you`, 303);
  }

  // Block known newsletter-signup / link-spam bot patterns. These bots replay a
  // static templated POST body rather than interacting with the form, so the
  // honeypot never trips — but the message text is highly repetitive and
  // distinct from how a real prospect describes a business problem.
  const SPAM_PATTERNS = [
    /please send me news and updates by email/i,
    /please let me know when i am subscribed/i,
    /please confirm my subscription/i,
    /i'?d like to subscribe to/i,
    /please add me for news about/i,
    /please send me updates about/i,
    /add me to your (newsletter|mailing list)/i,
    /3rdandtaylor\.com/i,
  ];
  if (SPAM_PATTERNS.some((p) => p.test(message))) {
    return NextResponse.redirect(`${base}/submission-thank-you`, 303);
  }

  const supabase = getSupabase();

  // Throttle: the same email address submitting repeatedly within 24h is a
  // strong bot signal (these spam runs reuse a handful of addresses across
  // dozens of randomly-generated names).
  if (supabase) {
    const { count: recentCount, error: throttleError } = await supabase
      .from("website_leads")
      .select("id", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
    if (throttleError) {
      console.error("[lets-talk] throttle query failed:", throttleError);
    } else if ((recentCount ?? 0) >= 2) {
      return NextResponse.redirect(`${base}/submission-thank-you`, 303);
    }
  }

  const spaceIdx = fullName.indexOf(" ");
  const firstName = spaceIdx > -1 ? fullName.slice(0, spaceIdx) : fullName;
  const lastName = spaceIdx > -1 ? fullName.slice(spaceIdx + 1) : "";

  const lead = {
    first_name: firstName,
    last_name: lastName,
    full_name: fullName,
    email,
    company,
    interest,
    message,
    source,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
  };

  // Insert first and inspect the PostgREST error object. supabase-js does not
  // throw on RLS/constraint failures — Promise.allSettled previously treated
  // those as success, so Resend/GHL could fire with no website_leads row.
  if (supabase) {
    const { error: insertError } = await supabase.from("website_leads").insert(lead);
    if (insertError) {
      console.error("[lets-talk] website_leads insert failed:", insertError);
    } else {
      console.log("[lets-talk] website_leads insert ok:", email, source);
    }
  }

  await addToGHL({ firstName, lastName, email, companyName: company, source });

  if (process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.startsWith("re_REPLACE")) {
    const resend = getResend();
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "—");
    const safeInterest = escapeHtml(interest || "—");
    const safeMessage = escapeHtml(message || "—").replace(/\n/g, "<br>");
    const safeSource = escapeHtml(source);
    const safeFirst = escapeHtml(firstName);

    const internal = await resend.emails.send({
      from: "3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
      to: notifyRecipients(),
      replyTo: email,
      subject: `New inquiry — ${fullName} (${source})`,
      html: `
        <p>New contact form submission:</p>
        <table cellpadding="6">
          <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${safeEmail}</td></tr>
          <tr><td><strong>Company</strong></td><td>${safeCompany}</td></tr>
          <tr><td><strong>Interested in</strong></td><td>${safeInterest}</td></tr>
          <tr><td><strong>Message</strong></td><td>${safeMessage}</td></tr>
          <tr><td><strong>Source</strong></td><td>${safeSource}</td></tr>
        </table>
      `,
    });
    if (internal.error) {
      console.error("[lets-talk] internal Resend notification failed:", internal.error);
    } else {
      console.log("[lets-talk] internal Resend notification sent:", internal.data?.id);
    }

    // Visitor confirmation is the only email that can bounce, so it is gated:
    // Turnstile-verified human, deliverable domain (MX), and under the hourly cap.
    let sendConfirmation = humanVerified && (await domainAcceptsMail(email));
    if (sendConfirmation && supabase) {
      const { count: hourCount, error: hourError } = await supabase
        .from("website_leads")
        .select("id", { count: "exact", head: true })
        .gte("created_at", new Date(Date.now() - 60 * 60 * 1000).toISOString());
      if (hourError || (hourCount ?? 0) > MAX_CONFIRMATIONS_PER_HOUR) {
        sendConfirmation = false;
        console.error("[lets-talk] Hourly confirmation cap hit or check failed — skipping visitor email:", hourError ?? hourCount);
      }
    }

    if (!sendConfirmation) {
      console.log("[lets-talk] visitor confirmation skipped for", email);
    } else {
      const visitor = await resend.emails.send({
        from: "Tiffany at 3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
        to: [email],
        subject: "Got your note — talk soon!",
        html: `
          <p>Hi ${safeFirst},</p>
          <p>Thanks for reaching out to 3rd & Taylor. I've received your message and will be back with a point of view on your fastest path to pipeline within one business day.</p>
          <p>Talk soon,<br><strong>Tiffany</strong><br>3rd & Taylor</p>
        `,
      });
      if (visitor.error) {
        console.error("[lets-talk] visitor Resend confirmation failed:", visitor.error);
      } else {
        console.log("[lets-talk] visitor Resend confirmation sent:", visitor.data?.id);
      }
    }
  }

  return NextResponse.redirect(`${base}/submission-thank-you`, 303);
}
