import Search from "@/components/search";
import CategoriesList from "@/components/categories-list";

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
