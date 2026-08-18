import { defineField, defineType } from "sanity";

export const topic = defineType({
  name: "topic",
  title: "Topic",
  type: "document",
  orderings: [
    { name: "title", title: "Title", by: [{ field: "title", direction: "asc" }] },
  ],
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "title" } }),
  ],
});
