"use client";

import Link from "next/link";
import { ArrowRight, Check, Crosshair, Radar, Users, Handshake, Cpu, TrendingUp, Sparkles, Target, AlertTriangle, Zap } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HubSpotLetsTalkForm from "@/components/HubSpotLetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    {/* concentric target rings */}
    <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 hidden md:block">
      {[800, 620, 460, 320, 200].map((s, i) => (
        <div
          key={s}
          className="absolute rounded-full border-2 border-dashed border-ink/10"
          style={{
            width: s,
            height: s,
            top: -s / 2,
            left: -s / 2,
            opacity: 1 - i * 0.12,
          }}
        />
      ))}
      <div className="absolute h-4 w-4 rounded-full bg-accent shadow-bold" style={{ top: -8, left: -8 }} />
    </div>

    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <Crosshair className="h-3.5 w-3.5" /> ABM Layer · Add-On
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] font-medium text-balance">
          When ABM fails, it's not the idea. <em className="italic text-accent">It's the execution.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Most B2B teams know ABM is powerful in theory. In practice, it becomes expensive, overcomplicated, and disconnected from what actually drives results.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-ink/80">
          Our <span className="font-display font-semibold text-accent">ABM Layer</span> adds precision targeting, account-level campaign coordination, and aligned sales handoffs directly into your Campaign Engine engagement.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/campaign-engine#get-started" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
            Add ABM to My Campaign Engine
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/free-gtm-scan" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-all">
            Start with a Free GTM Scan
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const WhyFails = () => {
  const items = [
    { title: "The bigger the list, the better the results.", desc: "Teams build massive account lists filled with vanity logos and vague ICP matches. Budgets spread too thin with no meaningful engagement anywhere." },
    { title: 'Any engagement counts as progress.', desc: "ABM platforms can show impressions or page visits, but that doesn't mean real buying interest. Without meaningful signals, you're spending money marketing to noise." },
    { title: 'Handing off an "engaged" account is enough.', desc: "Sales receives a flagged account with no context, no direction, and no clarity on what to say next. Momentum dies right where it should accelerate." },
    { title: "More tech equals better ABM.", desc: "Expensive ABM platforms drain budget before you've reached a single account. Data quality suffers, adoption is low, and sales is left staring at another dashboard." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            <AlertTriangle className="h-3.5 w-3.5" /> Why Most ABM Underperforms
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            The assumptions that drain your budget <em className="italic text-accent">before you reach a single account</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="rounded-3xl border border-border bg-cream p-7 relative overflow-hidden">
              <div className="absolute top-4 right-5 font-display text-6xl font-semibold text-accent/10 leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-xl font-semibold mb-3 relative">{it.title}</h3>
              <p className="text-ink/80 leading-relaxed relative">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SignalRadar = () => {
  const signals = [
    "Leadership transitions that shift budget priorities",
    "Hiring patterns that signal a growing problem",
    "Funding events that unlock new spend",
    "Operational shifts that create urgency",
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What We Do Differently</div>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
              We get there <em className="italic text-accent">before the shortlist</em> forms.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We don't wait until buyers are actively researching and already comparing vendors — by then, you're competing instead of leading.
            </p>
            <p className="mt-4 text-ink/80">
              We align marketing and sales around a refined target account list, then track <span className="font-semibold text-accent">precursor signals</span> — early indicators that a conversation is worth starting now, before everyone else shows up.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {signals.map((s) => (
                <div key={s} className="flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-3">
                  <Radar className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-ink/85">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Radar visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-ink/15" />
              <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-ink/15" />
              <div className="absolute inset-[24%] rounded-full border-2 border-dashed border-ink/20" />
              <div className="absolute inset-[36%] rounded-full border-2 border-dashed border-ink/25" />
              <div className="absolute inset-[48%] rounded-full bg-accent/10 border-2 border-accent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent" />
              {/* signal dots */}
              {[
                { top: "12%", left: "30%", label: "New CRO" },
                { top: "22%", left: "70%", label: "Series B" },
                { top: "60%", left: "82%", label: "+15 hires" },
                { top: "78%", left: "38%", label: "Reorg" },
                { top: "44%", left: "10%", label: "M&A" },
              ].map((d) => (
                <div key={d.label} className="absolute" style={{ top: d.top, left: d.left }}>
                  <div className="relative">
                    <div className="absolute inset-0 h-3 w-3 rounded-full bg-warm/60 animate-ping" />
                    <div className="relative h-3 w-3 rounded-full bg-warm border border-cream" />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-ink/70 bg-background border border-border rounded-full px-2 py-0.5">
                      {d.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs uppercase tracking-widest text-muted-foreground">Precursor signal radar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pillars = () => {
  const items = [
    { icon: Users, title: "From account-level to individual.", desc: "We go beyond account-level targeting to build multi-channel, human-to-human touchpoints across the entire buying group. Account-specific messaging, outbound sequencing, personalized content, and direct outreach to key stakeholders — so when an account engages, it's a real conversation, not a logged click." },
    { icon: Handshake, title: "A handoff that actually converts.", desc: 'We fix the marketing-to-sales handoff with clear ownership stages and a Sales Playbook that includes full engagement history, buying group visibility, and "what to say" messaging for every role. Marketing owns the account longer — so sales inherits momentum, not just awareness.' },
    { icon: Cpu, title: "Lean tech. Real results.", desc: "We work with your current platform or implement high-efficiency tools that provide account visibility, real-time signals, and CRM integration — without tech bloat or wasted subscriptions." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-3xl border border-border bg-cream p-7">
                <div className="h-12 w-12 rounded-2xl bg-accent text-cream flex items-center justify-center mb-5">
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

const ProofCallout = () => (
  <section className="py-24 md:py-32 bg-ink text-cream relative overflow-hidden">
    <div className="absolute inset-0 grain opacity-30" />
    <div className="container relative">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-warm mb-4">
          <TrendingUp className="h-3.5 w-3.5" /> Proof
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05]">
          One 90-day campaign. <em className="italic text-warm">Real results.</em>
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-cream/5 border border-cream/10 p-10 text-center">
          <div className="font-display text-7xl md:text-8xl font-semibold text-warm leading-none">53%</div>
          <p className="mt-4 text-cream/80 text-lg">of target account list <span className="font-semibold text-cream">engaged</span></p>
        </div>
        <div className="rounded-3xl bg-cream/5 border border-cream/10 p-10 text-center">
          <div className="font-display text-7xl md:text-8xl font-semibold text-warm leading-none">36%</div>
          <p className="mt-4 text-cream/80 text-lg">converted into <span className="font-semibold text-cream">pipeline opportunities</span></p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/lets-talk" className="group inline-flex items-center gap-2 bg-warm text-ink px-6 py-3.5 rounded-full font-semibold hover:bg-cream transition-all">
          Download the ABM Playbook <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

const Walkaway = () => {
  const items = [
    "A refined target account list built around early signals, ready for activation",
    "Multi-channel campaigns that engage entire buying groups",
    "A defined handoff process between marketing and sales",
    "A Sales Playbook with clear next steps for every rep",
    "Pipeline visibility without tech bloat",
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What You Walk Away With</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            A complete <em className="italic text-accent">account-based system</em>, not another tool.
          </h2>
        </div>
        <ul className="mt-12 grid md:grid-cols-2 gap-4">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl bg-background border border-border p-5">
              <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <span className="text-ink/85">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const RightForYou = () => {
  const items = [
    "You're targeting mid-market or enterprise accounts but struggling to gain traction",
    "Your ABM tools feel expensive but underperforming",
    'Sales and marketing don\'t share a clear definition of "engagement"',
    "You're ready to turn high-value target accounts into real pipeline",
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Is This Right For You?</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
              The right conversation if…
            </h2>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream border border-border px-4 py-2 text-sm">
              <Target className="h-4 w-4 text-accent" />
              ABM Layer is an add-on to a Campaign Engine engagement
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
            You don't need more accounts. You need <em className="italic text-warm">the right ones</em> — reached at the right moment.
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Let's build an ABM layer that connects early signal to action — and turns your target list into real opportunities.
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

const ABM = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <WhyFails />
      <SignalRadar />
      <Pillars />
      <ProofCallout />
      <Walkaway />
      <RightForYou />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default ABM;
