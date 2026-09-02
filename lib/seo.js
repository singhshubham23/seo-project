/**
 * SEO Utility Library
 *
 * JSON-LD structured data generators and SEO helpers.
 * All schemas follow Google's structured data guidelines.
 */

import { SITE_URL, SITE_NAME } from "@/data/articles";

/**
 * Generate WebSite schema
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Find the best mechanical keyboards under ₹2,000 in India. Expert comparisons, buying guides, and detailed reviews.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Generate Article schema
 */
export function generateArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/${article.slug}`,
    datePublished: article.lastUpdated,
    dateModified: article.lastUpdated,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${article.slug}`,
    },
  };
}

/**
 * Generate BreadcrumbList schema
 * @param {Array<{name: string, url: string}>} crumbs
 */
export function generateBreadcrumbSchema(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate FAQPage schema
 * Only use when FAQ content is visibly present on the page.
 * @param {Array<{question: string, answer: string}>} faqs
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate ItemList schema for product listing pages
 * @param {Array} products - Array of keyboard product objects
 * @param {string} pageUrl - Full URL of the page
 */
export function generateProductListSchema(products, pageUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: pageUrl,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
        description: product.bestFor,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: product.amazonLink,
        },
      },
    })),
  };
}

/**
 * Generate page metadata object for Next.js Metadata API
 */
export function generatePageMetadata({ title, description, slug, type = "article" }) {
  const url = slug ? `${SITE_URL}/${slug}` : SITE_URL;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: type === "article" ? "article" : "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * JSON-LD Script component
 * Renders structured data as a script tag
 */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
