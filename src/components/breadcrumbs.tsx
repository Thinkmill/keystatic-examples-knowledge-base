import Link from "next/link";

type BreadcrumbProps = {
  name: string;
  href: string;
}[];

export default function Breadcrumbs({
  crumbs = [],
}: {
  crumbs?: BreadcrumbProps;
}) {
  return (
    <nav className="not-prose flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center gap-3">
        <li>
          <div>
            <Link href="/" className="text-slate-500 hover:text-slate-700">
              {crumbs.length > 0 ? "Home" : <>&larr; Home</>}
            </Link>
          </div>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.name}>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-slate-400">
                &rarr;
              </span>
              <Link
                href={crumb.href}
                className="text-slate-500 hover:text-slate-700"
              >
                {crumb.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
