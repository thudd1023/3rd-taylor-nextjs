"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import tiffanyImg from "@/assets/tiffany-founder.jpg";

const LIME = "#c8f135";
const BG = "#0d0d0d";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  seniority: "",
  company: "",
  website: "",
  revenue: "",
  agreedToReview: false,
};

const inputCls =
  "w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#c8f135]/60 transition-colors";
const labelCls = "block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5";
const selectCls = "w-full border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c8f135]/60 transition-colors appearance-none cursor-pointer";
const selectStyle = { backgroundColor: "#1c1c1c", color: "#ffffff" };

function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/revenue-table-miami-submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      router.push("/submission-thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>First Name *</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Jane" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Last Name *</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Smith" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Email *</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Role *</label>
        <div className="relative">
          <select name="role" value={form.role} onChange={handleChange} required className={selectCls} style={selectStyle}>
            <option value="" disabled style={selectStyle}>Select your role…</option>
            <option value="Executive Leadership" style={selectStyle}>Executive Leadership</option>
            <option value="Marketing" style={selectStyle}>Marketing</option>
            <option value="Operating Partner (VCs and Investors)" style={selectStyle}>Operating Partner (VCs and Investors)</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/35 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className={labelCls}>Seniority *</label>
        <div className="relative">
          <select name="seniority" value={form.seniority} onChange={handleChange} required className={selectCls} style={selectStyle}>
            <option value="" disabled style={selectStyle}>Select your level…</option>
            <option value="C-suite" style={selectStyle}>C-suite</option>
            <option value="Founder" style={selectStyle}>Founder</option>
            <option value="VP" style={selectStyle}>VP</option>
            <option value="Manager" style={selectStyle}>Manager</option>
            <option value="Individual Contributor" style={selectStyle}>Individual Contributor</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/35 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Company *</label>
          <input name="company" value={form.company} onChange={handleChange} required placeholder="Acme Inc." className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Company Website *</label>
          <input name="website" value={form.website} onChange={handleChange} required placeholder="acme.com" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Annual Company Revenue *</label>
        <div className="relative">
          <select name="revenue" value={form.revenue} onChange={handleChange} required className={selectCls} style={selectStyle}>
            <option value="" disabled style={selectStyle}>Select a range…</option>
            <option value="$1M-$10M" style={selectStyle}>$1M-$10M</option>
            <option value="$11M-$40M" style={selectStyle}>$11M-$40M</option>
            <option value="$40M+" style={selectStyle}>$40M+</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/35 pointer-events-none" />
        </div>
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="agreedToReview"
          name="agreedToReview"
          checked={form.agreedToReview}
          onChange={handleChange}
          required
          className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-[#c8f135]"
        />
        <label htmlFor="agreedToReview" className="text-xs text-white/55 leading-relaxed cursor-pointer">
          I understand attendance is by invitation only and subject to review.
        </label>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={submitting || !form.agreedToReview}
        className="w-full rounded-full py-3.5 text-sm font-semibold transition-opacity disabled:opacity-40"
        style={{ backgroundColor: LIME, color: BG }}
      >
        {submitting ? "Submitting…" : "Submit My Request →"}
      </button>

      <p className="text-xs text-center text-white/35">
        You'll hear from us within 2 business days.
      </p>
    </form>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-semibold text-white">{q}</span>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-white/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-sm text-white/75 leading-relaxed">{a}</p>}
    </div>
  );
}

const faqs = [
  {
    q: "Is this a ticketed event?",
    a: "No. Attendance is by invitation only and subject to a brief review. Submit your request and we'll follow up within two business days.",
  },
  {
    q: "Why is attendance curated?",
    a: "Because the quality of the conversation depends entirely on the quality of the room. We review every request to make sure every seat is worth having.",
  },
  {
    q: "What's the format?",
    a: "Cocktail reception followed by a seated dinner. There's no formal agenda — the conversation is the event.",
  },
  {
    q: "Will there be vendor presentations at dinner?",
    a: "Sponsors are part of what makes the evening possible, and they're treated as contributors to the room — not exhibitors outside of it. Each sponsor gets a brief, structured introduction: who they are, who they serve, and the results they deliver. What you won't find is unsolicited selling from the floor.",
  },
  {
    q: "What's the dress code?",
    a: "Business casual to smart casual. Miami in August — you'll figure it out.",
  },
  {
    q: "Can I bring a colleague?",
    a: "Each request is individual. If you'd like to bring someone specific, mention it in your application and we'll take it into account during our review.",
  },
  {
    q: "I'm interested in sponsorship — how does that work?",
    a: "Sponsorship packages include seats at the table, a structured moment to introduce your company to the room, and varying levels of attendee access and marketing inclusion depending on tier. Three tiers available, five spots total.",
  },
];

