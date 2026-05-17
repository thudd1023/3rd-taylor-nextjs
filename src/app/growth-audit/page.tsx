"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { Check, Sparkles, Zap, Target, BarChart3, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CHANNELS = [
  "Google Ads",
  "Meta (Facebook/Instagram) Ads",
  "LinkedIn Ads",
  "YouTube Ads",
  "Programmatic / Display",
  "Reddit Ads",
  "X (Twitter) Ads",
  "TikTok Ads",
  "Podcast Ads",
  "Direct Mail",
  "None / Not advertising yet",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  website: string;
  channels: string[];
  competitors: [string, string, string];
  marketingOptIn: boolean;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  phone: "",
  website: "",
  channels: [],
  competitors: ["", "", ""],
  marketingOptIn: false,
};

const ScanForm = ({ instanceKey }: { instanceKey: string }) => {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleChannel = (c: string) =>
    setForm((f) => ({
      ...f,
      channels: f.channels.includes(c)
        ? f.channels.filter((x) => x !== c)
        : [...f.channels, c],
    }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const competitors = form.competitors.map((c) => c.trim()).filter(Boolean);
      const { data, error } = await supabase.functions.invoke("submit-scan", {
        body: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          jobTitle: form.jobTitle.trim(),
          phone: form.phone.trim(),
          website: form.website.trim(),
          channels: form.channels,
          competitors,
          marketingOptIn: form.marketingOptIn,
          marketingOptInAt: form.marketingOptIn ? new Date().toISOString() : null,
        },
      });
      if (error) throw error;
      const id = (data as { id?: string })?.id;
      if (!id) throw new Error("No scan id returned");
      toast({
        title: "Scan started",
        description: "Generating your GTM scan — this takes about a minute.",
      });
      router.push(`/free-gtm-scan/results/${id}`);
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description:
          err instanceof Error ? err.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const idp = (n: string) => `${instanceKey}-${n}`;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor={idp("firstName")}>First name *</Label>
          <Input
            id={idp("firstName")}
            required
            maxLength={80}
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor={idp("lastName")}>Last name *</Label>
          <Input
            id={idp("lastName")}
            required
            maxLength={80}
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor={idp("email")}>Work email *</Label>
          <Input
            id={idp("email")}
            type="email"
            required
            maxLength={200}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor={idp("phone")}>Phone</Label>
          <Input
            id={idp("phone")}
            type="tel"
            maxLength={40}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor={idp("company")}>Company *</Label>
          <Input
            id={idp("company")}
            required
            maxLength={150}
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor={idp("jobTitle")}>Job title</Label>
          <Input
            id={idp("jobTitle")}
            maxLength={120}
            value={form.jobTitle}
            onChange={(e) => update("jobTitle", e.target.value)}
          />
        </div>
      </div>
      <div>
        <Label htmlFor={idp("website")}>Company website *</Label>
        <Input
          id={idp("website")}
          required
          placeholder="yourcompany.com"
          maxLength={300}
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div>
        <Label className="mb-2 block">Where are you advertising today? <span className="font-normal text-muted-foreground">(select all that apply)</span></Label>
        <div className="grid sm:grid-cols-2 gap-2">
          {CHANNELS.map((c) => {
            const selected = form.channels.includes(c);
            return (
              <label
                key={c}
                className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm cursor-pointer transition-colors ${
                  selected
                    ? "border-accent bg-accent/10 text-ink"
                    : "border-border bg-background/60 hover:bg-background"
                }`}
              >
                <Checkbox
                  className="h-5 w-5 rounded-[4px] border-2 data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-cream"
                  checked={selected}
                  onCheckedChange={() => toggleChannel(c)}
                />
                <span>{c}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <Label className="mb-2 block">Competitor websites (optional, up to 3)</Label>
        <div className="space-y-2">
          {[0, 1, 2].map((i) => (
            <Input
              key={i}
              placeholder={`competitor${i + 1}.com`}
              maxLength={300}
              value={form.competitors[i]}
              onChange={(e) => {
                const next = [...form.competitors] as [string, string, string];
                next[i] = e.target.value;
                update("competitors", next);
              }}
            />
          ))}
        </div>
      </div>

      <label className="flex items-start gap-3 rounded-lg border border-border bg-background/60 px-4 py-3 text-sm cursor-pointer">
        <Checkbox
          className="h-5 w-5 mt-0.5 rounded-[4px] border-2 data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-cream"
          checked={form.marketingOptIn}
          onCheckedChange={(v) => update("marketingOptIn", v === true)}
        />
        <span className="text-muted-foreground leading-relaxed">
          I'd like to receive industry insights, GTM tips, and exclusive offers from 3rd + Taylor
          via email. I understand I can unsubscribe at any time. See our{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline">
            privacy policy
          </a>.
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full"
        disabled={submitting}
      >
        {submitting ? "Starting your scan…" : "Get My Free GTM Scan"}
        {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Free. No call required. Results delivered in about a minute.
      </p>
    </form>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-sunset grain">
    <div className="container relative pt-20 pb-16 md:pt-28 md:pb-20 grid lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
          <Zap className="h-3.5 w-3.5" /> Free GTM Scan
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance">
          Not sure what's holding your pipeline back?{" "}
          <em className="italic text-accent">Let's find out — for free.</em>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
          This isn't a generic "free audit." It's a fast, AI-powered diagnostic that
          scores your public-facing go-to-market presence across six key areas — and
          tells you exactly where you stand.
        </p>
        <ul className="mt-8 space-y-3">
          {[
            "What's actually slowing us down — messaging, positioning, or follow-up?",
            "Are we targeting the right ICPs in the right way?",
            "Where should we focus to grow faster with our current team and budget?",
            "How do we know which agency actually has the skills to help?",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-ink">
              <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          Submit the form and get your GTM Scan results automatically. No call
          required to get started.
        </p>
      </div>
      <div className="lg:col-span-6">
        <div className="rounded-3xl border border-border bg-cream p-6 md:p-8 shadow-bold">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Get your scan
          </div>
          <h2 className="font-display text-2xl font-medium leading-tight mb-5">
            Tell us where to look.
          </h2>
          <ScanForm instanceKey="top" />
        </div>
      </div>
    </div>
  </section>
);

const Categories = () => {
  const cats = [
    { icon: Target, title: "Website messaging & positioning", body: "Is your value prop instantly clear?" },
    { icon: Sparkles, title: "UX & conversion path logic", body: "Can a buyer get to the next step without friction?" },
    { icon: BarChart3, title: "SEO visibility & structure", body: "Are you discoverable for the right intent?" },
    { icon: Zap, title: "Paid ad presence", body: "Meta, Google, LinkedIn — what's running and how does it look?" },
    { icon: Target, title: "Content strategy & discoverability", body: "Does your content compound or just exist?" },
    { icon: BarChart3, title: "Marketing-to-sales funnel logic", body: "From visitor → lead → action — where do you leak?" },
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-6xl">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">Your GTM score</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            A score across every area that matters.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We evaluate your public-facing go-to-market presence across six categories
            and score each area from 1–10.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-2xl border border-border bg-cream p-6">
                <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{c.body}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-secondary/40 p-6">
            <div className="text-sm font-semibold text-accent">Score 6–10</div>
            <p className="mt-2 text-ink">
              We show you what's working and why — so you can protect it and build on it.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/40 p-6">
            <div className="text-sm font-semibold text-accent">Score 1–5</div>
            <p className="mt-2 text-ink">
              You'll see the specific indicators hurting your score — so you know where to focus first.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-3xl bg-ink text-cream p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-medium">
              Want a complete, prioritized action plan?
            </h3>
            <p className="mt-2 text-cream/80">
              Upgrade to the GTM Recommendations Report — creditable toward any Campaign Engine engagement.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <a href="/gtm-recommendations-report">
              Get a Complete Plan — $499 <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-16 md:py-24 bg-gradient-sunset grain">
    <div className="container max-w-5xl grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
          Get a clearer view of what's holding you back —{" "}
          <em className="italic text-accent">for free.</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          This is your first step toward dialing in your messaging and building a GTM
          motion that drives real growth.
        </p>
      </div>
      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-border bg-cream p-6 md:p-8 shadow-sm">
          <ScanForm instanceKey="bottom" />
        </div>
      </div>
    </div>
  </section>
);

const FreeGTMScan = () => (
  <main className="min-h-screen bg-background">
    <SiteNav />
    <Hero />
    <Categories />
    <FinalCTA />
    <SiteFooter />
  </main>
);

export default FreeGTMScan;
