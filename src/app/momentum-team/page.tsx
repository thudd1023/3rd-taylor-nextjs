"use client";

import Link from "next/link";
import { ArrowRight, Check, Megaphone, PenTool, Workflow, BarChart3, Compass, Coins, Repeat, Sparkles, AlertTriangle } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Sparkles className="h-3.5 w-3.5" /> Momentum · Retained Team
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[4.5rem] leading-[0.95] font-medium text-balance">
            Give your team the firepower and flexibility to <em className="italic text-accent">move faster</em> — without hiring or burning out.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            When priorities change every week, Momentum keeps campaigns moving, results climbing, and your sanity intact.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/lets-talk" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
              Book a Discovery Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/free-gtm-scan" className="inline-flex items-center gap-2 border border-ink/20 text-ink px-7 py-4 rounded-full font-semibold hover:bg-ink hover:text-cream transition-colors">
              Get a Free GTM Scan
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-ink text-cream p-7 shadow-bold -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-warm font-semibold">
              <span>This Month's Mix</span>
              <Coins className="h-4 w-4" />
            </div>
            <ul className="mt-6 space-y-3">
              {[
                { t: "Paid Media", v: "30%" },
                { t: "Content + Copy", v: "25%" },
                { t: "Lifecycle Automation", v: "20%" },
                { t: "Analytics + Optimization", v: "15%" },
                { t: "Strategic Leadership", v: "10%" },
              ].map((s) => (
                <li key={s.t} className="flex items-center gap-3 rounded-2xl bg-cream/5 border border-cream/10 px-3 py-2.5">
                  <div className="flex-1 text-sm font-semibold">{s.t}</div>
                  <span className="font-display text-warm text-sm font-semibold">{s.v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-cream/10 text-xs text-cream/60">
              Allocation flexes month-to-month. Roll unused credits forward.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Reality = () => {
  const items = [
    "Last-minute campaign pivots keep creeping in",
    'Endless "just one more tweak" requests pile up',
    "Leadership demands more pipeline but won't approve headcount",
    "A key hire falls through and everything stalls",
  ];
  return (
    <section className="py-24 md:py-32 bg-cream border-y border-border">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">The Reality</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Your team is at capacity. But targets <em className="italic text-accent">keep climbing</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Even the best marketing teams struggle with bandwidth. The wheels start to wobble when:
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {items.map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5">
              <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-ink/85">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl">
          <p className="text-xl text-ink leading-relaxed">
            You don't need just another vendor. You need a growth engine that plugs into your team, fills the gaps, and keeps momentum alive — no matter what the quarter throws at you.
          </p>
          <p className="mt-4 font-display text-2xl text-accent italic">That's where we come in.</p>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const services = [
    { icon: Megaphone, title: "Demand Gen + Paid Media", desc: "From LinkedIn to Google Ads, we turn ad spend into pipeline." },
    { icon: PenTool, title: "Content + Copywriting", desc: "Strategic messaging that moves buyers toward a decision." },
    { icon: Workflow, title: "Lifecycle Marketing + Automation", desc: "Connected journeys that keep leads engaged and sales teams happy." },
    { icon: BarChart3, title: "Analytics + Optimization", desc: "Results you can measure, not just assume." },
    { icon: Compass, title: "Strategic Leadership", desc: "Fractional Head of Marketing–level thinking baked into every move." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">How It Works</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            One team. Total flexibility. <em className="italic text-accent">Every skill you need.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Momentum is our full-stack marketing team engagement — a credits-based retainer that flexes as your business scales and shifts. Each month, you get the exact mix of brains and execution muscle you need.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const I = s.icon;
            return (
              <div key={s.title} className="rounded-3xl border border-border bg-cream p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <I className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-ink/75">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-24 md:py-32 bg-ink text-cream">
    <div className="container">
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-4">Pricing Model</div>
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
          A pricing model that satisfies <em className="italic text-warm">legal, procurement, finance</em> — and your bottom line.
        </h2>
        <p className="mt-6 text-lg text-cream/75">
          Momentum runs on a credits-based model that adapts to your priorities each month. One agreement. Total flexibility. Zero friction.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-cream/5 border border-cream/15 p-8 md:p-10 flex flex-col">
          <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-2">Full-Stack Momentum Team</div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold">Your full marketing function — on demand.</h3>
          <ul className="mt-6 space-y-2.5 text-cream/85">
            {[
              "Need ad management and copywriting this month? Done.",
              "Next month it's a product launch and automation overhaul? No problem.",
              "Roll unused credits forward. Shift priorities without renegotiating scope.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-accent shrink-0 mt-1" /> <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-cream/15 flex-1 flex flex-col justify-end">
            <div className="text-center font-display text-2xl font-semibold text-warm mb-4">Starting at $6,000/month</div>
            <Link href="/lets-talk" className="group inline-flex items-center justify-center gap-2 bg-warm text-ink px-6 py-3.5 rounded-full font-semibold hover:bg-cream transition-all">
              Book a Discovery Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-cream text-ink p-8 md:p-10 flex flex-col shadow-bold">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Early-Stage Option</div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold">Built for pre-seed and seed.</h3>
          <p className="mt-4 text-ink/80">
            A reduced retainer plus revenue share. Typically follows a Campaign Engine engagement so the foundation is solid before scaling.
          </p>
          <div className="mt-8 pt-6 border-t border-border flex-1 flex flex-col justify-end">
            <div className="text-center font-display text-2xl font-semibold text-ink mb-4">Starting at $1,500/month + rev share</div>
            <Link href="/lets-talk" className="group inline-flex items-center justify-center gap-2 bg-ink text-cream px-6 py-3.5 rounded-full font-semibold hover:bg-accent transition-all">
              Let's See If You Qualify <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhoLovesIt = () => {
  const groups = [
    {
      title: "For Marketing Leaders",
      desc: "Strategic coverage and real execution support — without adding headcount or sacrificing quality.",
    },
    {
      title: "For Individual Contributors",
      desc: "Air cover. Real help. Not just advice — execution that makes your day lighter and your results stronger.",
    },
    {
      title: "For Executive Leaders",
      desc: "The growth engine you've been promised. Measurable, predictable, and built to scale.",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Who Loves It</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Built for the people who carry the <em className="italic text-accent">pipeline number</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div key={g.title} className="rounded-3xl border border-border bg-cream p-8">
              <div className="font-display text-5xl text-ink/15">0{i + 1}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{g.title}</h3>
              <p className="mt-3 text-ink/80">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="get-started" className="py-24 md:py-32 bg-cream border-t border-border">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Repeat className="h-3.5 w-3.5" /> Let's Build Momentum
        </div>
        <h2 className="mt-5 font-display text-4xl md:text-6xl font-medium leading-[1.02] text-balance">
          Momentum isn't another <span className="line-through text-ink/40">agency retainer</span>.
        </h2>
        <p className="mt-6 font-display text-2xl md:text-3xl text-accent italic">
          It's the growth team behind your next milestone.
        </p>
      </div>
      <div className="rounded-3xl bg-background border border-border p-6 md:p-8 shadow-bold">
        <LetsTalkForm />
      </div>
    </div>
  </section>
);

const Momentum = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main>
      <Hero />
      <Reality />
      <HowItWorks />
      <Pricing />
      <WhoLovesIt />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default Momentum;
