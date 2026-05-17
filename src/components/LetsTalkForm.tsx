"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  variant?: "light" | "dark";
};

const LetsTalkForm = ({ variant = "light" }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const dark = variant === "dark";

  const labelCls = dark ? "text-cream/80" : "text-ink/80";
  const inputCls = dark
    ? "bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-warm"
    : "bg-background border-border text-ink placeholder:text-muted-foreground focus:border-accent";

  if (submitted) {
    return (
      <div className={`rounded-3xl p-8 ${dark ? "bg-cream/5 border border-cream/10 text-cream" : "bg-cream border border-border text-ink"}`}>
        <h3 className="font-display text-2xl font-semibold">Thanks — we'll be in touch shortly.</h3>
        <p className={`mt-3 ${dark ? "text-cream/70" : "text-muted-foreground"}`}>
          We review every inquiry personally and reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className={`rounded-3xl p-8 space-y-5 ${dark ? "bg-cream/5 border border-cream/10" : "bg-cream border border-border"}`}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>Name</label>
          <input required type="text" className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`} placeholder="Your name" />
        </div>
        <div>
          <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>Work Email</label>
          <input required type="email" className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`} placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>Company</label>
          <input required type="text" className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`} placeholder="Company name" />
        </div>
        <div>
          <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>I'm interested in</label>
          <select className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`}>
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
        <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${labelCls}`}>What are you trying to solve?</label>
        <textarea rows={4} className={`w-full rounded-2xl border px-5 py-3 text-sm outline-none transition-colors ${inputCls}`} placeholder="A few sentences about your goals or challenges." />
      </div>
      <button
        type="submit"
        className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all ${dark ? "bg-warm text-ink hover:bg-cream" : "bg-ink text-cream hover:bg-accent"}`}
      >
        Send <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};

export default LetsTalkForm;
