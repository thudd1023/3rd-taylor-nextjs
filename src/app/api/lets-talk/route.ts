import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

// Lazy: only instantiate at request time so the build doesn't fail without the key
function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

async function addToGHL(contact: {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  source: string;
}) {
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

  // Throttle: the same email address submitting repeatedly within 24h is a
  // strong bot signal (these spam runs reuse a handful of addresses across
  // dozens of randomly-generated names).
  const { count: recentCount } = await supabase
    .from("website_leads")
    .select("id", { count: "exact", head: true })
    .eq("email", email)
    .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
  if ((recentCount ?? 0) >= 2) {
    return NextResponse.redirect(`${base}/submission-thank-you`, 303);
  }

  const spaceIdx = fullName.indexOf(" ");
  const firstName = spaceIdx > -1 ? fullName.slice(0, spaceIdx) : fullName;
  const lastName = spaceIdx > -1 ? fullName.slice(spaceIdx + 1) : "";

  await Promise.allSettled([
    supabase.from("website_leads").insert({
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
    }),

    addToGHL({ firstName, lastName, email, companyName: company, source }),

    ...(process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.startsWith("re_REPLACE")
      ? [
          getResend().emails.send({
            from: "3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
            to: ["tiffany.nwahiri@3rdandtaylor.com"],
            subject: `New inquiry — ${fullName} (${source})`,
            html: `
              <p>New contact form submission:</p>
              <table cellpadding="6">
                <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
                <tr><td><strong>Email</strong></td><td>${email}</td></tr>
                <tr><td><strong>Company</strong></td><td>${company || "—"}</td></tr>
                <tr><td><strong>Interested in</strong></td><td>${interest || "—"}</td></tr>
                <tr><td><strong>Message</strong></td><td>${message || "—"}</td></tr>
                <tr><td><strong>Source</strong></td><td>${source}</td></tr>
              </table>
            `,
          }),
          getResend().emails.send({
            from: "Tiffany at 3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
            to: [email],
            subject: "Got your note — talk soon!",
            html: `
              <p>Hi ${firstName},</p>
              <p>Thanks for reaching out to 3rd & Taylor. I've received your message and will be back with a point of view on your fastest path to pipeline within one business day.</p>
              <p>Talk soon,<br><strong>Tiffany</strong><br>3rd & Taylor</p>
            `,
          }),
        ]
      : []),
  ]);

  return NextResponse.redirect(`${base}/submission-thank-you`, 303);
}
