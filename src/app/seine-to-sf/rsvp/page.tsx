"use client";

import { useEffect, useRef, useId } from "react";
import { MapPin, Calendar, Users, Star } from "lucide-react";
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

const RSVPForm = () => {
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
    formFrame.dataset.instanceId = `seine-rsvp-${instanceId}`;
    ref.current.appendChild(formFrame);
    loadScript().catch(() => undefined);
    return () => { formFrame.remove(); };
  }, [instanceId]);

  return <div ref={ref} className="min-h-[400px]" />;
};

export default function SeineToSFRSVP() {
  return (
    <>
      <SiteNav />
      <main className="bg-[#0d0d0d] text-white min-h-screen">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c8f135_0%,_transparent_50%)] opacity-10 pointer-events-none" />
          <div className="container pt-24 pb-20 md:pt-32 md:pb-28 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 mb-8">
              RSVP · June 2026
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-medium leading-[0.95] mb-6">
              From the Seine<br />
              <em className="italic text-[#c8f135]">to San Francisco.</em>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
              An exclusive dinner for 30–50 hand-picked B2B tech leaders during VivaTech Week in Paris. Complete the form below to request your seat.
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
        </section>

        {/* RSVP Form */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c8f135] mb-4 text-center">Request Your Seat</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 text-center">
              Attendance is curated,<br />not sold.
            </h2>
            <p className="text-white/50 text-lg mb-12 text-center max-w-xl mx-auto">
              Complete the form and we&apos;ll follow up within 48 hours to confirm your invitation.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
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
