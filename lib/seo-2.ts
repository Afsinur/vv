// /lib/seo.ts

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
};

const SITE_NAME = "SISP International Junior Home Team Club";
const DEFAULT_DESCRIPTION =
  "Explore the journey of SISP International Junior Home Team Club — a community dedicated to learning, teamwork, and innovation.";
const DEFAULT_OG_IMAGE = "/images/sisp-junior-club-banner.jpg";

export function generateMetadata({
  title,
  description,
  canonical,
  keywords,
  ogImage,
  noIndex,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const metaDescription = description ?? DEFAULT_DESCRIPTION;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: fullTitle,
    description: metaDescription,

    robots: noIndex ? "noindex, nofollow" : "index, follow",

    keywords,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description: metaDescription,
      images: [image],
      url: canonical,
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [image],
    },
  };
}
