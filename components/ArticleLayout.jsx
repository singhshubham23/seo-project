import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import RelatedArticles from "@/components/RelatedArticles";
import FadeIn from "@/components/FadeIn";
import {
  generateArticleSchema,
  generateFAQSchema,
  JsonLd,
} from "@/lib/seo";

export default function ArticleLayout({
  article,
  breadcrumbItems,
  children,
  showFaq = true,
}) {
  return (
    <>
      {/* Article Schema */}
      <JsonLd data={generateArticleSchema(article)} />

      {/* FAQ Schema — only if FAQ is visibly shown */}
      {showFaq && article.faqs && article.faqs.length > 0 && (
        <JsonLd data={generateFAQSchema(article.faqs)} />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Article Content */}
        <article className="article-content">
          <FadeIn>
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {article.h1}
              </h1>
              <p className="mt-3 text-slate-500 text-sm">
                Last updated: {new Date(article.lastUpdated).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </header>
          </FadeIn>

          {/* Main Content — passed as children */}
          <FadeIn delay={100}>
            <div className="prose-content">
              {children}
            </div>
          </FadeIn>

          {/* FAQ Section */}
          {showFaq && article.faqs && article.faqs.length > 0 && (
            <FadeIn delay={150}>
              <FAQ faqs={article.faqs} />
            </FadeIn>
          )}

          {/* Related Articles */}
          <FadeIn delay={200}>
            <RelatedArticles currentSlug={article.slug} />
          </FadeIn>
        </article>
      </div>
    </>
  );
}
