import Link from "next/link";
import { reader } from "@/lib/reader";

export default async function Homepage() {
  const categories = await reader.collections.categories.all();

  return (
    <div>
      <SearchHeader />
      <main>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold">Browse by topic</h2>

          <ul className="mt-4 grid grid-cols-2 gap-8">
            {categories.map((categtory) => (
              <li
                key={categtory.slug}
                className="relative rounded-xl p-8 shadow ring-1 ring-black/5 hover:ring-rose-500"
              >
                <h3 className="text-lg font-semibold">
                  {categtory.entry.name}
                </h3>
                <p className="mt-2 text-slate-700">{categtory.entry.intro}</p>
                <Link
                  href={`/categories/${categtory.slug}`}
                  className="absolute inset-0 rounded-xl focus:outline-none focus:ring focus:ring-rose-500"
                ></Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <h1>Keystatic ⚡️</h1>
      <p>This homepage shows how to load a collection from the reader API.</p>
      <p>
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </p>
      <h2>Categories</h2>
      <ul></ul>
    </div>
  );
}

function SearchHeader() {
  return (
    <div className="bg-rose-500 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="">
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              Puppy Owners
            </span>
            <span className="block text-4xl font-bold text-white">
              Knowledge Base
            </span>
          </h1>
          <form className="mt-4">
            <input
              type="text"
              className="w-full rounded-lg border-2 border-transparent bg-white bg-white/20 px-4 py-4 text-lg placeholder-white shadow focus:border-rose-400 focus:bg-white focus:placeholder-slate-500 focus:outline-none focus:ring   focus:ring-rose-300"
              placeholder="Search something..."
            />
          </form>
        </header>
      </div>
    </div>
  );
}
