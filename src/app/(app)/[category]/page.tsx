import Link from "next/link";
import { notFound } from "next/navigation";
import { AcademicCapIcon } from "@heroicons/react/20/solid";

import { reader } from "@/lib/reader";
import Search from "@/components/search";
import CategoriesList from "@/components/categories-list";
import Breadcrumbs from "@/components/breadcrumbs";

export async function generateStaticParams() {
  const categories = await reader.collections.categories.list();
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }) {
  const category = await reader.collections.categories.read(params.category);

  if (!category) return notFound();

  const title = category.name;
  const description = category.intro;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: "https://keystatic-examples-knowledge-base.vercel.app",
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

export default async function CategoryPage({ params }) {
  const category = await reader.collections.categories.read(params.category);

  if (!category) return notFound();

  const topics = await (
    await reader.collections.topics.all()
  ).filter((topic) => topic.entry.category === params.category);

  return (
    <>
      <Search />
      <main>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <h1 className="mt-4 text-2xl font-semibold">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-700">
            {category.intro}
          </p>
          <ul className="mt-10 space-y-4">
            {topics.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/${params.category}/${topic.slug}`}
                  className="flex items-center gap-4 text-slate-900 hover:underline"
                >
                  <AcademicCapIcon className="h-4 w-4 fill-rose-500" />
                  <span>{topic.entry.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <h1 className="text-2xl font-semibold">Categories</h1>
            <div className="mt-6">
              <CategoriesList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
