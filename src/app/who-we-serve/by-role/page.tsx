"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Check, X, Crown, Megaphone, Target, Sparkles, Briefcase, Compass, Layers, Users, Zap, TrendingUp, AlertCircle } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const ROLES = [
  { id: "ceos", label: "CEOs & Founders", icon: Crown },
  { id: "marketing", label: "Marketing Leaders", icon: Megaphone },
  { id: "sales", label: "Sales Leaders", icon: Target },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Users className="h-3.5 w-3.5" /> Who We Serve · By Role
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[4.75rem] leading-[0.95] font-medium text-balance">
            Built for B2B leaders <em className="italic text-accent">accountable for growth</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you're the CEO charting the course, the marketer executing the vision, or the sales leader closing deals — we speak your language and solve your specific challenges.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#ceos" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
              Find Your Role Below
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-2 border-2 border-ink text-ink px-7 py-4 rounded-full font-semibold hover:bg-ink hover:text-cream transition-all">
              Get a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Three-role visual */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 gap-3">
            {ROLES.map((r, i) => {
              const I = r.icon;
              return (
                <a
                  key={r.id}
                  href={`#${r.id}`}
                  className="group flex items-center gap-4 rounded-2xl bg-cream/70 backdrop-blur border border-ink/10 px-5 py-4 hover:bg-ink hover:text-cream transition-all"
                  style={{ marginLeft: `${i * 12}px` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-ink text-cream group-hover:bg-accent flex items-center justify-center shrink-0 transition-colors">
                    <I className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-lg font-semibold">{r.label}</div>
                    <div className="text-xs text-ink/60 group-hover:text-cream/70 uppercase tracking-widest">Jump to section</div>
                  </div>
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StickyNav = () => {
  const [active, setActive] = useState("ceos");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ROLES.forEach((r) => {
      const el = document.getElementById(r.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sticky top-16 z-40 bg-cream/95 backdrop-blur border-b border-border">
      <div className="container flex items-center gap-2 overflow-x-auto py-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink/50 mr-2 shrink-0">Jump to:</span>
        {ROLES.map((r) => {
          const I = r.icon;
          const isActive = active === r.id;
          return (
            <a
              key={r.id}
              href={`#${r.id}`}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                isActive ? "bg-ink text-cream" : "bg-background text-ink/70 hover:text-ink border border-border"
              }`}
            >
              <I className="h-4 w-4" />
              {r.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

type RoleSectionProps = {
  id: string;
  index: number;
  badge: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  headline: React.ReactNode;
  subhead: string;
  reality: { intro: string; bullets: string[]; truth: string };
  helps: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string; cta?: { label: string; to: string } }[];
  bestFor: { title: string; items: string[] };
  notUs: string[];
  cta: { headline: string; copy: string };
  bg: "background" | "secondary" | "cream";
};

const RoleSection = ({ id, index, badge, badgeIcon: BadgeIcon, headline, subhead, reality, helps, bestFor, notUs, cta, bg }: RoleSectionProps) => {
  const bgClass = bg === "background" ? "bg-background" : bg === "secondary" ? "bg-secondary" : "bg-cream";
  return (
    <section id={id} className={`py-24 md:py-32 ${bgClass} scroll-mt-32`}>
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-display text-ink/40 text-sm font-semibold">0{index}</span>
              <div className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
                <BadgeIcon className="h-3.5 w-3.5" /> {badge}
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">{headline}</h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-muted-foreground leading-relaxed">{subhead}</p>
          </div>
        </div>

        {/* Reality */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <AlertCircle className="h-3.5 w-3.5" /> The Reality You're Living
            </div>
            <p className="text-ink/85 text-lg leading-relaxed">{reality.intro}</p>
          </div>
          <div className="lg:col-span-7 space-y-3">
            {reality.bullets.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-background px-5 py-3.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-ink/85">{b}</span>
              </div>
            ))}
            <div className="rounded-2xl bg-ink text-cream p-5 mt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-warm mb-1">Here's the truth</div>
              <p className="text-cream/90">{reality.truth}</p>
            </div>
          </div>
        </div>

        {/* How we help */}
        <div className="mb-20">
          <h3 className="font-display text-3xl md:text-4xl font-medium mb-10">
            How we help <em className="italic text-accent">{badge.toLowerCase()}</em> win.
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {helps.map((h, i) => {
              const I = h.icon;
              return (
                <div key={h.title} className="rounded-3xl border border-border bg-background p-7 group hover:border-accent/40 transition-colors flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-accent text-cream flex items-center justify-center group-hover:scale-105 transition-transform">
                      <I className="h-5 w-5" />
                    </div>
                    <span className="font-display text-ink/40 text-xs font-semibold">0{i + 1}</span>
                  </div>
                  <h4 className="font-display text-xl font-semibold mb-2 leading-snug">{h.title}</h4>
                  <p className="text-ink/80 leading-relaxed flex-1">{h.desc}</p>
                  {h.cta && (
                    <Link href={h.cta.to} className="group/cta mt-4 inline-flex items-center gap-1 text-accent font-semibold hover:text-ink transition-colors text-sm">
                      {h.cta.label}
                      <ArrowRight className="h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Best for + Not us */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-3xl bg-background border border-border p-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">{bestFor.title}</div>
            <ul className="space-y-3">
              {bestFor.items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-ink/85">
                  <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-ink text-cream p-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-4">Real Talk: What We're Not</div>
            <ul className="space-y-3">
              {notUs.map((i) => (
                <li key={i} className="flex items-start gap-3 text-cream/85">
                  <X className="h-5 w-5 text-warm mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inline CTA */}
        <div className="rounded-3xl bg-cream border border-border p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <h4 className="font-display text-2xl md:text-3xl font-medium leading-snug">{cta.headline}</h4>
            <p className="mt-3 text-ink/75">{cta.copy}</p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="#get-started" className="group inline-flex items-center gap-2 bg-ink text-cream px-6 py-3.5 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
              Let's Talk
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
            Not sure which path is right? <em className="italic text-warm">Let's figure it out together.</em>
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Whether you need a diagnostic, a focused campaign build, or a full team — we'll help you find the fastest path to predictable growth.
          </p>
          <p className="mt-8 text-cream/80">
            Not sure where to start?{" "}
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-1 text-warm font-semibold hover:text-cream transition-colors">
              Try a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <LetsTalkForm variant="dark" />
      </div>
    </div>
  </section>
);

const ByRole = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <StickyNav />

      <RoleSection
        id="ceos"
        index={1}
        badge="CEOs & Founders"
        badgeIcon={Crown}
        bg="background"
        headline={<>Stop guessing. <em className="italic text-accent">Start growing.</em></>}
        subhead="You didn't build a great product just to watch marketing become your biggest bottleneck."
        reality={{
          intro: "You're juggling fundraising, product roadmap, hiring, and investor updates. Marketing was supposed to be 'figured out by now.' But instead:",
          bullets: [
            "Your marketing hire is buried in execution with no clear strategy",
            "Your team is doing 'all the things' — but pipeline is still unpredictable",
            "Sales keeps saying the leads aren't good enough (and they might be right)",
            "You're not sure if the problem is positioning, targeting, or follow-through",
            "Board meetings are coming and you need to show pipeline momentum",
            "You've tried agencies before — they overpromised and underdelivered",
          ],
          truth: "You don't need more tactics. You need a system that works — and a partner who can diagnose what's broken, fix it fast, and scale it predictably.",
        }}
        helps={[
          { icon: Compass, title: "Clarity When Things Feel Stuck", desc: "Our Revenue Growth Audit uncovers the real blockers — messaging, funnel performance, tech, or team alignment — and delivers a 90-day roadmap you can actually execute.", cta: { label: "Learn About the Audit", to: "/revenue-growth-audit" } },
          { icon: Zap, title: "Focused Campaigns That Move the Needle", desc: "Campaign Engine is our flagship. A complete system — designed, built, launched, and optimized in 90 days. Not another agency retainer. A real campaign engine.", cta: { label: "Explore Campaign Engine", to: "/campaign-engine" } },
          { icon: Layers, title: "Strategic Execution Without the Hiring Drama", desc: "Need a full marketing function without a 6-month hiring process? Our Momentum Team plugs in as your complete marketing department — strategy, creative, paid media, automation, and analytics.", cta: { label: "See the Momentum Team", to: "/campaign-engine" } },
          { icon: TrendingUp, title: "Preparing for Your Next Funding Round", desc: "Investors want proof of traction. We help you build the pipeline story, clean up your metrics, and demonstrate repeatable GTM momentum that makes your pitch undeniable.", cta: { label: "Get a Free GTM Scan", to: "/free-gtm-scan" } },
        ]}
        bestFor={{
          title: "This Works Best If",
          items: [
            "You're a funded founder (Seed through Series C) or bootstrapped CEO ready to scale",
            "You have a marketing team, but they're buried in tactics that aren't moving the needle",
            "You're tired of 'marketing theater' and want results tied to revenue",
            "You need strategic guidance but can't afford (or don't need) a $300K CMO yet",
            "You've tried other agencies and felt like just another account number",
          ],
        }}
        notUs={[
          "We won't pitch you a 12-month retainer on day one",
          "We won't build a brand refresh that doesn't drive pipeline",
          "We won't bury you in dashboards that don't connect to revenue",
          "We won't disappear after the contract is signed",
        ]}
        cta={{
          headline: "Ready to stop playing whack-a-mole with your marketing?",
          copy: "Let's figure out what's actually holding your revenue back — and build a plan to fix it.",
        }}
      />

      <RoleSection
        id="marketing"
        index={2}
        badge="Marketing Leaders"
        badgeIcon={Megaphone}
        bg="secondary"
        headline={<>Finally, backup that <em className="italic text-accent">gets it</em>.</>}
        subhead="You're doing the work of three people and still getting asked why pipeline isn't growing faster."
        reality={{
          intro: "You're the first or only marketing hire — or leading a small team where everyone's maxed out. Either way:",
          bullets: [
            "You're drowning in execution with no time to think strategically",
            "Your CEO wants 'more pipeline' but won't approve headcount",
            "Sales keeps blaming marketing for lead quality",
            "You're managing too many tools, too many vendors, and not enough hours",
            "Every week brings a new 'urgent priority' that blows up your actual plan",
          ],
          truth: "What you actually need: a partner who doesn't just 'take direction' — but brings strategy, owns execution, and makes you look like the rockstar you are.",
        }}
        helps={[
          { icon: Compass, title: "Diagnostic Clarity When You Need Proof", desc: "Our Revenue Growth Audit gives you the data, insights, and roadmap to show leadership exactly what needs to change — and get buy-in to do it.", cta: { label: "Learn About the Audit", to: "/revenue-growth-audit" } },
          { icon: Target, title: "Specialized Skills Your Team Doesn't Have (Yet)", desc: "Need ABM expertise? Paid media that doesn't waste budget? A campaign system that actually generates pipeline? Tap into our specialists through Campaign Engine — without the hiring fire drill.", cta: { label: "Explore Campaign Engine", to: "/campaign-engine" } },
          { icon: Layers, title: "Execution Firepower Without the Hiring Headache", desc: "Your CEO approved budget for 'marketing' but not five new hires. Our Momentum Team becomes your extended marketing department at a fraction of the cost of full-time hires.", cta: { label: "See the Momentum Team", to: "/campaign-engine" } },
          { icon: Sparkles, title: "Strategic Thinking, Not Just Task Completion", desc: "We don't just 'do what you say.' We challenge assumptions, recommend smart approaches, and help you make the clearest decisions — so you can lead, not just manage." },
        ]}
        bestFor={{
          title: "Who This Works Best For",
          items: [
            "Solo marketer or small team at a growth-stage B2B company",
            "Need expertise and execution but headcount is frozen",
            "Tired of agencies that need hand-holding or don't understand B2B sales cycles",
            "Want a partner who thinks strategically and executes reliably",
            "Ready to stop being reactive and start building something predictable",
          ],
        }}
        notUs={[
          "An agency that makes big promises and delivers mediocre results",
          "Passive executors waiting for direction",
          "Obsessed with vanity metrics like ebook downloads",
          "We care about moving leads from awareness to closed deals",
        ]}
        cta={{
          headline: "Stop flying solo. Let's build your marketing dream team.",
          copy: "Whether you need ongoing support or a focused sprint to solve a specific problem, let's talk.",
        }}
      />

      <RoleSection
        id="sales"
        index={3}
        badge="Sales Leaders"
        badgeIcon={Target}
        bg="background"
        headline={<>Better leads. Faster deals. <em className="italic text-accent">Fewer excuses.</em></>}
        subhead="Great reps need great opportunities — and the systems to convert them. We help you get both."
        reality={{
          intro: "Your team is great at closing — when they get real opportunities. But lately:",
          bullets: [
            "Marketing's 'MQLs' feel like cold contacts who aren't ready to talk",
            "There's no clear definition of what makes a lead 'sales-ready'",
            "Follow-up is manual, slow, and inconsistent",
            "Deals are taking longer to close or stalling completely",
            "You're spending more time chasing pipeline than coaching your team",
          ],
          truth: "It's not a sales problem. It's a marketing-to-sales handoff problem. And when that's broken, everyone loses.",
        }}
        helps={[
          { icon: Zap, title: "Leads That Are Actually Sales-Ready", desc: "Campaign Engine systems warm buyers across their journey so when someone requests a demo, they already understand the problem, believe your approach, and are halfway to yes.", cta: { label: "Explore Campaign Engine", to: "/campaign-engine" } },
          { icon: Target, title: "ABM That Targets the Right People", desc: "We build account-based programs that reach the right contacts within target accounts — based on early signals that actually predict buying need, not just TAM coverage and vanity logos.", cta: { label: "Explore ABM Layer", to: "/solutions/abm" } },
          { icon: Briefcase, title: "Smarter Prospecting & Faster Follow-Up", desc: "Your reps shouldn't spend half their day on manual outreach. Personalized Outbound at Scale automates coordinated, personalized outbound that keeps deals moving.", cta: { label: "See Personalized Outbound", to: "/solutions/outbound" } },
          { icon: Users, title: "Alignment Between Sales and Marketing (Finally)", desc: "Leads fall through the cracks when both teams aren't operating from the same playbook. We align definitions, scoring, handoff processes, and shared KPIs so both teams win together." },
        ]}
        bestFor={{
          title: "What You Get Working With Us",
          items: [
            "Pre-educated leads with real buying context — not cold contacts",
            "Clear handoff processes that eliminate 'is this one ready?' confusion",
            "Sales enablement assets that help reps close faster",
            "A marketing partner who measures success by closed deals — just like you",
          ],
        }}
        notUs={[
          "A vendor who'll dump unqualified leads on your reps and call it 'pipeline'",
          "An agency that ignores sales feedback after launch",
          "Tactic-of-the-month chasers with no system behind it",
          "Disconnected from your CRM, your reps, and your reality",
        ]}
        cta={{
          headline: "Give your reps the conversations they actually deserve.",
          copy: "Let's align marketing and sales so closed deals — not MQLs — become the shared scoreboard.",
        }}
      />

      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default ByRole;
