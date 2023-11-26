// @ts-nocheck
"use client";
import React, { useState } from "react";
import Link from "next/link";

function Result({ result }) {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);
    }
    fetchData();
  }, [result]);

  if (!data) return null;

  const url = new RegExp("/server/app/(.*?).html");
  const strippedUrl = url.exec(data.raw_url);

  if (!strippedUrl) {
    return null;
  }

  return (
    <Link href={strippedUrl[1]}>
      <h3 className="font-medium">{data.meta.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: data.excerpt }} />
    </Link>
  );
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  React.useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === "undefined") {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ "./pagefind/pagefind.js"
          );
        } catch (e) {
          window.pagefind = { search: () => ({ results: [] }) };
        }
      }
    }
    loadPagefind();
  }, []);

  async function handleSearch() {
    if (window.pagefind) {
      const search = await window.pagefind.search(query);
      setResults(search.results);
    }
  }

  return (
    <div className="bg-rose-500 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header>
          <Link className="" href="/">
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              Puppy Owners
            </span>
            <span className="block text-3xl font-bold text-white">
              Knowledge Base
            </span>
          </Link>
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              className="w-full rounded-lg border-2 border-transparent bg-white bg-white/20 px-4 py-3 text-lg placeholder-white shadow focus:border-rose-400 focus:bg-white focus:placeholder-slate-400 focus:outline-none focus:ring   focus:ring-rose-300"
              onChange={(e) => setQuery(e.target.value)}
              onInput={handleSearch}
            />
            {results.length > 0 && (
              <div
                className="top-50 left-50 absolute z-20 mx-auto mt-4 max-w-5xl -translate-x-4 px-4 sm:-translate-x-6 sm:px-6 lg:-translate-x-8 lg:px-8"
                id="results"
              >
                <div className="max-h-96 overflow-scroll rounded-lg bg-white p-4 shadow-2xl">
                  {results.map((result, index) => {
                    return index === 0 ? (
                      <Result key={result.id} result={result} />
                    ) : (
                      <>
                        <hr className="my-2" />
                        <Result key={result.id} result={result} />
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
