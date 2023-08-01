import Link from "next/link";
import { reader } from "@/lib/reader";

import Search from "@/components/search";

export default async function Homepage() {
  const categories = await reader.collections.categories.all();
  const topics = await reader.collections.topics.all();

  const categoriesWithTopics = categories.map((category) => {
    const matchingTopics = topics.filter((topic) =>
      topic.entry.categories.includes(category.slug)
    );
    return {
      ...category,
      topics: matchingTopics,
    };
  });

  return (
    <>
      <Search />
      <main>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Browse by topic</h2>

          <ul className="mt-4 grid gap-8 md:grid-cols-2">
            {categoriesWithTopics.map((category) => (
              <li
                key={category.slug}
                className="relative rounded-xl p-8 shadow ring-1 ring-black/5 hover:ring-rose-500"
              >
                {/* Decorative category count */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <p className="absolute -right-2 -top-8 -rotate-12 text-9xl font-black leading-none text-rose-50/75">
                    {category.topics.length}
                  </p>
                </div>

                <div className="isolate pr-8">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">
                      {category.entry.name}
                    </h3>
                    <span aria-hidden="true" className="text-slate-600">
                      &middot;
                    </span>
                    <p className="text-slate-600">
                      {category.topics.length}{" "}
                      {category.topics.length === 1 ? "topic" : "topics"}
                    </p>
                  </div>
                  <p className="mt-2 text-slate-700">{category.entry.intro}</p>
                  <Link
                    href={`/${category.slug}`}
                    className="absolute inset-0 rounded-xl focus:outline-none focus:ring focus:ring-rose-500"
                  ></Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
