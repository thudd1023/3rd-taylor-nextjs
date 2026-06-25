"use client";

import Link from "next/link";
import { ArrowRight, Check, X, Star, Target, MessageSquare, Rocket, Settings, Users } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HubSpotLetsTalkForm from "@/components/HubSpotLetsTalkForm";
import Image from "next/image";
import chaosToSystem from "@/assets/campaign-chaos-to-system.png";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Campaign Engine
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.95] font-medium text-balance">
          From scattered campaigns to a <em className="italic text-accent">system</em> that drives pipeline.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Campaign Engine gives B2B teams a clear path from idea to execution. In 45 days, we build and launch a connected campaign system designed to generate pipeline and show measurable results.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#get-started" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
            Reserve Your Campaign Engine
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link href="/free-gtm-scan" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-all">
            Get a Free GTM Scan
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Now booking Campaign Engine builds for August 2026.</p>
      </div>
    </div>
  </section>
);

const WhatThisSolves = () => {
  const before = [
    "Campaigns stall in planning",
    "Channels run independently",
    "Leads trickle in but results are inconsistent",
    "The pressure to deliver pipeline gets bigger and bigger",
  ];
  const after = [
    "You stop guessing what to do next",
    "You can clearly show what's driving pipeline",
    "Your team operates with focus instead of chaos",
    "Campaigns become repeatable instead of one-off efforts",
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] max-w-4xl text-balance">
          Most teams aren't short on ideas. They're short on <em className="italic text-accent">execution</em> that actually works.
        </h2>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-cream p-8 md:p-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Before Campaign Engine</div>
            <ul className="space-y-4">
              {before.map((b) => (
                <li key={b} className="flex gap-3 text-lg">
                  <X className="h-5 w-5 mt-1 shrink-0 text-muted-foreground/60" />
                  <span className="text-ink/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-ink text-cream p-8 md:p-10 shadow-bold">
            <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-5">After Campaign Engine</div>
            <ul className="space-y-4">
              {after.map((a) => (
                <li key={a} className="flex gap-3 text-lg">
                  <Check className="h-5 w-5 mt-1 shrink-0 text-warm" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center font-display text-2xl md:text-3xl text-balance">
          The goal isn't just activity. <span className="text-accent italic">It's predictable pipeline.</span>
        </p>
      </div>
    </section>
  );
};

const WhatYouGet = () => {
  const blocks = [
    {
      icon: Target,
      title: "Campaign Strategy & Structure",
      items: [
        "Audit of current campaigns and workflows",
        "Offer development and campaign angle",
        "ICP segmentation and targeting strategy",
        "Messaging hierarchy and narrative flow",
        "Channel selection and sequencing plan",
      ],
    },
    {
      icon: MessageSquare,
      title: "Messaging & Creative System",
      items: [
        "Campaign narrative and messaging arc",
        "Ad copy across platforms",
        "Landing page messaging and structure",
        "Email and nurture sequences",
        "Creative direction and asset briefs",
      ],
    },
    {
      icon: Rocket,
      title: "Campaign Build & Launch",
      items: [
        "Paid media setup (LinkedIn, Google, and more)",
        "Landing page builds or optimization",
        "Retargeting campaign setup",
        "Conversion paths and calls to action",
        "Campaign deployment across all channels",
      ],
    },
    {
      icon: Settings,
      title: "Automation & Tracking",
      items: [
        "Marketing automation workflow buildout",
        "Lead scoring and routing logic",
        "CRM integration and tracking",
        "Attribution and reporting setup",
      ],
    },
    {
      icon: Users,
      title: "Sales Enablement & Handoff",
      items: [
        "Sales playbooks tied to campaign engagement",
        "Messaging and follow-up frameworks",
        "Stakeholder interviews to identify GTM gaps",
        "Internal training for alignment",
      ],
      note: "Full Engagement only",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What You Get</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            A fully executed campaign system — not a strategy you have to figure out on your own.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="rounded-3xl border border-border bg-background p-8 hover:shadow-soft transition-shadow">
                <Icon className="h-7 w-7 text-accent mb-5" />
                <h3 className="font-display text-xl font-semibold mb-2">{b.title}</h3>
                {b.note && (
                  <div className="inline-block text-[11px] font-semibold uppercase tracking-wider text-warm-foreground bg-warm rounded-full px-2.5 py-0.5 mb-3">{b.note}</div>
                )}
                <ul className="space-y-2.5 mt-4">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm text-ink/80">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <Image src={chaosToSystem} alt="From campaign chaos to a connected system" className="mt-16 w-full max-w-5xl mx-auto h-auto" />
      </div>
    </section>
  );
};

const WarmTLC = () => {
  const steps = [
    {
      n: "01",
      title: "Warm the Market",
      sub: "Build recognition before asking for action.",
      points: ["Multi-channel visibility", "Messaging that reflects real buyer challenges", "Repetition that builds familiarity and trust"],
      mindset: "I've seen them before. They understand the problem.",
    },
    {
      n: "02",
      title: "Drive Intentional Traffic",
      sub: "Focus on attracting the right buyers, not just increasing volume.",
      points: ["Early-signal-based targeting", "Paid and organic distribution", "Landing pages aligned to buyer stage"],
      mindset: "This is relevant. I want to learn more.",
    },
    {
      n: "03",
      title: "Build Qualified Leads",
      sub: "Turn engagement into real buying signals.",
      points: ["Nurture sequences that pre-educate buyers", "Retargeting", "Content that builds credibility and trust"],
      mindset: "This is helpful. I trust them.",
    },
    {
      n: "04",
      title: "Convert with Context",
      sub: "Deliver sales-ready opportunities with full context.",
      points: ["Pre-educated leads ready for conversation", "Alignment between marketing and sales", "Clear next steps for buyers"],
      mindset: "I'm ready to talk.",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">The Warm T.L.C. Method</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            The system behind every Campaign Engine.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Campaign Engine isn't built as a linear funnel. It's a coordinated system designed around how buyers actually move — through a journey that's more rollercoaster than straight line.
          </p>
        </div>

        

        <div className="mt-16 space-y-6">
          {steps.map((s, i) => (
            <div key={s.n} className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <div className="font-display text-6xl md:text-7xl font-medium text-accent leading-none">{s.n}</div>
              </div>
              <div className="md:col-span-6 rounded-3xl border border-border bg-cream p-8">
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground mb-5">{s.sub}</p>
                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-ink/80">
                      <Check className="h-4 w-4 mt-1 shrink-0 text-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4 rounded-3xl bg-ink text-cream p-6 md:mt-12">
                <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-3">Buyer Mindset</div>
                <p className="font-display text-xl italic leading-snug">"{s.mindset}"</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center font-display text-2xl md:text-3xl text-balance max-w-3xl mx-auto">
          This is what turns disconnected activity into <span className="text-accent italic">pipeline</span>.
        </p>
      </div>
    </section>
  );
};

type Pkg = {
  name: string;
  price: string;
  featured?: boolean;
  description: string;
  blurb?: string;
  includesLabel?: string;
  includes: string[];
  bestFor: string[];
  cta: string;
  micro: string;
};

const PackageCard = ({ p }: { p: Pkg }) => (
  <div className={`rounded-3xl p-8 flex flex-col ${p.featured ? "bg-ink text-cream shadow-bold ring-2 ring-warm" : "bg-cream border border-border"}`}>
    {p.featured && (
      <div className="inline-flex self-start items-center gap-1.5 bg-warm text-warm-foreground text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 mb-4">
        <Star className="h-3 w-3 fill-current" /> Most Popular
      </div>
    )}
    <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
    <p className={`mt-4 ${p.featured ? "text-cream/90" : "text-ink/80"}`}>{p.description}</p>
    {p.blurb && <p className={`mt-3 text-sm ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}>{p.blurb}</p>}

    <div className={`mt-6 text-xs font-semibold uppercase tracking-wider ${p.featured ? "text-warm" : "text-accent"}`}>
      {p.includesLabel ?? "Includes"}
    </div>
    <ul className="mt-3 space-y-2 text-sm">
      {p.includes.map((i) => (
        <li key={i} className="flex gap-2.5">
          <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-warm" : "text-accent"}`} />
          <span className={p.featured ? "text-cream/90" : "text-ink/80"}>{i}</span>
        </li>
      ))}
    </ul>

    <div className={`mt-6 text-xs font-semibold uppercase tracking-wider ${p.featured ? "text-warm" : "text-accent"}`}>Best For</div>
    <ul className={`mt-3 space-y-1.5 text-sm ${p.featured ? "text-cream/80" : "text-muted-foreground"}`}>
      {p.bestFor.map((b) => <li key={b}>— {b}</li>)}
    </ul>

    <div className="mt-8 pt-6 border-t border-border/30 flex-1 flex flex-col justify-end">
      <div className={`text-center font-display text-2xl font-semibold mb-4 ${p.featured ? "text-warm" : "text-ink"}`}>
        {p.price}
      </div>
      <Link href="/lets-talk" className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all ${p.featured ? "bg-warm text-ink hover:bg-cream" : "bg-ink text-cream hover:bg-accent"}`}>
        {p.cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
      <p className={`mt-3 text-center text-xs ${p.featured ? "text-cream/60" : "text-muted-foreground"}`}>{p.micro}</p>
    </div>
  </div>
);

const Packages = () => {
  const pkgs: Pkg[] = [
    {
      name: "Campaign Engine Launch",
      price: "Starting at $18,500",
      description: "We build and launch your complete multi-channel campaign system in 45 days.",
      blurb: "For teams that need execution momentum fast — without adding headcount or juggling multiple vendors.",
      includes: [
        "GTM + campaign audit",
        "Existing ad account + funnel review",
        "Campaign strategy + messaging framework",
        "ICP targeting + buyer journey mapping",
        "Paid media campaign setup",
        "Landing page creation",
        "Email nurture workflows",
        "CRM + automation configuration",
        "Retargeting setup",
        "Attribution dashboard setup",
        "Campaign deployment across channels",
        "Launch handoff documentation",
      ],
      bestFor: ["Product launches", "New pipeline initiatives", "Lean teams needing execution support fast"],
      cta: "Reserve My Launch Window",
      micro: "Built and launched in 45 days.",
    },
    {
      name: "Campaign Engine Growth System",
      price: "Starting at $24,500",
      featured: true,
      description: "Launch your campaign — then continuously optimize and refine performance based on real buyer engagement and pipeline signals.",
      blurb: "Instead of launching and hoping for the best, we improve targeting, messaging, creative, and conversion as the campaign gains traction.",
      includesLabel: "Everything in Launch, plus",
      includes: [
        "45 additional days of optimization + refinement",
        "Weekly performance reviews",
        "Creative iteration based on engagement data",
        "Audience + targeting optimization",
        "Funnel conversion improvements",
        "Strategic campaign recommendations",
        "Sales enablement alignment",
        "Reporting reviews + GTM advisory",
        "Ongoing testing and refinement",
      ],
      bestFor: [
        "Teams focused on predictable pipeline growth",
        "Companies wanting optimization support after launch",
        "Lean marketing teams without bandwidth for ongoing refinement",
      ],
      cta: "Build My Growth System",
      micro: "The fastest path from launch to measurable momentum.",
    },
    {
      name: "Multi-Campaign Growth System",
      price: "Starting at $39,500",
      description: "Built for companies managing multiple products, audiences, verticals, or simultaneous go-to-market initiatives.",
      blurb: "We coordinate multiple campaign motions so your messaging, targeting, outbound, automation, and reporting operate as one connected growth system.",
      includesLabel: "Everything in Growth System, plus",
      includes: [
        "Multiple ICP campaign streams",
        "Multi-product or multi-offer campaign planning",
        "ABM Layer integration",
        "Personalized outbound at scale",
        "Additional landing pages + nurture systems",
        "Advanced segmentation + reporting",
        "Cross-campaign optimization strategy",
        "Executive GTM alignment sessions",
        "Quarterly roadmap planning",
      ],
      bestFor: [
        "Companies targeting multiple buyer types",
        "Multi-product GTM motions",
        "Simultaneous campaigns across regions or verticals",
        "Teams scaling aggressively and needing tighter coordination",
      ],
      cta: "Talk Through My Growth Goals",
      micro: "Designed for companies scaling beyond a single campaign motion.",
    },
  ];
  return (
    <section id="packages" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Packages</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Pick your level of momentum.
          </h2>
        </div>
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {pkgs.map((p) => <PackageCard key={p.name} p={p} />)}
        </div>

        {/* Blueprint */}
        <div className="mt-10 rounded-3xl border border-border bg-background p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Not quite ready for a full Campaign Engine?</div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold">Start with Campaign Blueprint</h3>
            <p className="mt-4 text-ink/80">
              A complete play-by-play campaign strategy your internal team can execute independently. Built for teams that need strategic clarity, messaging alignment, and a structured campaign roadmap before investing in a full build.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Fully credited toward a future Campaign Engine engagement.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <div className="text-center font-display text-2xl font-semibold text-ink">Starting at $8,500</div>
            <Link href="/lets-talk" className="group inline-flex w-full items-center justify-center gap-2 bg-ink text-cream px-6 py-3.5 rounded-full font-semibold hover:bg-accent transition-all">
              Start With a Blueprint <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const AddOns = () => {
  const items = [
    {
      title: "ABM Layer",
      desc: "Target and convert high-value accounts with coordinated, multi-touch programs built around early signals — identifying the accounts most likely to need what you offer before they're already evaluating vendors.",
      cta: "Learn More About the ABM Layer",
      href: "/solutions/abm",
    },
    {
      title: "Personalized Outbound at Scale",
      desc: "Extend your campaign with targeted outbound that feels relevant — because it is. We write sequences aligned to your campaign messaging, triggered by early signals and tailored to each prospect's role, industry, and buying stage.",
      cta: "Learn More About Outbound at Scale",
      href: "/solutions/outbound",
    },
    {
      title: "Momentum Marketing Team",
      desc: "A flexible, ongoing team to keep campaigns moving and pipeline growing after your Campaign Engine engagement.",
      cta: "See How Momentum Works",
      href: "/momentum",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Add-On Services</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Want to take your Campaign Engine further?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            For teams ready to build a more advanced system, these services integrate directly into your Campaign Engine engagement.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-3xl border border-border bg-cream p-8 flex flex-col">
              <h3 className="font-display text-xl font-semibold">{i.title}</h3>
              <p className="mt-4 text-ink/80 flex-1">{i.desc}</p>
              <Link href={i.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent transition-colors group">
                {i.cta} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const quotes = [
    "Tiffany is one of the most strategic marketers I've worked with. She knows how to connect marketing to real revenue.",
    "She quickly connects marketing activity to revenue and growth — increasing leads while lowering cost.",
    "She brings strategy, execution, and results together in a way most teams cannot.",
  ];
  return (
    <section className="py-24 bg-cream border-y border-border">
      <div className="container grid md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <blockquote key={q} className="font-display text-xl md:text-2xl leading-snug text-balance">
            <span className="text-accent">"</span>{q}<span className="text-accent">"</span>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="get-started" className="py-24 md:py-32 bg-ink text-cream">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Ready to stop guessing and start <em className="italic text-warm">generating pipeline</em>?
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Tell us a bit about your goals and we'll be in touch within one business day.
          </p>
        </div>
        <div className="rounded-3xl bg-cream p-6 md:p-8 text-ink"><HubSpotLetsTalkForm /></div>
      </div>
    </div>
  </section>
);

const CampaignEngine = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <WhatThisSolves />
      <WhatYouGet />
      <WarmTLC />
      <Packages />
      <AddOns />
      <SocialProof />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default CampaignEngine;
