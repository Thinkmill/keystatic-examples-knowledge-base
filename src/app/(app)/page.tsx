import type { Metadata } from "next";

import Search from "@/components/search";
import CategoriesList from "@/components/categories-list";

const title = "Puppy Owners Hub";
const description = "A knowledge base for happy new puppy owners";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "#",
    siteName: title,
    images: [
      {
        url: `/og`,
        width: 1600,
        height: 1200,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default async function Homepage() {
  return (
    <>
      <Search />
      <main>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold">Browse by category</h1>
          <div className="mt-6">
            <CategoriesList />
          </div>
        </div>
      </main>
    </>
  );
}
