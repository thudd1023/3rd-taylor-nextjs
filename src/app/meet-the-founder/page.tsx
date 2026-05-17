"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Lightbulb } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import tiffanyHeadshot from "@/assets/tiffany-founder.jpg";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-16 md:pt-28 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <Sparkles className="h-3.5 w-3.5" /> Meet the Founder
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-medium text-balance">
          Hi. I'm <em className="italic text-accent">Tiffany.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
          I founded 3rd + Taylor because I've been the marketer sitting across from the board, the founder trying to figure out why pipeline isn't moving, and the revenue leader who needed results yesterday — <span className="text-ink font-semibold">not in six months.</span>
        </p>
      </div>
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-ink/10 shadow-bold">
          <Image
            src={tiffanyHeadshot}
            alt="Tiffany Nwahiri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
            <div className="font-display text-2xl font-medium text-cream">Tiffany Huddleston Nwahiri</div>
            <div className="mt-1 text-cream/80 text-sm">Founder & CEO</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Story = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container max-w-4xl">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <BookOpen className="h-5 w-5" />
      </div>
      <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">My Story</div>
      <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
        Practitioner first. <em className="italic text-accent">Theorist never.</em>
      </h2>
      <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed">
        <p>I've spent my career inside B2B tech companies — building GTM functions from scratch, managing demand generation for funded startups, and turning scattered marketing efforts into connected revenue systems.</p>
        <p>I've seen what happens when campaigns run without a clear buyer journey. I've watched great products lose deals because the messaging didn't land. I've been in rooms where marketing and sales were openly feuding — and had to fix it.</p>
        <p className="text-ink font-semibold">That experience is what every 3rd + Taylor engagement is built on.</p>
        <p>We're not an agency that theorizes about what works. We're practitioners who've lived it — and we bring that experience to every client we work with.</p>
      </div>
    </div>
  </section>
);

const WhyBuilt = () => (
  <section className="py-24 md:py-32 bg-cream border-y border-border">
    <div className="container max-w-4xl">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-warm/20 text-warm-foreground">
        <Lightbulb className="h-5 w-5" />
      </div>
      <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">Why I Built It This Way</div>
      <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
        The answer I wish I'd <em className="italic text-accent">had.</em>
      </h2>
      <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed">
        <p>I built 3rd + Taylor because lean B2B marketing teams deserve the same quality of strategic execution that enterprise companies get — without the bloated retainer and the account manager who doesn't know your business.</p>
        <p><span className="text-ink font-semibold">Campaign Engine is the answer I wish I'd had</span> when I was the one trying to generate pipeline with limited bandwidth and high expectations.</p>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 md:py-32 bg-ink text-cream">
    <div className="container max-w-4xl text-center">
      <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.02] text-balance">
        Want to <em className="italic text-warm">work together?</em>
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/campaign-engine" className="group inline-flex items-center gap-2 bg-warm text-ink px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-cream transition-all hover:scale-[1.02]">
          Explore Campaign Engine <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link href="/free-gtm-scan" className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-4 rounded-full font-semibold hover:bg-cream hover:text-ink transition-colors">
          Get a Free GTM Scan
        </Link>
      </div>
    </div>
  </section>
);

const MeetTheFounder = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main>
      <Hero />
      <Story />
      <WhyBuilt />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default MeetTheFounder;
