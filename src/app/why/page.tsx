"use client";

import Link from "next/link";
import { ArrowRight, Check, X, Trophy, HeartHandshake, Sparkles, Wrench, ShieldCheck, Coins, Users, Building2, Network, Boxes, UserMinus } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <Sparkles className="h-3.5 w-3.5" /> Why 3rd + Taylor
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] font-medium text-balance">
          Why <em className="italic text-accent">3rd + Taylor</em> Agency?
        </h1>
        <p className="mt-8 max-w-3xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
          The B2B marketing agency that knows how to untangle chaos and turn it into <span className="text-ink font-semibold">repeatable revenue</span>.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/lets-talk" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
            Let's Talk <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/free-gtm-scan" className="inline-flex items-center gap-2 border border-ink/20 text-ink px-7 py-4 rounded-full font-semibold hover:bg-ink hover:text-cream transition-colors">
            Get a Free GTM Scan
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const NotTypical = () => {
  const tiles = [
    {
      icon: Trophy,
      title: "We Optimize for Won Deals, Not Just Leads",
      desc: "We don't stop at top-of-funnel form fills. We take a full approach to your marketing and sales funnel to drive actual won deals — not vanity metrics. No more junk MQLs that never convert. No more marketing-sales finger-pointing. Just clear attribution and campaigns built to close.",
    },
    {
      icon: HeartHandshake,
      title: "Human-to-Human Marketing. Breaking the B2B Mold.",
      desc: "Buyers are people first — so we market to them like it. Whether they're at their desk or their couch, we reach your prospects where they are, with messages that resonate. Because people buy from people, not from logos.",
    },
    {
      icon: Sparkles,
      title: "Specialized Experts. No Jack-of-All-Trades Here.",
      desc: "Every person on your engagement is an expert in their discipline — strategy, paid media, content, automation, or analytics. Specialized knowledge in your field. Top-tier execution always.",
    },
    {
      icon: Wrench,
      title: "The Right Tools & Tech to Keep You Moving.",
      desc: "We bring access to the MarTech, data, and prospecting tools you actually need — without the headaches. Accurate attribution, workflow automation, prospecting intelligence, and analytics that tell you something useful.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy-First. Always.",
      desc: "Data privacy isn't a future problem — it's a right now problem. We're ahead of the curve, ensuring every strategy we build keeps you compliant today and ready for tomorrow.",
    },
    {
      icon: Coins,
      title: "Pricing That Actually Makes Sense.",
      desc: "Traditional agency pricing is broken. So we fixed it. Flat-fee Campaign Engine builds. Credits-based retainers for flexibility without friction. Revenue-linked models for companies who want shared risk and shared reward.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream border-y border-border">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Not Your Typical Agency</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Most agencies follow the same tired script. <em className="italic text-accent">We rewrote it.</em>
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>Let's be real — most agencies operate the same way: flashy pitches, bloated retainers, and a revolving door of account managers who juggle too many clients at once.</p>
            <p>Sound familiar? Yeah, we've been on the other side of that table too.</p>
            <p className="text-ink font-semibold">That's exactly why we built 3rd + Taylor differently.</p>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t, i) => {
            const I = t.icon;
            return (
              <div key={t.title} className="rounded-3xl border border-border bg-background p-7 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <I className="h-5 w-5" />
                  </div>
                  <span className="font-display text-2xl text-ink/15">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{t.title}</h3>
                <p className="mt-3 text-ink/75 text-sm leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Alternatives = () => {
  const items = [
    { icon: Building2, label: "Hire In-House", line: "Full control, but costly and slow.", desc: "Recruiting, onboarding, and managing a full team adds overhead and delays execution by months." },
    { icon: Boxes, label: "Hire a Traditional Agency", line: "Brings some expertise, but cookie-cutter.", desc: "Cookie-cutter strategy, a focus on form fills over dollars, and underwhelming results." },
    { icon: Network, label: "Piece Together Freelancers", line: "Flexible, but chaotic.", desc: "Managing multiple contractors leads to inconsistent execution, no unified strategy, and serious coordination headaches." },
    { icon: Wrench, label: "Purchase More Tools", line: "Tech without strategy is expensive shelfware.", desc: "Tools help — but only when the right people are operating them with a clear plan." },
    { icon: UserMinus, label: "Try to Do It All Yourself", line: "Possible — but at what cost?", desc: "Burnout rises, execution quality drops, and scaling becomes harder than ever." },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Where the Alternatives Fall Short</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Not convinced yet? <em className="italic text-accent">Fair.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Here's what else you could do — and why each option has its own set of trade-offs.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {items.map((it) => {
            const I = it.icon;
            return (
              <div key={it.label} className="grid md:grid-cols-12 gap-4 rounded-3xl border border-border bg-cream p-6 md:p-8 items-start">
                <div className="md:col-span-4 flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-cream shrink-0">
                    <I className="h-5 w-5" />
                  </div>
                  <div>
                    <X className="h-4 w-4 text-accent inline mb-0.5" />
                    <h3 className="font-display text-lg md:text-xl font-semibold inline ml-1">{it.label}</h3>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="font-semibold text-ink">{it.line}</div>
                  <p className="mt-1 text-ink/70">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const OrHireUs = () => {
  const points = [
    "A team of specialists embedded in your organization",
    "Pricing that makes sense for your business model",
    "Direct access to the right MarTech, data, and tools",
    "AI-enhanced execution for precision and speed",
    "Strategy baked into every engagement — not an afterthought",
  ];
  return (
    <section id="get-started" className="py-24 md:py-32 bg-ink text-cream">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-warm mb-4">
            <Users className="h-3.5 w-3.5" /> Or You Could Hire 3rd + Taylor
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.02] text-balance">
            Instead of juggling vendors, draining budget, or playing catch-up — <em className="italic text-warm">you get this.</em>
          </h2>
          <ul className="mt-10 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-lg">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-cream shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-cream/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-cream text-ink p-6 md:p-8 shadow-bold">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Let's Talk</div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
            Ready to work with an agency that actually feels like <em className="italic text-accent">part of your team?</em>
          </h3>
          <div className="mt-6">
            <LetsTalkForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const Why = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main>
      <Hero />
      <NotTypical />
      <Alternatives />
      <OrHireUs />
    </main>
    <SiteFooter />
  </div>
);

export default Why;
