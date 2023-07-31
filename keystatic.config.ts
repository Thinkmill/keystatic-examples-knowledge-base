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
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
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
