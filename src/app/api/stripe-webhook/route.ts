import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

async function addToGHL(contact: {
  firstName: string;
  lastName: string;
  email: string;
  companyName?: string;
}) {
  if (!process.env.GHL_API_KEY) {
    console.error("[stripe-webhook] GHL_API_KEY missing — skipping CRM sync");
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
      companyName: contact.companyName ?? "",
      tags: ["gtm-audit-purchase", "website-lead"],
      source: "GTM Recommendations Report Purchase",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("[stripe-webhook] GHL error:", res.status, body);
  } else {
    console.log("[stripe-webhook] GHL contact created for:", contact.email);
  }
}

function buildConfirmationEmail(firstName: string): string {
  const calendlyUrl = "https://calendly.com/tiffany-nwahiri-3rdandtaylor/free-gtm-audit-discovery-call";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your GTM Audit is confirmed</title>
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
                Payment confirmed
              </p>
              <h1 style="margin:0 0 20px;font-family:Georgia,serif;font-size:36px;font-weight:400;line-height:1.15;color:#1a1a1a;">
                You're in, ${firstName}.<br/>Let's build your plan.
              </h1>
              <p style="margin:0;font-size:16px;line-height:1.7;color:#555555;font-family:Arial,Helvetica,sans-serif;">
                Thank you for purchasing the GTM Recommendations Report. Your $999 investment is confirmed, and we're ready to get to work.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px;">
              <hr style="border:none;border-top:1px solid #ebebeb;margin:0;" />
            </td>
          </tr>

          <!-- Next step CTA -->
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
              <!-- Step 1 -->
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
              <!-- Step 2 -->
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
              <!-- Step 3 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
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
              <!-- Step 4 -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="40" valign="top" style="padding-top:2px;">
                    <span style="font-family:Georgia,serif;font-size:22px;color:#c87941;font-weight:400;">04</span>
                  </td>
                  <td>
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#1a1a1a;">Credited toward Campaign Engine</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#777777;">Your full $999 is credited toward any Campaign Engine engagement.</p>
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

// Stripe requires the raw request body for webhook signature verification —
// Next.js App Router does not call body parsers, so req.body is already raw.
export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia; custom_checkout_payment_form_preview=v1" as any,
  });

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature") ?? "";
  const rawBody = await request.text();

  let event: Stripe.Event;

  if (endpointSecret) {
    try {
      event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
    } catch (err: any) {
      console.error("[stripe-webhook] Signature verification failed:", err.message);
      return new NextResponse("Webhook signature verification failed", { status: 400 });
    }
  } else {
    event = JSON.parse(rawBody) as Stripe.Event;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const details = session.customer_details;

    if (details?.email) {
      const fullName = details.name ?? "";
      const spaceIdx = fullName.indexOf(" ");
      const firstName = spaceIdx > -1 ? fullName.slice(0, spaceIdx) : fullName || "there";
      const lastName = spaceIdx > -1 ? fullName.slice(spaceIdx + 1) : "";

      await Promise.allSettled([
        addToGHL({ firstName, lastName, email: details.email }),
        sendConfirmationEmail(details.email, firstName),
      ]);
    }
  }

  return new NextResponse(null, { status: 200 });
}

async function sendConfirmationEmail(email: string, firstName: string) {
  if (!process.env.RESEND_API_KEY) {
    console.error("[stripe-webhook] RESEND_API_KEY missing — skipping confirmation email");
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const result = await resend.emails.send({
    from: "Tiffany at 3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
    to: [email],
    replyTo: "tiffany.nwahiri@3rdandtaylor.com",
    subject: "Your GTM Audit is confirmed — here's what's next",
    html: buildConfirmationEmail(firstName),
  });

  if (result.error) {
    console.error("[stripe-webhook] Resend confirmation failed:", result.error);
  } else {
    console.log("[stripe-webhook] Confirmation email sent to:", email, result.data?.id);
  }
}
