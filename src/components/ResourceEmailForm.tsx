"use client";

import { useState } from "react";

export default function ResourceEmailForm({
  resourceSlug,
  resourceTitle,
}: {
  resourceSlug: string;
  resourceTitle: string;
}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/resource-email-deliver`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, firstName, resourceSlug, resourceTitle }),
        },
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="text-2xl mb-2">✓</div>
        <p className="font-semibold text-ink">Check your inbox.</p>
        <p className="text-sm text-muted-foreground mt-1">
          We&apos;ve sent <strong>{resourceTitle}</strong> to {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink/50 mb-1.5">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Jane"
            required
            className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink/50 mb-1.5">
            Work Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            required
            className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-accent text-white py-3 text-sm font-semibold hover:bg-accent/90 transition-opacity disabled:opacity-40"
      >
        {submitting ? "Sending…" : "Email me this guide →"}
      </button>
    </form>
  );
}
