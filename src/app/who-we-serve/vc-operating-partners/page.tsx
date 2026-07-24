"use client";

import Link from "next/link";
import { ArrowRight, Check, Briefcase, TrendingUp, Building2, Users, Gauge, Target, Layers, Sparkles, AlertTriangle, ShieldCheck, Rocket, LineChart, HelpCircle } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Briefcase className="h-3.5 w-3.5" /> VC & PE Operating Partners
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[4.75rem] leading-[0.95] font-medium text-balance">
            Turn portfolio potential into <em className="italic text-accent">proven pipeline</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Scalable GTM support that helps your portfolio companies hit their next milestone — without adding to your plate.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/book-portfolio-discussion" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
              Schedule a Portfolio Discussion
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Portfolio grid visual */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-ink text-cream p-7 shadow-bold -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-warm font-semibold">
              <span>Portfolio Snapshot</span>
              <LineChart className="h-4 w-4" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { s: "Seed", v: "+38%" },
                { s: "Srs A", v: "+72%" },
                { s: "Srs B", v: "+24%" },
                { s: "Srs C", v: "+51%" },
                { s: "PE", v: "+19%" },
                { s: "PE+", v: "+33%" },
              ].map((c, i) => (
                <div key={i} className="rounded-2xl bg-cream/5 border border-cream/10 p-3">
                  <div className="text-[10px] uppercase tracking-widest text-cream/60">{c.s}</div>
                  <div className="mt-1 font-display text-lg font-semibold text-warm">{c.v}</div>
                  <div className="mt-2 h-1 rounded-full bg-cream/10 overflow-hidden">
                    <div className="h-full bg-warm" style={{ width: `${40 + (i * 9) % 55}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-cream/70">
              <span>Pipeline · CAC · Conversion</span>
              <span className="text-warm font-semibold">Board-ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Reality = () => {
  const items = [
    "Aggressive growth targets tied to funding milestones or value-creation plans",
    "Limited visibility into what's truly driving — or stalling — revenue",
    "Portfolio companies at different stages, each requiring a different GTM approach",
    "Founders and leadership teams stretched thin, executing without enough structure",
    "Board-level scrutiny on pipeline quality, CAC, and predictability",
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            <AlertTriangle className="h-3.5 w-3.5" /> The Reality You're Managing
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            One operator. Dozens of companies. <em className="italic text-accent">Finite hours.</em>
          </h2>
          <p className="mt-6 text-ink/80">
            VC and PE firms don't invest in ideas — they invest in outcomes. As companies scale, expectations rise faster than systems, teams, and processes.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-3">
          {items.map((i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-cream px-5 py-4">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
              <span className="text-ink/85">{i}</span>
            </div>
          ))}
          <div className="mt-6 rounded-3xl bg-ink text-cream p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-warm mb-2">What you need</div>
            <p className="text-cream/90 leading-relaxed">
              A trusted partner who moves fast across your portfolio, speaks investor and boardroom language, and makes both you and your founders look brilliant with results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const BeenInYourShoes = () => {
  const items = [
    { icon: Rocket, title: "Early-stage", desc: "Companies pushing toward the next funding round." },
    { icon: TrendingUp, title: "VC-backed", desc: "Teams working to prove repeatable, scalable GTM motion." },
    { icon: ShieldCheck, title: "PE-backed", desc: "Organizations expected to deliver results that stand up under investor scrutiny." },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">We've Been in Your Shoes</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            We've been in the boardroom. <em className="italic text-accent">We know what's on the line.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Our experience comes from operating inside the type of companies you back — defending pipeline assumptions and CAC under pressure, aligning marketing and sales around shared revenue outcomes, and driving growth without over-hiring.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-3xl bg-background border border-border p-7">
                <div className="h-12 w-12 rounded-2xl bg-accent text-cream flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{it.title}</h3>
                <p className="text-ink/80 leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Approach = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">The 3rd + Taylor Approach</div>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
          Reduce risk and accelerate growth — <em className="italic text-accent">at the same time</em>.
        </h2>
      </div>
      <div className="lg:col-span-7 space-y-4">
        {[
          { icon: Gauge, t: "Diagnose GTM breakdowns early", d: "Before they become board-level problems." },
          { icon: Target, t: "Prioritize highest-impact initiatives", d: "Focused on revenue and valuation outcomes." },
          { icon: Layers, t: "Increase execution velocity", d: "Without adding permanent headcount." },
        ].map((i) => {
          const I = i.icon;
          return (
            <div key={i.t} className="flex items-start gap-4 rounded-2xl border border-border bg-cream p-5">
              <div className="h-11 w-11 rounded-xl bg-accent text-cream flex items-center justify-center shrink-0">
                <I className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">{i.t}</div>
                <div className="text-ink/75 mt-1">{i.d}</div>
              </div>
            </div>
          );
        })}
        <div className="pt-2">
          <Link href="/book-portfolio-discussion" className="group inline-flex items-center gap-2 text-accent font-semibold hover:text-ink transition-colors">
            Schedule a Portfolio Discussion
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Stages = () => {
  const stages = [
    {
      stage: "Pre-Investment / Due Diligence",
      tagline: "Uncover growth reality before capital is deployed.",
      bullets: [
        "Pressure-testing GTM assumptions, positioning, and ICP clarity",
        "Separating real demand signal from optimistic pipeline narratives",
        "Evaluating CAC, channel scalability, and execution readiness",
        "Identifying hidden growth levers and potential red flags",
      ],
      outcome: "Stronger conviction going into the deal. Fewer surprises post-close.",
      cta: { label: "Learn About Our Revenue Growth Audit", to: "/revenue-growth-audit" },
    },
    {
      stage: "Post-Close Kickstart (First 90 Days)",
      tagline: "Fast-start programs that deliver early wins while building long-term scalability.",
      bullets: [
        "Establish or reset GTM fundamentals",
        "Translate board-level goals into executable plans",
        "Accelerate revenue without over-hiring",
        "Create visibility and accountability around growth metrics",
      ],
      outcome: "In-market campaign systems with 100-day milestones, owner accountability, and board-ready reporting.",
      cta: { label: "Learn About Campaign Engine", to: "/campaign-engine" },
    },
    {
      stage: "Portfolio GTM & Growth Acceleration",
      tagline: "Scale what works. Fix what doesn't.",
      bullets: [
        "Diagnose where growth is breaking down across the funnel",
        "Re-align marketing and sales around shared revenue outcomes",
        "Prioritize the highest-impact initiatives across channels",
        "Increase execution velocity without adding permanent headcount",
      ],
      outcome: "Cleaner pipeline, improved predictability, and sustained growth momentum.",
      cta: { label: "Learn About Momentum Teams", to: "/campaign-engine" },
    },
    {
      stage: "Fractional Growth Leadership",
      tagline: "CMO-level leadership without the $300K+ salary and equity package.",
      bullets: [
        "Strategic oversight and accountability for all marketing efforts",
        "Weekly participation in exec and leadership meetings",
        "Team mentorship and capability building",
        "Investor and board presentation prep and delivery",
      ],
      outcome: "Immediate leadership, faster progress, and a stronger foundation for scale.",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Proven Frameworks. Every Stage.</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            From pre-investment to <em className="italic text-accent">exit readiness</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We deliver GTM expertise that scales across your entire portfolio.
          </p>
        </div>

        {/* Lifecycle rail */}
        <div className="mt-12 hidden md:flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-ink/60">
          <span>Diligence</span>
          <span className="flex-1 border-t-2 border-dashed border-accent/40" />
          <span>Post-Close</span>
          <span className="flex-1 border-t-2 border-dashed border-accent/40" />
          <span>Acceleration</span>
          <span className="flex-1 border-t-2 border-dashed border-accent/40" />
          <span>Exit</span>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {stages.map((s, idx) => (
            <div key={s.stage} className="rounded-3xl bg-background border border-border p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-ink text-cream flex items-center justify-center font-display font-semibold">{idx + 1}</div>
                <h3 className="font-display text-xl font-semibold">{s.stage}</h3>
              </div>
              <p className="text-ink/80 italic mb-4">{s.tagline}</p>
              <ul className="space-y-2 mb-5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink/80">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto rounded-2xl bg-cream border border-border p-4">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-1">Outcome</div>
                <p className="text-sm text-ink/85">{s.outcome}</p>
              </div>
              {s.cta && (
                <Link href={s.cta.to} className="group mt-4 inline-flex items-center gap-1 text-accent font-semibold hover:text-ink transition-colors text-sm">
                  {s.cta.label}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-ink/75 mb-4">Not sure which support model fits your immediate priority?</p>
          <Link href="/book-portfolio-discussion" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
            Schedule a Portfolio Discussion
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const tiles = [
    { tag: "PE-Backed B2B SaaS", stat: "426%", desc: "increase in qualified demo bookings in 30 days" },
    { tag: "PE-Backed FI MarTech", stat: "$15M", desc: "marketing-sourced revenue (17% YoY increase)" },
    { tag: "YC-Backed AI Voice", stat: "6x", desc: "return on ad spend, top global enterprise wins" },
  ];
  return (
    <section className="py-24 md:py-32 bg-ink text-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-4">Results Delivered</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            We don't just talk strategy. <em className="italic text-warm">We prove impact.</em>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <div key={t.tag} className="rounded-3xl bg-cream/5 border border-cream/10 p-7 hover:border-warm/40 transition-colors">
              <div className="text-[11px] uppercase tracking-widest text-warm font-semibold">{t.tag}</div>
              <div className="mt-4 font-display text-6xl font-medium text-warm">{t.stat}</div>
              <p className="mt-3 text-cream/80">{t.desc}</p>
              <button className="mt-6 inline-flex items-center gap-1 text-cream/70 hover:text-warm text-sm font-semibold transition-colors">
                See the full case study <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientMix = () => {
  const mix = [
    { pct: 60, label: "VC-backed", sub: "Seed through Series C", icon: Rocket },
    { pct: 20, label: "PE-backed", sub: "Focused on value creation", icon: ShieldCheck },
    { pct: 20, label: "Bootstrapped", sub: "Capital efficiency, fast ROI", icon: Building2 },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our Client Mix</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Who we <em className="italic text-accent">work with</em>.
          </h2>
          <p className="mt-6 text-ink/80">
            We work with companies facing your exact pressures every day. We know the metrics that matter. We know your timelines. And we move fast without sacrificing quality.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {mix.map((m) => {
            const I = m.icon;
            return (
              <div key={m.label} className="rounded-2xl border border-border bg-cream p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-accent text-cream flex items-center justify-center">
                      <I className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-semibold">{m.label}</div>
                      <div className="text-sm text-ink/70">{m.sub}</div>
                    </div>
                  </div>
                  <div className="font-display text-3xl font-medium text-accent">{m.pct}%</div>
                </div>
                <div className="h-2 rounded-full bg-background overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => {
  const steps = [
    { t: "Portfolio Assessment", d: "We meet to understand your portfolio composition, priority companies, and specific challenges. You set the agenda — we execute." },
    { t: "Company Triage", d: "For priority portcos, we conduct rapid assessments using existing materials and stakeholder calls to recommend the right engagement type." },
    { t: "Founder Intro & Onboarding", d: "You make warm intros. We handle founder calls, scope alignment, and kickoff — respectful of time, focused on quick wins." },
    { t: "Execution & Reporting", d: "Monthly portfolio summaries, quarterly strategy reviews, and real-time alerts when we spot risks or opportunities." },
    { t: "Scale What Works", d: "As results prove out, we expand across the portfolio using proven playbooks — so each new engagement doesn't start from scratch." },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">How We Work With Your Portfolio</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Seamless integration. Minimal overhead. <em className="italic text-accent">Maximum impact.</em>
          </h2>
        </div>
        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-0 right-0 top-7 border-t-2 border-dashed border-accent/30" />
          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.t} className="relative">
                <div className="h-14 w-14 rounded-full bg-ink text-cream flex items-center justify-center font-display text-xl font-semibold mx-auto md:mx-0 relative z-10 shadow-bold">
                  {i + 1}
                </div>
                <div className="mt-5 rounded-2xl bg-background border border-border p-5">
                  <div className="font-display text-lg font-semibold mb-2">{s.t}</div>
                  <p className="text-sm text-ink/75">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RightFit = () => {
  const items = [
    "Operating partner, platform team member, or growth advisor at a VC or PE firm",
    "Portfolio companies are B2B tech (SaaS, FinTech, MedTech, AI-native, Industrial Tech)",
    "Managing 10–50+ companies across stages",
    "Focused on the U.S. market or supporting international companies expanding into the U.S.",
    "Need scalable marketing support without hand-holding",
    "Want a partner who understands startup economics and PE value creation timelines",
    "Tired of agencies that overpromise and underdeliver",
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Who This Works Best For</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            The right fit for <em className="italic text-accent">your firm</em>.
          </h2>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-background border border-border px-4 py-2 text-sm">
            <Users className="h-4 w-4 text-accent" />
            Built for operating partners
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
    </section>
  );
};

const FAQs = () => {
  const faqs = [
    { q: "Is there discounted pricing for multiple portfolio companies?", a: "Yes. Portfolio-wide pricing is available when we partner with three or more portcos — applies to Revenue Growth Audits, Campaign Engine engagements, and Momentum retainers." },
    { q: "What if founders resist outside help?", a: "Resistance usually fades fast when founders see quick wins in the first 30 days, a team with real operator experience, and your endorsement. We work alongside their team — not above it — and avoid long-term lock-ins or unnecessary upsells." },
    { q: "How much involvement do you need from us?", a: "Minimal. You make the warm intro and provide context. We handle founder relationships, execution, and reporting. 3rd + Taylor is designed to extend your support, not create more work for you." },
    { q: "Can you work with companies at different stages simultaneously?", a: "Absolutely. We have playbooks for every stage. A Seed company might need positioning and a Campaign Engine launch. A Series B might need a full Momentum Team. We approach each stage appropriately." },
    { q: "What if a portfolio company already has marketing talent?", a: "We amplify existing talent, not replace it. We bring specialized expertise (paid media, campaign systems, account-based programs, automation) that most in-house teams don't have at depth." },
    { q: "What's your typical engagement length?", a: "Revenue Growth Audits: 30 days · Campaign Engine: 90 days · Momentum Team: 6-month initial commitment, then month-to-month with 30-day notice." },
    { q: "How do you report results?", a: "Monthly portfolio summaries for in-flight progress and early pipeline indicators. Board-ready decks for deep-dives covering pipeline contribution, marketing-influenced revenue, CAC trends, and conversion metrics." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            <HelpCircle className="h-3.5 w-3.5" /> FAQs
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Answers for <em className="italic text-accent">operating partners</em>.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-cream px-5">
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-ink/80 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            Ready to scale portfolio growth <em className="italic text-warm">without scaling your workload?</em>
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Let's discuss your portfolio — who needs help, what stage they're at, and how we can deliver results without creating more work for you.
          </p>
          <p className="mt-8 text-cream/80">
            Not sure where to start?{" "}
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-1 text-warm font-semibold hover:text-cream transition-colors">
              Try a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <div className="bg-cream rounded-3xl p-6 md:p-8 shadow-bold text-ink">
          <LetsTalkForm source="vc-operating-partners" />
        </div>
      </div>
    </div>
  </section>
);

const VCOperators = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <Reality />
      <BeenInYourShoes />
      <Approach />
      <Stages />
      <Results />
      <ClientMix />
      <HowWeWork />
      <RightFit />
      <FAQs />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default VCOperators;
