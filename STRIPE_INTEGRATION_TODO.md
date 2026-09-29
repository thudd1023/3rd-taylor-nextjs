# Stripe Integration — Remaining Setup

## Values to Replace

The following placeholders must be updated before the checkout will work.

**Files containing placeholders:**
- [.env.local](.env.local)

| Variable | Current Value | What to Set |
|----------|--------------|-------------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_REPLACE_ME` | Your live publishable key from the [Stripe Dashboard → API keys](https://dashboard.stripe.com/apikeys). Use `pk_test_...` for testing. |
| `STRIPE_SECRET_KEY` | `sk_live_REPLACE_ME` | Your live secret key from the [Stripe Dashboard → API keys](https://dashboard.stripe.com/apikeys). Use `sk_test_...` for testing. |
| `STRIPE_WEBHOOK_SECRET` | `whsec_REPLACE_ME` | Generated when you register the webhook endpoint (see Webhook Setup below). |
| `STRIPE_PRICE_ID` | `price_REPLACE_ME` | The Price ID for the $999 GTM Recommendations Report product. Create it at [Stripe Dashboard → Products](https://dashboard.stripe.com/products), then copy the `price_...` ID. |
| `NEXT_PUBLIC_SITE_URL` | `https://www.3rdandtaylor.com` | Already correct for production. Set to `http://localhost:3000` locally. |

---

## Configured Parameters

These parameters were configured via Stripe Checkout Studio and are already set correctly in the code.

**Files containing these parameters:**
- [src/app/api/create-checkout-session/route.ts](src/app/api/create-checkout-session/route.ts)

| Parameter | Value |
|-----------|-------|
| `ui_mode` | `form` (requires Stripe SDK ≥ 21.0.0 — installed: 22.6.2 ✓) |
| `billing_address_collection` | `auto` |
| `phone_number_collection.enabled` | `false` |
| `automatic_tax.enabled` | `false` |
| `payment_method_collection` | `always` |
| `submit_type` | `auto` |
| `shipping_address_collection.allowed_countries` | Full list per Checkout Studio config |
| `mode` | `payment` (one-time charge) |

---

## Create the $999 Product + Price in Stripe

1. Go to [Stripe Dashboard → Products → Add product](https://dashboard.stripe.com/products/create)
2. Name: **GTM Recommendations Report**
3. Price: **$999.00 USD**, one-time
4. Copy the generated `price_...` ID
5. Paste it as `STRIPE_PRICE_ID` in `.env.local`

---

## Webhook Setup

The webhook route at `/api/stripe-webhook` listens for `checkout.session.completed` and adds the buyer as a contact in Go High Level.

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/workbench/webhooks)
2. Click **Add endpoint**
3. Endpoint URL: `https://www.3rdandtaylor.com/api/stripe-webhook`
4. Events to listen for: `checkout.session.completed`
5. Copy the **Signing secret** (`whsec_...`)
6. Paste it as `STRIPE_WEBHOOK_SECRET` in `.env.local`

For **local testing**, use the [Stripe CLI](https://stripe.com/docs/stripe-cli):
```
stripe listen --forward-to localhost:3000/api/stripe-webhook
```
This prints a local `whsec_...` to use during development.

---

## How the Integration Works

1. User clicks **Get My Recommendations Report** on `/gtm-recommendations-report`
2. They land on `/gtm-recommendations-report/checkout`
3. The page loads Stripe.js from `https://js.stripe.com/dahlia/stripe.js` and POSTs to `/api/create-checkout-session`
4. The server creates a Checkout Session (embedded form mode) and returns `client_secret`
5. The embedded Stripe form renders inside the page — no redirect to Stripe-hosted pages
6. On successful payment, Stripe calls `/api/stripe-webhook` with `checkout.session.completed`
7. The webhook handler adds the buyer's name + email to Go High Level with the tag `gtm-audit-purchase`
8. Stripe redirects the buyer to `/gtm-recommendations-report/thank-you?session_id=...`
9. The thank-you page shows a Calendly embed to book the discovery call

---

## Test Cards

| Card | Result |
|------|--------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 9995` | Decline (insufficient funds) |
| `4000 0025 0000 3155` | Requires 3D Secure |

Use any future expiry date, any 3-digit CVC, and any postal code.

---

## New Files Created

| File | Purpose |
|------|---------|
| [src/app/api/create-checkout-session/route.ts](src/app/api/create-checkout-session/route.ts) | Server: creates Stripe Checkout Session |
| [src/app/api/stripe-webhook/route.ts](src/app/api/stripe-webhook/route.ts) | Server: handles `checkout.session.completed`, syncs buyer to GHL |
| [src/app/gtm-recommendations-report/checkout/page.tsx](src/app/gtm-recommendations-report/checkout/page.tsx) | Client: embedded Stripe checkout form page |
| [src/app/gtm-recommendations-report/thank-you/page.tsx](src/app/gtm-recommendations-report/thank-you/page.tsx) | Client: post-payment confirmation + Calendly scheduling |

---

## Resources

- [Stripe Docs](https://docs.stripe.com)
- [Stripe Dashboard](https://dashboard.stripe.com)
- [Stripe MCP](https://docs.stripe.com/mcp)
- [Stripe Support](https://support.stripe.com)
