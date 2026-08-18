import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  orderings: [
    { name: "name", title: "Name", by: [{ field: "name", direction: "asc" }] },
  ],
  fields: [
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({ name: "role", type: "string", title: "Role" }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
  ],
});
