import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    categories: collection({
      label: "Categories",
      slugField: "name",
      path: "src/content/categories/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        intro: fields.text({ label: "Intro", multiline: true }),
      },
    }),
    topics: collection({
      label: "Topics",
      slugField: "title",
      path: "src/content/topics/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        category: fields.relationship({
          label: "Category",
          collection: "categories",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
