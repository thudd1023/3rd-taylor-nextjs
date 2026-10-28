import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ghlUtmFields, parseUtm, type Utm } from "@/lib/utm";

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@([a-z0-9-]+\.)+[a-z]{2,}$/i;

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const calendlyUrl =
  "https://calendly.com/tiffany-nwahiri-3rdandtaylor/free-gtm-audit-discovery-call";

function buildConfirmationEmail(firstName: string, companyName: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your GTM Audit request is confirmed</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f0eb;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f0eb;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;border-radius:12px 12px 0 0;">
              <p style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:400;color:#f5f0eb;letter-spacing:0.02em;">
                3rd &amp; Taylor
              </p>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="background-color:#ffffff;padding:48px 40px 40px;">
              <p style="margin:0 0 16px;font-family:Georgia,serif;font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#c87941;">
                Request received
              </p>
              <h1 style="margin:0 0 20px;font-family:Georgia,serif;font-size:36px;font-weight:400;line-height:1.15;color:#1a1a1a;">
                You're in, ${firstName}.<br/>Let's build your plan.
              </h1>
              <p style="margin:0;font-size:16px;line-height:1.7;color:#555555;font-family:Arial,Helvetica,sans-serif;">
                We've received your GTM Audit request for ${escapeHtml(companyName)}. We'll follow up within one business day — but you can get a head start by booking your discovery call now.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px;">
              <hr style="border:none;border-top:1px solid #ebebeb;margin:0;" />
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;">
              <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#c87941;">
                Your next step
              </p>
              <h2 style="margin:0 0 16px;font-family:Georgia,serif;font-size:24px;font-weight:400;color:#1a1a1a;">
                Schedule your discovery call
              </h2>
              <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#555555;font-family:Arial,Helvetica,sans-serif;">
                Book a 30-minute call so we can gather the context that makes your report specific and actionable — your target buyer, recent campaigns, and the growth challenges you're focused on.
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#c87941;border-radius:100px;">
                    <a href="${calendlyUrl}" style="display:inline-block;padding:14px 32px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.01em;">
                      Book My Discovery Call →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px;">
              <hr style="border:none;border-top:1px solid #ebebeb;margin:0;" />
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;">
              <p style="margin:0 0 24px;font-family:Georgia,serif;font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#c87941;">
                What happens next
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td width="40" valign="top" style="padding-top:2px;">
                    <span style="font-family:Georgia,serif;font-size:22px;color:#c87941;font-weight:400;">01</span>
                  </td>
                  <td>
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#1a1a1a;">Book your discovery call</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#777777;">Use the button above to pick a 30-minute time that works for you.</p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td width="40" valign="top" style="padding-top:2px;">
                    <span style="font-family:Georgia,serif;font-size:22px;color:#c87941;font-weight:400;">02</span>
                  </td>
                  <td>
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#1a1a1a;">We review your GTM presence</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#777777;">Website, messaging, SEO, paid ads, and content — no systems access required.</p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="40" valign="top" style="padding-top:2px;">
                    <span style="font-family:Georgia,serif;font-size:22px;color:#c87941;font-weight:400;">03</span>
                  </td>
                  <td>
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#1a1a1a;">Report delivered in 5 business days</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#777777;">Written PDF report + recorded video walkthroughs for every section.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;border-radius:0 0 12px 12px;">
              <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:15px;color:#f5f0eb;">
                Questions? Reply to this email or reach us at
                <a href="mailto:tiffany.nwahiri@3rdandtaylor.com" style="color:#c87941;text-decoration:none;">tiffany.nwahiri@3rdandtaylor.com</a>
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#888888;">
                3rd &amp; Taylor · Growth marketing for B2B companies
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function addToGHL(contact: {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
  utm: Utm;
}) {
  if (!process.env.GHL_API_KEY) {
    console.error("[gtm-audit-request] GHL_API_KEY missing — skipping CRM sync");
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
      website: contact.companyWebsite,
      title: contact.jobTitle,
      tags: ["gtm-audit-request", "website-lead"],
      source: "GTM Audit Request (Event/QR)",
      ...ghlUtmFields(contact.utm),
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    console.error("[gtm-audit-request] GHL error:", res.status, body);
  } else {
    console.log("[gtm-audit-request] GHL contact created:", contact.email);
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

  const first_name = (body.first_name ?? "").trim();
  const last_name = (body.last_name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const company_name = (body.company_name ?? "").trim();
  const company_website = (body.company_website ?? "").trim();
  const job_title = (body.job_title ?? "").trim();

  if (!first_name || !last_name || !email || !company_name || !company_website || !job_title) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey && !resendKey.startsWith("re_REPLACE")) {
    const resend = new Resend(resendKey);

    const safeFirst = escapeHtml(first_name);
    const safeLast = escapeHtml(last_name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company_name);
    const safeWebsite = escapeHtml(company_website);
    const safeTitle = escapeHtml(job_title);

    await Promise.allSettled([
      // Internal notification to Tiffany
      resend.emails.send({
        from: "3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
        to: ["tiffany.nwahiri@3rdandtaylor.com"],
        replyTo: email,
        subject: `New GTM Audit request — ${first_name} ${last_name} (${company_name})`,
        html: `
          <p>New GTM Audit request via the event/QR landing page:</p>
          <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;">
            <tr><td><strong>Name</strong></td><td>${safeFirst} ${safeLast}</td></tr>
            <tr><td><strong>Email</strong></td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td><strong>Job Title</strong></td><td>${safeTitle}</td></tr>
            <tr><td><strong>Company</strong></td><td>${safeCompany}</td></tr>
            <tr><td><strong>Website</strong></td><td><a href="${safeWebsite}">${safeWebsite}</a></td></tr>
          </table>
          <p><a href="${calendlyUrl}">View Calendly availability →</a></p>
        `,
      }),
      // Branded confirmation to the submitter
      resend.emails.send({
        from: "Tiffany at 3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
        to: [email],
        replyTo: "tiffany.nwahiri@3rdandtaylor.com",
        subject: "Your GTM Audit request is confirmed — here's what's next",
        html: buildConfirmationEmail(first_name, company_name),
      }),
    ]);

    console.log("[gtm-audit-request] emails sent for:", email);
  }

  await addToGHL({
    firstName: first_name,
    lastName: last_name,
    email,
    companyName: company_name,
    companyWebsite: company_website,
    jobTitle: job_title,
    utm: parseUtm((k) => body[k]),
  });

  return NextResponse.json({ success: true });
}
