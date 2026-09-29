"use client";

import Script from "next/script";
import { CheckCircle } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function AuditThankYouPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-background">

        {/* Confirmation hero */}
        <section className="relative overflow-hidden bg-gradient-sunset grain py-16 md:py-24">
          <div className="container max-w-3xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/15 mb-8 mx-auto">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70 mb-6">
              Payment confirmed
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance mb-6">
              You're in. Let's build your plan.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Your GTM Recommendations Report is on its way — we just need 30 minutes to gather the context that makes it worth every word.
            </p>
          </div>
        </section>

        {/* Next steps + Calendly */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left: what to expect */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-6">
                  Your next step: schedule the discovery call
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Use the calendar on the right to pick a 30-minute time that works for you. During the call, we'll collect the context we need to conduct your audit — things like your target buyer, recent campaigns, and the growth challenges you're most focused on.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      n: "01",
                      title: "Discovery call (30 min)",
                      desc: "We gather the context that makes your recommendations specific and actionable, not generic.",
                    },
                    {
                      n: "02",
                      title: "We review your public GTM presence",
                      desc: "Website, messaging, SEO, ad library, and content — analyzed by a human strategist.",
                    },
                    {
                      n: "03",
                      title: "Report delivered in 5 business days",
                      desc: "Written PDF report + recorded video walkthroughs for every section, ready to share with your team.",
                    },
                    {
                      n: "04",
                      title: "Optional: 30-min debrief call",
                      desc: "Walk through your findings together, ask questions, and leave with your top three priorities clear.",
                    },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4">
                      <span className="font-display text-2xl text-accent flex-shrink-0 leading-none mt-1">{s.n}</span>
                      <div>
                        <p className="font-semibold text-ink">{s.title}</p>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                  Questions? Email us at{" "}
                  <a href="mailto:tiffany.nwahiri@3rdandtaylor.com" className="text-accent underline hover:no-underline">
                    tiffany.nwahiri@3rdandtaylor.com
                  </a>
                </p>
              </div>

              {/* Right: Calendly embed */}
              <div>
                <h3 className="font-display text-xl font-medium mb-4">Schedule your discovery call</h3>
                <div
                  className="calendly-inline-widget rounded-2xl overflow-hidden border border-border"
                  data-url="https://calendly.com/tiffany-nwahiri-3rdandtaylor/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="afterInteractive"
                />
              </div>

            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
