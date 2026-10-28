"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CheckCircle, Mail, CalendarCheck } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import { WARM_TLC_CALENDLY_URL } from "@/lib/warm-tlc";

export default function WarmTlcThankYouPage() {
  const [calendlyUrl, setCalendlyUrl] = useState<string | null>(null);

  // Prefill Calendly with what they just gave us.
  useEffect(() => {
    const params = new URLSearchParams();
    try {
      const saved = JSON.parse(sessionStorage.getItem("warm-tlc") ?? "{}");
      if (saved.name) params.set("name", saved.name);
      if (saved.email) params.set("email", saved.email);
    } catch {}
    const qs = params.toString();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sessionStorage is client-only
    setCalendlyUrl(qs ? `${WARM_TLC_CALENDLY_URL}?${qs}` : WARM_TLC_CALENDLY_URL);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-sunset grain py-8 md:py-12">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left: confirmation + what to expect */}
            <div className="lg:col-span-2 lg:pt-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 mb-5">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl leading-[0.98] font-medium text-balance">
                You&apos;re in. Now ask for the second date.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Book your free GTM audit and we&apos;ll build you a free end-to-end Warm T.L.C.
                campaign plan.
              </p>

              <div className="mt-6 lg:mt-8 space-y-5">
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Check your email</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Your Warm T.L.C. worksheet and copy-and-paste prompt are on their way. If you
                      don&apos;t see them in a minute, check spam or promotions.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:flex gap-3">
                  <CalendarCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Pick a time on the calendar</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      30 minutes. We review your go-to-market and map your Warm T.L.C. campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Calendly */}
            <div className="lg:col-span-3">
              {calendlyUrl && (
                <>
                  <div
                    className="calendly-inline-widget rounded-2xl overflow-hidden border border-border bg-background shadow-bold"
                    data-url={calendlyUrl}
                    style={{ minWidth: "320px", height: "720px" }}
                  />
                  <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="afterInteractive"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
