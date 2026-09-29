import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

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
      const firstName = spaceIdx > -1 ? fullName.slice(0, spaceIdx) : fullName;
      const lastName = spaceIdx > -1 ? fullName.slice(spaceIdx + 1) : "";

      await addToGHL({
        firstName,
        lastName,
        email: details.email,
        companyName: undefined,
      });
    }
  }

  return new NextResponse(null, { status: 200 });
}
