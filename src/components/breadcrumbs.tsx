import Link from "next/link";

type BreadcrumbProps = {
  name: string;
  href: string;
  current: boolean;
}[];

export default function Breadcrumbs({
  pages = [],
}: {
  pages?: BreadcrumbProps;
}) {
  return (
    <nav className=" not-prose flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center gap-3">
        <li>
          <div>
            <Link href="/" className="text-slate-500 hover:text-slate-700">
              {pages.length > 0 ? "Home" : <>&larr; Home</>}
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-slate-400">
                &rarr;
              </span>
              <Link
                href={page.href}
                className="text-slate-500 hover:text-slate-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
