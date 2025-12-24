import { site } from "./site";
import type { NewsArticle } from "@/types/news";

export function absoluteUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return site.url;
  // already absolute
  try {
    const u = new URL(pathOrUrl);
    return u.toString();
  } catch {}
  return new URL(pathOrUrl, site.url).toString();
}

export function canonicalForNews(slug: string) {
  return absoluteUrl(`/news/${slug}`);
}

export function ogImageFor(article: NewsArticle) {
  return absoluteUrl(
    article.meta?.image ?? article.hero?.src ?? "/og-default.jpg"
  );
}

export function buildArticleJsonLd(article: NewsArticle) {
  const canonical = canonicalForNews(article.slug);
  const images = [
    article.meta?.image,
    article.hero?.src,
    ...(article.gallery?.map((g) => g.src) ?? []),
  ]
    .filter(Boolean)
    .map(absoluteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: canonical,
    headline: article.meta?.title ?? article.title,
    description: article.meta?.description ?? undefined,
    image: images.slice(0, 3),
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    author: {
      "@type": "Person",
      name: article.author?.name,
      url: article.author?.href ? absoluteUrl(article.author.href) : undefined,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    },
    articleSection: article.category,
    keywords: article.tags?.join(", "),
  };
}

export function buildBreadcrumbsJsonLd(article: NewsArticle) {
  const canonical = canonicalForNews(article.slug);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "News",
        item: absoluteUrl("/news"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonical,
      },
    ],
  };
}
