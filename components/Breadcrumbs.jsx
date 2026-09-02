import Link from "next/link";
import { SITE_URL } from "@/data/articles";
import { generateBreadcrumbSchema, JsonLd } from "@/lib/seo";

export default function Breadcrumbs({ items }) {
  const crumbs = [
    { name: "Home", url: SITE_URL },
    ...items.map((item) => ({
      name: item.name,
      url: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  ];

  // Filter out crumbs without URLs for schema (last item may not have a link)
  const schemaItems = crumbs.filter((c) => c.url);

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
          <li>
            <Link
              href="/"
              className="hover:text-amber-600 transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              <span className="text-slate-300" aria-hidden="true">/</span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-amber-600 transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-slate-700 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
