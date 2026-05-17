"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, Sparkles, Loader2, Mail } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Section = {
  score: number;
  summary: string;
  strengths?: string[];
  weaknesses?: string[];
  recommendations?: string[];
};

type Scan = {
  id: string;
  status: "pending" | "running" | "complete" | "failed";
  error: string | null;
  company: string;
  website: string;
  email: string;
  summary: string | null;
  score_overall: number | null;
  score_website: number | null;
  score_ux: number | null;
  score_seo: number | null;
  score_paid_ads: number | null;
  score_content: number | null;
  score_funnel: number | null;
  section_website: Section | null;
  section_ux: Section | null;
  section_seo: Section | null;
  section_paid_ads: Section | null;
  section_content: Section | null;
  section_funnel: Section | null;
  email_results_sent_at: string | null;
};

const SECTIONS: { key: keyof Scan; scoreKey: keyof Scan; label: string; blurb: string }[] = [
  { key: "section_website", scoreKey: "score_website", label: "Website Messaging & Positioning", blurb: "Clarity of value prop and ICP fit." },
  { key: "section_ux", scoreKey: "score_ux", label: "UX & Conversion Path", blurb: "Can a buyer take the next step easily?" },
  { key: "section_seo", scoreKey: "score_seo", label: "SEO Visibility & Structure", blurb: "Discoverability for the right intent." },
  { key: "section_paid_ads", scoreKey: "score_paid_ads", label: "Paid Ad Presence", blurb: "What's running across paid channels." },
  { key: "section_content", scoreKey: "score_content", label: "Content Strategy & Discoverability", blurb: "Does your content compound?" },
  { key: "section_funnel", scoreKey: "score_funnel", label: "Marketing → Sales Funnel Logic", blurb: "Visitor → lead → action flow." },
];

function scoreColor(score: number | null) {
  if (score == null) return "text-muted-foreground";
  if (score >= 8) return "text-emerald-600";
  if (score >= 6) return "text-accent";
  return "text-red-600";
}

const ScoreCircle = ({ value }: { value: number | null }) => (
  <div className="inline-flex flex-col items-center justify-center rounded-full border-4 border-accent/20 bg-cream w-32 h-32">
    <div className={`font-display text-5xl font-medium ${scoreColor(value)}`}>
      {value ?? "—"}
    </div>
    <div className="text-xs uppercase tracking-widest text-muted-foreground">/ 10</div>
  </div>
);

