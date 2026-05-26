"use client";

import Link from "next/link";
import { useEffect, useRef, useId } from "react";
import { Wine, Sparkles, UtensilsCrossed, Users } from "lucide-react";
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

  return <div ref={ref} className="min-h-[500px]" />;
};

export default function SeineToSFRSVP() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#0d0d0d] text-white min-h-screen">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c8f135_0%,_transparent_60%)] opacity-10 pointer-events-none" />
          <div className="container pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left: event info */}
              <div>
                <div className="w-24 h-24 mb-8">
                  <img
                    src="/seine-to-sf-badge.png"
                    alt="From the Seine to San Francisco — 3rd + Taylor"
                    className="w-full h-full object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 mb-8">
                  Invitation · VivaTech Week 2026
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6">
                  From the Seine<br />
                  <em className="italic text-[#c8f135]">to San Francisco.</em>
                </h1>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                  An evening of conversation, cocktails &amp; private dining for bold B2B tech leaders scaling into the U.S.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#c8f135] mb-2">When</div>
                    <div className="font-semibold text-white text-sm">Thursday, June 18, 2026</div>
                    <div className="text-white/50 text-xs mt-1">VivaTech Week · 19:15</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#c8f135] mb-2">Where</div>
                    <div className="font-semibold text-white text-sm">Paris, France</div>
                    <div className="text-white/50 text-xs mt-1">Venue details upon RSVP</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#c8f135]/20 bg-[#c8f135]/5 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-[#c8f135]" />
                    <span className="text-sm font-semibold text-white">Our most impactful edition yet.</span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    We&apos;re curating an exceptional evening with a select group of sponsors enhancing the experience.{" "}
                    <Link href="/paris-dinner" className="text-[#c8f135] hover:underline">Become a sponsor →</Link>
                  </p>
                </div>
              </div>

              {/* Right: RSVP form */}
              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#0d0d0d]/50 mb-2">Reserve Your Seat</div>
                <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight mb-6 text-[#0d0d0d]">
                  R.S.V.P. — June 18, 2026
                </h2>
                <RSVPForm prefix="rsvp-hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Why This Event */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-6">Why This Event?</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-10">
              You&apos;ve proven success.<br />
              You&apos;re ready to scale.<br />
              <em className="italic text-white/40">Now what?</em>
            </h2>
            <div className="space-y-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              <p>
                If you&apos;ve been thinking about U.S. expansion — or you&apos;re already trying to break in — it&apos;s time to connect with the people who can help you scale smarter.
              </p>
              <p className="italic text-white/50">
                3rd + Taylor Agency is a U.S.-based revenue marketing firm that helps B2B tech companies sharpen their messaging, generate predictable pipeline, and build revenue in the U.S.
              </p>
              <p>
                We&apos;re returning to Paris during VivaTech Week for our fourth gathering — and our most impactful one yet — bringing together founders, marketers, and growth leaders ready to do the same. This isn&apos;t a networking mixer. It&apos;s a curated experience built for high-growth companies.
              </p>
            </div>
          </div>
        </section>

        {/* The Evening */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">The Evening</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-16">
              One night. Three acts.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  Icon: Wine,
                  time: "19:15 – 20:00",
                  title: "Cocktail Hour",
                  body: "Kick off the evening with cocktails and hors d'oeuvres alongside fellow B2B tech leaders. Meet the 3rd + Taylor team and our featured sponsors in an intimate Paris setting.",
                },
                {
                  Icon: Sparkles,
                  time: "Throughout",
                  title: "Sponsor Spotlights",
                  body: "Hear short, curated insights from this edition's sponsors — partners helping ambitious B2B brands accelerate U.S. growth. No pitch deck noise.",
                },
                {
                  Icon: UtensilsCrossed,
                  time: "20:00 – 21:45",
                  title: "7-Course Tasting Menu",
                  body: "For B2B tech leaders committed to U.S. expansion, we transition to an exquisite tasting dinner with wine pairing. Reserved seating only.",
                },
              ].map(({ Icon, time, title, body }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#c8f135]/15 mb-5">
                    <Icon className="h-5 w-5 text-[#c8f135]" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">{time}</div>
                  <h3 className="font-semibold text-lg text-white mb-3">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who's Invited */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">Who&apos;s Invited</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-16 max-w-3xl">
              Bold B2B tech leaders ready to win in the U.S.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "CEOs & Founders",
                  body: "$10M–$50M revenue B2B tech companies actively planning or executing U.S. market entry.",
                },
                {
                  title: "Marketing Leaders",
                  body: "CMOs and VPs driving pipeline, brand, and U.S. growth strategy at $50M–$400M ARR companies.",
                },
                {
                  title: "GTM & Sales Leaders",
                  body: "Revenue operators evaluating tools, partners, and playbooks to accelerate U.S. growth.",
                },
                {
                  title: "VCs & Operating Partners",
                  body: "Investors helping European portfolio companies break into the U.S. market.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex-shrink-0">
                    <Users className="h-5 w-5 text-[#c8f135] mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Your Host */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">About Your Host</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-8">
              Tiffany Nwahiri
            </h2>
            <div className="space-y-5 text-lg text-white/60 leading-relaxed mb-10">
              <p>
                Tiffany is a B2B growth expert with 15+ years scaling SaaS and tech companies through data-driven marketing. She partners with CEOs and GTM leaders to build brands that drive revenue across FinTech, MedTech, MarTech, Blockchain, Web3, and AI.
              </p>
              <p>
                As Founder &amp; CEO of 3rd + Taylor Agency, she helps leaders hit their revenue targets through strategic marketing and flawless execution.
              </p>
            </div>
            <a
              href="#rsvp-bottom"
              className="inline-flex items-center gap-2 rounded-full bg-[#c8f135] px-6 py-3 text-sm font-semibold text-[#0d0d0d] hover:bg-[#d4f54a] transition-colors"
            >
              Reserve your seat →
            </a>
          </div>
        </section>

        {/* Bottom RSVP Form */}
        <section id="rsvp-bottom" className="py-20 md:py-28">
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
