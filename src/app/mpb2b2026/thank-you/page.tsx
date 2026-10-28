"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CheckCircle } from "lucide-react";
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
      <section className="relative overflow-hidden bg-gradient-sunset grain py-12 md:py-20">
        <div className="container max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 mb-6">
            <CheckCircle className="w-7 h-7 text-accent" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[0.98] font-medium text-balance">
            Check your email.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Your Warm T.L.C. worksheet and copy-and-paste prompt are on their way. If you don&apos;t see
            them in a minute, check spam or promotions.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl md:text-4xl font-medium leading-tight text-center">
            Now ask for the second date.
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Book your free GTM audit and we&apos;ll build you a free end-to-end Warm T.L.C. campaign plan.
          </p>
          <div className="mt-8">
            {calendlyUrl && (
              <>
                <div
                  className="calendly-inline-widget rounded-2xl overflow-hidden border border-border"
                  data-url={calendlyUrl}
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="afterInteractive"
                />
              </>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
