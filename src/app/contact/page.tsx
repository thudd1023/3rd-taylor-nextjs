"use client";

import Link from "next/link";
import { MessageCircle, Check, Clock, Target, Sparkles } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const HubSpotForm = ({ instanceKey }: { instanceKey: string }) => (
  <LetsTalkForm source={`contact-${instanceKey}`} />
);

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-16 md:pt-28 md:pb-20 grid lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <MessageCircle className="h-3.5 w-3.5" /> Let's Talk
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance">
          Tell us where you're <em className="italic text-accent">stuck on pipeline.</em>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
          A 3rd + Taylor growth strategist will get back to you within one business day with a point of view on your fastest path to pipeline — and the right way to start working together.
        </p>
        <ul className="mt-8 space-y-3">
          {[
            "A working session, not a sales pitch",
            "Honest read on what's working and what's not",
            "Clear next step — whether or not we end up working together",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-ink">
              <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-6">
        <div className="rounded-3xl border border-border bg-cream p-6 md:p-8 shadow-bold">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Start the conversation
          </div>
          <h2 className="font-display text-2xl font-medium leading-tight mb-6">
            Send us a quick note.
          </h2>
          <HubSpotForm instanceKey="top" />
        </div>
      </div>
    </div>
  </section>
);

const WhatToExpect = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Complete the form",
      body: "Share a little about your goals, your team, and where you're stuck on pipeline.",
    },
    {
      icon: Clock,
      title: "Choose a time that works for you",
      body: "Pick a discovery call slot from our calendar — no back-and-forth scheduling required.",
    },
    {
      icon: Target,
      title: "Get on a 30-minute call",
      body: "We dig into your GTM, identify the highest-leverage moves, and recommend the right starting engagement.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-5xl">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">What happens next</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Three simple steps to a real conversation.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-2xl bg-cream border border-border p-7">
                <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhoThisIsFor = () => {
  const items = [
    "B2B tech founders & CEOs who need pipeline visibility, fast",
    "Marketing leaders carrying a number with a lean team",
    "Sales leaders who need better-qualified pipeline",
    "VC & PE operating partners working across a portfolio",
  ];
  return (
    <section className="py-16 md:py-24 bg-secondary/40">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">Who this is for</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
              We're built for revenue leaders who need traction now.
            </h2>
          </div>
          <ul className="lg:col-span-7 space-y-4">
            {items.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-border bg-cream p-5">
                <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-ink font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="contact-form" className="py-16 md:py-24 bg-gradient-sunset grain">
    <div className="container max-w-5xl grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
          Ready when you are. <em className="italic text-accent">Let's get to work.</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Fill out the form and a 3rd + Taylor growth strategist will reach out within one business day with a point of view on where to start.
        </p>
        <ul className="mt-8 space-y-3">
          {[
            "1 business day response",
            "Strategist, not an SDR",
            "Clear recommendation, no pressure",
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
          <HubSpotForm instanceKey="bottom" />
        </div>
      </div>
    </div>
  </section>
);

const LetsTalk = () => (
  <main className="min-h-screen bg-background">
    <SiteNav />
    <Hero />
    <WhatToExpect />
    <WhoThisIsFor />
    <FinalCTA />
    <SiteFooter />
  </main>
);

export default LetsTalk;