export default function RevenueTableMiami() {
  return (
    <>
      <SiteNav />
      <main style={{ backgroundColor: BG }} className="text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 75% 0%, ${LIME}18 0%, transparent 55%)` }}
          />
          <div className="container pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 mb-8">
                  August 13, 2026 · Miami, FL · Invite Only
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium italic leading-[0.93] mb-6">
                  The Revenue<br />Table.
                </h1>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
                  An intimate dinner for the B2B leaders building what's next — without the noise that usually comes with conferences, tradeshows, or typical networking events.
                </p>
                <div className="flex flex-wrap gap-5 mb-10">
                  <div className="flex items-center gap-2 text-sm text-white/75">
                    <Calendar className="h-4 w-4" style={{ color: LIME }} />
                    August 13, 2026
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/75">
                    <MapPin className="h-4 w-4" style={{ color: LIME }} />
                    Miami, FL
                  </div>
                </div>
                <p className="text-xs text-white/45">
                  Interested in becoming a sponsor?{" "}
                  <Link
                    href="/miami-sponsorship"
                    className="underline underline-offset-2 hover:text-white/70 transition-colors"
                    style={{ color: LIME }}
                  >
                    Explore Sponsorship →
                  </Link>
                </p>
              </div>

              {/* Right: form */}
              <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-6 md:p-8">
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: LIME }}>
                  Request Your Seat
                </div>
                <h2 className="font-display text-2xl font-medium leading-tight mb-6 text-white">
                  Your seat at the table is well deserved.
                </h2>
                <RegistrationForm />
              </div>

            </div>
          </div>
        </section>

        {/* ── What This Is ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              The Premise
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8">
              Some of the best conversations in B2B never make it to a conference stage.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-5">
              They happen at dinner — when the agenda is gone, the laptops are closed, and the people around the table are actually worth talking to.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-12">
              The Revenue Table is a deliberately small, invite-only dinner series for B2B marketing leaders, founders, and investors who are building real companies and don't need another conference to prove it. No exhibitor halls. No captive-audience keynotes. No selling from the floor. Just a curated room, an honest conversation, and a table worth sitting at.
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {[
                { label: "Curated Seats", value: "30–40", sub: "Per event" },
                { label: "Attendance", value: "Invite Only", sub: "By request, not ticket purchase" },
                { label: "Sponsors", value: "Curated", sub: "Vetted and introduced — not selling from the floor" },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.04] p-6 md:p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">{s.label}</div>
                  <div className="text-xl font-semibold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-white/55 leading-snug">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Room ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              The Audience
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 max-w-2xl">
              Every seat is filled by someone who actually moves the needle.
            </h2>
            <p className="text-white/70 text-lg mb-16 max-w-2xl">
              Attendance at The Revenue Table isn't bought — it's earned. We curate every guest list by hand to protect the quality of the conversation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: "B2B Marketing Leaders",
                  body: "CMOs, VPs of Marketing, and Heads of Growth at B2B tech companies with $40M–$400M in annual revenue. The operators driving pipeline, brand, and go-to-market strategy.",
                },
                {
                  title: "Founders & CEOs",
                  body: "B2B tech founders and chief executives at companies with $5M–$50M ARR. Operators who've built something real and are thinking hard about what comes next.",
                },
                {
                  title: "VC & Investor Firms",
                  body: "Partners and principals actively investing in B2B tech. The people who see across portfolios and bring a cross-sector view to every conversation.",
                },
              ].map((a) => (
                <div key={a.title} className="rounded-2xl border border-white/15 bg-white/[0.04] p-8">
                  <h3 className="font-semibold text-lg mb-3" style={{ color: LIME }}>{a.title}</h3>
                  <p className="text-white/75 leading-relaxed text-sm">{a.body}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                Industries Represented
              </div>
              <div className="flex flex-wrap gap-2">
                {["SaaS", "FinTech", "MedTech", "AI & ML", "MarTech", "Industrial Tech", "B2B E-Commerce"].map((i) => (
                  <span key={i} className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/75">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── The Experience ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              The Format
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6 max-w-3xl">
              Cocktails. Conversation. Dinner. That's it — and that's the point.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-14 max-w-3xl">
              There's no formal agenda to grind through, no slide decks to sit through, and no awkward moments where the room realizes it's being sold to. The Revenue Table is designed to get out of the way and let the room do what good rooms do best.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: "Cocktail Reception",
                  body: "Arrive, settle in, and start the conversations that don't happen over email.",
                },
                {
                  title: "Curated Dinner",
                  body: "Seated, intimate, and guided by a host prompt that opens the floor to something worth talking about. The conversation takes it from there.",
                },
                {
                  title: "The Follow-Up",
                  body: "Within 48 hours, guests receive a high-quality follow-up that makes it easy to reconnect with the people who mattered most.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-white/15 bg-white/[0.04] p-8">
                  <h3 className="font-semibold text-base mb-3 text-white">{f.title}</h3>
                  <p className="text-white/75 leading-relaxed text-sm">{f.body}</p>
                </div>
              ))}
            </div>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ border: `1px solid ${LIME}30`, background: `${LIME}0A` }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: LIME }}>
                House Rules
              </div>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                The conversation comes first — always. Sponsors are vetted, introduced, and given structured time to share who they are, who they serve, and the results they deliver. Guests are here to connect and exchange, not to be sold to from the floor.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Venue ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              The Setting
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6">
              Giselle. Miami.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              We chose Giselle for the same reason we choose everything about this dinner: because the details matter.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Giselle is one of Miami's most acclaimed restaurants — known for its refined atmosphere, exceptional cuisine, and a dining room that actually feels like a dining room. The kind of setting where conversations slow down enough to go somewhere.
            </p>
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-sm text-white/75">
                <MapPin className="h-4 w-4" style={{ color: LIME }} />
                Miami, FL
              </div>
              <div className="flex items-center gap-2 text-sm text-white/75">
                <Calendar className="h-4 w-4" style={{ color: LIME }} />
                August 13, 2026
              </div>
              <div className="text-sm text-white/50">
                Evening — venue details shared with confirmed guests
              </div>
            </div>
          </div>
        </section>

        {/* ── Behind the Table ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              Hosted By
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-10">
              3rd + Taylor — the agency behind the dinner.
            </h2>
            <div className="grid md:grid-cols-[180px_1fr] gap-10 items-start">
              <Image
                src={tiffanyImg}
                alt="Tiffany Huddleston Nwahiri"
                className="rounded-2xl w-full object-cover"
                width={180}
                height={220}
              />
              <div>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  The Revenue Table is hosted by 3rd + Taylor, a B2B marketing agency that designs and launches campaign systems for lean B2B tech teams.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  We've hosted four events like this in Europe — Paris, London, and Barcelona — because we believe the best business development doesn't happen in a booth. It happens at a table, with the right people, in the right room. This is our first US event, and we're building it the same way we build everything: with intention, curation, and a hard line against anything that wastes the room's time.
                </p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-semibold text-white">Tiffany Huddleston Nwahiri</div>
                  <div className="text-sm text-white/55 mt-1">
                    Founder & CEO, 3rd + Taylor · Host of The Revenue Table
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Registration Form (bottom) ── */}
        <section id="register" className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: LIME }}>
              Request Your Seat
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 text-center">
              Your seat at the table is well deserved.
            </h2>
            <p className="text-white/70 text-lg mb-3 text-center">
              Every application is reviewed before a seat is confirmed. We do this to protect the quality of the room — for you and everyone else in it.
            </p>
            <p className="text-white/45 text-sm mb-12 text-center">
              Seats are limited and filling quickly. If you're interested, submit your request now.
            </p>
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 md:p-10">
              <RegistrationForm />
            </div>
          </div>
        </section>

        {/* ── Sponsor Note ── */}
        <section className="border-b border-white/10 py-16 md:py-20">
          <div className="container max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              For Brands & Sponsors
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-4">
              Want a seat at the table for your brand?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              We offer a limited number of sponsorship packages that give brands meaningful access to the room — with dedicated time to introduce their company, who they serve, and the results they deliver. Three tiers available. Five spots total.
            </p>
            <Link
              href="/miami-sponsorship"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/50 transition-colors"
            >
              Explore Sponsorship Opportunities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-3xl">
            <h2 className="font-display text-4xl font-medium leading-tight mb-12">
              A few things people usually ask.
            </h2>
            <div>
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer CTA Strip ── */}
        <section className="py-24 md:py-32">
          <div className="container max-w-2xl text-center">
            <h2 className="font-display text-5xl md:text-6xl font-medium leading-[0.93] mb-5">
              The table is almost full.
            </h2>
            <p className="text-white/70 text-lg mb-10">
              If you've been thinking about requesting a seat, now is the right time.
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: LIME, color: BG }}
            >
              Request Your Seat <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
