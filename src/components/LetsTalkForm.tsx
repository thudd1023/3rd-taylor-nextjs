"use client";

import { ArrowRight } from "lucide-react";

type Props = {
  variant?: "light" | "dark";
  source?: string;
};

const LetsTalkForm = ({ variant = "light", source = "website" }: Props) => {
  const dark = variant === "dark";

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
        className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all ${
          dark ? "bg-warm text-ink hover:bg-cream" : "bg-ink text-cream hover:bg-accent"
        }`}
      >
        Send <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};

export default LetsTalkForm;
