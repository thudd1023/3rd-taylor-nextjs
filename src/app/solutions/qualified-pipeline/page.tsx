"use client";

import Link from "next/link";
import { ArrowRight, Check, X, Target, Layers, Users, BarChart3, Sparkles, Zap } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Pipeline Growth
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.95] font-medium text-balance">
          Your pipeline problem isn't a volume problem. <em className="italic text-accent">It's a quality problem.</em>
        </h1>
        <p className="mt-8 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          More spend and more leads sound like solutions — until they're not. If the contacts coming in aren't converting, the answer isn't more of the same. It's a smarter system that attracts the right buyers, pre-educates them before they talk to sales, and turns engagement into real pipeline.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/campaign-engine" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
            See How Campaign Engine Works
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/free-gtm-scan" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-all">
            Get a Free GTM Scan
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Scenario = () => {
  const signals = [
    "Leads come in but they're not the right fit — wrong industry, wrong role, wrong stage",
    "Your best accounts aren't responding to outreach because they've never heard of you",
    "Marketing and sales are measuring different things and blaming each other for the gap",
    "You're generating awareness but buyers aren't moving forward in their journey",
    "Pipeline feels unpredictable — good month, bad month, and no clear reason why",
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] max-w-4xl text-balance">
          You know pipeline is the problem. <em className="italic text-accent">What you're not sure about is why.</em>
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Maybe you're generating leads but sales keeps saying they're not ready. Maybe you're running campaigns across LinkedIn, Google, and email — and getting activity, but not traction. Maybe the pipeline number looks okay at the top but deals are stalling or disappearing in the middle.
        </p>
        <p className="mt-4 font-display text-xl text-ink/80">Any of this sound familiar?</p>
        <div className="mt-10 grid md:grid-cols-2 gap-3">
          {signals.map((s) => (
            <div key={s} className="flex items-start gap-3 rounded-2xl border border-border bg-cream px-5 py-4">
              <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="text-ink/80">{s}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-lg text-ink/80">
          The problem isn't effort. Most teams are working hard. The problem is that the system isn't connected — and <span className="italic text-accent">disconnected campaigns produce disconnected results.</span>
        </p>
      </div>
    </section>
  );
};

const WhatDrives = () => {
  const items = [
    {
      icon: Users,
      title: "Buyers are pre-educated before they ever talk to sales.",
      desc: "By the time someone raises their hand, they already understand the problem you solve, they've seen your approach, and they believe you can help. That's not luck — that's what a well-built campaign system produces.",
    },
    {
      icon: Target,
      title: "Targeting is built around early signals, not just lists.",
      desc: "The right buyers aren't just companies in your ICP. They're companies in your ICP where something is changing — a new hire, a funding event, a shift in priorities — that makes them ready to care about what you offer.",
    },
    {
      icon: Layers,
      title: "Every channel is sequenced, not siloed.",
      desc: "Paid, content, email, and outbound aren't separate programs — they're coordinated moves in the same system, each reinforcing the others. That's not coincidence — that's the system working.",
    },
    {
      icon: BarChart3,
      title: 'Marketing and sales align on what "qualified" actually means.',
      desc: "When both teams agree on the definition of a sales-ready lead — and the funnel is built to produce them — the finger-pointing stops and the pipeline starts moving.",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What Actually Drives Qualified Pipeline</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Qualified pipeline is the output of a <em className="italic text-accent">system</em>, not a campaign.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Most teams treat pipeline generation as a series of separate efforts — run some ads, send some emails, publish some content, hope it adds up. Sometimes it does. But not consistently, and not predictably.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-3xl border border-border bg-background p-7">
                <Icon className="h-7 w-7 text-accent mb-5" />
                <h3 className="font-display text-xl font-semibold mb-3 leading-snug">{it.title}</h3>
                <p className="text-sm text-ink/80 leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const before = [
    "Leads come in from multiple sources with no consistent quality",
    "Sales spends time qualifying leads marketing already should have filtered",
    "Campaigns run in parallel but don't reinforce each other",
    "Attribution is unclear — you can't tell what's driving pipeline",
    "Every quarter feels like starting over",
  ];
  const after = [
    "Buyers arrive pre-educated and further along in their decision-making",
    "Sales knows exactly what each lead has seen and what they care about",
    "Campaigns compound — each touchpoint builds on the last",
    "Pipeline is traceable back to specific campaign activity",
    "Growth becomes predictable, not a coin flip",
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What This Looks Like in Practice</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Here's what changes when pipeline generation is treated as a <em className="italic text-accent">system</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-cream p-8 md:p-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Before</div>
            <ul className="space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-ink/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-ink text-cream p-8 md:p-10 shadow-bold">
            <div className="text-xs font-semibold uppercase tracking-wider text-warm mb-4">After</div>
            <ul className="space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-warm mt-0.5 shrink-0" />
                  <span className="text-cream/90">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-lg text-ink/80">
          This is the difference between running marketing and <span className="italic text-accent">running a campaign system.</span>
        </p>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const items = [
    { title: "More conversations with the right buyers.", desc: "Not just more volume — conversations with people who match your ICP, have a real pain point you solve, and have already been educated on why your approach works." },
    { title: "Shorter time from first touch to sales conversation.", desc: "When buyers are pre-educated across their journey, they move faster. Sales picks up warm conversations, not cold ones — and cycles compress as a result." },
    { title: "Pipeline your sales team actually trusts.", desc: 'When marketing and sales align on definitions, handoffs, and qualification criteria, the mutual skepticism dissolves. Marketing stops hearing "these leads are bad" and sales stops waiting for leads that never come.' },
    { title: "Visibility into what's driving results.", desc: "Not just impressions and clicks — pipeline contribution, influenced revenue, and conversion rates at every stage of the funnel. You'll know what's working and be able to scale it." },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">The Outcomes You're After</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            What changes when the system <em className="italic text-accent">starts working</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border border-border bg-background p-7">
              <h3 className="font-display text-xl font-semibold mb-3">{it.title}</h3>
              <p className="text-ink/80 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeHelp = () => {
  const includes = [
    "Campaign strategy and ICP targeting",
    "Messaging architecture designed to pre-educate buyers",
    "Multi-channel campaign build across paid, content, and nurture",
    "Marketing automation and lead scoring",
    "Marketing-to-sales handoff system",
    "45 days of optimization after launch",
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">How We Help</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            This is exactly what <em className="italic text-accent">Campaign Engine</em> is built for.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Campaign Engine is our flagship service — a complete campaign system designed, built, and launched for B2B teams in 45 days. It's built around the Warm T.L.C.™ Method: warming the market, driving intentional traffic, building qualified leads, and converting with context.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/campaign-engine" className="group inline-flex items-center gap-2 bg-ink text-cream px-6 py-3.5 rounded-full font-semibold hover:bg-accent transition-all">
              Explore Campaign Engine <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-background p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Engagements Include</div>
            <ul className="space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-ink/85">{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-cream border border-border p-5">
                <div className="font-display font-semibold flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent" /> Add the ABM Layer
                </div>
                <p className="mt-2 text-ink/75">For teams targeting specific high-value accounts.</p>
              </div>
              <div className="rounded-2xl bg-cream border border-border p-5">
                <div className="font-display font-semibold flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent" /> Add Personalized Outbound
                </div>
                <p className="mt-2 text-ink/75">Extend reach with role-specific direct outreach at scale.</p>
              </div>
            </div>
            <p className="mt-6 text-ink/80 italic">
              The result: a pipeline system that runs — not a campaign you have to keep restarting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const RightForYou = () => {
  const items = [
    "You have product-market fit and you're ready to build predictable pipeline",
    "Your current campaigns are generating activity but not consistently converting",
    "Sales and marketing aren't aligned on what a qualified lead looks like",
    "You've tried adding budget or channels and it hasn't solved the problem",
    "You need pipeline that's traceable, repeatable, and scalable",
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Is This Right For You?</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            This is the right conversation if…
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-3">
          {items.map((i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-cream px-5 py-4">
              <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <span className="text-ink/85">{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="get-started" className="py-24 md:py-32 bg-ink text-cream">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-warm mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Let's Talk
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Ready to build a pipeline system that <em className="italic text-warm">actually produces</em>?
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Campaign Engine gives your team a connected, coordinated campaign system — designed to attract the right buyers, pre-educate them, and convert engagement into qualified pipeline. Built and live in 45 days.
          </p>
          <p className="mt-8 text-cream/80">
            Not sure where to start?{" "}
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-1 text-warm font-semibold hover:text-cream transition-colors">
              Try a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <div className="rounded-3xl bg-cream p-6 md:p-8 text-ink"><LetsTalkForm source="solutions-qualified-pipeline" /></div>
      </div>
    </div>
  </section>
);

const QualifiedPipeline = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <Scenario />
      <WhatDrives />
      <BeforeAfter />
      <Outcomes />
      <HowWeHelp />
      <RightForYou />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default QualifiedPipeline;
