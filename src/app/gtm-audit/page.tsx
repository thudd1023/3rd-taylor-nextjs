"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, FileText, Video, Search, BarChart3, Target, PenTool, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const inputClass = "w-full rounded-xl border border-border bg-cream/60 px-4 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors";
const labelClass = "block text-xs font-semibold uppercase tracking-wider text-ink/60 mb-1";

function HeroForm() {
  const router = useRouter();
  const [fields, setFields] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
    company_website: "",
    job_title: "",
    website_url: "", // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/gtm-audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      router.push("/gtm-recommendations-report/thank-you");
    } catch {
      setError("Something went wrong. Please try again or email tiffany.nwahiri@3rdandtaylor.com.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-background/90 backdrop-blur rounded-3xl border border-border shadow-bold p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">Request your free audit</p>

      {error && (
        <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot */}
        <input
          type="text"
          name="website_url"
          value={fields.website_url}
          onChange={set("website_url")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="h_first_name">First name</label>
            <input id="h_first_name" type="text" required autoComplete="given-name" placeholder="Jane" className={inputClass} value={fields.first_name} onChange={set("first_name")} />
          </div>
          <div>
            <label className={labelClass} htmlFor="h_last_name">Last name</label>
            <input id="h_last_name" type="text" required autoComplete="family-name" placeholder="Smith" className={inputClass} value={fields.last_name} onChange={set("last_name")} />
          </div>
        </div>

        <div className="mt-4">
          <label className={labelClass} htmlFor="h_email">Work email</label>
          <input id="h_email" type="email" required autoComplete="email" placeholder="jane@yourcompany.com" className={inputClass} value={fields.email} onChange={set("email")} />
        </div>

        <div className="mt-4">
          <label className={labelClass} htmlFor="h_job_title">Job title</label>
          <input id="h_job_title" type="text" required autoComplete="organization-title" placeholder="VP of Marketing" className={inputClass} value={fields.job_title} onChange={set("job_title")} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className={labelClass} htmlFor="h_company_name">Company</label>
            <input id="h_company_name" type="text" required autoComplete="organization" placeholder="Acme Inc." className={inputClass} value={fields.company_name} onChange={set("company_name")} />
          </div>
          <div>
            <label className={labelClass} htmlFor="h_company_website">Website</label>
            <input id="h_company_website" type="url" required autoComplete="url" placeholder="https://acme.com" className={inputClass} value={fields.company_website} onChange={set("company_website")} />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-accent text-ink text-sm font-semibold px-6 py-3 rounded-full hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
          ) : (
            <>Request My GTM Audit <ArrowRight className="h-4 w-4" /></>
          )}
        </button>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          We'll follow up within one business day to schedule your audit.
        </p>
      </form>
    </div>
  );
}

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-16 md:pt-28 md:pb-20 max-w-6xl">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6 text-left pt-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
            <Sparkles className="h-3.5 w-3.5" /> Human-Reviewed GTM Audit
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance">
            Let's build your <em className="italic text-accent">go-to-market plan.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
            A complete human-reviewed analysis of your public-facing go-to-market — with specific, prioritized recommendations delivered as a written report and recorded video walkthrough.
          </p>
          <ul className="mt-8 space-y-2">
            {[
              "Website messaging & positioning",
              "SEO structure & search demand",
              "Paid ad library review",
              "Content strategy assessment",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <HeroForm />
        </div>
      </div>
    </div>
  </section>
);

const included = [
  { icon: PenTool, title: "Website Messaging & Positioning Review", desc: "We assess whether your homepage, service pages, and CTAs clearly communicate who you help, what you do, and why it matters — through the eyes of your ideal buyer." },
  { icon: Target, title: "UX & Conversion Path Analysis", desc: "We map the visitor journey and identify where buyers are hesitating or exiting before they convert." },
  { icon: Search, title: "SEO Structure Review", desc: "We evaluate your site's visibility, structure, and keyword positioning — and flag where you're missing search demand from buyers actively researching your category." },
  { icon: BarChart3, title: "Paid Ad Library Audit", desc: "We pull your active ads from LinkedIn, Meta, and Google Ad Libraries to assess messaging consistency, creative effectiveness, and targeting signals." },
  { icon: FileText, title: "Content Strategy Assessment", desc: "We review what you're publishing, how it's structured, and whether it's building trust with the right buyers at the right stage of their journey." },
  { icon: FileText, title: "Written Recommendations Report", desc: "A polished, shareable PDF with specific, prioritized actions across each area — organized by effort and impact." },
  { icon: Video, title: "Recorded Video Walkthroughs", desc: "Screen-recorded commentary for each section so your team understands the reasoning, not just the recommendations." },
];

const Included = () => (
  <section className="py-16 md:py-24 bg-cream">
    <div className="container max-w-6xl">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">What's included</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          A full teardown. A clear plan. A fast start.
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {included.map((item) => (
          <div key={item.title} className="rounded-2xl border border-border bg-background p-6 md:p-7 hover:shadow-bold transition-shadow">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10 text-accent">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium">{item.title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoFor = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-4xl">
      <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">Who this is for</h2>
      <p className="mt-4 text-muted-foreground">This is the right next step if:</p>
      <ul className="mt-8 space-y-4">
        {[
          "You want a complete, actionable go-forward plan without the depth of stakeholder interviews or providing internal systems access",
          "You're evaluating agencies and want to see how we think before committing to a larger engagement",
          "You have a clear sense something is off, but haven't been able to pinpoint exactly what",
          "You want to move fast — this is delivered in 5 business days",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-ink">
            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
            <span className="text-base md:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const steps = [
  { n: "01", title: "Submit your request above" },
  { n: "02", title: "Book your discovery call — we'll gather the context needed to conduct your audit" },
  { n: "03", title: "Our strategist reviews your public-facing GTM presence (no systems access needed)" },
  { n: "04", title: "Receive your full report + recorded walkthroughs within 5 business days" },
];

const WhatHappens = () => (
  <section className="py-16 md:py-24 bg-cream">
    <div className="container max-w-5xl">
      <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">What happens next</h2>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-background p-6 md:p-8">
            <div className="font-display text-4xl text-accent">{s.n}</div>
            <p className="mt-3 text-ink text-lg leading-snug">{s.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function GTMAuditPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Included />
      <WhoFor />
      <WhatHappens />
      <SiteFooter />
    </main>
  );
}
