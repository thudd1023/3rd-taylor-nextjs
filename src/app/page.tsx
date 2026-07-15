"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Plus, Minus, Sparkles, Target, Zap, Users, TrendingUp, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HubSpotLetsTalkForm from "@/components/HubSpotLetsTalkForm";
import warmTlcOverview from "@/assets/warm-tlc-overview.png";
import { Reveal, RevealGroup, fadeUp, scaleIn } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { CountUp } from "@/components/motion/CountUp";
import { ScrollCardStack } from "@/components/motion/ScrollCardStack";

const maskReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } },
};

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cardYFast = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const cardYSlow = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-gradient-sunset grain">
      <div className="container relative pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.div className="max-w-5xl" initial="hidden" animate="visible" variants={heroStagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            For Lean B2B Marketing Teams
          </motion.div>
          <motion.h1 variants={maskReveal} className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-medium text-balance">
            Transition from campaign <em className="italic text-accent">chaos</em> to consistent <span className="relative inline-block">
              <span className="relative z-10">conversions</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                <path d="M2 8 Q 75 2, 150 6 T 298 4" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            When lean B2B marketing teams need pipeline — not just more tactics — we design and launch end-to-end, multi-touch campaigns that move buyers from first touch to hand-raiser.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#engine" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all">
                Explore Campaign Engine <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <Link href="/free-gtm-scan" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-all">
                Get a Free GTM Scan <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>
        <motion.div style={{ y: cardYFast }} className="hidden lg:block absolute right-8 top-32 w-64">
          <div className="rotate-6 bg-cream rounded-2xl shadow-soft p-5 border border-border animate-float-in-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Result</div>
            <div className="font-display text-3xl font-semibold leading-tight">426% ↑</div>
            <div className="text-sm text-muted-foreground mt-1">qualified demos booked in 30 days</div>
          </div>
        </motion.div>
        <motion.div style={{ y: cardYSlow }} className="hidden lg:block absolute right-32 bottom-12 w-56">
          <div className="-rotate-3 bg-ink text-cream rounded-2xl shadow-soft p-5 animate-float-in-2 hover:rotate-0 transition-transform duration-300">
            <div className="text-xs font-semibold uppercase tracking-wider text-warm mb-2">Result</div>
            <div className="font-display text-3xl font-semibold leading-tight">$15M</div>
            <div className="text-sm text-cream/70 mt-1">marketing-sourced revenue</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LogoBar = () => {
  const logos = ["LogiAnalytics", "Knowland", "VTS", "Global Payments", "Harland Clarke", "AxyomCore"];
  return (
    <section className="border-y border-border bg-cream py-10 overflow-hidden">
      <div className="container">
        <p className="text-center font-display text-2xl md:text-3xl font-medium text-ink mb-8 text-balance max-w-3xl mx-auto">
          Our marketers have driven results for some of the world's <em className="italic text-accent">leading B2B brands</em>.
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee shrink-0 gap-16 pr-16">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="font-display text-2xl md:text-3xl font-semibold text-ink/40 hover:text-ink transition-colors whitespace-nowrap">{logo}</div>
          ))}
        </div>
        <div className="flex animate-marquee shrink-0 gap-16 pr-16">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="font-display text-2xl md:text-3xl font-semibold text-ink/40 whitespace-nowrap">{logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RealProblem = () => {
  const pains = [
    "Ads run without a clear buyer journey behind them",
    "Pipeline feels unpredictable — you're not sure where the next opportunity will come from",
    "Every month brings new pressure to hit targets with no clear path forward",
    "You're constantly pivoting and second-guessing what to do next",
    "Leads come in but sales doesn't trust them",
    "Your team is buried in execution with no time to think strategically",
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-5xl">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">The Real Problem</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] font-medium text-balance">
            Most marketing teams aren't struggling because they're not doing enough.
          </h2>
          <p className="mt-6 font-display text-2xl md:text-3xl italic text-muted-foreground">They're struggling because nothing is connected.</p>
        </Reveal>
        <RevealGroup className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-3">
          {pains.map((pain, i) => (
            <motion.div key={i} variants={fadeUp} className="flex gap-3 py-3 border-b border-border/60">
              <span className="text-accent font-bold mt-0.5">✕</span>
              <span className="text-foreground/90">{pain}</span>
            </motion.div>
          ))}
        </RevealGroup>
        <Reveal delay={0.1}>
          <p className="mt-12 font-display text-2xl md:text-3xl font-medium text-balance max-w-3xl">
            This is what happens when everything is running but nothing is working <em className="text-accent not-italic">together</em>.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

const campaignParts = [
  { title: "A clear messaging arc", desc: "Every touch point builds on the last, guiding buyers from first curiosity to full conviction." },
  { title: "Intentional sequencing across channels", desc: "Paid, email, and content don't compete for attention — they hand the story off to each other at exactly the right moment." },
  { title: "The right mix of paid, content, and nurture", desc: "No single channel carries the whole campaign. We balance reach, education, and follow-up so nothing falls flat." },
  { title: "Someone to connect it all together", desc: "A dedicated team keeps every piece moving in sync, so nothing slips between the cracks." },
];

const Reframe = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <div className="container max-w-4xl text-center">
      <Reveal>
        <h2 className="font-display text-4xl md:text-6xl font-medium text-balance">What's a campaign, <em className="italic text-accent">anyway?</em></h2>
        <div className="mt-10 space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p>Most B2B teams think of a campaign as a single push — a set of ads, an email blast, a one-off announcement.</p>
          <p className="font-display text-2xl md:text-3xl text-ink italic">But that's not how buyers actually buy.</p>
          <p>They research, revisit, and self-educate across multiple channels before they ever talk to sales. The buying journey isn't a straight line — it's a rollercoaster of decisions, detours, and discoveries.</p>
        </div>
      </Reveal>
      <div className="mt-16 bg-ink text-cream rounded-3xl text-left shadow-bold">
        <Reveal delay={0.15} className="p-10 md:p-14 pb-0 md:pb-0">
          <p className="font-display text-3xl md:text-4xl font-medium text-balance">
            A campaign isn't a tactic. <span className="text-warm">It's a complete system that moves buyers forward.</span>
          </p>
        </Reveal>
        <div className="px-10 md:px-14">
          <ScrollCardStack items={campaignParts} />
        </div>
        <Reveal className="p-10 md:p-14 pt-0 md:pt-0">
          <p className="text-cream/70">That's where most teams get stuck. And that's exactly what we fix.</p>
        </Reveal>
      </div>
    </div>
  </section>
);

const Engine = () => {
  const tiles = [
    { icon: Target, title: "Campaign Strategy", desc: "We dig into your market, audience, and competitors to craft positioning that cuts through noise and owns space in your buyers' minds." },
    { icon: Sparkles, title: "Messaging & Creative", desc: "Bold copy, sharp creative direction, and cohesive campaign identities that turn scrollers into believers." },
    { icon: Zap, title: "Paid Media", desc: "Performance campaigns across LinkedIn, Google, and beyond — built to drive measurable pipeline, not vanity metrics." },
    { icon: Layers, title: "Nurture & Automation", desc: "Sequences that keep buyers engaged long after the first click — and hand warm, pre-educated leads to sales with full context." },
  ];
  return (
    <section id="engine" className="py-24 md:py-32 bg-background">
      <div className="container">
        <Reveal className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Introducing Campaign Engine</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-balance leading-[1.05]">
            A structured campaign system — developed, built, and <em className="italic text-accent">launched for you</em>.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">Designed to meet buyers where they are, so when someone raises their hand, they're already halfway to yes.</p>
          <div className="mt-8 inline-flex items-center gap-2 bg-warm/20 border border-warm/40 text-ink px-5 py-2.5 rounded-full font-semibold text-sm">
            <Sparkles className="h-4 w-4" /> Go live in 45 days. Then refine, optimize, and scale.
          </div>
        </Reveal>
        <RevealGroup className="mt-16 grid md:grid-cols-2 gap-6">
          {tiles.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} variants={scaleIn} className="group relative bg-cream border border-border rounded-3xl p-8 hover:border-accent transition-all hover:-translate-y-1 shadow-soft">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-ink text-cream flex items-center justify-center group-hover:bg-accent transition-colors"><Icon className="h-5 w-5" /></div>
                <span className="font-display text-3xl text-muted-foreground/30">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </RevealGroup>
        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Magnetic>
            <a href="#packages" className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold hover:bg-accent transition-colors group">
              Explore Campaign Engine <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
};

const Method = () => {
  const steps = [
    { letter: "W", word: "Warm the market", desc: "Build familiarity before asking for action" },
    { letter: "T", word: "Drive intentional Traffic", desc: "Attract the right buyers, not just more clicks" },
    { letter: "L", word: "Build qualified Leads", desc: "Turn engagement into real buying signals" },
    { letter: "C", word: "Convert with Context", desc: "No more cold form fills — sales gets warm, informed conversations" },
  ];
  return (
    <section id="method" className="py-24 md:py-32 bg-ink text-cream relative overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-warm/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container relative max-w-5xl">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-balance leading-[1.05]">
            Built on the <span className="italic text-warm">Warm T.L.C.</span><sup className="text-warm text-2xl">™</sup> Method
          </h2>
          <p className="mt-6 text-lg md:text-xl text-cream/70 max-w-2xl">Every Campaign Engine follows a proven system designed to move buyers from cold to sales-ready.</p>
          <Image src={warmTlcOverview} alt="Warm T.L.C. — From cold audience to sales-ready pipeline" className="mt-12 w-full max-w-4xl mx-auto rounded-3xl shadow-bold" />
        </Reveal>
        <div className="mt-16 space-y-px">
          {steps.map((step, i) => (
            <motion.div
              key={step.letter}
              initial="rest"
              whileInView="active"
              viewport={{ amount: 0.6 }}
              variants={{
                rest: { opacity: 0.5, scale: 1 },
                active: { opacity: 1, scale: 1.02, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-8 border-t border-cream/15 hover:bg-cream/5 transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="font-display text-7xl md:text-9xl font-medium text-warm leading-none w-16 md:w-28 text-center">{step.letter}</div>
              <div>
                <h3 className="font-display text-2xl md:text-4xl font-medium">{step.word}</h3>
                <p className="mt-2 text-cream/60 md:text-lg">{step.desc}</p>
              </div>
              <div className="text-cream/30 font-mono text-sm hidden md:block">0{i + 1}</div>
            </motion.div>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Magnetic>
            <Link href="/campaign-engine" className="mt-12 inline-flex items-center gap-2 bg-warm text-ink px-7 py-4 rounded-full font-semibold hover:bg-cream transition-colors group">
              See How Campaign Engine Works <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const outcomes = [
    { icon: TrendingUp, title: "Stronger Pipeline Quality", desc: "No more vanity metrics. We help you attract and convert the right buyers through better targeting, clearer messaging, and campaigns built to qualify — not just capture." },
    { icon: Zap, title: "Shorter Sales Cycles", desc: "We pre-educate buyers before they ever speak to sales. Conversations start further along and move faster." },
    { icon: Users, title: "Better Alignment Across Teams", desc: "We connect marketing, sales, and leadership around a unified GTM motion so everything works together." },
    { icon: Target, title: "More Effective Campaigns", desc: "We build campaigns around real buyer behavior, then continuously refine what's working." },
    { icon: Sparkles, title: "Measurable Revenue Impact", desc: "We track what actually drives growth — pipeline contribution, conversion lift, and revenue outcomes." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="outcomes" className="py-24 md:py-32 bg-background">
      <div className="container max-w-5xl">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-balance leading-[1.05] max-w-4xl">
            We meet you where you are and take you <em className="italic text-accent">where you're ready to go</em>.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">Whether you're building your GTM function or trying to fix what's not working, we focus on outcomes that move your business forward — not just more activity.</p>
        </Reveal>
        <RevealGroup className="mt-12 space-y-3">
          {outcomes.map((o, i) => {
            const isOpen = open === i;
            const Icon = o.icon;
            return (
              <motion.button key={i} variants={fadeUp} onClick={() => setOpen(isOpen ? -1 : i)} className={`w-full text-left bg-cream border-2 ${isOpen ? "border-accent" : "border-border"} rounded-2xl p-6 md:p-8 transition-all`}>
                <div className="flex items-center gap-5">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors ${isOpen ? "bg-accent text-accent-foreground" : "bg-secondary text-ink"}`}><Icon className="h-5 w-5" /></div>
                  <h3 className="flex-1 font-display text-xl md:text-2xl font-semibold">{o.title}</h3>
                  {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
                <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground md:text-lg leading-relaxed pl-17 md:pl-[68px]">{o.desc}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
};

const Packages = () => {
  const pkgs = [
    { name: "Launch", desc: "We build and launch a complete multi-channel campaign system in 45 days.", bestFor: ["new initiatives", "product launches", "teams needing execution momentum fast"], cta: "Explore Launch", featured: false },
    { name: "Growth System", desc: "Launch your campaign — then continuously optimize and refine performance based on real buyer engagement and pipeline signals.", bestFor: ["predictable pipeline growth", "lean teams needing optimization support", "companies wanting ongoing strategic refinement"], cta: "See How Growth System Works", featured: true },
    { name: "Multi-Campaign", desc: "Built for companies managing multiple audiences, offers, products, or go-to-market motions simultaneously.", bestFor: ["multi-product companies", "expansion initiatives", "more advanced GTM coordination"], cta: "Explore Multi-Campaign Systems", featured: false },
  ];
  return (
    <section id="packages" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <Reveal className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Campaign Engine Packages</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-balance leading-[1.05]">Choose the level of campaign <em className="italic text-accent">momentum</em> you need.</h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">Whether you need a campaign launched fast, optimized for growth, or scaled across multiple audiences and offers — we'll help you build a system that drives pipeline, not just activity.</p>
        </Reveal>
        <RevealGroup className="mt-16 grid md:grid-cols-3 gap-6 items-start">
          {pkgs.map((p) => (
            <motion.div key={p.name} variants={scaleIn} className={`relative rounded-3xl p-8 md:p-10 flex flex-col h-full ${p.featured ? "bg-ink text-cream md:scale-105 md:-mt-4 shadow-bold" : "bg-cream border border-border"}`}>
              {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warm text-ink px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">⭐ Most Popular</div>}
              <h3 className="font-display text-3xl font-semibold">{p.name}</h3>
              <p className={`mt-4 ${p.featured ? "text-cream/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className={`mt-6 text-xs font-semibold uppercase tracking-wider ${p.featured ? "text-warm" : "text-accent"}`}>Best for</div>
              <ul className="mt-3 space-y-2 flex-1">
                {p.bestFor.map(b => (
                  <li key={b} className="flex gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-warm" : "text-accent"}`} /><span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/campaign-engine" className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all ${p.featured ? "bg-warm text-ink hover:bg-cream" : "bg-ink text-cream hover:bg-accent"}`}>
                {p.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

const Results = () => {
  const stats = [
    { value: "4x", label: "ROAS for a B2B AdTech company" },
    { value: "426%", label: "increase in qualified demos booked in 30 days" },
    { value: "$16K", label: "reduction in wasted Google Ad spend in 14 days" },
    { value: "$15M", label: "in marketing-sourced revenue for a MarTech company" },
  ];
  return (
    <section id="results" className="py-24 md:py-32 bg-background">
      <div className="container">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-balance leading-[1.05] max-w-4xl">Your partner for <em className="italic text-accent">revenue-rising</em> results.</h2>
        </Reveal>
        <RevealGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <motion.div key={i} variants={scaleIn} className="bg-cream p-8 md:p-10 hover:bg-secondary transition-colors">
              <div className="font-display text-6xl md:text-7xl font-medium text-accent leading-none"><CountUp value={s.value} /></div>
              <p className="mt-4 text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="cta" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden grain">
    <div className="container relative grid md:grid-cols-2 gap-12 items-start">
      <Reveal>
        <h2 className="font-display text-4xl md:text-6xl font-medium text-balance leading-[1.05] text-ink">Ready to kick off your <em className="italic">Campaign Engine?</em></h2>
        <p className="mt-6 text-lg md:text-xl text-ink/80 max-w-lg">Stop piecing together tactics and start running a system built to generate real pipeline.</p>
        <p className="mt-8 text-ink/70 text-sm">Not sure where to start? <Link href="/free-gtm-scan" className="font-semibold underline underline-offset-4 hover:text-cream">Try a Free GTM Scan →</Link></p>
      </Reveal>
      <Reveal delay={0.15} className="bg-cream rounded-3xl p-6 md:p-8 shadow-bold">
        <HubSpotLetsTalkForm />
      </Reveal>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Do you just strategize or also execute?", a: "We design the system and operate it — so you don't manage multiple vendors." },
    { q: "Is this just paid media?", a: "No. Paid is one component of a coordinated campaign system that includes messaging, nurture sequences, and marketing-to-sales alignment. Everything works together." },
    { q: "Do we need expensive ABM software?", a: "If you already have tools, we'll use them. If not, we include what's needed to run targeted campaigns without unnecessary cost." },
    { q: "Is this for companies with no pipeline?", a: "We work with B2B companies that have product-market fit and want to kickstart or make pipeline more predictable." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-balance text-center">Questions? <em className="italic text-accent">We've got you.</em></h2>
        </Reveal>
        <RevealGroup className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i} variants={fadeUp} className={`border-2 rounded-2xl transition-all ${isOpen ? "border-accent bg-cream" : "border-border bg-cream"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-display text-lg md:text-xl font-semibold pr-4">{f.q}</span>
                  {isOpen ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
                </button>
                <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <LogoBar />
      <RealProblem />
      <Reframe />
      <Engine />
      <Method />
      <Outcomes />
      <Packages />
      <Results />
      <FinalCTA />
      <FAQ />
      <SiteFooter />
    </main>
  );
}
