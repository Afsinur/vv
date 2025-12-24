// lib/services.ts
import services from "@/data/services.json";
import type { NewsArticle } from "@/types/news"; // একই স্ট্রাকচার রাখার জন্য টাইপ রিইউজ
// চাইলে আলাদা টাইপ রাখতে পারেন: types/services.ts -> export type ServiceArticle = NewsArticle;

export type ServiceArticle = NewsArticle;

export function getAllServices(): ServiceArticle[] {
  return services as ServiceArticle[];
}

export function getServiceBySlug(slug: string): ServiceArticle | undefined {
  return (services as ServiceArticle[]).find((a) => a.slug === slug);
}

export function getServiceSlugs(): string[] {
  return (services as ServiceArticle[]).map((a) => a.slug);
}
