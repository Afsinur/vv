import raw from "@/data/news.json";
import type { NewsArticle } from "@/types/news";

const list = raw as unknown as NewsArticle[];

export function getAllNews(): NewsArticle[] {
  return list;
}
export function getNewsSlugs() {
  return list.map((n) => n.slug);
}
export function getNewsBySlug(slug: string) {
  return list.find((n) => n.slug === slug);
}
