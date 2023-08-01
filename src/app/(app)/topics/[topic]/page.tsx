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
