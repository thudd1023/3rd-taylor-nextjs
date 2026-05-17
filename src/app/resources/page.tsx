"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Search } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { fetchResources, fetchTaxonomies, urlFor, type ResourceCard } from "@/lib/sanity";

const Resources = () => {
  const { data: resources = [], isLoading } = useQuery({
    queryKey: ["resources"],
    queryFn: fetchResources,
  });
  const { data: taxonomies } = useQuery({
    queryKey: ["taxonomies"],
    queryFn: fetchTaxonomies,
  });

  const [activeType, setActiveType] = useState<string>("all");
  const [activeTopic, setActiveTopic] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      if (activeType !== "all" && r.contentType?.slug?.current !== activeType) return false;
      if (activeTopic !== "all" && !r.topics?.some((t) => t.slug.current === activeTopic)) return false;
      if (search && !r.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [resources, activeType, activeTopic, search]);

  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteNav />

      <section className="bg-cream border-b border-border">
        <div className="container py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Resources</div>
          <h1 className="text-4xl md:text-6xl font-sans font-medium leading-[1.05] tracking-tight max-w-3xl">
            GTM playbooks, campaigns, and ideas — built for lean teams.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Practical resources to plan, launch, and scale revenue. Filter by content type or topic.
          </p>
          <div className="mt-8 relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources…"
              className="w-full rounded-full border border-border bg-background pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <FilterGroup
              title="Content Type"
              options={taxonomies?.contentTypes ?? []}
              active={activeType}
              onChange={setActiveType}
            />
            <FilterGroup
              title="Topic"
              options={taxonomies?.topics ?? []}
              active={activeTopic}
              onChange={setActiveTopic}
            />
          </aside>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-muted-foreground">
                {isLoading ? "Loading…" : `${filtered.length} resource${filtered.length === 1 ? "" : "s"}`}
              </div>
              {(activeType !== "all" || activeTopic !== "all" || search) && (
                <button
                  onClick={() => {
                    setActiveType("all");
                    setActiveTopic("all");
                    setSearch("");
                  }}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {isLoading ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-72 rounded-2xl border border-border bg-cream/50 animate-pulse" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center">
                <p className="text-lg font-medium">Nothing here yet.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {resources.length === 0
                    ? "Add your first resource in the editor to see it here."
                    : "Try clearing filters or adjusting your search."}
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {filtered.map((r) => (
                  <ResourceCardItem key={r._id} r={r} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

const FilterGroup = ({
  title,
  options,
  active,
  onChange,
}: {
  title: string;
  options: { _id: string; title: string; slug: { current: string } }[];
  active: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <div className="text-xs font-semibold uppercase tracking-wider text-ink mb-3">{title}</div>
    <ul className="space-y-1.5">
      <li>
        <button
          onClick={() => onChange("all")}
          className={`text-sm transition-colors ${active === "all" ? "text-accent font-semibold" : "text-muted-foreground hover:text-ink"}`}
        >
          All
        </button>
      </li>
      {options.map((o) => (
        <li key={o._id}>
          <button
            onClick={() => onChange(o.slug.current)}
            className={`text-sm transition-colors text-left ${active === o.slug.current ? "text-accent font-semibold" : "text-muted-foreground hover:text-ink"}`}
          >
            {o.title}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const ResourceCardItem = ({ r }: { r: ResourceCard }) => {
  const href = r.externalUrl || `/resources/${r.slug.current}`;
  const isExternal = !!r.externalUrl;
  const inner = (
    <article className="group rounded-2xl border border-border bg-cream overflow-hidden hover:shadow-bold transition-all h-full flex flex-col">
      {r.heroImage ? (
        <div className="aspect-[16/9] overflow-hidden bg-secondary">
          <img
            src={urlFor(r.heroImage).width(800).height(450).url()}
            alt={r.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-secondary to-cream" />
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          <span>{r.contentType?.title}</span>
          {r.topics?.[0] && <><span className="text-border">·</span><span className="text-muted-foreground">{r.topics[0].title}</span></>}
        </div>
        <h3 className="text-lg font-sans font-medium leading-snug group-hover:text-accent transition-colors">
          {r.title}
        </h3>
        {r.excerpt && <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{r.excerpt}</p>}
        <div className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold">
          Read more <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return <Link href={href} className="block h-full">{inner}</Link>;
};

export default Resources;
