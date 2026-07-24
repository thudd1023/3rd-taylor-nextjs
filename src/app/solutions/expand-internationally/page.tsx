"use client";

import Link from "next/link";
import { ArrowRight, Check, Globe2, MapPin, Target, Layers, Compass, Rocket, Sparkles, Plane, TrendingDown, MessageSquareOff, Users, DollarSign, Megaphone, Maximize2 } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";
import Image from "next/image";
import stageFramework from "@/assets/stage-framework.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    {/* Decorative dotted globe arc */}
    <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full border-2 border-dashed border-ink/10" />
    <div className="absolute -right-10 top-20 h-[400px] w-[400px] rounded-full border-2 border-dashed border-ink/10" />
    <div className="container relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Globe2 className="h-3.5 w-3.5" /> Global Growth · U.S. Expansion
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] font-medium text-balance">
            From local wins to <em className="italic text-accent">global growth</em>.
          </h1>
          <p className="mt-6 font-display text-2xl md:text-3xl text-ink/80 leading-tight">
            Let's make the U.S. your next scalable market.
          </p>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We help international B2B tech companies translate their success abroad into predictable revenue in the U.S. — without the missteps that stall most global expansions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/lets-talk" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-all">
              Get a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        {/* Visual: route map card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-ink text-cream p-8 shadow-bold -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-warm font-semibold">
              <span>Boarding Pass</span>
              <Plane className="h-4 w-4 rotate-45" />
            </div>
            <div className="mt-6 grid grid-cols-3 items-center gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-cream/50">From</div>
                <div className="font-display text-3xl font-semibold">EU</div>
                <div className="text-[10px] text-cream/60 mt-1">Local market</div>
              </div>
              <div className="relative">
                <div className="border-t-2 border-dashed border-warm/60" />
                <Plane className="absolute -top-2.5 left-1/2 -translate-x-1/2 h-5 w-5 text-warm rotate-90" />
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-cream/50">To</div>
                <div className="font-display text-3xl font-semibold text-warm">USA</div>
                <div className="text-[10px] text-cream/60 mt-1">Scalable market</div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-2xl bg-cream/5 border border-cream/10 py-3">
                <div className="font-display text-2xl font-semibold text-warm">5</div>
                <div className="text-[10px] uppercase tracking-wider text-cream/60 mt-1">S.T.A.G.E. steps</div>
              </div>
              <div className="rounded-2xl bg-cream/5 border border-cream/10 py-3">
                <div className="font-display text-2xl font-semibold text-warm">1</div>
                <div className="text-[10px] uppercase tracking-wider text-cream/60 mt-1">GTM partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyHere = () => {
  const items = [
    "Attention spans are shorter",
    "Buying teams are bigger",
    "Expectations are sky-high",
    "Buyers prefer to self-educate long before they talk to a salesperson",
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Why Global Expansion Starts Here</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Scaling beyond your home market takes more than translation. It takes <em className="italic text-accent">transformation</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            You have a proven product, loyal customers, and investors ready to see the next phase of growth. The U.S. is the world's most competitive B2B arena.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-cream p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-5">The U.S. B2B Reality</div>
            <ul className="space-y-3">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-ink/85">
                  <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border text-ink/80 italic">
              What works in the UAE, Spain, or the UK doesn't always land in New York or San Francisco.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Challenges = () => {
  const items = [
    { icon: Maximize2, text: "You've maxed out your local market and need a bigger opportunity" },
    { icon: MessageSquareOff, text: "Your messaging doesn't convert — what resonated at home doesn't connect with U.S. buyers" },
    { icon: Users, text: "You've hired local reps, but leads are weak and sales cycles are dragging" },
    { icon: DollarSign, text: "You're spending on marketing, but it's not driving real traction" },
    { icon: Megaphone, text: "You're competing against louder, faster U.S. brands — and losing the spotlight" },
  ];
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">The Challenges Most Teams Hit</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            Even the best companies face friction <em className="italic text-accent">entering a new market</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            If you're expanding into the U.S., you're likely facing one or more of these.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.text} className="rounded-3xl border border-border bg-background p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-cream border border-border flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-ink/85">{it.text}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-10 max-w-3xl text-lg text-ink/80">
          Sound familiar? You're not alone. And you don't need to reinvent your strategy — you need a partner who knows how to <span className="italic text-accent">adapt it</span> for a new stage of growth.
        </p>
      </div>
    </section>
  );
};

const StageFramework = () => {
  const stages = [
    { letter: "S", icon: Compass, title: "Strategy", desc: "Define your ideal U.S. ICPs, regional priorities, and competitive edge." },
    { letter: "T", icon: Target, title: "Targeting", desc: "Segment by region, vertical, and buyer type to reach the right audience." },
    { letter: "A", icon: Layers, title: "Assets", desc: "Adapt your messaging, visuals, and proof points for U.S. decision-makers." },
    { letter: "G", icon: MapPin, title: "Go-to-Market", desc: "Align campaigns, sales motion, and operations around a unified execution plan." },
    { letter: "E", icon: Rocket, title: "Execution", desc: "Launch, test, and optimize with real-time data to accelerate traction." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">How 3rd + Taylor Helps</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
              We're your <em className="italic text-accent">on-the-ground</em> GTM partner.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We help international B2B tech companies scale in the U.S. with clarity, confidence, and measurable traction — aligning strategy, creative, targeting, and automation so your expansion starts driving results from day one.
            </p>
            <p className="mt-6 text-ink/80">
              Our <span className="font-display font-semibold text-accent">S.T.A.G.E.™ Framework</span> guides you from market readiness to measurable revenue.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="S" className="rounded-3xl border border-border bg-cream divide-y divide-border overflow-hidden">
              {stages.map((s) => {
                const Icon = s.icon;
                return (
                  <AccordionItem key={s.letter} value={s.letter} className="border-b-0 px-6">
                    <AccordionTrigger className="hover:no-underline py-5">
                      <div className="flex items-center gap-4 text-left">
                        <div className="h-11 w-11 rounded-xl bg-ink text-cream flex items-center justify-center font-display text-xl font-semibold shrink-0">
                          {s.letter}
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-accent" />
                          <span className="font-display text-lg font-semibold">{s.title}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-15 pb-5 text-ink/80 leading-relaxed">
                      <div className="pl-15 ml-15">
                        <p className="ml-[60px]">{s.desc}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-cream p-4 md:p-8">
          <Image src={stageFramework} alt="The S.T.A.G.E. Framework — Strategy, Targeting, Assets, Go-to-Market, Execution" className="w-full rounded-2xl h-auto" />
        </div>

        <p className="mt-12 text-center font-display text-xl text-ink/75 italic">
          This is how international companies go from <span className="text-accent not-italic font-semibold">"exploring"</span> to <span className="text-accent not-italic font-semibold">"established."</span>
        </p>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const items = [
    "A website, messaging, and campaign system built to compete with the best",
    "Consistent lead flow and faster deal cycles",
    "Marketing, sales, and leadership aligned around a unified U.S. GTM plan",
    "Measurable growth in one of the world's most opportunity-rich markets",
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">The Outcome</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            When your company expands intentionally, results <em className="italic text-accent">compound</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((i) => (
            <div key={i} className="flex items-start gap-4 rounded-3xl border border-border bg-background p-6">
              <div className="h-10 w-10 rounded-full bg-accent text-cream flex items-center justify-center shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <span className="text-ink/85 text-lg">{i}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl font-display text-2xl text-ink/85">
          That's not a dream. That's what happens when you expand with <em className="italic text-accent">clarity, strategy, and the right partner</em> by your side.
        </p>
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
            Ready to <em className="italic text-warm">scale across borders</em>?
          </h2>
          <p className="mt-6 text-cream/70 text-lg max-w-md">
            Let's build and execute your Campaign Engine for U.S. expansion — rooted in data, strategy, and momentum.
          </p>
          <p className="mt-8 text-cream/80">
            Not sure where to start?{" "}
            <Link href="/free-gtm-scan" className="group inline-flex items-center gap-1 text-warm font-semibold hover:text-cream transition-colors">
              Try a Free GTM Scan
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <div className="rounded-3xl bg-cream p-6 md:p-8 text-ink"><LetsTalkForm source="solutions-expand-internationally" /></div>
      </div>
    </div>
  </section>
);

const ExpandInternationally = () => (
  <div className="min-h-screen bg-background text-ink">
    <SiteNav />
    <main>
      <Hero />
      <WhyHere />
      <Challenges />
      <StageFramework />
      <Outcomes />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default ExpandInternationally;
