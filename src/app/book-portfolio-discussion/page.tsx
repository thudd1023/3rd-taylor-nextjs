"use client";

import Link from "next/link";
import { Briefcase, Check } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-12 md:pt-28 md:pb-16 max-w-4xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
        <Briefcase className="h-3.5 w-3.5" /> For VC & PE Operating Partners
      </div>
      <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance">
        Book a <em className="italic text-accent">portfolio discussion.</em>
      </h1>
      <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
        Tell us about your portfolio and the GTM gaps you're seeing. We'll come prepared with a point of view on where to focus first, what's likely working against pipeline, and how we'd plug in across one company or several.
      </p>
    </div>
  </section>
);

const FormSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-5xl grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">
          What to expect on the call
        </h2>
        <ul className="mt-8 space-y-4">
          {[
            "A working session, not a sales pitch",
            "Honest read on which portfolio companies are GTM-ready",
            "Where to invest first for measurable pipeline lift",
            "How we'd structure support across one company or several",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-ink">
              <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-border bg-cream p-6 md:p-8 shadow-sm">
          <LetsTalkForm source="book-portfolio-discussion" />
        </div>
      </div>
    </div>
  </section>
);

const BookPortfolioDiscussion = () => (
  <main className="min-h-screen bg-background">
    <SiteNav />
    <Hero />
    <FormSection />
    <SiteFooter />
  </main>
);

export default BookPortfolioDiscussion;
