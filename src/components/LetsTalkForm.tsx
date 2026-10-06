"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  variant?: "light" | "dark";
  source?: string;
};

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

// Load api.js once, resolving when window.turnstile is ready. Explicit
// rendering (instead of the implicit .cf-turnstile scan) works no matter when
// the form mounts relative to the script, including client-side navigation.
let turnstileLoader: Promise<TurnstileApi> | null = null;
function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!turnstileLoader) {
    turnstileLoader = new Promise<TurnstileApi>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = TURNSTILE_SRC;
      script.async = true;
      script.onload = () =>
        window.turnstile ? resolve(window.turnstile) : reject(new Error("turnstile missing"));
      script.onerror = () => reject(new Error("turnstile script failed to load"));
      document.head.appendChild(script);
    }).catch((err) => {
      turnstileLoader = null;
      throw err;
    });
  }
  return turnstileLoader as Promise<TurnstileApi>;
}

const LetsTalkForm = ({ variant = "light", source = "website" }: Props) => {
  const dark = variant === "dark";
  const hasTurnstile = !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const [utms, setUtms] = useState({
    utm_source: "", utm_medium: "", utm_campaign: "", utm_term: "", utm_content: "",
  });
  // Native form POST with no submit handler — if Turnstile's async check
  // hasn't finished when the button is clicked, cf-turnstile-response is
  // empty and the server correctly (but silently) rejects it, same as a
  // bot. Disabling submit until Turnstile confirms closes that race.
  const [turnstileReady, setTurnstileReady] = useState(!hasTurnstile);
  const [turnstileFailed, setTurnstileFailed] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setUtms({
      utm_source:   p.get("utm_source")   ?? "",
      utm_medium:   p.get("utm_medium")   ?? "",
      utm_campaign: p.get("utm_campaign") ?? "",
      utm_term:     p.get("utm_term")     ?? "",
      utm_content:  p.get("utm_content")  ?? "",
    });
  }, []);

  useEffect(() => {
    if (!hasTurnstile || !turnstileRef.current) return;
    let widgetId: string | null = null;
    let cancelled = false;
    // The server rejects submissions without a valid token, so never enable
    // submit on failure — ask the visitor to retry instead of dropping their note.
    const fail = (code?: unknown) => {
      console.error("[LetsTalkForm] Turnstile error:", code);
      setTurnstileReady(false);
      setTurnstileFailed(true);
    };
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !turnstileRef.current) return;
        widgetId = ts.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          theme: dark ? "dark" : "light",
          callback: () => {
            setTurnstileReady(true);
            setTurnstileFailed(false);
          },
          "expired-callback": () => setTurnstileReady(false),
          "error-callback": fail,
        });
      })
      .catch(fail);
    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [hasTurnstile, dark]);

  const labelCls = dark ? "text-cream/80" : "text-ink/80";
  const inputCls = dark
    ? "bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-warm"
    : "bg-background border-border text-ink placeholder:text-muted-foreground focus:border-accent";

  return (
    <form
      action="/api/lets-talk"
      method="POST"
      className={`rounded-3xl p-8 space-y-5 ${dark ? "bg-cream/5 border border-cream/10" : "bg-cream border border-border"}`}
    >
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="utm_source"   value={utms.utm_source} />
      <input type="hidden" name="utm_medium"   value={utms.utm_medium} />
      <input type="hidden" name="utm_campaign" value={utms.utm_campaign} />
      <input type="hidden" name="utm_term"     value={utms.utm_term} />
      <input type="hidden" name="utm_content"  value={utms.utm_content} />
      {/* Honeypot — invisible to humans, bots fill it in */}
      <input
        type="text"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />

      {hasTurnstile && <div ref={turnstileRef} />}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>
            Name
          </label>
          <input
            required
            type="text"
            name="full_name"
            autoComplete="name"
            className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>
            Work Email
          </label>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>
            Company
          </label>
          <input
            required
            type="text"
            name="company"
            autoComplete="organization"
            className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`}
            placeholder="Company name"
          />
        </div>
        <div>
          <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>
            I&apos;m interested in
          </label>
          <select
            name="interest"
            className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`}
          >
            <option>Campaign Engine</option>
            <option>Campaign Blueprint</option>
            <option>Revenue Growth Audit</option>
            <option>Add-On Services</option>
            <option>Retained Marketing Team</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>
          What are you trying to solve?
        </label>
        <textarea
          name="message"
          rows={4}
          className={`w-full rounded-2xl border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`}
          placeholder="A few sentences about your goals or challenges."
        />
      </div>

      <button
        type="submit"
        disabled={!turnstileReady}
        className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
          dark ? "bg-warm text-ink hover:bg-cream" : "bg-ink text-cream hover:bg-accent"
        }`}
      >
        {turnstileReady ? "Send" : turnstileFailed ? "Verification failed" : "Verifying…"}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
      {turnstileFailed && (
        <p className={`text-sm ${dark ? "text-cream/80" : "text-ink/80"}`}>
          We couldn&apos;t verify your browser. Please refresh the page and try again, or email us directly.
        </p>
      )}
    </form>
  );
};

export default LetsTalkForm;
