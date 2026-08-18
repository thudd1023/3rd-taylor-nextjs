export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { fetchLandingPage, urlFor } from "@/lib/sanity";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await fetchLandingPage(slug);
  if (!p) return {};
  return {
    title: p.seoTitle || p.title,
    description: p.seoDescription || p.heroSubheadline,
  };
}

export default async function LandingPageDetail({ params }: Props) {
  const { slug } = await params;
  const p = await fetchLandingPage(slug);

  if (!p) notFound();

  const geoLabel = [p.city, p.region, p.country].filter(Boolean).join(", ");
  const hasFaqs = !!p.faqs?.length;
  const hasGeo = !!(p.city || p.region || p.country);

  const jsonLdBlocks: Record<string, unknown>[] = [];

  if (hasGeo) {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "3rd + Taylor",
      url: `https://www.3rdandtaylor.com/best/${p.slug.current}`,
      description: p.seoDescription || p.heroSubheadline,
      areaServed: geoLabel || undefined,
      parentOrganization: { "@type": "Organization", name: "3rd + Taylor", url: "https://www.3rdandtaylor.com" },
    });
  }

  if (hasFaqs) {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs!.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <div className="min-h-screen bg-background text-ink">
      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
      ))}
      <SiteNav />

      <main>
        <section className="relative overflow-hidden bg-gradient-sunset grain">
          <div className="container relative pt-20 pb-14 md:pt-28 md:pb-20 max-w-4xl">
            <Link href="/best" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent mb-6">
              <ArrowLeft className="h-3.5 w-3.5" /> All markets
            </Link>
            {geoLabel && (
              <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
                <MapPin className="h-3.5 w-3.5" /> {geoLabel}
              </div>
            )}
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.98] font-medium text-balance">
              {p.heroHeadline || p.title}
            </h1>
            {p.heroSubheadline && (
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                {p.heroSubheadline}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={p.ctaUrl || "/lets-talk"}
                className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full font-semibold shadow-bold hover:bg-accent transition-all hover:scale-[1.02]"
              >
                {p.ctaLabel || "Let's Talk"} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {!!p.proofPoints?.length && (
          <section className="py-14 md:py-20 border-t border-border bg-cream">
            <div className="container max-w-5xl">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {p.proofPoints!.map((point) => (
                  <div key={point} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
                    <p className="text-ink/85 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {!!p.body?.length && (
          <section className="py-14 md:py-20 border-t border-border">
            <div className="container max-w-3xl">
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-medium prose-a:text-accent">
                <PortableText
                  value={p.body as never}
                  components={{
                    types: {
                      image: ({ value }) =>
                        value?.asset ? (
                          <img src={urlFor(value).width(1000).url()} alt={value.alt || ""} className="rounded-xl my-6" />
                        ) : null,
                    },
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {hasFaqs && (
          <section className="py-14 md:py-20 border-t border-border bg-cream">
            <div className="container max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight text-balance mb-8">
                Frequently asked questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {p.faqs!.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {!!p.relatedPages?.length && (
          <section className="py-14 md:py-20 border-t border-border">
            <div className="container max-w-4xl">
              <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight text-balance mb-6">
                Explore other markets
              </h2>
              <div className="flex flex-wrap gap-3">
                {p.relatedPages!.map((rp) => (
                  <Link
                    key={rp.slug.current}
                    href={`/best/${rp.slug.current}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream transition-all text-sm font-semibold"
                  >
                    {rp.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-20 border-t border-border bg-ink text-cream">
          <div className="container max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight text-balance">
              Ready to talk about your go-to-market?
            </h2>
            <div className="mt-8 flex justify-center">
              <Link
                href="/lets-talk"
                className="inline-flex items-center gap-2 bg-warm text-ink px-7 py-4 rounded-full font-semibold hover:bg-cream transition-colors"
              >
                Let&apos;s Talk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
