"use client";

import Link from "next/link";
import { ArrowRight, Check, GitBranch, MapPin, BookOpen, Handshake, Sparkles, AlertTriangle, Workflow, Repeat, TrendingDown, MousePointerClick, Mail, Calendar } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HubSpotLetsTalkForm from "@/components/HubSpotLetsTalkForm";
import Image from "next/image";
import rollercoaster from "@/assets/buyer-journey-rollercoaster.png";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <GitBranch className="h-3.5 w-3.5" /> Pipeline Conversion · Add-On
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[4.75rem] leading-[0.95] font-medium text-balance">
            More spend won't fix a buyer journey that's <em className="italic text-accent">working against you</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            When qualified buyers are engaging but not converting, the problem isn't the volume of traffic — it's the experience. We diagnose where the journey breaks down and rebuild it so more buyers move forward, and sales gets warmer conversations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/campaign-engine#get-started" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
              Add Conversion Optimization
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#get-started" className="group inline-flex items-center gap-2 border-2 border-ink text-ink px-7 py-4 rounded-full font-semibold hover:bg-ink hover:text-cream transition-all">
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Funnel visual */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-ink text-cream p-7 shadow-bold rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-warm font-semibold">
              <span>Funnel Drop-Off</span>
              <TrendingDown className="h-4 w-4" />
            </div>
            <div className="mt-6 space-y-3">
              {[
                { stage: "Visits", v: "100%", w: "100%", icon: MousePointerClick, leak: false },
                { stage: "Engaged", v: "42%", w: "60%", icon: BookOpen, leak: true, note: "Content not pre-educating" },
                { stage: "Nurture Active", v: "18%", w: "32%", icon: Mail, leak: true, note: "No forward movement" },
                { stage: "Demo Request", v: "3%", w: "12%", icon: Calendar, leak: true, note: "Cold conversations" },
                { stage: "Closed Won", v: "0.6%", w: "5%", icon: Check, leak: false },
              ].map((s, i) => {
                const I = s.icon;
                return (
                  <div key={i} className="rounded-2xl bg-cream/5 border border-cream/10 p-3" style={{ width: s.w, marginLeft: `calc((100% - ${s.w}) / 2)` }}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 text-cream/80"><I className="h-3.5 w-3.5 text-warm" />{s.stage}</span>
                      <span className="font-display text-warm font-semibold">{s.v}</span>
                    </div>
                    {s.leak && (
                      <div className="mt-1 text-[10px] text-cream/55 italic">leak: {s.note}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            <AlertTriangle className="h-3.5 w-3.5" /> The Real Problem
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Buyers don't convert because they're <em className="italic text-accent">not ready</em>. We fix that.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-ink/85">
          <p>The modern B2B buyer doesn't move in a straight line. They research, revisit, compare, disappear for three weeks, and come back ready to make a decision. Their journey is a rollercoaster — with dozens of moments where a buyer can lose momentum, lose confidence, or lose interest.</p>
          <p>Most teams try to fix conversion problems with more spend or more content. But the real issue is usually that buyers <span className="italic text-accent">aren't being pre-educated at the right moments</span>. By the time they reach a demo request, they don't yet have the context they need to say yes.</p>
        </div>
      </div>

      {/* Rollercoaster graphic */}
      <figure className="mt-12 md:mt-16 rounded-3xl bg-cream border border-border p-4 md:p-8 overflow-hidden">
        <Image
          src={rollercoaster}
          alt="The B2B buyer journey illustrated as a rollercoaster — from 'we've been dying to solve this problem' through budget pulls, new jobs, and CFO approvals to implementation."
          className="w-full h-auto"
        />
        <figcaption className="mt-4 text-center text-sm text-ink/60 italic">
          The real B2B buyer journey — loops, drops, detours, and a few unexpected stops.
        </figcaption>
      </figure>

      <div className="mt-10 max-w-3xl mx-auto rounded-3xl bg-ink text-cream p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-warm mb-2">How we approach it</div>
        <p className="text-cream/90 leading-relaxed">
          Conversion optimization, the way we do it, isn't about running A/B tests for six months. It's about identifying where buyers stall, what they're missing, and rebuilding the experience so your funnel earns the "yes" before you ask for it.
        </p>
      </div>
    </div>
  </section>
);

const Pillars = () => {
  const items = [
    { icon: MapPin, title: "Map Where Buyers Lose Momentum", desc: "We analyze each stage of your marketing and sales funnel — from first click to demo request to closed deal — to identify where buyers are hesitating, disengaging, or silently exiting. Not just on your website, but across every touchpoint." },
    { icon: BookOpen, title: "Rebuild the Pre-Education System", desc: "Most conversion problems aren't about CTAs or button colors. They're about buyers arriving at key moments without enough context to move forward confidently. We identify what buyers need to know before they convert — and build the content, nurture, and sequencing to deliver it." },
    { icon: Handshake, title: "Improve the Marketing-to-Sales Handoff", desc: "The most expensive conversion problem happens between marketing hand-off and the first sales conversation. We align messaging, scoring, and process so reps pick up a warm conversation, not a cold one." },
    { icon: Repeat, title: "Apply Proven Patterns, Not Endless Experiments", desc: "We apply insights from high-performing B2B buyer journeys across similar industries to implement multiple high-probability improvements simultaneously. Meaningful lift faster — without waiting months for incremental results." },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What We Do</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            We rebuild the moments that matter most in <em className="italic text-accent">the buyer journey</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-3xl border border-border bg-background p-7 group hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-accent text-cream flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-warm/80 text-sm font-semibold">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 leading-snug">{it.title}</h3>
                <p className="text-ink/80 leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Walkaway = () => {
  const items = [
    "A clear map of where buyers are losing momentum across your marketing and sales funnel",
    "Rebuilt touchpoints — landing pages, emails, CTAs, messaging — aligned to how buyers actually make decisions",
    "A pre-education system that warms buyers before key conversion moments",
    "Improved handoff between marketing and sales so reps start warmer conversations",
    "A conversion optimization plan for sustained performance",
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            <Workflow className="h-3.5 w-3.5" /> What You Walk Away With
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            A buyer journey that <em className="italic text-accent">earns the yes</em>.
          </h2>
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
    </section>
  );
};

const RightForYou = () => {
  const items = [
    "Buyers are engaging with your content but not requesting demos or conversations",
    "Marketing is handing off leads that sales says aren't ready",
    "Your campaigns are generating activity, but revenue impact is unclear",
    "Nurture sequences aren't creating meaningful forward movement",
    "Sales follow-up is working hard on leads that aren't actually warm",
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Is This Right For You?</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
              The right conversation if…
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-3">
            {items.map((i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-background px-5 py-4">
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
            You don't need more buyers in the pipeline. You need the ones you have to <em className="italic text-warm">move forward</em>.
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Let's figure out what's standing between your buyers and a confident yes.
          </p>
          <p className="mt-8 text-cream/80">
            Not sure where to start?{" "}
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-1 text-warm font-semibold hover:text-cream transition-colors">
              Try a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <div className="rounded-3xl bg-cream p-6 md:p-8 text-ink"><HubSpotLetsTalkForm /></div>
      </div>
    </div>
  </section>
);

const Conversion = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <Problem />
      <Pillars />
      <Walkaway />
      <RightForYou />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default Conversion;
