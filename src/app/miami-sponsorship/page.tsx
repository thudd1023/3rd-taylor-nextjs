"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MapPin, Calendar, Users, Star, Check, ChevronDown, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const LIME = "#c8f135";
const BG = "#0d0d0d";

const PROSPECTUS_URL =
  "https://docs.google.com/presentation/d/17Ta11j_zq0Jzht4PufHQWChnQjM3feGR9Db7J_aWkJs/edit?usp=sharing";

const tiers = [
  {
    id: "Conversation Starter",
    label: "Tier 01",
    name: "Conversation Starter",
    price: "$2,000",
    available: "3 available",
    featured: false,
    description:
      "Brand association in the right room. Ideal for companies who want to be seen here — and act on the connections after the evening.",
    benefits: [
      "1 sponsor seat at the table",
      "Logo on printed menus and day-of materials",
      "Included in all pre-event marketing (paid ads, 10,000+ email database, outbound)",
      "LinkedIn profiles of all attendees delivered post-event",
      "Logo on landing page and post-event recap email",
      "Option to contribute one value-add resource in post-event follow-up",
    ],
  },
  {
    id: "Seat at the Table",
    label: "Tier 02",
    name: "Seat at the Table",
    price: "$4,500",
    available: "2 available",
    featured: false,
    description:
      "A meaningful presence without the headline commitment. Your brand is in the room, your people are at the table, and the right doors open after.",
    benefits: [
      "Everything in Conversation Starter, plus:",
      "3 sponsor-controlled seats (bring prospects, customers, or colleagues)",
      "Branded standing display in the private room",
      "Full attendee list (name, title, company) delivered after event",
      "1 warm pre-event introduction hand-selected by Tiffany",
    ],
  },
  {
    id: "Table Architect",
    label: "Tier 03 — Presenting Sponsor",
    name: "Table Architect",
    price: "$10,000",
    available: "1 available — exclusive",
    featured: true,
    tag: "Most Exclusive",
    description:
      "The headline partner. Your name is co-branded with the evening itself. Reserved for one brand that belongs at the head of this table.",
    benefits: [
      "Everything in Seat at the Table, plus:",
      "4 sponsor-controlled seats",
      "7-minute Sponsor Spotlight — the only speaking slot of the evening",
      "Full attendee list delivered before the event",
      "Co-branded event name across all touchpoints",
      "One co-branded content piece post-event",
      "3 warm pre-event introductions hand-selected by Tiffany",
    ],
  },
];

const whyReasons = [
  {
    title: "The room is your ICP.",
    body: "Every attendee is a senior decision-maker in B2B tech — marketing leaders controlling budget, founders making vendor decisions, and investors who influence both. This isn't a broad audience. It's a precise one.",
  },
  {
    title: "No noise. No competition.",
    body: "You're not one booth among fifty. Sponsorship slots are strictly limited, which means your brand has genuine share of voice — before, during, and after the evening.",
  },
  {
    title: "The format works in your favor.",
    body: "Family-style dinner creates longer, more natural conversations than any cocktail hour or panel ever could. Relationships that take three conference appearances to build happen in one evening here.",
  },
  {
    title: "You can bring your own guests.",
    body: "Sponsors can fill their seats with the prospects or customers they most want to deepen relationships with — turning a sponsorship into a client experience.",
  },
  {
    title: "The follow-up is built in.",
    body: "Every attendee receives a curated post-event recap within 48 hours. Your brand is part of that touchpoint — arriving in their inbox at exactly the moment the evening is still fresh.",
  },
];

const schedule = [
  { time: "6:30", title: "Cocktails at the main bar", body: "Arrivals begin. Handcrafted cocktails and first introductions." },
  { time: "7:00", title: "Move to the private room", body: "Passed hors d'oeuvres as the room comes together." },
  { time: "7:30", title: "Dinner seating & sponsor introductions", body: "Guests are seated. The Sponsor Spotlight opens the evening." },
  { time: "7:45", title: "Family-style dinner", body: "Conversation and connections through dessert, until 9:00 PM." },
];

const inputCls =
  "w-full border border-white/15 rounded-xl px-4 py-3 text-sm placeholder:text-white/35 focus:outline-none focus:border-[#c8f135]/60 transition-colors";
const inputStyle = { backgroundColor: "#1c1c1c", color: "#ffffff" };
const labelCls = "block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5";
const selectStyle = { backgroundColor: "#1c1c1c", color: "#ffffff" };
const selectCls =
  "w-full border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c8f135]/60 transition-colors appearance-none cursor-pointer";

const initialForm = {
  firstName: "",
  lastName: "",
  title: "",
  company: "",
  email: "",
  website: "",
  tierInterest: "",
};

function SponsorForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/miami-sponsorship-submit`,
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
          <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Jane" className={inputCls} style={inputStyle} />
        </div>
        <div>
          <label className={labelCls}>Last Name *</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Smith" className={inputCls} style={inputStyle} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Title *</label>
        <input name="title" value={form.title} onChange={handleChange} required placeholder="VP of Marketing" className={inputCls} style={inputStyle} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Company *</label>
          <input name="company" value={form.company} onChange={handleChange} required placeholder="Acme Inc." className={inputCls} style={inputStyle} />
        </div>
        <div>
          <label className={labelCls}>Company Website *</label>
          <input name="website" value={form.website} onChange={handleChange} required placeholder="acme.com" className={inputCls} style={inputStyle} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Work Email *</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className={inputCls} style={inputStyle} />
      </div>
      <div>
        <label className={labelCls}>Sponsorship Tier of Interest *</label>
        <div className="relative">
          <select name="tierInterest" value={form.tierInterest} onChange={handleChange} required className={selectCls} style={selectStyle}>
            <option value="" disabled style={selectStyle}>Select a tier…</option>
            <option value="Conversation Starter — $2,000" style={selectStyle}>Conversation Starter — $2,000</option>
            <option value="Seat at the Table — $4,500" style={selectStyle}>Seat at the Table — $4,500</option>
            <option value="Table Architect — $10,000 (Presenting Sponsor)" style={selectStyle}>Table Architect — $10,000 (Presenting Sponsor)</option>
            <option value="Not sure yet — send me the prospectus" style={selectStyle}>Not sure yet — send me the prospectus</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" style={{ color: "rgba(255,255,255,0.35)" }} />
        </div>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full py-3.5 text-sm font-semibold transition-opacity disabled:opacity-40"
        style={{ backgroundColor: LIME, color: BG }}
      >
        {submitting ? "Submitting…" : "Submit Inquiry →"}
      </button>
      <p className="text-xs text-center text-white/35">
        We'll follow up within 24 hours to confirm availability.
      </p>
    </form>
  );
}

export default function MiamiSponsorship() {
  return (
    <>
      <SiteNav />
      <main style={{ backgroundColor: BG }} className="text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 75% 0%, ${LIME}15 0%, transparent 55%)` }}
          />
          <div className="container pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 mb-8">
                  Sponsorship Prospectus · Miami · August 13, 2026
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.93] mb-6">
                  The Revenue<br />
                  <em className="italic" style={{ color: LIME }}>Table.</em>
                </h1>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
                  An intimate, invite-only dinner for 30–40 hand-picked B2B tech leaders in Miami — where the right room meets the right conversation.
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
                  <div className="flex items-center gap-2 text-sm text-white/75">
                    <Users className="h-4 w-4" style={{ color: LIME }} />
                    30–40 Curated Attendees
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/75">
                    <Star className="h-4 w-4" style={{ color: LIME }} />
                    5th Edition
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-6 md:p-8">
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: LIME }}>
                  Sponsor Inquiry
                </div>
                <h2 className="font-display text-2xl font-medium leading-tight mb-2 text-white">
                  Express your interest and get the full prospectus.
                </h2>
                <p className="text-sm text-white/60 mb-6">
                  Complete the form to share your interest and we'll send you the complete sponsorship prospectus — including package details, audience breakdown, and pricing. Packages are limited and filled first-come, first-served.
                </p>
                <SponsorForm />
              </div>

            </div>
          </div>
        </section>

        {/* ── The Opportunity ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              The Opportunity
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8">
              This is not a trade show.<br />It's a seat at the table.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-5">
              3rd + Taylor is hosting its 5th exclusive dinner — and first US event — in Miami on August 13. After events in Barcelona, London, and Paris, we're bringing The Revenue Table to America, inviting 30–40 hand-picked B2B tech leaders for an evening of conversation, cocktails, and private dining at Giselle.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-12">
              Sponsors don't stand outside the experience. They become part of it — with dedicated time to present, direct access to attendees, and the kind of introductions that don't happen at booths.
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {[
                { label: "Guests", value: "30–40", sub: "Curated attendees" },
                { label: "Format", value: "Cocktails · Spotlights · Dinner", sub: "Invite only · no tickets sold" },
                { label: "Packages", value: "3 tiers", sub: "Limited availability" },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.04] p-6 md:p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">{s.label}</div>
                  <div className="text-base font-semibold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-white/55">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Sponsor ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              Why Sponsor
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4">
              Most sponsorships put your logo in front of a thousand people who aren't your buyer.
            </h2>
            <p className="text-lg text-white/70 mb-14 italic">
              This one puts your brand in front of 30–40 who almost certainly are.
            </p>
            <div className="space-y-6">
              {whyReasons.map((r) => (
                <div key={r.title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                  <ArrowRight className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: LIME }} />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{r.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who's in the Room ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              Who's in the Room
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 max-w-2xl">
              Every seat is filled by someone with authority and intent.
            </h2>
            <p className="text-white/70 text-lg mb-16 max-w-2xl">
              No badge scanning. No trade show noise. Just qualified leaders with budget authority in an intimate setting.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "B2B Marketing Leaders", body: "VPs and CMOs at B2B tech companies with $40M–$400M in annual revenue. The operators driving pipeline, brand, and go-to-market strategy." },
                { title: "Founders & CEOs", body: "B2B tech founders scaling from $5M to $50M ARR. Decision-makers with budget authority evaluating partnerships and tools for growth." },
                { title: "Investors & VCs", body: "Venture capital and growth investors active in B2B tech. Partners and principals who see across portfolios and influence purchase decisions." },
              ].map((a) => (
                <div key={a.title} className="rounded-2xl border border-white/15 bg-white/[0.04] p-8">
                  <h3 className="font-semibold text-lg mb-3" style={{ color: LIME }}>{a.title}</h3>
                  <p className="text-white/75 leading-relaxed text-sm">{a.body}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">Industries Represented</div>
              <div className="flex flex-wrap gap-2">
                {["SaaS", "FinTech", "MedTech", "MarTech", "AI & ML", "Blockchain", "Cybersecurity", "CleanTech"].map((i) => (
                  <span key={i} className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/75">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── The Evening ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              The Evening
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4">
              August 13 at Giselle, Miami.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-12">
              A rooftop venue in downtown Miami with private dining rooms, panoramic skyline views, and a menu blending French, Mediterranean, and Asian cuisine.
            </p>
            <div className="space-y-px rounded-2xl overflow-hidden border border-white/10">
              {schedule.map((s) => (
                <div key={s.time} className="flex gap-6 bg-white/[0.04] p-6 md:p-8 items-start">
                  <div className="text-xl font-semibold flex-shrink-0 w-14" style={{ color: LIME }}>{s.time}</div>
                  <div>
                    <div className="font-semibold text-white mb-1">{s.title}</div>
                    <div className="text-sm text-white/65">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sponsorship Packages ── */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: LIME }}>
              Sponsorship Packages
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4">
              Three packages. That's it.
            </h2>
            <p className="text-white/65 text-lg mb-16 max-w-2xl">
              Each is designed for a different level of presence and investment. All are limited. The presenting sponsor tier is exclusive.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                    tier.featured ? "" : "border border-white/10 bg-white/[0.04]"
                  }`}
                  style={tier.featured ? { backgroundColor: LIME, color: BG } : {}}
                >
                  {tier.tag && (
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6 self-start"
                      style={{ backgroundColor: "rgba(0,0,0,0.15)", color: BG }}
                    >
                      {tier.tag}
                    </div>
                  )}
                  <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${tier.featured ? "opacity-60" : "text-white/45"}`}>
                    {tier.label}
                  </div>
                  <div className="font-display text-5xl font-medium mb-1">{tier.price}</div>
                  <div className={`text-sm mb-3 ${tier.featured ? "opacity-60" : "text-white/45"}`}>
                    {tier.available}
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${tier.featured ? "opacity-75" : "text-white/65"}`}>
                    {tier.description}
                  </p>
                  <ul className="space-y-3 flex-1">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex gap-3 text-sm">
                        <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${tier.featured ? "opacity-80" : ""}`}
                          style={tier.featured ? {} : { color: LIME }} />
                        <span className={tier.featured ? "opacity-80" : "text-white/75"}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <p className="text-sm text-white/65 leading-relaxed">
                <strong className="text-white">A note on guest seats.</strong>{" "}
                Sponsors are encouraged to use their seats to bring prospects, customers, or important relationships. To protect the peer-to-peer energy of the room, we ask that sponsoring companies limit their own team members to no more than 2 seats. This is a guideline, not a hard rule, and we're happy to discuss.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom Form ── */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: LIME }}>
              Reserve Your Spot
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 text-center">
              Let's build something together.
            </h2>
            <p className="text-white/65 text-lg mb-12 text-center">
              Complete the form below and Tiffany will follow up within 24 hours to confirm availability and next steps.
            </p>
            <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-6 md:p-10">
              <SponsorForm />
            </div>
            <p className="mt-8 text-center text-sm text-white/40">
              Questions? Email{" "}
              <a href="mailto:tiffany.nwahiri@3rdandtaylor.com" className="hover:underline" style={{ color: LIME }}>
                tiffany.nwahiri@3rdandtaylor.com
              </a>
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
