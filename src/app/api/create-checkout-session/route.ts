import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia; custom_checkout_payment_form_preview=v1" as any,
  });
  const origin = request.headers.get("origin") ?? "";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? origin ?? "https://www.3rdandtaylor.com";

  const session = await stripe.checkout.sessions.create({
    ui_mode: "form",
    mode: "payment",
    billing_address_collection: "auto",
    phone_number_collection: { enabled: false },
    automatic_tax: { enabled: false },
    payment_method_collection: "always",
    submit_type: "auto",
    shipping_address_collection: {
      allowed_countries: [
        "CA", "MX", "US", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ",
        "CR", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN",
        "KY", "LC", "MF", "MQ", "MS", "NI", "PA", "PM", "PR", "SV", "SX", "TC",
        "TT", "VC", "VG", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF",
        "GS", "GY", "PE", "PY", "SR", "UY", "VE", "AD", "AL", "AT", "AX", "BA",
        "BE", "BG", "BY", "CH", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR",
        "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI",
        "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT",
        "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "AE", "AF",
        "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL",
        "IN", "IQ", "JO", "JP", "KG", "KH", "KR", "KW", "KZ", "LA", "LB", "LK",
        "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "QA", "SA", "SG",
        "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE", "AO", "BF", "BI",
        "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EG", "ER",
        "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS",
        "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE",
        "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG",
        "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW", "AU", "CK", "FJ", "GU", "KI",
        "NC", "NR", "NU", "NZ", "PF", "PG", "PN", "SB", "TK", "TO", "TV", "VU",
        "WF", "WS",
      ],
    },
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    return_url: `${baseUrl}/gtm-recommendations-report/thank-you?session_id={CHECKOUT_SESSION_ID}`,
  });

  return NextResponse.json({ client_secret: session.client_secret });
}
