"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const ThankYou = () => (
  <>
    <SiteNav />
    <main className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-gradient-sunset grain flex-1 flex items-center">
        <div className="container relative py-24 md:py-32 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/15 mb-8">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70 mb-6">
            You're all set
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance mb-6">
            Thank you!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
            The resource is headed to your inbox.
          </p>
          <p className="text-base text-muted-foreground mb-12">
            Check your spam folder if you don't see it within a few minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Explore more resources <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream/60 px-6 py-3 text-sm font-semibold text-ink hover:bg-cream transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
);

export default ThankYou;
