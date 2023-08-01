import { DocumentRenderer } from "@keystatic/core/renderer";

import { reader } from "@/lib/reader";

import Search from "@/components/search";
import Breadcrumbs from "@/components/breadcrumbs";
import CategoriesList from "@/components/categories-list";

export async function generateStaticParams() {
  const topics = await reader.collections.topics.list();
  return topics.map((topic) => ({
    topic,
  }));
}

export async function generateMetadata({ params }) {
  const topic = await reader.collections.topics.readOrThrow(params.topic, {
    resolveLinkedFiles: true,
  });

  const firstParagraph = topic.content.filter(
    (slice) => slice.type === "paragraph"
  )[0].children[0].text as string;

  const title = topic.title;
  const description =
    firstParagraph.length > 155
      ? firstParagraph.slice(0, 155) + "..."
      : firstParagraph;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: "#",
      siteName: title,
      images: [
        {
          url: `/og?title=${title}`,
          width: 1600,
          height: 1200,
        },
      ],
      locale: "en_AU",
      type: "website",
    },
  };
}

export default async function TopicPage({ params }) {
  const topic = await reader.collections.topics.readOrThrow(params.topic, {
    resolveLinkedFiles: true,
  });

  return (
    <>
      <Search />
      <main>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose mx-auto max-w-prose">
            <Breadcrumbs />
            <h1 className="mt-4">{topic.title}</h1>
            <DocumentRenderer document={topic.content} />
            <hr />
          </div>

          <div className="mt-20">
            <CategoriesList />
          </div>
        </div>
      </main>
    </>
  );
}
