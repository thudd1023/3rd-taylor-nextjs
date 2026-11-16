"use client";

import { Wine, MessageCircle, UtensilsCrossed, Users, MapPin, Lock } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LetsTalkForm from "@/components/LetsTalkForm";

const RSVPForm = () => <LetsTalkForm source="seine-to-sf-adopt-ai-rsvp" layout="event" />;

export default function SeineToSFAdoptAI() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#0d0d0d] text-white min-h-screen">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c8f135_0%,_transparent_60%)] opacity-10 pointer-events-none" />
          <div className="container pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

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
                  Private Dinner · Adopt AI Opening Night
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6">
                  From the Seine<br />
                  <em className="italic text-[#c8f135]">to San Francisco.</em>
                </h1>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                  An invitation-only evening of conversation, cocktails &amp; private dining for leaders in AI, B2B tech, and marketing, on the opening night of Adopt AI in Paris.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#c8f135] mb-2">When</div>
                    <div className="font-semibold text-white text-sm">Thursday, December 3, 2026</div>
                    <div className="text-white/50 text-xs mt-1">8:30 PM – 10:30 PM · Adopt AI opening night</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#c8f135] mb-2">Where</div>
                    <div className="font-semibold text-white text-sm">Central Paris</div>
                    <div className="text-white/50 text-xs mt-1">Location shared with confirmed registrants</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#c8f135]/20 bg-[#c8f135]/5 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="h-4 w-4 text-[#c8f135]" />
                    <span className="text-sm font-semibold text-white">Limited seats. Curated guest list.</span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Registration is a request, not a guarantee. We confirm every seat personally.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#0d0d0d]/50 mb-2">Reserve Your Seat</div>
                <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight mb-6 text-[#0d0d0d]">
                  Register — December 3, 2026
                </h2>
                <RSVPForm />
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-6">Why This Dinner?</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-10">
              The conference is the headline.<br />
              <em className="italic text-white/40">The dinner is where it gets real.</em>
            </h2>
            <div className="space-y-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              <p>
                Adopt AI brings the AI conversation to the Grand Palais. After the opening day, we&apos;re gathering a small group of leaders who are putting AI to work in their businesses, in their marketing, and in how they go to market.
              </p>
              <p>
                3rd + Taylor Agency is a U.S.-based revenue marketing firm that helps B2B tech companies sharpen their messaging, generate predictable pipeline, and build revenue. This isn&apos;t a networking mixer. It&apos;s a room built for honest conversation between peers.
              </p>
            </div>
          </div>
        </section>

        {/* The Evening */}
        <section className="border-b border-white/10 py-20 md:py-28">
          <div className="container">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4">The Evening</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-16">
              One night. Three parts.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  Icon: Wine,
                  title: "Cocktails",
                  body: "Arrive, unwind, and meet fellow leaders in AI, B2B tech, and marketing over drinks and hors d'oeuvres.",
                },
                {
                  Icon: MessageCircle,
                  title: "Conversation",
                  body: "Real talk on what's working with AI adoption, go-to-market, and growth, from people doing the work.",
                },
                {
                  Icon: UtensilsCrossed,
                  title: "Private Dinner",
                  body: "A seated dinner in a central Paris setting. Intimate by design, so every guest is part of the conversation.",
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#c8f135]/15 mb-5">
                    <Icon className="h-5 w-5 text-[#c8f135]" />
                  </div>
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
              Leaders in AI, B2B tech, and marketing.
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  title: "AI Leaders",
                  body: "Founders, executives, and builders developing or deploying AI in their products and organizations.",
                },
                {
                  title: "B2B Tech Leaders",
                  body: "CEOs, founders, and GTM executives scaling B2B technology companies, including those expanding into the U.S.",
                },
                {
                  title: "Marketing Leaders",
                  body: "CMOs and marketing heads driving pipeline, brand, and growth strategy with AI in the mix.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <Users className="h-5 w-5 text-[#c8f135] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <MapPin className="h-5 w-5 text-[#c8f135] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Location shared with confirmed registrants</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  The venue is in central Paris. Once your seat is confirmed, we&apos;ll send the exact address and arrival details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Host */}
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

        {/* Bottom form */}
        <section id="rsvp-bottom" className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4 text-center">Request Your Seat</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 text-center">
              Attendance is curated,<br />not sold.
            </h2>
            <p className="text-white/50 text-lg mb-12 text-center max-w-xl mx-auto">
              Complete the form and we&apos;ll follow up to confirm your seat and share the location.
            </p>
            <div className="rounded-3xl overflow-hidden bg-white p-6 md:p-10">
              <RSVPForm />
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
