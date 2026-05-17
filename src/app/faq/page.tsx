"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search, HelpCircle, MessageCircleQuestion } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQ = { q: string; a: string; cat: string };

const FAQS: FAQ[] = [
  { cat: "Campaign Engine", q: "What is Campaign Engine?", a: "Campaign Engine is our flagship service — a complete campaign system designed, built, and launched for B2B teams in 45 days. It includes strategy, messaging, creative, paid media, automation, and marketing-to-sales alignment. You get a connected system, not a disconnected set of tactics." },
  { cat: "Campaign Engine", q: "Do you just strategize or also execute?", a: "We do both — and we don't separate them. Campaign Engine includes the strategy, the build, the launch, and ongoing optimization. You don't manage multiple vendors or figure out how to implement the plan yourself." },
  { cat: "Campaign Engine", q: "Is this just paid media?", a: "No. Paid media is one component of a coordinated campaign system that includes messaging, nurture sequences, sales enablement, and marketing-to-sales alignment. Everything works together." },
  { cat: "Campaign Engine", q: "How fast can you get started?", a: "We have limited Campaign Engine slots each month. Once we align on scope, most builds kick off within 2 weeks of contract signature. Go-live is 45 days from kickoff." },
  { cat: "Campaign Engine", q: "What's the difference between the three Campaign Engine packages?", a: "Strategy ($5K) is the plan — ideal if you're executing internally. Launch ($15K) is the build and deployment — we do it all, you manage from there. Campaign Engine ($25K+) is the full 90-day engagement — build, launch, 45 days of optimization, and sales handoff system." },
  { cat: "Add-Ons & Momentum", q: "What are the ABM and Outbound add-ons?", a: "The ABM Layer adds account-level precision to your campaign with coordinated multi-touch programs targeting your highest-value accounts. Personalized Outbound at Scale adds direct, AI-enhanced outreach sequences aligned to your campaign messaging. Both integrate into your Campaign Engine engagement." },
  { cat: "Add-Ons & Momentum", q: "What's the Momentum team?", a: "Momentum is our credits-based retained team — a full-stack marketing department that flexes with your priorities month-to-month. Starting at $6,000/month. An early-stage option starts at $1,500/month + revenue share for pre-seed and seed companies." },
  { cat: "Diagnostics", q: "What's the difference between the free GTM Scan and the $499 GTM Recommendations Report?", a: "The free GTM Scan is AI-powered — it scores your public-facing GTM presence across six categories and surfaces key indicators. The $499 report is a complete human review with a written recommendations deck and recorded video walkthroughs. Much more depth, fully creditable toward any Campaign Engine engagement." },
  { cat: "Diagnostics", q: "What's the Revenue Growth Audit?", a: "The $8,500 Revenue Growth Audit is our deep-dive diagnostic — we get inside your systems (CRM, ad accounts, marketing automation), interview your team, and deliver a 90-day roadmap. It's the full-access version of the $499 report. Fully creditable toward Campaign Engine." },
  { cat: "Who We Work With", q: "Who is this for?", a: "We work best with lean B2B marketing teams at tech companies — typically 1–3 person teams at scaleups, funded startups (Seed–Series C), or growth-stage companies with aggressive pipeline targets and limited internal bandwidth." },
  { cat: "Who We Work With", q: "Do you work with companies outside the U.S.?", a: "Yes. We've worked with international B2B tech companies, including those expanding into the U.S. market. We have resources in France, the UK, and Spain." },
  { cat: "Who We Work With", q: "Do you work with VC or PE-backed companies?", a: "Yes — and we have a dedicated offering for VC/PE operating partners. About 60% of our client base is VC-backed, 20% PE-backed, and 20% bootstrapped." },
  { cat: "Who We Work With", q: "What industries do you specialize in?", a: "B2B tech: SaaS, FinTech, MedTech, AI-native tech, Industrial Tech, and disruptive B2B tech (crypto, blockchain, Web3)." },
];

const CATEGORIES = ["All", "Campaign Engine", "Add-Ons & Momentum", "Diagnostics", "Who We Work With"];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-14 md:pt-28 md:pb-20">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <HelpCircle className="h-3.5 w-3.5" /> FAQs
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] font-medium text-balance">
          Questions we hear <em className="italic text-accent">most</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-relaxed">
          Everything you want to know about Campaign Engine, our pricing, our process, and how we work with B2B tech companies.
        </p>
      </div>
    </div>
  </section>
);

const FAQList = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const catOk = active === "All" || f.cat === active;
      const qOk = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, active]);

  return (
    <section className="py-20 md:py-28 bg-cream border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the FAQs"
                className="w-full rounded-full border border-border bg-background pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Browse by Topic</div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold border transition-colors ${
                      active === c
                        ? "bg-ink text-cream border-ink"
                        : "bg-background text-ink/70 border-border hover:text-ink hover:border-ink/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-background p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MessageCircleQuestion className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Still have questions?</h3>
              <p className="mt-2 text-sm text-ink/70">We're happy to walk you through anything not covered here.</p>
              <Link href="/lets-talk" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent transition-colors group">
                Book a Call <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-8">
            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-border bg-background p-10 text-center">
                <p className="text-ink/70">No questions match — try a different search.</p>
              </div>
            ) : (
              <Accordion type="multiple" className="space-y-3">
                {filtered.map((f, i) => (
                  <AccordionItem key={f.q} value={`q-${i}`} className="rounded-2xl border border-border bg-background px-5 md:px-6 data-[state=open]:shadow-bold transition-shadow">
                    <AccordionTrigger className="py-5 text-left hover:no-underline group">
                      <div className="flex-1 pr-4">
                        <div className="text-[10px] font-semibold uppercase tracking-widest text-accent mb-1.5">{f.cat}</div>
                        <div className="font-display text-lg md:text-xl font-semibold leading-snug text-ink group-hover:text-accent transition-colors">
                          {f.q}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base text-ink/80 leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-24 md:py-32 bg-ink text-cream">
    <div className="container max-w-3xl text-center">
      <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
        Didn't find what you were <em className="italic text-warm">looking for?</em>
      </h2>
      <p className="mt-6 text-lg text-cream/75">
        Tell us what you're trying to solve and we'll point you in the right direction — Campaign Engine, Audit, Momentum, or just an honest second opinion.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Link href="/lets-talk" className="group inline-flex items-center gap-2 bg-warm text-ink px-7 py-4 rounded-full font-semibold hover:bg-cream transition-all">
          Let's Talk <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link href="/free-gtm-scan" className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-4 rounded-full font-semibold hover:bg-cream hover:text-ink transition-colors">
          Get a Free GTM Scan
        </Link>
      </div>
    </div>
  </section>
);

const FAQs = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <FAQList />
        <FinalCTA />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
};

export default FAQs;
