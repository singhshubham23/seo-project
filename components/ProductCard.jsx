import Image from "next/image";

export default function ProductCard({ product, rank }) {
  return (
    <article
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      id={`product-${product.id}`}
    >
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-72 flex-shrink-0 bg-slate-50 flex items-center justify-center p-6">
          <Image
            src={product.image}
            alt={`${product.name} mechanical keyboard`}
            width={280}
            height={200}
            className="object-contain w-full h-auto max-h-48"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              {rank && (
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                  #{rank} Pick
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {product.name}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">{product.brand}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              {product.originalPrice && (
                <p className="text-sm text-slate-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </p>
              )}
            </div>
          </div>

          {/* Quick Specs */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
              {product.switchType}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
              {product.layout}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
              {product.connectivity}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
              {product.backlight}
            </span>
          </div>

          {/* Best For */}
          <p className="text-sm text-slate-600 mb-4">
            <span className="font-semibold text-slate-800">Best for:</span>{" "}
            {product.bestFor}
          </p>

          {/* Pros and Cons */}
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div>
              <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                Pros
              </h4>
              <ul className="space-y-1">
                {product.pros.slice(0, 3).map((pro, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-sm text-slate-600">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">
                Cons
              </h4>
              <ul className="space-y-1">
                {product.cons.slice(0, 3).map((con, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-sm text-slate-600">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            id={`cta-${product.id}`}
          >
            Check Price on Amazon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
