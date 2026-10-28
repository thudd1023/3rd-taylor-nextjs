import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ghlUtmFields, parseUtm, type Utm } from "@/lib/utm";
import {
  WARM_TLC_CALENDLY_URL,
  WARM_TLC_LLM_PROMPT,
  WARM_TLC_WORKSHEET_URL,
} from "@/lib/warm-tlc";

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@([a-z0-9-]+\.)+[a-z]{2,}$/i;

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Accept "acme.com" as well as "https://acme.com"; return null if unusable.
function normalizeWebsite(raw: string): string | null {
  if (!raw || raw.length > 253) return null;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(withProtocol);
    if (!/^https?:$/.test(url.protocol) || !url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function buildEmail(firstName: string): string {
  const name = escapeHtml(firstName);
  const worksheet = WARM_TLC_WORKSHEET_URL
    ? `<p style="margin:0 0 24px;"><a href="${WARM_TLC_WORKSHEET_URL}" style="display:inline-block;padding:14px 28px;background:#d4f553;color:#111;font-weight:700;text-decoration:none;border-radius:100px;">Download your Warm T.L.C. worksheet →</a></p>`
    : "";
  const prompt = WARM_TLC_LLM_PROMPT
    ? `<p style="margin:0 0 8px;font-weight:700;">Your copy-and-paste prompt for your LLM</p>
       <pre style="white-space:pre-wrap;background:#f4f4f8;border-radius:8px;padding:16px;font-size:13px;line-height:1.5;margin:0 0 24px;">${escapeHtml(WARM_TLC_LLM_PROMPT)}</pre>`
    : "";
  return `<!DOCTYPE html>
<html lang="en"><body style="margin:0;padding:24px 12px;background:#f4f4f8;font-family:Arial,Helvetica,sans-serif;color:#111;">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:12px;">
      <tr><td style="background:#6044f5;padding:24px 32px;border-radius:12px 12px 0 0;color:#fff;font-size:20px;font-weight:700;">3rd + Taylor</td></tr>
      <tr><td style="padding:32px;">
        <h1 style="margin:0 0 16px;font-size:26px;line-height:1.2;">Take it home, ${name}.</h1>
        <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#444;">Here's everything from the session.</p>
        ${worksheet}
        ${prompt}
        <hr style="border:none;border-top:1px solid #eee;margin:8px 0 24px;" />
        <p style="margin:0 0 8px;font-weight:700;">Ask for the second date</p>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#444;">Book your free GTM audit and we'll build you a free end-to-end Warm T.L.C. campaign plan.</p>
        <p style="margin:0;"><a href="${WARM_TLC_CALENDLY_URL}" style="display:inline-block;padding:14px 28px;background:#6044f5;color:#fff;font-weight:700;text-decoration:none;border-radius:100px;">Book my free GTM audit →</a></p>
      </td></tr>
      <tr><td style="padding:20px 32px;font-size:13px;color:#888;">Questions? Reply to this email.</td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

async function addToGHL(contact: {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  utm: Utm;
}) {
  if (!process.env.GHL_API_KEY) {
    console.error("[warm-tlc] GHL_API_KEY missing — skipping CRM sync");
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
      website: contact.website,
      tags: ["warm-tlc", "marketingprofs-event", "website-lead"],
      source: "Warm T.L.C. (MarketingProfs QR)",
      ...ghlUtmFields(contact.utm),
    }),
  });
  if (!res.ok) {
    console.error("[warm-tlc] GHL error:", res.status, await res.text());
  } else {
    console.log("[warm-tlc] GHL contact created:", contact.email);
  }
}

export async function POST(request: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill this, real users never see it
  if (body.website_url) {
    return NextResponse.json({ success: true });
  }

  const first_name = (body.first_name ?? "").trim().slice(0, 100);
  const last_name = (body.last_name ?? "").trim().slice(0, 100);
  const email = (body.email ?? "").trim().toLowerCase();
  const rawWebsite = (body.company_website ?? "").trim();

  if (!first_name || !last_name || !email || !rawWebsite) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  const company_website = normalizeWebsite(rawWebsite);
  if (!company_website) {
    return NextResponse.json({ error: "Please enter a valid company website." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey && !resendKey.startsWith("re_REPLACE")) {
    const resend = new Resend(resendKey);
    await Promise.allSettled([
      resend.emails.send({
        from: "3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
        to: ["tiffany.nwahiri@3rdandtaylor.com"],
        replyTo: email,
        subject: `Warm T.L.C. QR lead — ${first_name} ${last_name}`,
        html: `<p>New lead from the MarketingProfs Warm T.L.C. QR page:</p>
          <p><strong>${escapeHtml(first_name)} ${escapeHtml(last_name)}</strong><br/>
          <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a><br/>
          ${escapeHtml(company_website)}</p>`,
      }),
      resend.emails.send({
        from: "Tiffany at 3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
        to: [email],
        replyTo: "tiffany.nwahiri@3rdandtaylor.com",
        subject: "Your Warm T.L.C. resources + free GTM audit",
        html: buildEmail(first_name),
      }),
    ]);
  }

  try {
    await addToGHL({ firstName: first_name, lastName: last_name, email, website: company_website, utm: parseUtm((k) => body[k]) });
  } catch (err) {
    console.error("[warm-tlc] GHL request failed:", err);
  }

  return NextResponse.json({ success: true });
}
