export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { fetchLandingPages, type LandingPageCard } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Where We Work | 3rd + Taylor",
  description:
    "3rd + Taylor works with B2B tech companies across the United States and internationally — by city, by market, and by company stage.",
};

const GROUPS: { key: string; label: string }[] = [
  { key: "city", label: "By City" },
  { key: "region-country", label: "By Region & Country" },
  { key: "persona", label: "By Company Stage" },
  { key: "pricing-model", label: "By Engagement Model" },
  { key: "comparison", label: "Compare Your Options" },
  { key: "hybrid", label: "More Markets" },
];

const Card = ({ p }: { p: LandingPageCard }) => (
  <Link
    href={`/best/${p.slug.current}`}
    className="group rounded-2xl border border-border bg-cream p-6 shadow-soft hover:shadow-bold hover:border-ink/30 transition-all"
  >
    {(p.city || p.region || p.country) && (
      <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent mb-3">
        <MapPin className="h-3.5 w-3.5" />
        {[p.city, p.region, p.country].filter(Boolean).join(", ")}
      </div>
    )}
    <h3 className="font-display text-xl font-medium leading-tight text-balance">{p.heroHeadline || p.title}</h3>
    {p.heroSubheadline && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.heroSubheadline}</p>}
    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
      Learn more <ArrowRight className="h-3.5 w-3.5" />
    </div>
  </Link>
);

export default async function BestHub() {
  const pages = await fetchLandingPages().catch(() => []);
  const byGroup = GROUPS.map((g) => ({ ...g, items: pages.filter((p) => p.pageCategory === g.key) })).filter(
    (g) => g.items.length > 0,
  );

  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteNav />

      <main>
        <section className="relative overflow-hidden bg-gradient-sunset grain">
          <div className="container relative pt-20 pb-14 md:pt-28 md:pb-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
              <MapPin className="h-3.5 w-3.5" /> Where We Work
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.98] font-medium text-balance">
              B2B GTM support, <em className="italic text-accent">wherever you are</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              3rd + Taylor works with B2B tech companies across the United States and internationally — see how we
              support your market, your company stage, and your budget.
            </p>
          </div>
        </section>

        {byGroup.length === 0 ? (
          <section className="py-20">
            <div className="container max-w-3xl text-center text-muted-foreground">
              New market pages are on the way. In the meantime,{" "}
              <Link href="/lets-talk" className="text-accent hover:underline">
                let&apos;s talk
              </Link>{" "}
              about where you&apos;re based.
            </div>
          </section>
        ) : (
          byGroup.map((g) => (
            <section key={g.key} className="py-14 md:py-16 border-t border-border">
              <div className="container max-w-6xl">
                <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight text-balance mb-8">
                  {g.label}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {g.items.map((p) => (
                    <Card key={p.slug.current} p={p} />
                  ))}
                </div>
              </div>
            </section>
          ))
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
