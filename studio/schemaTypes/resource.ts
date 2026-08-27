import { defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  orderings: [
    { name: "title", title: "Title", by: [{ field: "title", direction: "asc" }] },
  ],
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "title" } }),
    defineField({ name: "excerpt", type: "text", title: "Excerpt" }),
    defineField({ name: "publishedAt", type: "datetime", title: "Published At" }),
    defineField({ name: "featured", type: "boolean", title: "Featured" }),
    defineField({ name: "draft", type: "boolean", title: "Draft" }),
    defineField({ name: "externalUrl", type: "url", title: "External URL" }),
    defineField({
      name: "heroImage",
      type: "image",
      title: "Hero Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "contentType",
      type: "reference",
      title: "Content Type",
      to: [{ type: "contentType" }],
    }),
    defineField({
      name: "topics",
      type: "array",
      title: "Topics",
      of: [{ type: "reference", to: [{ type: "topic" }] }],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
    }),
    defineField({ name: "ctaLabel", type: "string", title: "CTA Label" }),
    defineField({ name: "ctaUrl", type: "url", title: "CTA URL" }),
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
      name: "flipbookUrl",
      type: "url",
      title: "Flipbook Embed URL",
      description:
        "Paste the embed URL from FlipHTML5, Issuu, or FlippingBook. Adding this switches the page to the guide layout with the flipbook viewer and email form.",
    }),
    defineField({
      name: "downloadUrl",
      type: "url",
      title: "Download URL",
      description:
        "Direct link to the downloadable file (Google Drive, Dropbox, etc.). Set sharing to 'Anyone with the link.' This URL is included in the delivery email.",
    }),
    defineField({
      name: "hubspotFormId",
      type: "string",
      title: "HubSpot Form ID (legacy — do not use)",
      description: "Deprecated. Native Supabase form replaces this.",
      hidden: true,
    }),
    defineField({ name: "seoTitle", type: "string", title: "SEO Title" }),
    defineField({ name: "seoDescription", type: "text", title: "SEO Description" }),
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
  ],
});
