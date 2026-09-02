import { articles, SITE_URL } from "@/data/articles";

export default function sitemap() {
  const articlePages = articles.map((article) => ({
    url: `${SITE_URL}/${article.slug}`,
    lastModified: new Date(article.lastUpdated),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...articlePages,
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
