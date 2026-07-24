"use client";

import Link from "next/link";
import { ArrowRight, Check, Search, Users, BarChart3, Target, FileText, Map, Sparkles, ShieldCheck } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Solution · Diagnose Growth Gaps
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.95] font-medium text-balance">
          Find the leaks. <em className="italic text-accent">Fix the foundation.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          You can't build a campaign system on a broken foundation. Our Revenue Growth Audit goes deep — and delivers a 90-day prioritized roadmap to fix what's stalling growth.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#get-started" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
            Start with the Audit
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link href="/pricing" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-all">
            See How It Fits In
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Delivered in 30 business days. Fully creditable toward your first Campaign Engine engagement.</p>
      </div>
    </div>
  </section>
);

const WhoItsFor = () => {
  const signals = [
    "Pipeline is inconsistent and you can't pinpoint why",
    "Campaigns launch but results don't add up",
    "Sales and marketing report different numbers",
    "Spend keeps going up; conversion doesn't",
    "Messaging feels scattered across channels",
    "Attribution is murky — wins feel lucky, not repeatable",
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] max-w-4xl text-balance">
          When growth stalls, the answer isn't <em className="italic text-accent">more activity</em>.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The Revenue Growth Audit is built for B2B teams who suspect the problem is structural — not effort.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-3">
          {signals.map((s) => (
            <div key={s} className="flex items-start gap-3 rounded-2xl border border-border bg-cream px-5 py-4">
              <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="text-ink/80">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatWeAudit = () => {
  const items = [
    { icon: Users, title: "Stakeholder Interviews", desc: "Sales, marketing, and leadership — to surface alignment gaps and buying-signal blind spots." },
    { icon: BarChart3, title: "CRM & Funnel Performance", desc: "Stage-by-stage conversion, deal velocity, leakage points, and revenue attribution accuracy." },
    { icon: Target, title: "Ad Account & Channel Review", desc: "Spend efficiency, audience targeting, creative performance, and channel mix health." },
    { icon: Search, title: "Marketing & Sales Alignment", desc: "Lead handoff, MQL/SQL definitions, follow-up cadence, and shared pipeline accountability." },
    { icon: FileText, title: "Messaging & Positioning Assessment", desc: "Clarity, differentiation, and consistency across web, ads, sales decks, and outbound." },
    { icon: Map, title: "Buyer Journey Mapping", desc: "Where buyers actually engage vs. where you assume they do — and where the journey breaks." },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What We Audit</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            A full-stack diagnostic of your <em className="italic text-accent">revenue engine</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-3xl border border-border bg-background p-7">
                <Icon className="h-7 w-7 text-accent mb-5" />
                <h3 className="font-display text-xl font-semibold mb-3">{it.title}</h3>
                <p className="text-sm text-ink/80 leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Deliverables = () => {
  const items = [
    "Executive summary of findings — what's working, what's stalling, what's costing you pipeline",
    "Funnel performance analysis with conversion benchmarks and leakage points identified",
    "Channel & spend efficiency review across paid, organic, and outbound",
    "Messaging & positioning recommendations grounded in buyer interviews",
    "Sales & marketing alignment plan with handoff and SLA recommendations",
    "90-day prioritized roadmap — sequenced by impact, effort, and dependencies",
    "Campaign architecture recommendation tailored to your GTM motion",
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What You Get</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            A clear roadmap. <span className="italic text-accent">Not a 60-page PDF nobody reads.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every deliverable is built to be acted on — by your team, by us, or both.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {items.map((i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-border bg-cream p-5">
                <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-ink/85">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { n: "01", title: "Kickoff & Access", desc: "We align on goals, get read-only access to CRM, ad accounts, and analytics, and schedule stakeholder interviews." },
    { n: "02", title: "Discover & Diagnose", desc: "Two weeks of interviews, data analysis, and channel review. We follow the data wherever it leads." },
    { n: "03", title: "Synthesize & Recommend", desc: "We translate findings into a prioritized roadmap — sequenced by impact, effort, and revenue dependencies." },
    { n: "04", title: "Roadmap Readout", desc: "A working session with your team to walk through findings, recommendations, and the path forward." },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">The Process</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            30 business days. <span className="italic text-accent">Four clear phases.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-border bg-background p-7 flex flex-col">
              <div className="font-display text-4xl font-semibold text-accent">{s.n}</div>
              <h3 className="font-display text-xl font-semibold mt-4">{s.title}</h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Investment = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <div className="container">
      <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center shadow-bold">
        <div className="md:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-2">Investment</div>
          <h3 className="font-display text-3xl md:text-5xl font-semibold leading-[1.05]">One fee. <em className="italic text-warm">Fully creditable.</em></h3>
          <p className="mt-5 text-cream/80 text-lg">
            $8,500 flat fee — credited 100% toward your first Campaign Engine engagement when you continue with us.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Flat fee", "Fixed timeline", "100% creditable"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-warm/10 text-warm border border-warm/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="h-3 w-3" /> {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-3">
          <div className="text-center font-display text-4xl font-semibold text-warm">$8,500</div>
          <a href="#get-started" className="group inline-flex items-center justify-center gap-2 bg-warm text-ink px-6 py-3.5 rounded-full font-semibold hover:bg-cream transition-all">
            Start with the Audit <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section id="get-started" className="py-24 md:py-32 bg-ink text-cream">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-warm mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Let's Talk
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Ready to find what's <em className="italic text-warm">stalling growth</em>?
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Tell us a bit about where you are today and we'll set up a discovery call to scope the audit.
          </p>
        </div>
        <div className="rounded-3xl bg-cream p-6 md:p-8 text-ink"><LetsTalkForm source="solutions-diagnose-growth-gaps" /></div>
      </div>
    </div>
  </section>
);

const DiagnoseGrowthGaps = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <WhoItsFor />
      <WhatWeAudit />
      <Deliverables />
      <Process />
      <Investment />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default DiagnoseGrowthGaps;
