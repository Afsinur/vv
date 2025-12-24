import type { Metadata } from "next";
import { notFound } from "next/navigation";

import data from "@/data/data.json";
import type { Section } from "@/types/content";
import { getCampaignBySlug, getCampaignSlugs } from "@/lib/campaigns";
import type { Campaign } from "@/types/campaigns";
import CampaignClient from "@/components/events/CampaignClient";

/** Change this to your production domain */
const SITE_URL = "https://www.sispinternationalhometeamclub.org";

/* ────────────── Static Params ────────────── */
type Params = { slug: string };
export async function generateStaticParams() {
  return getCampaignSlugs().map((slug) => ({ slug }));
}

/* ────────────── Helpers ────────────── */
function firstParagraph(c?: Campaign): string | undefined {
  const p = c?.content?.find((b) => b.type === "p") as any;
  const text = (p?.text ?? "").toString().trim();
  return text || undefined;
}

/* ────────────── Metadata / SEO ────────────── */
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const c = getCampaignBySlug(params.slug);
  if (!c) return {};

  const title = c.meta?.title ?? c.title;
  const desc = c.meta?.description ?? firstParagraph(c) ?? undefined;

  const ogImage = c.meta?.image
    ? c.meta.image.startsWith("http")
      ? c.meta.image
      : `${SITE_URL}${c.meta.image}`
    : c.hero?.src?.startsWith("http")
    ? c.hero.src
    : `${SITE_URL}${c.hero?.src ?? "/og/default.jpg"}`;

  const url = `${SITE_URL}/events/${c.slug}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: desc,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: c.hero?.alt || title },
      ],
      siteName: "sispinternationalhometeamclub",
      section: c.categories?.[0],
      tags: c.tags,
      publishedTime: new Date().toISOString(), // পৃথক date চাইলে এখানে বসাও
      modifiedTime: new Date().toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

/* ────────────── JSON-LD (server-side) ────────────── */
function CampaignJsonLd({ c }: { c: Campaign }) {
  const url = `${SITE_URL}/events/${c.slug}`;
  const ogImage = c.meta?.image
    ? c.meta.image.startsWith("http")
      ? c.meta.image
      : `${SITE_URL}${c.meta.image}`
    : c.hero?.src?.startsWith("http")
    ? c.hero.src
    : `${SITE_URL}${c.hero?.src ?? "/og/default.jpg"}`;

  const payload = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: c.meta?.title ?? c.title,
    description: firstParagraph(c),
    image: ogImage,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "bn-BD",
    articleSection: c.categories?.[0],
    keywords: c.tags?.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

/* ────────────── Page (server) ────────────── */
export default function CampaignPage({ params }: { params: Params }) {
  const c = getCampaignBySlug(params.slug);
  if (!c) notFound();

  const sections = (data.sections ?? []) as Section[];
  const canonicalUrl = `${SITE_URL}/events/${c.slug}`;

  return (
    <>
      <CampaignJsonLd c={c} />
      <CampaignClient
        campaign={c}
        sections={sections}
        canonicalUrl={canonicalUrl}
        pageType="events"
      />
    </>
  );
}
