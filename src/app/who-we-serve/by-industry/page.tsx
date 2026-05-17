"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Cloud, Banknote, Stethoscope, Cpu, Factory, Atom, Building2 } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const INDUSTRIES = [
  { id: "saas", label: "B2B SaaS", icon: Cloud },
  { id: "fintech", label: "B2B FinTech", icon: Banknote },
  { id: "medtech", label: "B2B MedTech", icon: Stethoscope },
  { id: "ai-native", label: "B2B AI-Native Tech", icon: Cpu },
  { id: "industrial", label: "Industrial Tech", icon: Factory },
  { id: "disruptive", label: "Disruptive B2B Tech", icon: Atom },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Building2 className="h-3.5 w-3.5" /> Who We Serve · By Industry
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[4.75rem] leading-[0.95] font-medium text-balance">
            We know your market. <em className="italic text-accent">We know your buyers.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Effective B2B campaigns aren't built on generic templates. They're built on a real understanding of how buyers in your category think, buy, and make decisions.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-cream/70 backdrop-blur border border-ink/10 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-ink/60 mb-3">Jump to your industry</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {INDUSTRIES.map((i) => {
                const I = i.icon;
                return (
                  <a key={i.id} href={`#${i.id}`} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background border border-border text-sm font-semibold hover:bg-ink hover:text-cream transition-colors whitespace-nowrap">
                    <I className="h-4 w-4 shrink-0" />
                    <span>{i.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StickyNav = () => {
  const [active, setActive] = useState(INDUSTRIES[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    INDUSTRIES.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="hidden lg:block sticky top-16 z-40 bg-cream/95 backdrop-blur border-b border-border">
      <div className="container flex items-center gap-2 overflow-x-auto py-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink/50 mr-2 shrink-0">Jump to:</span>
        {INDUSTRIES.map((i) => {
          const I = i.icon;
          const isActive = active === i.id;
          return (
            <a key={i.id} href={`#${i.id}`} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${isActive ? "bg-ink text-cream" : "bg-background text-ink/70 hover:text-ink border border-border"}`}>
              <I className="h-4 w-4" />
              {i.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

type IndustryProps = {
  id: string;
  index: number;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: React.ReactNode;
  intro: string;
  dealing: string[];
  help: string;
  bg: "background" | "secondary" | "cream";
};

const IndustrySection = ({ id, index, badge, icon: Icon, headline, intro, dealing, help, bg }: IndustryProps) => {
  const bgClass = bg === "background" ? "bg-background" : bg === "secondary" ? "bg-secondary" : "bg-cream";
  return (
    <section id={id} className={`py-24 md:py-32 ${bgClass} scroll-mt-32`}>
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-display text-ink/40 text-sm font-semibold">0{index}</span>
              <div className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
                <Icon className="h-3.5 w-3.5" /> {badge}
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">{headline}</h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 rounded-3xl border border-border bg-background p-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">What You're Dealing With</div>
            <ul className="space-y-3">
              {dealing.map((d) => (
                <li key={d} className="flex items-start gap-3 text-ink/85">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 rounded-3xl bg-ink text-cream p-7 flex flex-col">
            <div className="text-xs font-semibold uppercase tracking-widest text-warm mb-4">How We Help</div>
            <p className="text-cream/90 leading-relaxed flex-1">{help}</p>
            <Link href="/campaign-engine#get-started" className="group mt-6 inline-flex items-center gap-2 self-start bg-accent text-cream px-5 py-3 rounded-full font-semibold hover:bg-cream hover:text-ink transition-all">
              Start a Campaign Engine Conversation
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
            <Sparkles className="h-3.5 w-3.5" /> Don't See Your Exact Vertical?
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            If you have a complex sales cycle and a skeptical buyer, <em className="italic text-warm">we can help.</em>
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            We build campaign systems for B2B tech companies who know their industry — and need a marketing partner who does too.
          </p>
          <p className="mt-8 text-cream/80">
            Want a quick read on your GTM?{" "}
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-1 text-warm font-semibold hover:text-cream transition-colors">
              Get a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <LetsTalkForm variant="dark" />
      </div>
    </div>
  </section>
);

const ByIndustry = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <StickyNav />

      <IndustrySection
        id="saas"
        index={1}
        badge="B2B SaaS"
        icon={Cloud}
        bg="background"
        headline={<>Growing SaaS revenue takes more than a great product and a <em className="italic text-accent">capable sales team.</em></>}
        intro="In crowded categories, the companies that win aren't always the best — they're the best understood. Your campaign system has to meet buyers in their journey and move them forward."
        dealing={[
          "Long sales cycles with large, skeptical buying committees",
          "Pressure to improve MRR and reduce CAC while proving marketing ROI",
          "Difficulty standing out in categories where every competitor sounds the same",
          "Marketing and sales disconnected on what 'qualified' actually means",
          "Campaigns that generate traffic and form fills but don't move pipeline",
        ]}
        help="We build Campaign Engine systems designed specifically for SaaS GTM motions — from positioning and messaging architecture, through multi-channel demand generation, to lifecycle nurture that pre-educates buyers before they talk to sales. We know how to market recurring revenue, reduce friction in the evaluation process, and create the kind of pre-educated buyer your sales team actually wants to talk to."
      />

      <IndustrySection
        id="fintech"
        index={2}
        badge="B2B FinTech"
        icon={Banknote}
        bg="secondary"
        headline={<>FinTech buyers are cautious, risk-averse, and <em className="italic text-accent">harder to impress.</em></>}
        intro="In financial services, trust isn't built in a single campaign — it's built over time, with consistent messaging, credible proof, and content that respects how seriously buyers take these decisions."
        dealing={[
          "Procurement cycles measured in quarters, not weeks",
          "Buyers who need compliance, security, and ROI proof before they'll share your content internally",
          "A competitive landscape where everyone claims to be transformational",
          "Deals that stall in the middle of the pipeline with no clear next step",
          "Marketing activity that looks good on paper but isn't moving the deals that matter",
        ]}
        help="We build credibility-first campaign systems that meet FinTech buyers at their stage — whether they're just becoming aware of their problem or evaluating three vendors simultaneously. That means the right message in the right channel, with the right proof, before you ever ask for a conversation."
      />

      <IndustrySection
        id="medtech"
        index={3}
        badge="B2B MedTech"
        icon={Stethoscope}
        bg="background"
        headline={<>Healthcare buyers move slowly — but the right system <em className="italic text-accent">can move them.</em></>}
        intro="Every MedTech sale involves multiple stakeholders, compliance considerations, and a long evaluation cycle where the deal can stall at any point. Your campaign system has to be built for that reality."
        dealing={[
          "Selling to clinical, operational, and financial stakeholders who each need a different message",
          "A sales cycle where deals go quiet after a promising initial conversation",
          "Compliance requirements that constrain your messaging options",
          "A team spending more time justifying marketing spend than generating pipeline",
          "New competitive entrants moving faster than your current GTM can respond to",
        ]}
        help="We design multi-stakeholder campaign systems built around how MedTech buying committees actually make decisions — distinct messaging tracks for each buyer role, nurture infrastructure that keeps deals alive across a long cycle, and sales alignment so your reps always know what a prospect has seen and where they are."
      />

      <IndustrySection
        id="ai-native"
        index={4}
        badge="B2B AI-Native Tech"
        icon={Cpu}
        bg="secondary"
        headline={<>Everyone claims AI. <em className="italic text-accent">You need to prove it means something.</em></>}
        intro={`In a market where "AI-powered" has become a checkbox rather than a differentiator, the winners translate technical capability into clear business value — and get that message in front of the right buyers before the category consolidates.`}
        dealing={[
          "A crowded market where skeptical buyers have seen too many AI promises fall flat",
          "Positioning that's either too technical for business buyers or too vague for technical ones",
          "A fast-moving competitive landscape that requires rapid campaign iteration",
          "Pressure to demonstrate near-term ROI and pipeline traction",
          "Growth that isn't keeping pace with your product roadmap",
        ]}
        help="We help AI-native B2B companies find the positioning that bridges technical differentiation and business outcome — then build demand generation campaigns that move fast enough to match your roadmap. Campaign Engine is live in 45 days."
      />

      <IndustrySection
        id="industrial"
        index={5}
        badge="Industrial Tech"
        icon={Factory}
        bg="background"
        headline={<>Industrial buyers don't need flash. They need to trust <em className="italic text-accent">you understand their world.</em></>}
        intro="Whether you sell data intelligence, IoT infrastructure, supply chain technology, or operational software — industrial buyers are practical, skeptical of hype, and focused entirely on operational impact."
        dealing={[
          "Buyers who are hard to reach through standard digital channels",
          "Long, relationship-driven sales cycles with multiple technical and operational stakeholders",
          "A category often under-marketed relative to the value you actually deliver",
          "Messaging that leads with features and specs instead of operational outcomes",
          "Marketing assets your sales team doesn't use because they don't speak the buyer's language",
        ]}
        help="We build campaign systems that speak the language of industrial buyers — operational ROI, reliability, integration ease, and real-world proof. From precise audience targeting and account-based outreach to content that earns trust before it asks for action, Campaign Engine is built to generate pipeline your sales team can actually close."
      />

      <IndustrySection
        id="disruptive"
        index={6}
        badge="Disruptive B2B Tech"
        icon={Atom}
        bg="secondary"
        headline={<>Disruptive tech demands disruptive marketing — that <em className="italic text-accent">still converts enterprise buyers.</em></>}
        intro="You're operating in a category that moves fast, carries regulatory uncertainty, and requires institutional credibility while maintaining the innovation appeal that makes you worth backing."
        dealing={[
          "Educating buyers about a category they may not fully understand yet",
          "Building trust with enterprise buyers skeptical of emerging tech promises",
          "Messaging that has to work across audiences — from technical architects to C-suite buyers",
          "Regulatory sensitivities that constrain what you can say and how you say it",
          "Competing against traditional incumbents who are slower but better-resourced",
        ]}
        help="We build GTM campaign systems that bridge innovation and enterprise credibility — helping disruptive B2B companies establish trust with skeptical buyers, educate at scale, and generate real pipeline from the accounts that matter most."
      />

      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default ByIndustry;
