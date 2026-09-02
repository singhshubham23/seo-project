import Link from "next/link";
import { articles, SITE_NAME } from "@/data/articles";
import ScrollSequence from "@/components/ScrollSequence";
import FadeIn from "@/components/FadeIn";

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

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Scroll Animation */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={100}>
              <span className="inline-block bg-amber-500/20 text-amber-400 text-sm font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
                Updated for 2026
              </span>
            </FadeIn>
            <FadeIn delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Find the Best{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Mechanical Keyboard
                </span>{" "}
                Under ₹2,000
              </h1>
            </FadeIn>
            <FadeIn delay={350}>
              <p className="mt-5 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Independent buying guides and comparisons for Indian buyers.
                No fake reviews — just honest, structured information to help
                you make the right choice.
              </p>
            </FadeIn>
            <FadeIn delay={500}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/best-mechanical-keyboard-under-2000"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-amber-500/25"
                  id="hero-cta-primary"
                >
                  View Top Picks
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/red-vs-blue-vs-brown-switches"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-base transition-all border border-white/20 hover:border-white/40"
                  id="hero-cta-secondary"
                >
                  Switch Guide
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Subtle animated glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Keyboard Scroll Animation */}
      <ScrollSequence />

      {/* Quick Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <FadeIn delay={0}>
              <div>
                <p className="text-3xl font-bold text-slate-900">8+</p>
                <p className="text-sm text-slate-500 mt-1">Keyboards Compared</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <p className="text-3xl font-bold text-slate-900">5</p>
                <p className="text-sm text-slate-500 mt-1">Detailed Guides</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div>
                <p className="text-3xl font-bold text-slate-900">₹1,299</p>
                <p className="text-sm text-slate-500 mt-1">Starting Price</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div>
                <p className="text-3xl font-bold text-slate-900">6+</p>
                <p className="text-sm text-slate-500 mt-1">Brands Covered</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Article Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Explore Our Guides
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Whether you are a gamer, typist, or first-time buyer — we have a guide for you.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 100}>
              <Link
                href={`/${article.slug}`}
                className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-lg transition-all h-full"
                id={`card-${article.slug}`}
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">
                  {typeIcons[article.type] || "📄"}
                </span>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
                  {typeLabels[article.type] || article.type}
                </span>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors text-lg leading-snug">
                  {article.h1}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-colors">
                  Read more
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
              Why {SITE_NAME}?
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="text-3xl mb-3 block" aria-hidden="true">🔍</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Honest Comparisons
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We compare real products available on Amazon India. No fake reviews,
                  no fabricated testing data — just structured information you can trust.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="text-3xl mb-3 block" aria-hidden="true">🇮🇳</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Made for India
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  All prices in ₹, all products available for Indian buyers.
                  We focus on the budget segment that matters most — under ₹2,000.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="text-3xl mb-3 block" aria-hidden="true">⚡</span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Updated Regularly
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Product listings and prices change frequently. We keep our guides
                  updated so you always have access to current information.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
