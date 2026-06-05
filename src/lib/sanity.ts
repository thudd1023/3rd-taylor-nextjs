import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient: SanityClient = createClient({
  projectId: "tyh03vdj",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  fetchOptions: { cache: "no-store" },
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type ResourceCard = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  featured?: boolean;
  externalUrl?: string;
  heroImage?: SanityImageSource;
  contentType: { title: string; slug: { current: string } };
  topics?: { title: string; slug: { current: string } }[];
};

export type ResourceFull = ResourceCard & {
  body?: unknown[];
  ctaLabel?: string;
  ctaUrl?: string;
  flipbookUrl?: string;
  hubspotFormId?: string;
  seoTitle?: string;
  seoDescription?: string;
  author?: { name: string; role?: string; image?: SanityImageSource };
};

export type Taxonomy = { _id: string; title: string; slug: { current: string } };

const cardProjection = `{
  _id, title, slug, excerpt, publishedAt, featured, externalUrl, heroImage,
  "contentType": contentType->{ title, slug },
  "topics": topics[]->{ title, slug }
}`;

export async function fetchResources(): Promise<ResourceCard[]> {
  return sanityClient.fetch(
    `*[_type == "resource" && draft != true] | order(publishedAt desc) ${cardProjection}`,
  );
}

export async function fetchResource(slug: string): Promise<ResourceFull | null> {
  return sanityClient.fetch(
    `*[_type == "resource" && slug.current == $slug && draft != true][0]{
      ..., 
      "contentType": contentType->{ title, slug },
      "topics": topics[]->{ title, slug },
      "author": author->{ name, role, image }
    }`,
    { slug },
  );
}

export async function fetchTaxonomies(): Promise<{ contentTypes: Taxonomy[]; topics: Taxonomy[] }> {
  const [contentTypes, topics] = await Promise.all([
    sanityClient.fetch<Taxonomy[]>(`*[_type == "contentType"] | order(title asc) { _id, title, slug }`),
    sanityClient.fetch<Taxonomy[]>(`*[_type == "topic"] | order(title asc) { _id, title, slug }`),
  ]);
  const uniqueTopics = topics.filter((t, i, arr) => arr.findIndex((x) => x.slug.current === t.slug.current) === i);
  return { contentTypes, topics: uniqueTopics };
}
