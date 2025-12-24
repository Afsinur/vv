// types/campaigns.ts
export type CTA = { label: string; href: string };
export type ImageItem = { src: string; alt: string };

export type ParagraphBlock = { type: "p"; text: string };
export type QuoteBlock = { type: "quote" | "blockquote"; text: string };
export type Heading2Block = { type: "h2"; text: string };
export type Heading3Block = { type: "h3"; text: string };
export type UnorderedListBlock = { type: "ul"; items: string[] };
export type ImageBlock = { type: "image"; src: string; alt?: string };

// Optional: unknown blocks we choose not to render
export type UnknownBlock = { type: string };

export type ContentBlock =
  | ParagraphBlock
  | QuoteBlock
  | Heading2Block
  | Heading3Block
  | UnorderedListBlock
  | ImageBlock
  | UnknownBlock;

export type SidebarData = {
  quoteCard?: { thumb?: string; text: string; footer?: string };
  categories?: { name: string; count: number }[];
  recent?: { title: string; date: string; href: string; thumb?: string }[];
};

export type CampaignMeta = {
  title?: string;
  description?: string;
  image?: string;
};

export type Campaign = {
  slug: string;
  title: string;
  hero: ImageItem;

  // banner/hero overlay box data (ডিজাইন অপরিবর্তিত রাখছি)
  location: string;
  goal: number;
  raised: number;
  donors: number;
  cta: CTA;

  excerpt?: string;
  content: ContentBlock[];

  categories?: string[];
  tags?: string[];

  sidebar?: SidebarData;
  // share?: { icon: string; href: string }[]  // আর দরকার নেই, আমরা dynamic share buttons ইউজ করবো

  meta?: CampaignMeta;
};
