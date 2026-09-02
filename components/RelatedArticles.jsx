import Link from "next/link";
import { getRelatedArticles } from "@/data/articles";

const typeIcons = {
  listicle: "📋",
  comparison: "⚖️",
  guide: "📖",
};

const typeLabels = {
  listicle: "Buying Guide",
  comparison: "Comparison",
  guide: "Guide",
};

export default function RelatedArticles({ currentSlug }) {
  const related = getRelatedArticles(currentSlug);

  if (!related || related.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="related-heading">
      <h2
        id="related-heading"
        className="text-2xl font-bold text-slate-900 mb-6"
      >
        Related Articles
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="group block bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-300 hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-3 block" aria-hidden="true">
              {typeIcons[article.type] || "📄"}
            </span>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              {typeLabels[article.type] || article.type}
            </span>
            <h3 className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors text-sm leading-snug">
              {article.h1}
            </h3>
            <p className="mt-2 text-xs text-slate-500 line-clamp-2">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
