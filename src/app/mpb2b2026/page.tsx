"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, Download } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import { useUtm } from "@/lib/use-utm";
import {
  WARM_TLC_CALENDLY_URL,
  WARM_TLC_LLM_PROMPT,
  WARM_TLC_WORKSHEET_URL,
} from "@/lib/warm-tlc";

const buttonClass =
  "inline-flex items-center justify-center gap-2 bg-accent text-ink text-base font-semibold px-6 py-3.5 rounded-full hover:bg-accent/90 transition-colors";
const eyebrowClass = "text-xs font-semibold uppercase tracking-widest text-accent";

const auditAreas = [
  "Website messaging & positioning",
  "Product marketing & positioning",
  "SEO structure & search demand",
  "Paid ad library review",
  "Content strategy assessment",
];

function CopyPrompt({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (e.g. in-app browser) — the text is selectable below.
    }
  }

  return (
    <div className="mt-5 rounded-2xl border border-border bg-cream/60 p-5">
      <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-ink select-all">
        {text}
      </pre>
      <button
        type="button"
        onClick={copy}
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/20 bg-background px-4 py-2 text-sm font-semibold text-ink hover:border-accent transition-colors"
      >
        {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied" : "Copy prompt"}
      </button>
    </div>
  );
}

export default function WarmTlcPage() {
  const utm = useUtm();

  // Carry attribution into the Calendly booking.
  const calendlyParams = new URLSearchParams({
    utm_source: utm.utm_source || "marketingprofs",
    utm_medium: utm.utm_medium || "qr",
    utm_campaign: utm.utm_campaign || "mpb2b2026",
  });
  if (utm.utm_term) calendlyParams.set("utm_term", utm.utm_term);
  if (utm.utm_content) calendlyParams.set("utm_content", utm.utm_content);
  const bookingUrl = `${WARM_TLC_CALENDLY_URL}?${calendlyParams.toString()}`;

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-sunset grain">
        <div className="container relative py-10 md:py-16 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/70">3rd + Taylor</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[0.98] font-medium text-balance">
            Here&apos;s your session resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Take it home, then <em className="italic text-accent">ask for the second date.</em>
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: resources */}
            <div className="space-y-12">
              <div>
                <div className={eyebrowClass}>1</div>
                <h2 className="mt-2 font-display text-2xl md:text-3xl font-medium leading-tight">
                  Access the worksheet to plan your own campaign
                </h2>
                {WARM_TLC_WORKSHEET_URL ? (
                  <a
                    href={WARM_TLC_WORKSHEET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 ${buttonClass}`}
                  >
                    <Download className="h-4 w-4" /> Get the worksheet
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className={`mt-5 ${buttonClass} opacity-50 cursor-not-allowed`}
                  >
                    <Download className="h-4 w-4" /> Get the worksheet
                  </span>
                )}
              </div>

              <div>
                <div className={eyebrowClass}>2</div>
                <h2 className="mt-2 font-display text-2xl md:text-3xl font-medium leading-tight">
                  Copy and paste the prompt to use AI to build your next Warm T.L.C. campaign
                </h2>
                <CopyPrompt text={WARM_TLC_LLM_PROMPT} />
              </div>
            </div>

            {/* Right: free audit */}
            <div className="rounded-3xl border border-border bg-cream p-6 md:p-8 lg:sticky lg:top-8">
              <div className={eyebrowClass}>3</div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-medium leading-tight">
                Book your free GTM audit
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In a free 30-minute call we review your public-facing go-to-market — and you leave
                with a free end-to-end Warm T.L.C. campaign plan.
              </p>
              <ul className="mt-6 space-y-2.5">
                {auditAreas.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-ink">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 ${buttonClass}`}
              >
                Schedule my free GTM audit <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-5 text-sm text-muted-foreground">Find us at booth #108.</p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
