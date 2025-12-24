export type Author = { name: string; href?: string };
export type ImageItem = { src: string; alt: string };

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | ({ type: string } & Record<string, unknown>);

export type ShareLink = { icon: string; href: string; label?: string };

export type SidebarData = {
  quoteCard?: { thumb?: string; text: string; footer?: string };
  recent?: { title: string; date: string; href: string; thumb?: string }[];
};

export type NewsMeta = { title?: string; description?: string; image?: string };

export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string; // YYYY-MM-DD
  author: Author;
  hero: ImageItem;
  content: ContentBlock[];
  gallery?: ImageItem[];
  sidebar?: SidebarData;
  share?: ShareLink[];
  meta?: NewsMeta;
};
