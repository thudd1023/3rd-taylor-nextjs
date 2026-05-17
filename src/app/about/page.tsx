"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Target, Eye, Trophy, HeartHandshake, UserCheck, ShieldCheck, MessageCircle, TrendingUp, Users } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import tiffanyHeadshot from "@/assets/tiffany-nwahiri.jpeg";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <Sparkles className="h-3.5 w-3.5" /> Our Story
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] font-medium text-balance">
          We're <em className="italic text-accent">3rd + Taylor</em>.
        </h1>
        <p className="mt-8 max-w-3xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
          A B2B marketing agency built by operators who've been on <span className="text-ink font-semibold">your side of the table</span> — and decided to do something about it.
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

const MissionVision = () => (
  <section className="py-24 md:py-32 bg-cream border-y border-border">
    <div className="container grid md:grid-cols-2 gap-8">
      <div className="rounded-3xl bg-background border border-border p-8 md:p-10">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Target className="h-5 w-5" />
        </div>
        <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">Our Mission</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium leading-tight text-balance">
          Take the maze out of <em className="italic text-accent">revenue growth</em>.
        </h2>
        <div className="mt-5 space-y-4 text-ink/75 leading-relaxed">
          <p>We believe CEOs, marketing leaders, and sales teams shouldn't lose sleep trying to figure out which marketing lever to pull. We're here to make pipeline predictable, execution connected, and results undeniable — for the B2B tech companies building the next generation of the economy.</p>
          <p>We do this by designing and launching campaign systems that move buyers from first touch to sales-ready — not just generating activity that looks good on a dashboard.</p>
        </div>
      </div>
      <div className="rounded-3xl bg-ink text-cream p-8 md:p-10">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-warm/20 text-warm">
          <Eye className="h-5 w-5" />
        </div>
        <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-warm">Our Vision</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium leading-tight text-balance">
          Strategic execution for <em className="italic text-warm">every lean team</em>.
        </h2>
        <div className="mt-5 space-y-4 text-cream/80 leading-relaxed">
          <p>We're building toward a future where lean B2B marketing teams have the same access to strategic execution that enterprise companies take for granted.</p>
          <p>Where every campaign is built as a connected system — not a collection of disconnected tactics. Where marketing and sales move as one. Where growth is predictable, not a quarterly gamble. And where agencies are partners you want to call — not vendors you manage.</p>
          <p>As we grow, we're actively expanding our network of specialized agencies and partners to extend our capabilities across verticals, geographies, and disciplines. Because the future of marketing is collaborative — and no single team can do it all alone.</p>
        </div>
      </div>
    </div>
  </section>
);

