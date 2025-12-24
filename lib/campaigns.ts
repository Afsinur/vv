// lib/campaigns.ts
import raw from "@/data/events.json";
import type { Campaign } from "@/types/campaigns";

const list = raw as unknown as Campaign[];

export function getAllCampaigns(): Campaign[] {
  return list;
}

export function getCampaignSlugs(): string[] {
  return list.map((c) => c.slug);
}

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return list.find((c) => c.slug === slug);
}
