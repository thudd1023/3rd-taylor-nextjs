import { defineField, defineType } from "sanity";

export const contentType = defineType({
  name: "contentType",
  title: "Content Type",
  type: "document",
  orderings: [
    { name: "title", title: "Title", by: [{ field: "title", direction: "asc" }] },
  ],
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "title" } }),
  ],
});
