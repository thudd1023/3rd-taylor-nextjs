"use client";

import Link from "next/link";
import { ArrowRight, Check, FileText, Video, Search, BarChart3, Target, PenTool, Sparkles } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import reportPaidAds from "@/assets/report-paid-ads.png";
import reportContent from "@/assets/report-content.png";
import reportWebsite from "@/assets/report-website.png";

const PAYMENT_URL = "https://app.hubspot.com/payment-links/44715546/preview/8956060/test";

const PrimaryCTA = ({ children }: { children: React.ReactNode }) => (
  <a
    href={PAYMENT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-ink text-cream text-sm md:text-base font-semibold px-6 py-3 rounded-full hover:bg-accent transition-colors"
  >
    {children} <ArrowRight className="h-4 w-4" />
  </a>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-16 md:pt-28 md:pb-20 max-w-6xl">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Sparkles className="h-3.5 w-3.5" /> $499 · Human-Reviewed GTM Audit
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance">
            Your scan showed you the score. Now let's <em className="italic text-accent">build the plan.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            The GTM Recommendations Report is a complete human-reviewed analysis of your public-facing go-to-market — with specific, prioritized recommendations delivered as a written report and recorded video walkthrough.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryCTA>Get My Recommendations Report — $499</PrimaryCTA>
            <span className="text-sm text-muted-foreground">Fully creditable toward any Campaign Engine engagement.</span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <StackedPreview />
        </div>
      </div>
    </div>
  </section>
);

const StackedPreview = () => (
  <div className="relative h-[360px] md:h-[440px] lg:h-[480px] w-full">
    <Image
      src={reportWebsite}
      alt="Sample page from the GTM Recommendations Report — Website Opportunities"
      className="absolute top-0 left-0 w-[88%] rounded-xl shadow-bold border border-border rotate-[-4deg] origin-top-left h-auto"
    />
    <Image
      src={reportContent}
      alt="Sample page from the GTM Recommendations Report — Content Recommendations by Funnel Stage"
      className="absolute top-12 left-8 md:top-16 md:left-12 w-[88%] rounded-xl shadow-bold border border-border rotate-[2deg] h-auto"
    />
    <Image
      src={reportPaidAds}
      alt="Sample page from the GTM Recommendations Report — Paid Ads Strengths and Gaps by Platform"
      className="absolute top-24 left-2 md:top-32 md:left-4 w-[92%] rounded-xl shadow-bold border border-border rotate-[-1deg] h-auto"
    />
  </div>
);

const Compare = () => {
  const rows = [
    { label: "What's reviewed", free: "Public-facing GTM presence", paid: "Public-facing GTM presence (deeper)" },
    { label: "Delivered by", free: "AI scoring", paid: "Human strategist" },
    { label: "Format", free: "Scored summary", paid: "Full written report + recorded video walkthroughs" },
    { label: "Recommendations", free: "Area indicators", paid: "Specific, prioritized, and actionable" },
    { label: "Creditable toward Campaign Engine", free: "—", paid: "Yes" },
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight max-w-2xl">
          Free Scan vs. Full Report
        </h2>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <div className="grid grid-cols-3 bg-cream text-sm md:text-base">
            <div className="p-4 md:p-6 font-semibold text-ink/60 uppercase tracking-wider text-xs"></div>
            <div className="p-4 md:p-6 font-semibold border-l border-border">Free GTM Scan</div>
            <div className="p-4 md:p-6 font-semibold border-l border-border bg-accent/10">GTM Recommendations Report ($499)</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-3 text-sm md:text-base border-t border-border ${i % 2 ? "bg-cream/40" : ""}`}>
              <div className="p-4 md:p-6 font-medium text-ink">{r.label}</div>
              <div className="p-4 md:p-6 border-l border-border text-muted-foreground">{r.free}</div>
              <div className="p-4 md:p-6 border-l border-border bg-accent/5 text-ink flex items-start gap-2">
                {r.paid === "Yes" ? <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /> : null}
                <span>{r.paid}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const included = [
  { icon: PenTool, title: "Website Messaging & Positioning Review", desc: "We assess whether your homepage, service pages, and CTAs clearly communicate who you help, what you do, and why it matters — through the eyes of your ideal buyer." },
  { icon: Target, title: "UX & Conversion Path Analysis", desc: "We map the visitor journey and identify where buyers are hesitating or exiting before they convert." },
  { icon: Search, title: "SEO Structure Review", desc: "We evaluate your site's visibility, structure, and keyword positioning — and flag where you're missing search demand from buyers actively researching your category." },
  { icon: BarChart3, title: "Paid Ad Library Audit", desc: "We pull your active ads from LinkedIn, Meta, and Google Ad Libraries to assess messaging consistency, creative effectiveness, and targeting signals." },
  { icon: FileText, title: "Content Strategy Assessment", desc: "We review what you're publishing, how it's structured, and whether it's building trust with the right buyers at the right stage of their journey." },
  { icon: FileText, title: "Written Recommendations Report", desc: "A polished, shareable PDF with specific, prioritized actions across each area — organized by effort and impact." },
  { icon: Video, title: "Recorded Video Walkthroughs", desc: "Screen-recorded commentary for each section so your team understands the reasoning, not just the recommendations." },
];

const Included = () => (
  <section className="py-16 md:py-24 bg-cream">
    <div className="container max-w-6xl">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">What's included</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          A full teardown. A clear plan. A fast start.
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {included.map((item) => (
          <div key={item.title} className="rounded-2xl border border-border bg-background p-6 md:p-7 hover:shadow-bold transition-shadow">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10 text-accent">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium">{item.title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoFor = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">Who this is for</h2>
      <p className="mt-4 text-muted-foreground">This is the right next step if:</p>
      <ul className="mt-8 space-y-4">
        {[
          "You want a complete, actionable go-forward plan without the depth of stakeholder interviews or providing internal systems access",
          "You're evaluating agencies and want to see how we think before committing to a larger engagement",
          "You have a clear sense something is off, but haven't been able to pinpoint exactly what",
          "You want to move fast — this is delivered in 5 business days",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-ink">
            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
            <span className="text-base md:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const steps = [
  { n: "01", title: "Complete payment and a short intake form" },
  { n: "02", title: "Our strategist reviews your public-facing GTM presence (no systems access needed)" },
  { n: "03", title: "Receive your full report + recorded walkthroughs within 5 business days" },
  { n: "04", title: "Optional: 30-minute walkthrough call to discuss findings together" },
];

const WhatHappens = () => (
  <section className="py-16 md:py-24 bg-cream">
    <div className="container max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">What happens next</h2>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-background p-6 md:p-8">
            <div className="font-display text-4xl text-accent">{s.n}</div>
            <p className="mt-3 text-ink text-lg leading-snug">{s.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20 md:py-28 bg-ink text-cream">
    <div className="container max-w-3xl text-center">
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance">
        Get the clarity your team needs to <em className="italic text-accent">move faster.</em>
      </h2>
      <p className="mt-6 text-lg text-cream/70">
        $499 for a complete, human-reviewed GTM analysis. Credited toward your next Campaign Engine engagement.
      </p>
      <div className="mt-10 flex justify-center">
        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-ink text-base font-semibold px-7 py-3.5 rounded-full hover:bg-cream transition-colors"
        >
          Get My Recommendations Report — $499 <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

const GTMRecommendationsReport = () => (
  <main className="min-h-screen bg-background">
    <SiteNav />
    <Hero />
    <Compare />
    <Included />
    <WhoFor />
    <WhatHappens />
    <FinalCTA />
    <SiteFooter />
  </main>
);

export default GTMRecommendationsReport;
