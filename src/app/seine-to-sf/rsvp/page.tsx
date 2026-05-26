"use client";

import { useEffect, useRef, useId } from "react";
import { MapPin, Calendar, Users, Star, Wine, Mic, MessageSquare, Check } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const SCRIPT_SRC = "https://js.hsforms.net/forms/embed/44715546.js";
const PORTAL_ID = "44715546";
const FORM_ID = "d554838d-a71c-4143-af41-019380870ce3";
const REGION = "na1";

const loadScript = (): Promise<void> =>
  new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") return resolve();
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("HubSpot script failed")));
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.defer = true;
    script.onload = () => { script.dataset.loaded = "true"; resolve(); };
    script.onerror = () => reject(new Error("HubSpot script failed"));
    document.body.appendChild(script);
  });

const RSVPForm = ({ prefix }: { prefix: string }) => {
  const instanceId = useId().replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    const formFrame = document.createElement("div");
    formFrame.className = "hs-form-frame";
    formFrame.dataset.region = REGION;
    formFrame.dataset.formId = FORM_ID;
    formFrame.dataset.portalId = PORTAL_ID;
    formFrame.dataset.instanceId = `${prefix}-${instanceId}`;
    ref.current.appendChild(formFrame);
    loadScript().catch(() => undefined);
    return () => { formFrame.remove(); };
  }, [instanceId, prefix]);

  return <div ref={ref} className="min-h-[400px]" />;
};

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

const evening = [
  {
    icon: Wine,
    title: "Welcome Cocktails",
    body: "Arrive, connect, and settle in. A relaxed opening reception with curated drinks and introductions.",
  },
  {
    icon: Mic,
    title: "Sponsor Spotlights",
    body: "Brief, valuable insights from our sponsors — no sales pitches, just tools and strategies that matter to this room.",
  },
  {
    icon: MessageSquare,
    title: "Private Dinner",
    body: "An intimate seated dinner designed for real conversation. Meet the people in the room, not just the ones on stage.",
  },
];

export default function SeineToSFRSVP() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#0d0d0d] text-white min-h-screen">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c8f135_0%,_transparent_50%)] opacity-10 pointer-events-none" />
          <div className="container pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 mb-8">
                  RSVP · June 2026
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6">
                  From the Seine<br />
                  <em className="italic text-[#c8f135]">to San Francisco.</em>
                </h1>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                  An exclusive dinner for 30–50 hand-picked B2B tech leaders during VivaTech Week in Paris. Request your seat below — attendance is curated, not sold.
                </p>
                <div className="flex flex-wrap gap-6 mb-10">
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
                <div className="relative w-40 h-40">
                  <img
                    src="/seine-to-sf-badge.png"
                    alt="From the Seine to San Francisco — 3rd + Taylor"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              </div>

              {/* Hero RSVP form card */}
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#0d0d0d]/50 mb-2">
                  Request Your Seat
                </div>
                <h2 className="font-display text-2xl font-medium leading-tight mb-2 text-[#0d0d0d]">
                  Attendance is curated,<br />not sold.
                </h2>
                <p className="text-sm text-[#0d0d0d]/60 mb-6">
                  Complete the form and we&apos;ll follow up within 48 hours to confirm your invitation.
                </p>
                <RSVPForm prefix="rsvp-hero" />
              </div>
            </div>
          </div>
        </section>

        {/* About the Event */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">About the Event</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8">
              This is not a conference.<br />It&apos;s a dinner worth flying for.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              3rd + Taylor Agency is hosting its fourth exclusive dinner in Paris — its third during VivaTech Week — bringing together 30–50 hand-picked B2B tech leaders for an evening of conversation, curated insights, cocktails, and private dining.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-12">
              After three events across London and Paris in 2025, we&apos;ve built a format that actually works: small enough to have real conversations, curated enough that every person at the table is worth knowing, and relaxed enough that something real gets said.
            </p>
            <div className="grid md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {[
                { label: "Evening Format", value: "Cocktails · Spotlights · Dinner" },
                { label: "Attendees", value: "30–50 curated leaders" },
                { label: "Location", value: "Paris, VivaTech Week" },
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

        {/* Evening Format */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">The Evening</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 max-w-2xl">
              A night designed around real conversation.
            </h2>
            <p className="text-white/50 text-lg mb-16 max-w-2xl">
              No panels. No badge scanning. Just curated people, curated conversation, and a meal worth staying for.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {evening.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <item.icon className="h-6 w-6 text-[#c8f135] mb-4" />
                  <h3 className="font-semibold text-lg mb-3 text-white">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Attends */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">Who Attends</div>
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

        {/* What You Get */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">What to Expect</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-12">
              What you leave with.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Direct access to 30–50 decision-makers in a single evening",
                "Introductions to U.S. market operators and growth partners",
                "Off-the-record conversation you won&apos;t find on the conference floor",
                "Curated insights from sponsor spotlights built for this audience",
                "A seat at the table — not a spot in the crowd",
                "Post-event connections with attendees who actually followed up",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Check className="h-4 w-4 text-[#c8f135] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom RSVP Form */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4 text-center">Request Your Seat</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 text-center">
              Attendance is curated,<br />not sold.
            </h2>
            <p className="text-white/50 text-lg mb-12 text-center max-w-xl mx-auto">
              Complete the form and we&apos;ll follow up within 48 hours to confirm your invitation.
            </p>
            <div className="rounded-3xl overflow-hidden bg-white p-6 md:p-10">
              <RSVPForm prefix="rsvp-bottom" />
            </div>
            <p className="mt-8 text-center text-sm text-white/40">
              Questions? Email{" "}
              <a href="mailto:tiffany.nwahiri@3rdandtaylor.com" className="text-[#c8f135] hover:underline">
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
