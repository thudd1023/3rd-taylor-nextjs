"use client";

import Link from "next/link";
import { ArrowRight, Check, Send, Share2 as Linkedin, Mail, Sparkles, Cpu, Database, Radar, MessageSquare, Layers, Zap, AlertTriangle } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Send className="h-3.5 w-3.5" /> Personalized Outbound · Add-On
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[4.75rem] leading-[0.95] font-medium text-balance">
            More pipeline. Less manual work. <em className="italic text-accent">No spray-and-pray.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Personalized Outbound at Scale adds targeted, AI-enhanced outbound sequences to your Campaign Engine — so you're reaching the right prospects with the right message while your team focuses on closing, not chasing.
          </p>
          <div className="mt-10">
            <Link href="/campaign-engine#get-started" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
              Add Outbound to My Campaign Engine
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Outbound sequence card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-ink text-cream p-7 shadow-bold rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-warm font-semibold">
              <span>Sequence · Day-by-Day</span>
              <Send className="h-4 w-4" />
            </div>
            <ul className="mt-6 space-y-3">
              {[
                { d: "D1", icon: Mail, t: "Personalized opener", note: "Tied to a precursor signal" },
                { d: "D3", icon: Linkedin, t: "Connect + light touch", note: "Reinforce campaign theme" },
                { d: "D5", icon: Mail, t: "Insight + proof", note: "Role-specific angle" },
                { d: "D8", icon: Linkedin, t: "Direct ask", note: "Short, specific, useful" },
                { d: "D12", icon: Mail, t: "Bow-out / handoff", note: "Logged in CRM" },
              ].map((s) => {
                const I = s.icon;
                return (
                  <li key={s.d} className="flex items-center gap-3 rounded-2xl bg-cream/5 border border-cream/10 px-3 py-2.5">
                    <span className="font-display text-sm font-semibold text-warm w-8">{s.d}</span>
                    <I className="h-4 w-4 text-warm shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{s.t}</div>
                      <div className="text-[11px] text-cream/60 truncate">{s.note}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
          <AlertTriangle className="h-3.5 w-3.5" /> The Problem
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
          Your team shouldn't spend half their day on <em className="italic text-accent">manual prospecting</em>.
        </h2>
      </div>
      <div className="lg:col-span-7 space-y-5 text-lg text-ink/85">
        <p>But generic outreach doesn't work anymore either. Buyers filter it, ignore it, or forward it to the delete folder. Reps give up after two touches.</p>
        <div className="rounded-3xl bg-cream border border-border p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">What actually works</div>
          <p className="text-ink/85">
            Outbound that feels relevant, arrives <span className="italic text-accent">before</span> the buyer is already on a competitor's radar, and ties directly into the campaign they've already been seeing from you.
          </p>
        </div>
        <p className="font-display text-xl text-ink/80">That's exactly what this add-on delivers.</p>
      </div>
    </div>
  </section>
);

const SignalToMessage = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <div className="container">
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Early Signal Identification</div>
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
          Before the competition <em className="italic text-accent">knows to look</em>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          We don't build prospect lists based on who's already searching for solutions. If someone's actively evaluating vendors, you're not early — you're competing.
        </p>
        <p className="mt-4 text-ink/80">
          We identify <span className="font-semibold text-accent">early signals</span> that suggest a pain point is about to emerge that your solution is positioned to solve.
        </p>
      </div>

      {/* signal → message flow */}
      <div className="mt-14 rounded-3xl bg-background border border-border p-6 md:p-10">
        <div className="grid md:grid-cols-7 gap-6 items-stretch">
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Precursor signals</div>
            <div className="grid grid-cols-2 gap-2">
              {["Leadership transitions", "Hiring patterns", "Funding events", "Operational changes", "Org growth", "Tech shifts"].map((s) => (
                <div key={s} className="flex items-center gap-2 rounded-xl bg-cream border border-border px-3 py-2.5 text-sm text-ink/80">
                  <Radar className="h-3.5 w-3.5 text-accent shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:col-span-1 items-center justify-center">
            <div className="relative w-full">
              <div className="border-t-2 border-dashed border-accent/40" />
              <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Outbound message</div>
            <div className="rounded-2xl bg-ink text-cream p-5">
              <div className="flex items-center gap-2 text-xs text-cream/60 mb-3">
                <Mail className="h-3.5 w-3.5" /> hello@3rdandtaylor.co · Day 1
              </div>
              <p className="text-sm leading-relaxed">
                <span className="text-cream/60 italic">Not</span> "I noticed you work at [Company]"…
              </p>
              <p className="mt-3 text-sm leading-relaxed text-warm">
                Instead — messaging that speaks directly to something <em className="italic">changing in their world</em>, before they've even framed it as a buying need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pillars = () => {
  const items = [
    { icon: Layers, title: "Campaign-Aligned Messaging", desc: "Every outbound sequence ties directly to your Campaign Engine messaging — creating continuity between what prospects have already seen in ads and content, and what lands in their inbox." },
    { icon: Cpu, title: "AI-Enhanced Personalization at Scale", desc: "We use AI to personalize outreach at the role, industry, and company level — human-crafted, human-reviewed, and built to feel like it was written specifically for them." },
    { icon: MessageSquare, title: "Multi-Touch Sequencing", desc: "Email, LinkedIn, and coordinated follow-up — sequenced to build familiarity before asking for a conversation." },
    { icon: Database, title: "CRM Integration & Reporting", desc: "Every touchpoint is tracked, attributed, and connected to your pipeline data. No black box." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            A complete outbound layer, built into your <em className="italic text-accent">campaign system</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-3xl border border-border bg-cream p-7 group hover:border-accent/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-accent text-cream flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="h-6 w-6" />
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

const RightForYou = () => {
  const items = [
    "You need to extend your Campaign Engine reach beyond inbound",
    "Your sales team relies too heavily on manual prospecting",
    "You want outbound that feels like a natural extension of your campaign — not cold spam",
    "You're targeting specific accounts or personas and need precision, not volume",
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
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-background border border-border px-4 py-2 text-sm">
              <Zap className="h-4 w-4 text-accent" />
              Add-on to a Campaign Engine engagement
            </div>
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
            Ready to add outbound that <em className="italic text-warm">actually converts</em>?
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Let's talk about how Personalized Outbound at Scale fits into your Campaign Engine engagement.
          </p>
          <p className="mt-8 text-cream/80">
            Not sure where to start?{" "}
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-1 text-warm font-semibold hover:text-cream transition-colors">
              Try a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <div className="rounded-3xl bg-cream p-6 md:p-8 text-ink"><LetsTalkForm source="solutions-outbound" /></div>
      </div>
    </div>
  </section>
);

const Outbound = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <Problem />
      <SignalToMessage />
      <Pillars />
      <RightForYou />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default Outbound;
