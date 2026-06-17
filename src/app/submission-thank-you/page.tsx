"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const SubmissionThankYou = () => (
  <>
    <SiteNav />
    <main className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-gradient-sunset grain flex-1 flex items-center">
        <div className="container relative py-24 md:py-32 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/15 mb-8">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70 mb-6">
            Submission received
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance mb-6">
            Thank you!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
            Your registration is confirmed.
          </p>
          <p className="text-base text-muted-foreground mb-12">
            A confirmation email with details is on its way to your inbox. Check your spam folder if you don&apos;t see it within a few minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Learn about the agency <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/campaign-engine"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream/60 px-6 py-3 text-sm font-semibold text-ink hover:bg-cream transition-colors"
            >
              Explore Campaign Engine <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
);

export default SubmissionThankYou;
