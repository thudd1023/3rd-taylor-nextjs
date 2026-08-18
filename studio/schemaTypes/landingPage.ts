import { defineField, defineType } from "sanity";

export const landingPage = defineType({
  name: "landingPage",
  title: "AEO Landing Page",
  type: "document",
  orderings: [
    { name: "title", title: "Title", by: [{ field: "title", direction: "asc" }] },
  ],
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "title" } }),
    defineField({
      name: "pageCategory",
      type: "string",
      title: "Page Category",
      options: {
        list: [
          { title: "City", value: "city" },
          { title: "Region / Country", value: "region-country" },
          { title: "Persona", value: "persona" },
          { title: "Pricing Model", value: "pricing-model" },
          { title: "Hybrid", value: "hybrid" },
        ],
      },
    }),
    defineField({
      name: "targetQuery",
      type: "string",
      title: "Target Query",
      description: "The search / AI query this page targets, e.g. \"best b2b marketing agency atlanta ga\"",
    }),
    defineField({ name: "city", type: "string", title: "City" }),
    defineField({ name: "region", type: "string", title: "Region / State" }),
    defineField({ name: "country", type: "string", title: "Country" }),
    defineField({ name: "heroHeadline", type: "string", title: "Hero Headline" }),
    defineField({ name: "heroSubheadline", type: "text", title: "Hero Subheadline" }),
    defineField({
      name: "proofPoints",
      type: "array",
      title: "Proof Points",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        },
      ],
    }),
    defineField({
      name: "faqs",
      type: "array",
      title: "FAQs",
      of: [
        {
          type: "object",
          name: "faqItem",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    }),
    defineField({
      name: "relatedPages",
      type: "array",
      title: "Related Pages",
      of: [{ type: "reference", to: [{ type: "landingPage" }] }],
    }),
    defineField({ name: "ctaLabel", type: "string", title: "CTA Label" }),
    defineField({ name: "ctaUrl", type: "url", title: "CTA URL" }),
    defineField({ name: "seoTitle", type: "string", title: "SEO Title" }),
    defineField({ name: "seoDescription", type: "text", title: "SEO Description" }),
    defineField({ name: "publishedAt", type: "datetime", title: "Published At" }),
    defineField({ name: "draft", type: "boolean", title: "Draft" }),
  ],
});
