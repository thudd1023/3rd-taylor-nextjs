"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Lock, CheckCircle, Clock } from "lucide-react";

declare global {
  interface Window {
    Stripe?: (key: string, options?: object) => any;
  }
}

const appearance = {
  theme: "stripe",
  labels: "auto",
  inputs: "spaced",
  variables: {
    borderRadius: "4px",
    colorBackground: "#ffffff",
    colorDanger: "#df1b41",
    colorPrimary: "#0570de",
    colorSuccess: "#00c853",
    colorText: "#30313d",
    fontFamily: "default",
    fontSizeBase: "16px",
    spacingUnit: "4px",
  },
};

export default function CheckoutPage() {
  const initializedRef = useRef(false);
  const [formReady, setFormReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function tryInit() {
    if (initializedRef.current) return;
    if (!window.Stripe) return; // script not loaded yet — onLoad will call us again

    initializedRef.current = true;

    const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!stripeKey) {
      setError("Payment configuration error. Please email tiffany.nwahiri@3rdandtaylor.com to complete your purchase.");
      return;
    }

    const stripe = window.Stripe(stripeKey, { betas: ["custom_checkout_payment_form_1"] });

    // Pass the fetch Promise directly — initCheckoutFormSdk accepts a Promise<string>
    const clientSecretPromise = fetch("/api/create-checkout-session", { method: "POST" })
      .then((res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((data) => data.client_secret as string);

    const checkout = stripe.initCheckoutFormSdk({ clientSecret: clientSecretPromise, appearance });

    const form = checkout.createForm({ layout: "expanded" });
    form.mount("#checkout-form");

    checkout.loadActions().then((result: any) => {
      if (result?.type === "success") {
        form.on("confirm", async (event: any) => {
          try {
            await result.actions.confirm({ formConfirmEvent: event });
          } catch (err: any) {
            console.error("[checkout] confirm error:", err);
          }
        });
      }
      setFormReady(true);
    });

    // Also show the form area once the clientSecret resolves (even before loadActions)
    clientSecretPromise
      .then(() => setFormReady(true))
      .catch((err) => {
        console.error("[checkout] session error:", err);
        setError("Could not start the checkout session. Please refresh and try again, or email tiffany.nwahiri@3rdandtaylor.com.");
      });
  }

  // Run on mount in case Stripe.js was already cached and onLoad won't fire
  useEffect(() => {
    if (window.Stripe) tryInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* onLoad fires when script loads fresh; useEffect covers the cached case */}
      <Script
        src="https://js.stripe.com/dahlia/stripe.js"
        strategy="afterInteractive"
        onLoad={tryInit}
      />
      <SiteNav />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-sunset grain py-16 md:py-20">
          <div className="container max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70 mb-6">
              <Lock className="h-3 w-3" /> Secure Checkout
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] font-medium text-balance">
              GTM Recommendations Report
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              $999 · Human-reviewed go-to-market audit with written report and recorded video walkthroughs
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

              {/* Left: what you're buying */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-medium mb-4">What happens after payment</h2>
                  <ol className="space-y-4">
                    {[
                      {
                        n: "01",
                        title: "Book your discovery call",
                        desc: "Right after payment you'll land on a scheduling page. We'll pick a 30-minute time to gather the context needed to conduct your audit.",
                      },
                      {
                        n: "02",
                        title: "We review your GTM presence",
                        desc: "Our strategist analyzes your website, messaging, SEO, ads, and content — no systems access required.",
                      },
                      {
                        n: "03",
                        title: "Receive your report in 5 business days",
                        desc: "A polished written report and recorded video walkthroughs for every section.",
                      },
                      {
                        n: "04",
                        title: "Credited toward Campaign Engine",
                        desc: "The full $999 is credited if you move into any Campaign Engine engagement.",
                      },
                    ].map((s) => (
                      <li key={s.n} className="flex gap-4">
                        <span className="font-display text-2xl text-accent flex-shrink-0 leading-none mt-1">{s.n}</span>
                        <div>
                          <p className="font-semibold text-ink">{s.title}</p>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-2xl border border-border bg-cream p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-ink">Fully creditable toward any Campaign Engine engagement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-ink">Delivered within 5 business days of your discovery call</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-ink">Secure payment powered by Stripe</p>
                  </div>
                </div>
              </div>

              {/* Right: Stripe embedded form */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl font-medium">Complete your order</h2>
                    <span className="font-semibold text-ink text-lg">$999</span>
                  </div>

                  {error ? (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                      {error}
                    </div>
                  ) : (
                    <>
                      {!formReady && (
                        <div className="flex items-center justify-center py-12 text-muted-foreground text-sm">
                          <svg className="animate-spin h-5 w-5 mr-2 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Loading secure payment form…
                        </div>
                      )}
                      <div id="checkout-form" />
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
