import { getArticleBySlug } from "@/data/articles";
import { generatePageMetadata } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { SITE_NAME } from "@/data/articles";

export const metadata = generatePageMetadata({
  title: `About ${SITE_NAME}`,
  description: `Learn more about ${SITE_NAME}, our mission, and how we help Indian buyers find the best budget mechanical keyboards.`,
  slug: "about",
});

export default function AboutPage() {
  // Mock article structure for the layout
  const article = {
    h1: `About ${SITE_NAME}`,
    slug: "about",
    lastUpdated: "2026-09-01",
    faqs: []
  };

  return (
    <ArticleLayout
      article={article}
      breadcrumbItems={[{ name: "About" }]}
      showFaq={false}
    >
      <p>
        Welcome to <strong>{SITE_NAME}</strong>. Our mission is simple: to help Indian
        buyers find the best mechanical keyboards without overspending. We focus specifically
        on the budget segment — keyboards priced under ₹2,000.
      </p>

      <h2>Why We Started</h2>
      
      <p>
        The mechanical keyboard market in India has exploded in recent years. While there
        are plenty of reviews for premium ₹10,000+ keyboards, finding reliable, structured
        information about budget options is difficult. Most buyers are overwhelmed by the
        sheer number of similar-looking products on Amazon from brands like Cosmic Byte,
        Redgear, Ant Esports, and Zebronics.
      </p>

      <p>
        We created {SITE_NAME} to cut through the noise. We aggregate specifications,
        compare features, and provide clear, honest advice tailored for the Indian market.
      </p>

      <h2>Our Principles</h2>

      <FadeIn>
        <div className="grid sm:grid-cols-3 gap-4 my-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <span className="text-2xl mb-2 block" aria-hidden="true">🔍</span>
            <h3 className="font-bold text-slate-900 text-base mb-1">No Fake Reviews</h3>
            <p className="text-sm text-slate-500">
              Our comparisons are based on factual specifications and aggregate user feedback.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <span className="text-2xl mb-2 block" aria-hidden="true">🇮🇳</span>
            <h3 className="font-bold text-slate-900 text-base mb-1">India First</h3>
            <p className="text-sm text-slate-500">
              Prices in INR, products available on Amazon India. Tailored for Indian buyers.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <span className="text-2xl mb-2 block" aria-hidden="true">📖</span>
            <h3 className="font-bold text-slate-900 text-base mb-1">Clear & Simple</h3>
            <p className="text-sm text-slate-500">
              Technical jargon explained in plain English for first-time buyers.
            </p>
          </div>
        </div>
      </FadeIn>

      <h2>Affiliate Disclaimer</h2>

      <p>
        {SITE_NAME} participates in the Amazon Services LLC Associates Program, an affiliate
        advertising program designed to provide a means for sites to earn advertising fees by
        advertising and linking to Amazon.in.
      </p>

      <p>
        When you click on links to various merchants on this site and make a purchase, this
        can result in this site earning a commission. This does not impact our recommendations
        or the price you pay. Our primary goal is to help you find the right product.
      </p>

      <h2>Get in Touch</h2>

      <p>
        Have a question about a specific keyboard? Found a great new budget option we should
        cover? We would love to hear from you.
      </p>

      <p>
        Email us at: <strong>contact@{SITE_NAME.toLowerCase()}</strong>
      </p>

      <div className="mt-8 pt-8 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Link>
      </div>
    </ArticleLayout>
  );
}
