"use client";

import Link from "next/link";
import { ArrowRight, Check, AlertTriangle, Rocket, Target, MessageSquare, Users, Zap, Sparkles, Calendar, TrendingUp } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Rocket className="h-3.5 w-3.5" /> Pipeline Growth · Launch
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] font-medium text-balance">
            Your product is ready. <em className="italic text-accent">Now the market needs to be.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            A great product launch doesn't happen by accident. It happens when messaging, targeting, campaigns, and sales are all moving together — toward the same goal, at the same time. We build the system that makes that happen.
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
        {/* Visual: launch countdown card */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl bg-ink text-cream p-8 shadow-bold rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-widest text-warm">T-minus</div>
                <Rocket className="h-5 w-5 text-warm" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { n: "45", l: "Days to live" },
                  { n: "4", l: "Channels" },
                  { n: "1", l: "System" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-cream/5 border border-cream/10 py-4">
                    <div className="font-display text-4xl font-semibold text-warm">{s.n}</div>
                    <div className="text-[10px] uppercase tracking-wider text-cream/60 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                {[
                  { l: "Positioning", w: "w-full" },
                  { l: "Messaging", w: "w-11/12" },
                  { l: "Campaign build", w: "w-3/4" },
                  { l: "Sales enablement", w: "w-2/3" },
                  { l: "Optimization", w: "w-1/2" },
                ].map((r) => (
                  <div key={r.l}>
                    <div className="flex justify-between text-[11px] text-cream/70 mb-1">
                      <span>{r.l}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-cream/10 overflow-hidden">
                      <div className={`h-full ${r.w} bg-gradient-to-r from-warm to-accent`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Scenario = () => {
  const failures = [
    "The product is ready but the messaging isn't — buyers don't understand what it is, who it's for, or why it's different",
    "Marketing runs a launch campaign but sales isn't equipped to follow up — they're telling a different story than the ads",
    "The campaign generates early buzz but there's no nurture system to keep buyers engaged after the initial push",
    "Targeting is too broad and budget gets spread too thin to build real traction anywhere",
    "Launch is treated as a moment instead of a system — one push, then silence",
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
              Launch is one of the highest-stakes moments in your <em className="italic text-accent">GTM calendar</em>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              You've got a new product — or a meaningfully updated one — and the pressure is on to make it land. Maybe it's a new feature set opening up a different persona. A pivot. A new segment. Or you just need pipeline faster than last time.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-cream border border-border p-5">
                <div className="font-display text-3xl font-semibold text-accent">Get it right</div>
                <p className="mt-2 text-sm text-ink/75">Momentum that compounds.</p>
              </div>
              <div className="rounded-2xl bg-ink text-cream p-5">
                <div className="font-display text-3xl font-semibold text-warm">Half-right</div>
                <p className="mt-2 text-sm text-cream/70">Two quarters to recover.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Where launches underperform</div>
            <ul className="space-y-2">
              {failures.map((f, i) => (
                <li key={f} className="flex gap-4 rounded-2xl border border-border bg-cream px-5 py-4">
                  <span className="font-display font-semibold text-accent shrink-0 w-6">0{i + 1}</span>
                  <span className="text-ink/80">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Requirements = () => {
  const items = [
    { icon: Target, title: "Positioning that's sharp before the campaign runs.", desc: "Who is this for, exactly? What problem does it solve that nothing else solves the same way? Why now? If your team can't answer those clearly, no media spend will compensate. Positioning comes first." },
    { icon: MessageSquare, title: "Messaging that does the heavy lifting before sales gets involved.", desc: "The best launches pre-educate the market. By the time a buyer talks to a rep, they already understand the problem and are curious enough to have a real conversation." },
    { icon: Zap, title: "A sequenced campaign that builds momentum over time.", desc: "Not a single email or LinkedIn post — a coordinated sequence across paid, content, email, and outbound, timed and layered to build familiarity and create conversion at the right moments." },
    { icon: Users, title: "Sales alignment from day one.", desc: "Your reps need to know what buyers have seen, what they care about, and what to say next. A launch that isn't built with sales in mind creates friction at the moment of highest opportunity." },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What a Strong Launch Requires</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            A launch isn't an announcement. It's a <em className="italic text-accent">coordinated buyer journey</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Your buyers aren't waiting for your launch email. Breaking through — and staying visible long enough for a decision to happen — requires a system, not a single push.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="group rounded-3xl border border-border bg-background p-7 hover:border-accent/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-cream transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
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

const Outcomes = () => {
  const items = [
    { stat: "30–45", unit: "Days", title: "Faster time to pipeline.", desc: "When buyers are pre-educated and the campaign sequence is tight, the right system generates qualified pipeline in the first 30–45 days — not just vanity metrics." },
    { stat: "1", unit: "Story", title: "A sales team that's ready to convert.", desc: "When marketing and sales build the launch together — shared messaging, clear handoff, buyer context baked in — reps start conversations that are already moving forward." },
    { stat: "∞", unit: "Compounding", title: "Positioning that sticks.", desc: "A well-executed launch establishes your position, builds familiarity with the right buyers, and makes every future campaign more effective." },
    { stat: "100%", unit: "Visibility", title: "Clarity on what's working.", desc: 'Not just "we got leads." Which messages resonated, which segments converted, which channels drove pipeline. The foundation for the next campaign.' },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What the Right Launch Produces</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Here's what changes when a launch is built as a <em className="italic text-accent">system</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border border-border bg-cream p-7 flex gap-6">
              <div className="shrink-0 w-24 text-center">
                <div className="font-display text-4xl md:text-5xl font-semibold text-accent leading-none">{it.stat}</div>
                <div className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">{it.unit}</div>
              </div>
              <div className="border-l border-border pl-6 flex-1">
                <h3 className="font-display text-lg font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-ink/80 leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Traps = () => {
  const traps = [
    { title: "Launching before the positioning is ready.", desc: 'Speed to market matters — but launching with unclear messaging is slower in the long run. Buyers who don\'t get it immediately move on. We make sure the "why it matters to you specifically" is built in from the start.' },
    { title: "Running a launch campaign without a nurture system behind it.", desc: "Most B2B buyers won't convert on first touch. If your campaign generates interest but there's no system to keep those buyers engaged, that interest evaporates." },
    { title: "Treating launch as a marketing-only event.", desc: "The best launches have marketing and sales aligned on messaging, timing, and handoff before the campaign goes live. We build that alignment into the process — not as an afterthought." },
    { title: "Declaring victory too early.", desc: "Launch is the beginning of a campaign system, not a sprint. The teams that win optimize in the weeks after launch — doubling down on what's working and adjusting what isn't." },
  ];
  return (
    <section className="py-24 md:py-32 bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="container relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-warm mb-4">
            <AlertTriangle className="h-3.5 w-3.5" /> What Tends to Go Wrong
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            The launch traps we help you <em className="italic text-warm">avoid</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {traps.map((t, i) => (
            <div key={t.title} className="rounded-3xl bg-cream/5 border border-cream/10 p-7 hover:border-warm/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="font-display text-3xl font-semibold text-warm/60 shrink-0">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-cream">{t.title}</h3>
                  <p className="text-sm text-cream/75 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeHelp = () => {
  const phases = [
    { icon: Target, label: "Positioning & Messaging", desc: "We sharpen the product story — who it's for, what it solves, how to frame it for each buyer persona. The foundation for every piece of campaign creative." },
    { icon: Zap, label: "Multi-Channel Campaign Build", desc: "Paid media on LinkedIn and Google, email sequences, landing pages, retargeting, and content that pre-educates buyers at every stage." },
    { icon: Users, label: "Sales Enablement & Alignment", desc: "Reps get the context they need: what buyers have seen, how the product is positioned, what to say at each stage, how to handle objections." },
    { icon: TrendingUp, label: "45 Days of Post-Launch Optimization", desc: "We monitor performance, refine messaging and targeting based on real data, and optimize conversion paths to maximize pipeline." },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">How We Help</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            <em className="italic text-accent">Campaign Engine</em> is built for exactly this moment.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A product launch is one of the most natural fits for Campaign Engine — our flagship service that takes a B2B team from idea to live campaign in 45 days, then optimizes for another 45.
          </p>
        </div>

        {/* Launch sequence timeline */}
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/60 to-warm" />
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="relative">
                  <div className="flex md:justify-center mb-4">
                    <div className="relative h-24 w-24 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-bold">
                      <Icon className="h-9 w-9 text-accent" />
                      <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-ink text-cream text-xs font-display font-semibold flex items-center justify-center">
                        {i + 1}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-background p-5 md:text-center">
                    <h3 className="font-display text-base font-semibold mb-2">{p.label}</h3>
                    <p className="text-xs text-ink/75 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-background border border-border p-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-semibold">Targeting high-value accounts?</div>
              <p className="mt-1 text-sm text-ink/75">Add the <span className="text-accent font-semibold">ABM Layer</span> for account-level precision.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-background border border-border p-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-semibold">Need to extend reach?</div>
              <p className="mt-1 text-sm text-ink/75"><span className="text-accent font-semibold">Personalized Outbound at Scale</span> integrates directly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RightForYou = () => {
  const items = [
    "You have a new product, a significant update, or a repositioned offer ready to take to market",
    "Past launches haven't generated the pipeline you needed — or took too long to get traction",
    "You need messaging, campaign execution, and sales alignment working together from day one",
    "You're working against a hard deadline — a funding announcement, a trade show, a fiscal quarter",
    "You want a launch that builds lasting pipeline, not just launch-week buzz",
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Is This Right For You?</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
              This is the right conversation if…
            </h2>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream border border-border px-4 py-2 text-sm">
              <Calendar className="h-4 w-4 text-accent" />
              Working against a hard deadline? Tell us about it.
            </div>
          </div>
          <div className="lg:col-span-7 space-y-3">
            {items.map((i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-cream px-5 py-4">
                <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-ink/85">{i}</span>
              </div>
            ))}
          </div>
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
            Your product deserves a launch that <em className="italic text-warm">actually generates pipeline</em>.
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Campaign Engine gives you the messaging clarity, campaign execution, and sales alignment you need to make your next launch land — and keep producing results after the launch window closes. Built and live in 45 days.
          </p>
          <p className="mt-8 text-cream/80">
            Not sure where to start?{" "}
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-1 text-warm font-semibold hover:text-cream transition-colors">
              Try a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <div className="rounded-3xl bg-cream p-6 md:p-8 text-ink"><LetsTalkForm source="solutions-launch-product" /></div>
      </div>
    </div>
  </section>
);

const LaunchProduct = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <Scenario />
      <Requirements />
      <Outcomes />
      <Traps />
      <HowWeHelp />
      <RightForYou />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default LaunchProduct;
