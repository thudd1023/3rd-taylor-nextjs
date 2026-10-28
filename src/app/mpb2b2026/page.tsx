"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useUtm } from "@/lib/use-utm";
import SiteFooter from "@/components/SiteFooter";

const inputClass =
  "w-full rounded-xl border border-border bg-cream/60 px-4 py-3 text-base text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors";
const labelClass = "block text-xs font-semibold uppercase tracking-wider text-ink/60 mb-1";

function GateForm() {
  const router = useRouter();
  const [fields, setFields] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company_website: "",
    website_url: "", // honeypot
  });
  const utm = useUtm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/warm-tlc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, ...utm }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      try {
        sessionStorage.setItem(
          "warm-tlc",
          JSON.stringify({
            name: `${fields.first_name} ${fields.last_name}`.trim(),
            email: fields.email,
          }),
        );
      } catch {}
      router.push("/mpb2b2026/thank-you");
    } catch {
      setError("Something went wrong. Please try again or email tiffany.nwahiri@3rdandtaylor.com.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-background rounded-3xl border border-border shadow-bold p-6 md:p-8">
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
            <label className={labelClass} htmlFor="w_first_name">First name</label>
            <input id="w_first_name" type="text" required autoComplete="given-name" className={inputClass} value={fields.first_name} onChange={set("first_name")} />
          </div>
          <div>
            <label className={labelClass} htmlFor="w_last_name">Last name</label>
            <input id="w_last_name" type="text" required autoComplete="family-name" className={inputClass} value={fields.last_name} onChange={set("last_name")} />
          </div>
        </div>
        <div className="mt-4">
          <label className={labelClass} htmlFor="w_email">Work email</label>
          <input id="w_email" type="email" required autoComplete="email" placeholder="jane@yourcompany.com" className={inputClass} value={fields.email} onChange={set("email")} />
        </div>
        <div className="mt-4">
          <label className={labelClass} htmlFor="w_website">Company website</label>
          <input id="w_website" type="text" inputMode="url" required autoComplete="url" placeholder="yourcompany.com" className={inputClass} value={fields.company_website} onChange={set("company_website")} />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-accent text-ink text-base font-semibold px-6 py-3.5 rounded-full hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
          ) : (
            <>Send me the resources <ArrowRight className="h-4 w-4" /></>
          )}
        </button>
      </form>
    </div>
  );
}

const gets = [
  "Your Warm T.L.C. worksheet",
  "A copy-and-paste prompt for your LLM",
  "A free GTM audit and a free end-to-end Warm T.L.C. campaign plan",
];

export default function WarmTlcPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-sunset grain">
        <div className="container relative py-12 md:py-20 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/70">3rd + Taylor</p>
              <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[0.98] font-medium text-balance">
                Take it home, then <em className="italic text-accent">ask for the second date.</em>
              </h1>
              <ul className="mt-8 space-y-3">
                {gets.map((item) => (
                  <li key={item} className="flex gap-2.5 text-base text-ink">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink/70">Find us at booth #108.</p>
            </div>
            <GateForm />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