const Values = () => {
  const values = [
    { icon: Trophy, title: "Won Deals Over Vanity Metrics", desc: "We optimize for closed revenue, not impressive-looking reports. MQLs don't pay salaries. Closed deals do." },
    { icon: HeartHandshake, title: "Human-to-Human, Always", desc: "Buyers are people first. We build campaigns that treat them like it — with messaging that connects before it converts." },
    { icon: UserCheck, title: "Specialists, Not Generalists", desc: "Every person on your engagement is an expert in their discipline. No account managers dabbling in everything." },
    { icon: ShieldCheck, title: "Privacy-First by Default", desc: "Data compliance isn't something we bolt on at the end. It's built into every strategy from day one." },
    { icon: MessageCircle, title: "Honest About What Works", desc: "We under-promise and over-deliver. No vanity retainers, no bloated scopes, no strategies built to impress in a pitch deck." },
    { icon: TrendingUp, title: "Continuous Growth", desc: "For our clients and for ourselves. We're always learning, iterating, and raising the bar — because the B2B landscape doesn't stop evolving." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our Values</div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            What we <em className="italic text-accent">stand for</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const I = v.icon;
            return (
              <div key={v.title} className="rounded-3xl border border-border bg-cream p-7 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <I className="h-5 w-5" />
                  </div>
                  <span className="font-display text-2xl text-ink/15">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{v.title}</h3>
                <p className="mt-3 text-ink/75 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhoWeAre = () => (
  <section className="py-24 md:py-32 bg-cream border-y border-border">
    <div className="container max-w-5xl">
      <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Who We Are</div>
      <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
        Operators first. <em className="italic text-accent">Strategists always.</em>
      </h2>
      <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed">
        <p>Our team has worked inside some of the world's leading B2B brands — managing demand generation, building GTM functions from scratch, and sitting across from boards defending marketing spend.</p>
        <p>We've been the first marketing hire at a funded startup. We've been the fractional CMO trying to hit Series A milestones. We've been in rooms where sales and marketing were openly feuding — and had to fix it.</p>
        <p className="text-ink font-semibold">That experience is what every 3rd + Taylor engagement is built on.</p>
      </div>
      <div className="mt-12 rounded-3xl border border-border bg-background p-8">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Brands our marketers have worked with</div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 items-center font-display text-2xl md:text-3xl text-ink/40">
          <span>LogiAnalytics</span>
          <span>Knowland</span>
          <span>VTS</span>
          <span className="text-ink/25">+ many more</span>
        </div>
      </div>
    </div>
  </section>
);

const Founder = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-bold">
          <Image
            src={tiffanyHeadshot}
            alt="Tiffany Nwahiri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
            <div className="font-display text-3xl font-medium text-cream">Tiffany Huddleston Nwahiri</div>
            <div className="mt-1 text-cream/80">Founder & CEO</div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Meet the Founder</div>
        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
          Strategy and results — <em className="italic text-accent">never separated</em>.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed">
          <p>Tiffany is a serial entrepreneur, corporate marketing executive, and the kind of marketer who refuses to separate strategy from results.</p>
          <p>With 15+ years of experience scaling B2B growth across funded startups, PE-backed scaleups, and global enterprise companies, Tiffany built 3rd + Taylor because she kept seeing the same problem: <span className="text-ink font-semibold">great teams with the wrong system, or no system at all.</span></p>
          <p>She's a dynamic speaker, a critical thinker, and someone who's been on your side of the table. She knows what it costs when marketing doesn't work. And she knows exactly how to fix it.</p>
        </div>
        <Link href="/meet-the-founder" className="mt-8 group inline-flex items-center gap-2 bg-ink text-cream px-6 py-3.5 rounded-full font-semibold hover:bg-accent transition-colors">
          Read Tiffany's Full Story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

const Numbers = () => {
  const stats = [
    { v: "4x", l: "ROAS for a B2B AdTech company" },
    { v: "426%", l: "Increase in qualified demo bookings in 30 days" },
    { v: "$16K", l: "Wasted Google Ad spend recovered in 14 days" },
    { v: "$15M", l: "Marketing-sourced revenue for a FinTech MarTech company" },
  ];
  return (
    <section className="py-24 md:py-32 bg-ink text-cream">
      <div className="container">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-warm mb-4">
            <TrendingUp className="h-3.5 w-3.5" /> The Numbers
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.02] text-balance">
            Outcomes that <em className="italic text-warm">moved the needle</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="rounded-3xl border border-cream/15 bg-cream/5 p-7">
              <div className="font-display text-5xl md:text-6xl font-medium text-warm">{s.v}</div>
              <div className="mt-4 text-cream/80 leading-relaxed">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="get-started" className="py-24 md:py-32 bg-cream border-t border-border">
    <div className="container max-w-4xl text-center">
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
        <Users className="h-3.5 w-3.5" /> Work With Us
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.02] text-balance">
        Ready to work with a team that's <em className="italic text-accent">been where you are?</em>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/campaign-engine" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]">
          Explore Campaign Engine <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link href="/free-gtm-scan" className="inline-flex items-center gap-2 border border-ink/20 text-ink px-7 py-4 rounded-full font-semibold hover:bg-ink hover:text-cream transition-colors">
          Get a Free GTM Scan
        </Link>
      </div>
    </div>
  </section>
);

const About = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main>
      <Hero />
      <MissionVision />
      <Values />
      <WhoWeAre />
      <Founder />
      <Numbers />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default About;
