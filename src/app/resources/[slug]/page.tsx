"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, Mail, BookOpen } from "lucide-react";
import { PortableText } from "@portabletext/react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HubSpotInlineForm from "@/components/HubSpotInlineForm";
import { fetchResource, urlFor } from "@/lib/sanity";
import { useEffect } from "react";

const ResourceDetail = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug ?? "");
  const { data: r, isLoading } = useQuery({
    queryKey: ["resource", slug],
    queryFn: () => fetchResource(slug),
    enabled: !!slug,
  });

  useEffect(() => {
    if (r) {
      document.title = `${r.seoTitle || r.title} | 3rd + Taylor Resources`;
      const metaDesc = document.querySelector('meta[name="description"]');
      const desc = r.seoDescription || r.excerpt;
      if (desc && metaDesc) metaDesc.setAttribute("content", desc);
    }
  }, [r]);

  const isGuide = !!r?.flipbookUrl;

  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteNav />

      {isLoading && (
        <div className="container py-12 max-w-3xl">
          <div className="h-96 rounded-2xl bg-cream animate-pulse" />
        </div>
      )}

      {!isLoading && !r && (
        <div className="container py-16 max-w-3xl text-center">
          <h1 className="text-2xl font-sans">Resource not found</h1>
          <Link href="/resources" className="mt-4 inline-flex items-center gap-1 text-accent font-semibold">
            Browse all resources <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}

      {r && isGuide ? (
        /* ── Guide / Flipbook layout ── */
        <div>
          {/* Header */}
          <section className="border-b border-border bg-cream">
            <div className="container py-10 md:py-14 max-w-5xl">
              <Link href="/resources" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent mb-6">
                <ArrowLeft className="h-3.5 w-3.5" /> All resources
              </Link>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                <BookOpen className="h-3.5 w-3.5" />
                <span>{r.contentType?.title}</span>
                {r.topics?.map((t) => (
                  <span key={t.slug.current} className="text-muted-foreground">· {t.title}</span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-sans font-medium leading-tight tracking-tight max-w-3xl">
                {r.title}
              </h1>
              {r.excerpt && (
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{r.excerpt}</p>
              )}
              <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                {r.author?.name && <span>By {r.author.name}</span>}
                {r.publishedAt && (
                  <>
                    <span>·</span>
                    <time>{new Date(r.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</time>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Flipbook embed */}
          <section className="bg-[#1a1a1a] py-8 md:py-12">
            <div className="container max-w-5xl">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src={r.flipbookUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={r.title}
                />
              </div>
            </div>
          </section>

          {/* Email CTA + form */}
          <section className="border-t border-border py-16 md:py-20">
            <div className="container max-w-3xl">
              <div className="rounded-3xl border border-border bg-cream p-8 md:p-12 shadow-bold">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">Get a Copy</div>
                </div>
                <h2 className="font-sans text-2xl md:text-3xl font-medium leading-tight mb-2">
                  Want this guide in your inbox?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll email you a copy of <strong>{r.title}</strong> — free.
                </p>
                {r.hubspotFormId ? (
                  <HubSpotInlineForm formId={r.hubspotFormId} instancePrefix="guide-email" />
                ) : (
                  <p className="text-sm text-muted-foreground italic">Email delivery form coming soon.</p>
                )}
              </div>

              {r.body && (
                <div className="mt-12 prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-medium prose-a:text-accent">
                  <PortableText
                    value={r.body as never}
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
              )}
            </div>
          </section>
        </div>
      ) : (
        /* ── Standard article layout ── */
        r && (
          <article className="container py-12 md:py-20 max-w-3xl">
            <Link href="/resources" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent mb-8">
              <ArrowLeft className="h-3.5 w-3.5" /> All resources
            </Link>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              <span>{r.contentType?.title}</span>
              {r.topics?.map((t) => (
                <span key={t.slug.current} className="text-muted-foreground">· {t.title}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-medium leading-tight tracking-tight">{r.title}</h1>
            {r.excerpt && <p className="mt-5 text-lg text-muted-foreground">{r.excerpt}</p>}

            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              {r.author?.name && <span>By {r.author.name}</span>}
              {r.publishedAt && (
                <>
                  <span>·</span>
                  <time>{new Date(r.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</time>
                </>
              )}
            </div>

            {r.heroImage && (
              <div className="mt-10 rounded-2xl overflow-hidden border border-border">
                <img src={urlFor(r.heroImage).width(1200).url()} alt={r.title} className="w-full h-auto" />
              </div>
            )}

            {r.body && (
              <div className="mt-10 prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-medium prose-a:text-accent">
                <PortableText
                  value={r.body as never}
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
            )}

            {r.ctaUrl && (
              <a
                href={r.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-1.5 bg-ink text-cream px-5 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-colors"
              >
                {r.ctaLabel || "Learn more"} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
          </article>
        )
      )}

      <SiteFooter />
    </div>
  );
};

export default ResourceDetail;
