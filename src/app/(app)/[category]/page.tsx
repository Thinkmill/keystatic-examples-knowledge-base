import Search from "@/components/search";
import { reader } from "@/lib/reader";

export default async function CategoryPage({ params }) {
  const category = await reader.collections.categories.readOrThrow(
    params.category
  );

  return (
    <>
      <Search />
      <main>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold">{category.name}</h2>
          <p className="mt-2 max-w-xl text-slate-700">{category.intro}</p>
        </div>
      </main>
    </>
  );
}
