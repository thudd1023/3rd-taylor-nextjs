"use client";

import Link from "next/link";
import { useEffect } from "react";
import { MapPin, Calendar, Users, Star, Check } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const tiers = [
  {
    name: "Silver",
    price: "$2,500",
    available: "2 available",
    featured: false,
    benefits: [
      "Logo on event marketing",
      "Mention in social media promotion",
      "Mention in event invites and calendar event description",
      "1 VIP dinner seat",
    ],
  },
  {
    name: "Platinum",
    price: "$10,000",
    available: "1 available",
    featured: true,
    tag: "Most Exclusive",
    benefits: [
      '"Presented by" title sponsor branding',
      "10-minute keynote presentation",
      "Dedicated pre-event email blast to attendees",
      "4 VIP dinner seats",
      "Full attendee list with contacts 3 days before event",
      "LinkedIn outreach window pre-event",
      "Full attendee list via email post-event",
      "Co-branded post-event recap",
    ],
  },
  {
    name: "Gold",
    price: "$6,500",
    available: "2 available",
    featured: false,
    benefits: [
      "Everything in Silver, plus:",
      "5-minute sponsor spotlight",
      "Logo on day-of event signage and materials",
      "2 VIP dinner seats",
      "Full attendee list with contacts post-event",
      "Exclusive promo offer to attendees",
    ],
  },
];

const audience = [
  {
    title: "CEOs & Founders",
    body: "$1M–$50M annual revenue B2B tech companies actively expanding into the U.S. market. Decision-makers with budget authority evaluating partnerships and tools for growth.",
  },
  {
    title: "Marketing Leaders",
    body: "CMOs and VPs of Marketing at $10M–$400M ARR companies driving growth strategy. Focused on pipeline generation, brand building, and U.S. market entry.",
  },
  {
    title: "GTM Executives",
    body: "Revenue and sales leaders evaluating U.S. go-to-market approaches. Hands-on operators looking for tools, strategies, and partners to accelerate growth.",
  },
];

const SponsorForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/Y5bMLTmJSNAz5e2x9u2J"
      style={{ width: "100%", minHeight: "600px", border: "none", borderRadius: "12px" }}
      id="inline-Y5bMLTmJSNAz5e2x9u2J"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Seine to San Francisco Sponsors"
      data-height="undefined"
      data-layout-iframe-id="inline-Y5bMLTmJSNAz5e2x9u2J"
      data-form-id="Y5bMLTmJSNAz5e2x9u2J"
      title="Seine to San Francisco Sponsors"
    />
  );
};

const SeineToSF = () => (
  <>
    <SiteNav />
    <main className="bg-[#0d0d0d] text-white min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c8f135_0%,_transparent_50%)] opacity-10 pointer-events-none" />
        <div className="container pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 mb-8">
                Sponsorship Prospectus · June 2026
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6">
                From the Seine<br />
                <em className="italic text-[#c8f135]">to San Francisco.</em>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                An exclusive dinner for 30–50 hand-picked B2B tech leaders during VivaTech Week in Paris — where Europe's most ambitious founders meet the people helping them break into the U.S.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Calendar className="h-4 w-4 text-[#c8f135]" />
                  June 18, 2026
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-[#c8f135]" />
                  Paris, France · VivaTech Week
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Users className="h-4 w-4 text-[#c8f135]" />
                  30–50 Curated Attendees
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Star className="h-4 w-4 text-[#c8f135]" />
                  4th Edition
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Badge placeholder — replace src with seine-to-sf-badge.png once added to assets */}
                <img
                  src="/seine-to-sf-badge.png"
                  alt="From the Seine to San Francisco — 3rd + Taylor"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">The Opportunity</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8">
            This is not a trade show.<br />It's a seat at the table.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-6">
            3rd + Taylor Agency is hosting its fourth exclusive dinner in Paris — its third during VivaTech Week — bringing together 30–50 hand-picked B2B tech leaders for an evening of conversation, curated insights, cocktails, and private dining.
          </p>
          <p className="text-lg text-white/60 leading-relaxed mb-12">
            After three events across London and Paris in 2025, we are scaling the format and inviting sponsors to be part of the experience. Sponsors become part of the evening — with dedicated time to present, direct access to attendees, and the ability to offer exclusive promotions to the room.
          </p>
          <div className="grid md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              { label: "Evening Format", value: "Cocktails · Spotlights · Dinner" },
              { label: "Attendees", value: "30–50 curated leaders" },
              { label: "Sponsorships", value: "5 available total" },
              { label: "Edition", value: "4th (3rd in Paris)" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 p-6 md:p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">{stat.label}</div>
                <div className="text-base font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's in the Room */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="container">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">The Audience</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 max-w-2xl">
            Every seat is filled by someone with authority and intent.
          </h2>
          <p className="text-white/50 text-lg mb-16 max-w-2xl">
            Attendance is curated — not sold. No badge scanning. No trade show noise. Just qualified leaders with budget authority in an intimate setting.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {audience.map((a) => (
              <div key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="font-semibold text-lg mb-3 text-[#c8f135]">{a.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{a.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Industries Represented</div>
            <div className="flex flex-wrap gap-2">
              {["SaaS", "FinTech", "MedTech", "MarTech", "AI & ML", "Blockchain", "Web3", "Cybersecurity", "CleanTech"].map((i) => (
                <span key={i} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="container">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">Sponsorship Packages</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4">
            Five sponsorships. That's it.
          </h2>
          <p className="text-white/50 text-lg mb-16 max-w-2xl">
            Packages can be customized to align with your goals. Reach out to discuss the right fit.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                  tier.featured
                    ? "bg-[#c8f135] text-[#0d0d0d]"
                    : "border border-white/10 bg-white/5 text-white"
                }`}
              >
                {tier.tag && (
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0d0d0d]/20 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6 self-start">
                    {tier.tag}
                  </div>
                )}
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${tier.featured ? "text-[#0d0d0d]/60" : "text-white/40"}`}>
                  {tier.name} Sponsor
                </div>
                <div className="font-display text-5xl font-medium mb-1">{tier.price}</div>
                <div className={`text-sm mb-8 ${tier.featured ? "text-[#0d0d0d]/60" : "text-white/40"}`}>
                  {tier.available}
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm">
                      <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-[#0d0d0d]" : "text-[#c8f135]"}`} />
                      <span className={tier.featured ? "text-[#0d0d0d]/80" : "text-white/70"}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4 text-center">Reserve Your Spot</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 text-center">
            Let's build something together.
          </h2>
          <p className="text-white/50 text-lg mb-12 text-center">
            Complete the form below and Tiffany will follow up with the full sponsorship deck and next steps.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <SponsorForm />
          </div>
          <p className="mt-8 text-center text-sm text-white/40">
            Questions? Email <a href="mailto:tiffany.nwahiri@3rdandtaylor.com" className="text-[#c8f135] hover:underline">tiffany.nwahiri@3rdandtaylor.com</a>
          </p>
        </div>
      </section>

    </main>
    <SiteFooter />
  </>
);

export default SeineToSF;
