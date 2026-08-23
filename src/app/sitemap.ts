import type { MetadataRoute } from "next";
import { fetchResources } from "@/lib/sanity";
import { fetchLandingPages } from "@/lib/sanity";

const BASE_URL = "https://www.3rdandtaylor.com";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/why", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/campaign-engine", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/momentum", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/resources", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/best", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/faqs", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/ai-info", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/lets-talk", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/meet-the-founder", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/growth-audit", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/revenue-growth-audit", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/free-gtm-scan", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/who-we-serve/by-role", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/who-we-serve/by-industry", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/who-we-serve/vc-operating-partners", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/solutions/diagnose-growth-gaps", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/solutions/qualified-pipeline", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/solutions/launch-product", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/solutions/conversion", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/solutions/abm", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/solutions/outbound", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/solutions/expand-internationally", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/book-portfolio-discussion", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/gtm-recommendations-report", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/momentum-team", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/miami-sponsorship", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/paris-dinner", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/revenue-table-miami", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/seine-to-sf", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/seine-to-sf/rsvp", priority: 0.3, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const [resources, landingPages] = await Promise.all([
    fetchResources().catch(() => []),
    fetchLandingPages().catch(() => []),
  ]);

  const resourceEntries: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `${BASE_URL}/resources/${r.slug.current}`,
    lastModified: r.publishedAt ? new Date(r.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const landingPageEntries: MetadataRoute.Sitemap = landingPages.map((p) => ({
    url: `${BASE_URL}/best/${p.slug.current}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...resourceEntries, ...landingPageEntries];
}
