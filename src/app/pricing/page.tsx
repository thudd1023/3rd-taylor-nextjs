"use client";

import Link from "next/link";
import { ArrowRight, Check, Star, Sparkles, ShieldCheck, Repeat, Handshake } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Pricing
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.95] font-medium text-balance">
          Pricing that fits your <em className="italic text-accent">growth stage</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          We ditched the bloated retainers, ad-spend markups, and vague deliverables. Our pricing is built for results — not red tape.
        </p>
        <div className="mt-10">
          <Link href="/lets-talk" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
            Book a Discovery Call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const AIEnhanced = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container grid md:grid-cols-12 gap-10 items-start">
      <div className="md:col-span-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">AI-Enhanced, Human-Powered</div>
        <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.05] text-balance">
          Faster time-to-value. <span className="italic text-accent">Passed directly to you.</span>
        </h2>
      </div>
      <div className="md:col-span-8 space-y-5 text-lg text-ink/80">
        <p>
          Our team uses AI to improve project management, turn briefs into omni-channel campaigns faster, optimize relentlessly, and personalize at scale.
        </p>
        <p>
          That efficiency means we move faster and deliver better work at a price that respects your budget.
        </p>
      </div>
    </div>
  </section>
);

const Audit = () => (
  <section className="py-16 md:py-24 bg-cream">
    <div className="container">
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Diagnose Before You Build</div>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
          Start with a solid foundation.
        </h2>
      </div>
      <div className="mt-10 rounded-3xl bg-ink text-cream p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center shadow-bold">
        <div className="md:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-2">Revenue Growth Audit</div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold">Find the leaks. Fix the foundation.</h3>
          <p className="mt-4 text-cream/80 text-lg">
            You can't build a campaign system on a broken foundation. Our Revenue Growth Audit goes deep — stakeholder interviews, CRM access, ad account analysis, marketing and sales funnel performance, messaging assessment — and delivers a 90-day prioritized roadmap to fix what's stalling growth.
          </p>
          <p className="mt-4 text-cream/60 text-sm">
            Delivered in 30 business days. Fully creditable toward your first Campaign Engine engagement.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3">
          <div className="text-center font-display text-3xl font-semibold text-warm">$8,500</div>
          <Link href="/solutions/diagnose-growth-gaps" className="group inline-flex items-center justify-center gap-2 bg-warm text-ink px-6 py-3.5 rounded-full font-semibold hover:bg-cream transition-all">
            Start with the Audit <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

type Pkg = {
  name: string;
  price: string;
  featured?: boolean;
  description: string;
  includesLabel?: string;
  includes: string[];
  bestFor?: string;
  cta: string;
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

    {p.bestFor && (
      <p className={`mt-6 text-sm italic ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}>
        Best for: {p.bestFor}
      </p>
    )}

    <div className="mt-8 pt-6 border-t border-border/30 flex-1 flex flex-col justify-end">
      <div className={`text-center font-display text-2xl font-semibold mb-4 ${p.featured ? "text-warm" : "text-ink"}`}>
        {p.price}
      </div>
      <Link href="/lets-talk" className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all ${p.featured ? "bg-warm text-ink hover:bg-cream" : "bg-ink text-cream hover:bg-accent"}`}>
        {p.cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
);

const ComparisonTable = () => {
  const rows = [
    { name: "Campaign Blueprint", price: "$8,500", best: "Teams needing strategy + execution guidance" },
    { name: "Campaign Engine Launch", price: "$18,500", best: "Teams ready to launch a campaign fast" },
    { name: "Campaign Engine Growth System", price: "$24,500", best: "Teams focused on optimization + pipeline growth", featured: true },
    { name: "Multi-Campaign Growth System", price: "$39,500", best: "Companies managing multiple campaigns or GTM motions" },
  ];
  return (
    <div className="rounded-3xl border border-border bg-background overflow-hidden">
      <div className="grid grid-cols-12 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border bg-cream">
        <div className="col-span-5">Package</div>
        <div className="col-span-3">Starting Price</div>
        <div className="col-span-4">Best For</div>
      </div>
      {rows.map((r) => (
        <div key={r.name} className="grid grid-cols-12 px-6 py-5 items-center border-b border-border last:border-b-0 hover:bg-cream/40 transition-colors">
          <div className="col-span-5 font-display font-semibold text-ink flex items-center gap-2">
            {r.featured && <Star className="h-4 w-4 fill-warm text-warm" />}
            {r.name}
          </div>
          <div className="col-span-3 font-display text-lg text-accent font-semibold">{r.price}</div>
          <div className="col-span-4 text-sm text-ink/70">{r.best}</div>
        </div>
      ))}
    </div>
  );
};

const CampaignEnginePricing = () => {
  const pkgs: Pkg[] = [
    {
      name: "Campaign Blueprint",
      price: "Starting at $8,500",
      description: "A complete campaign strategy and execution roadmap designed for internal teams that want a clear system to build from.",
      includes: [
        "GTM + campaign audit",
        "Messaging framework",
        "Channel strategy",
        "Campaign architecture",
        "Buyer journey mapping",
        "Funnel recommendations",
        "KPI planning",
        "Campaign execution roadmap",
      ],
      bestFor: "Teams needing strategy + execution guidance. Fully credited toward a future Campaign Engine engagement.",
      cta: "Start With a Blueprint",
    },
    {
      name: "Campaign Engine Launch",
      price: "Starting at $18,500",
      description: "A complete campaign build and launch engagement delivered in 45 days.",
      includes: [
        "GTM + campaign audit",
        "Strategy + messaging",
        "Creative direction",
        "Paid media setup",
        "Landing pages",
        "Automation workflows",
        "Attribution dashboard setup",
        "Campaign deployment",
        "Launch handoff documentation",
      ],
      bestFor: "Teams that can manage optimization internally after launch.",
      cta: "Reserve My Launch",
    },
    {
      name: "Campaign Engine Growth System",
      price: "Starting at $24,500",
      featured: true,
      description: "Launch your campaign — then continuously refine it using real engagement and conversion data.",
      includesLabel: "Everything in Launch, plus",
      includes: [
        "Optimization + refinement",
        "Weekly performance reviews",
        "Creative iteration",
        "Funnel conversion improvements",
        "Strategic advisory",
        "Sales enablement alignment",
        "Audience optimization",
        "GTM reporting reviews",
      ],
      bestFor: "Teams focused on accelerating pipeline performance after launch.",
      cta: "Build My Growth System",
    },
    {
      name: "Multi-Campaign Growth System",
      price: "Starting at $39,500",
      description: "A coordinated growth system for companies managing multiple campaigns, products, audiences, or expansion initiatives simultaneously.",
      includesLabel: "Everything in Growth System, plus",
      includes: [
        "Multi-campaign orchestration",
        "ABM Layer integration",
        "Personalized outbound at scale",
        "Additional nurture systems",
        "Advanced segmentation",
        "Expanded reporting infrastructure",
        "Executive GTM planning",
        "Cross-campaign optimization strategy",
      ],
      bestFor: "Companies scaling beyond a single GTM motion.",
      cta: "Talk Through My Goals",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Campaign Engine — The Core Engagement</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Pick your level of <em className="italic text-accent">momentum</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From strategic planning to full campaign execution and optimization, our pricing is designed to help lean B2B teams move faster without bloated retainers or unnecessary complexity.
          </p>
        </div>

        <div className="mt-12">
          <ComparisonTable />
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pkgs.map((p) => <PackageCard key={p.name} p={p} />)}
        </div>

        {/* Add-ons */}
        <div className="mt-12 rounded-3xl border border-border bg-background p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Add-Ons Available</div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold">Layer in more reach.</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Add-on pricing based on scope. Discussed during your discovery call.
              </p>
            </div>
            <div className="rounded-2xl bg-cream p-6 border border-border">
              <div className="font-display text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="text-accent">🔹</span> ABM Layer
              </div>
              <p className="text-sm text-ink/80">
                Add account-level precision with coordinated multi-touch programs targeting your highest-value accounts.
              </p>
            </div>
            <div className="rounded-2xl bg-cream p-6 border border-border">
              <div className="font-display text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="text-accent">🔹</span> Personalized Outbound at Scale
              </div>
              <p className="text-sm text-ink/80">
                Extend your campaign with AI-enhanced, role-specific outbound sequences aligned to your campaign messaging.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/campaign-engine" className="group inline-flex items-center gap-2 bg-ink text-cream px-6 py-3.5 rounded-full font-semibold hover:bg-accent transition-all">
              Explore Campaign Engine <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Retained = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Retained Team</div>
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
          Scale without the <em className="italic text-accent">hiring headache</em>.
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-cream border border-border p-8 md:p-10 flex flex-col">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Momentum Retained Team</div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold">Full-stack team. Zero friction.</h3>
          <p className="mt-4 text-ink/80">
            A full-stack marketing team on a credits-based retainer — flexing with your priorities each month.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["One agreement", "Total flexibility", "Zero friction"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Check className="h-3 w-3" /> {t}
              </span>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border flex-1 flex flex-col justify-end">
            <div className="text-center font-display text-2xl font-semibold text-ink mb-4">Starting at $6,000/month</div>
            <Link href="/momentum" className="group inline-flex items-center justify-center gap-2 bg-ink text-cream px-6 py-3.5 rounded-full font-semibold hover:bg-accent transition-all">
              See How Momentum Works <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-10 flex flex-col shadow-bold">
          <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-2">Early-Stage Option</div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold">Built for pre-seed and seed.</h3>
          <p className="mt-4 text-cream/80">
            A reduced retainer plus revenue share for early-stage companies. Typically follows a Campaign Engine engagement.
          </p>
          <div className="mt-8 pt-6 border-t border-cream/20 flex-1 flex flex-col justify-end">
            <div className="text-center font-display text-2xl font-semibold text-warm mb-4">Starting at $1,500/month + rev share</div>
            <Link href="/lets-talk" className="group inline-flex items-center justify-center gap-2 bg-warm text-ink px-6 py-3.5 rounded-full font-semibold hover:bg-cream transition-all">
              Let's See If You Qualify <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: "Campaign Engine — Flat-Fee",
      desc: "Clear scope. Clear deliverables. No hourly billing. No ad-spend markups. No surprise invoices.",
    },
    {
      icon: Repeat,
      title: "Momentum — Credits-Based Retainer",
      desc: "One monthly budget, fully flexible allocation. Apply credits across any service mix, roll unused credits forward, and shift priorities without renegotiating scope.",
    },
    {
      icon: Handshake,
      title: "Revenue-Linked Partnership",
      desc: "For companies with clean attribution and aligned sales/marketing systems, we offer a reduced retainer plus revenue share. Shared risk. Shared reward.",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">How Our Pricing Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Three ways to engage. <span className="italic text-accent">All transparent.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-3xl border border-border bg-background p-8">
                <Icon className="h-7 w-7 text-accent mb-5" />
                <h3 className="font-display text-xl font-semibold mb-3">{it.title}</h3>
                <p className="text-sm text-ink/80 leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/lets-talk" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold hover:bg-accent transition-all">
            Schedule a Discovery Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
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
            Ready to shorten the path from idea to <em className="italic text-warm">impact</em>?
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Tell us about your goals and we'll recommend the right starting point.
          </p>
        </div>
        <LetsTalkForm variant="dark" />
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <AIEnhanced />
      <Audit />
      <CampaignEnginePricing />
      <Retained />
      <HowItWorks />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default Pricing;