const SectionCard = ({ label, blurb, score, section }: { label: string; blurb: string; score: number | null; section: Section | null }) => (
  <div className="rounded-3xl border border-border bg-cream p-6 md:p-8">
    <div className="flex items-start justify-between gap-6">
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">{blurb}</div>
        <h3 className="mt-2 font-display text-2xl md:text-3xl font-medium">{label}</h3>
      </div>
      <div className={`font-display text-4xl md:text-5xl font-medium ${scoreColor(score)}`}>
        {score ?? "—"}<span className="text-base text-muted-foreground">/10</span>
      </div>
    </div>
    {section?.summary && (
      <p className="mt-4 text-ink/80 text-base leading-relaxed">{section.summary}</p>
    )}
    <div className="mt-6 grid md:grid-cols-2 gap-5 text-sm">
      {!!section?.strengths?.length && (
        <div>
          <div className="flex items-center gap-2 font-semibold text-emerald-700">
            <CheckCircle2 className="h-4 w-4" /> Strengths
          </div>
          <ul className="mt-2 space-y-2 text-ink/80">
            {section.strengths.map((s, i) => <li key={i}>• {s}</li>)}
          </ul>
        </div>
      )}
      {!!section?.weaknesses?.length && (
        <div>
          <div className="flex items-center gap-2 font-semibold text-red-700">
            <AlertTriangle className="h-4 w-4" /> Weaknesses
          </div>
          <ul className="mt-2 space-y-2 text-ink/80">
            {section.weaknesses.map((s, i) => <li key={i}>• {s}</li>)}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const EmailOptIn = ({ scan }: { scan: Scan }) => {
  const [email, setEmail] = useState(scan.email);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(!!scan.email_results_sent_at);
  const { toast } = useToast();

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("email-scan-results", {
        body: { scanId: scan.id, email: email.trim() },
      });
      if (error) throw error;
      setSent(true);
      toast({ title: "Sent!", description: `Results delivered to ${email}.` });
    } catch (err) {
      toast({
        title: "Couldn't send",
        description: err instanceof Error ? err.message : "Try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-6 md:p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
        <h3 className="mt-3 font-display text-2xl font-medium">Results sent.</h3>
        <p className="mt-2 text-muted-foreground">Check your inbox — we sent a copy to {email}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={send} className="rounded-3xl bg-cream border border-border p-6 md:p-8">
      <div className="flex items-center gap-2 text-accent">
        <Mail className="h-5 w-5" />
        <div className="text-xs font-semibold uppercase tracking-widest">Email me these results</div>
      </div>
      <h3 className="mt-2 font-display text-2xl md:text-3xl font-medium">
        Want a copy in your inbox?
      </h3>
      <p className="mt-2 text-muted-foreground">
        Bookmark this page or send the full scan to your email so you can share it with your team.
      </p>
      <div className="mt-5 grid sm:grid-cols-[1fr,auto] gap-3">
        <div>
          <Label htmlFor="email-optin" className="sr-only">Email</Label>
          <Input
            id="email-optin"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
          />
        </div>
        <Button type="submit" size="lg" className="rounded-full" disabled={sending}>
          {sending ? "Sending…" : "Send Results"}
        </Button>
      </div>
    </form>
  );
};

const FreeGTMScanResults = () => {
  const { id } = useParams<{ id: string }>();
  const [scan, setScan] = useState<Scan | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const load = async () => {
      const { data, error } = await supabase
        .from("gtm_scans")
        .select("*")
        .eq("id", id)
        .single();
      if (cancelled) return;
      if (error) {
        setError(error.message);
        return;
      }
      setScan(data as unknown as Scan);
      if (data && data.status !== "complete" && data.status !== "failed") {
        timer = setTimeout(load, 4000);
      }
    };
    load();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [id]);

  if (error) {
    return (
      <main className="min-h-screen bg-background">
        <SiteNav />
        <section className="container py-24 text-center">
          <h1 className="font-display text-4xl">Scan not found</h1>
          <p className="mt-3 text-muted-foreground">{error}</p>
        </section>
        <SiteFooter />
      </main>
    );
  }

  if (!scan) {
    return (
      <main className="min-h-screen bg-background">
        <SiteNav />
        <section className="container py-32 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-accent" />
          <p className="mt-4 text-muted-foreground">Loading your scan…</p>
        </section>
        <SiteFooter />
      </main>
    );
  }

  if (scan.status === "pending" || scan.status === "running") {
    return (
      <main className="min-h-screen bg-background">
        <SiteNav />
        <section className="bg-gradient-sunset grain">
          <div className="container py-24 md:py-32 text-center max-w-3xl">
            <Loader2 className="h-10 w-10 animate-spin mx-auto text-accent" />
            <h1 className="mt-6 font-display text-4xl md:text-5xl font-medium">
              Running your GTM Scan…
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're analyzing {scan.company || scan.website} across six categories.
              This usually takes about a minute.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              You can leave this page open — it'll update automatically.
            </p>
          </div>
        </section>
        <SiteFooter />
      </main>
    );
  }

  if (scan.status === "failed") {
    return (
      <main className="min-h-screen bg-background">
        <SiteNav />
        <section className="container py-24 text-center max-w-2xl">
          <AlertTriangle className="h-10 w-10 mx-auto text-red-600" />
          <h1 className="mt-4 font-display text-4xl">Scan failed</h1>
          <p className="mt-3 text-muted-foreground">
            {scan.error || "Something went wrong while analyzing your site."} Please reach out and we'll run it manually.
          </p>
          <Button asChild className="mt-6 rounded-full">
            <a href="/free-gtm-scan">Try Again</a>
          </Button>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero / overall score */}
      <section className="bg-gradient-sunset grain">
        <div className="container py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">
              GTM Scan Results — {scan.company}
            </div>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-medium leading-[0.95]">
              Your GTM scores —{" "}
              <em className="italic text-accent">across six categories.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Here's how {scan.company} scored across the six GTM categories we audit.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Site analyzed: <span className="font-medium text-ink">{scan.website}</span>
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Overall</div>
            <ScoreCircle value={scan.score_overall != null ? Math.round(Number(scan.score_overall) * 10) / 10 : null} />
          </div>
        </div>
      </section>

      {/* Sections intro */}
      <section className="pt-14 md:pt-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">How to read this</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-medium leading-tight max-w-3xl">
            Six categories. One score each. <em className="italic text-accent">Specific evidence, not generic advice.</em>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Each category is scored 1–10 against a B2B GTM rubric. Your overall score is a weighted
            average — Website 25%, UX 20%, SEO 15%, Paid Ads 15%, Content 15%, Funnel 10%. Use the
            strengths and weaknesses under each section as a starting point — for the prioritized
            roadmap of what to fix and in what order, upgrade to the human-reviewed report below.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container max-w-5xl space-y-6">
          {SECTIONS.map((s) => (
            <SectionCard
              key={s.key as string}
              label={s.label}
              blurb={s.blurb}
              score={scan[s.scoreKey] as number | null}
              section={scan[s.key] as Section | null}
            />
          ))}
        </div>
      </section>

      {/* Primary upsell — human report */}
      <section className="py-16 md:py-24 bg-ink text-cream grain">
        <div className="container max-w-5xl grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-warm">
              This is just the overview
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-[1.05]">
              Go from <em className="italic text-warm">scattered to streamlined</em> — for $499.
            </h2>
            <p className="mt-5 text-lg text-cream/80 leading-relaxed">
              Your free scan shows you <em>where</em> you stand. The GTM Recommendations Report
              shows you <em>exactly what to fix, in what order, and why</em> — a human strategist
              reviews everything the AI surfaced, pressure-tests the scores, and builds a
              prioritized play-by-play roadmap your team can run on Monday.
            </p>
            <ul className="mt-6 space-y-3 text-cream/90">
              {[
                "Human-reviewed audit across all six categories",
                "Prioritized fix list with effort vs. impact",
                "Written recommendations deck + recorded video walkthrough",
                "Fully creditable toward any Campaign Engine engagement",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-warm flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-warm text-ink hover:bg-cream">
                <a href="/gtm-recommendations-report">
                  Get the $499 Report <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-cream/30 text-cream hover:bg-cream/10 hover:text-cream"
              >
                <a href="/gtm-recommendations-report">See what's included</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-warm/30 bg-cream/5 backdrop-blur p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-warm">
                Bonus
              </div>
              <h3 className="mt-2 font-display text-2xl font-medium">
                Every $499 spent here comes off your Campaign Engine invoice.
              </h3>
              <p className="mt-3 text-cream/70 text-sm">
                If you decide to engage us for execution, the full cost of the report is credited
                back. Either way, you walk away with a real plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary — email a copy */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Not ready yet?
          </div>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-medium">
            Email yourself a copy of this scan.
          </h2>
          <p className="mt-3 text-muted-foreground">
            We'll send the full results to your inbox so you can revisit or share with your team.
          </p>
          <div className="mt-6">
            <EmailOptIn scan={scan} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default FreeGTMScanResults;
