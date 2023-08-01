export default function Search() {
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
              className="w-full rounded-lg border-2 border-transparent bg-white bg-white/20 px-4 py-4 text-lg placeholder-white shadow focus:border-rose-400 focus:bg-white focus:placeholder-slate-400 focus:outline-none focus:ring   focus:ring-rose-300"
              placeholder="Press paws here..."
            />
          </form>
        </header>
      </div>
    </div>
  );
}
