// /types/content.ts

/* ======================================================
   COMMON / SHARED
====================================================== */

export type ImageType = {
  src: string;
  alt: string;
};

export type Breakpoint = "mobile" | "tablet" | "desktop";

export type BreakpointValue = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

/* ======================================================
   NAVBAR
====================================================== */

export type NavbarMenuItem = {
  label: string;
  href?: string;
  children?: NavbarMenuItem[];
};

export interface Navbar {
  logo: ImageType;
  items: NavbarMenuItem[];
  actions?: {
    search?: boolean;
    profile?: boolean;
  };
}

/* ======================================================
   SERVICE GRID (ADVANCED, JSON-CONTROLLABLE)
====================================================== */

/**
 * Defines how the container grid itself is divided
 */
export interface GridDefinition {
  columns: BreakpointValue;
}

/**
 * Visual metrics for the grid
 */
export interface GridMetrics {
  rowHeight: BreakpointValue;
  gap?: number;
}

/**
 * Optional debug helpers
 */
export interface GridDebug {
  showGrid?: boolean;
}

/**
 * Exact placement of a tile inside the grid
 */
export interface GridPlacement {
  colStart?: BreakpointValue;
  colSpan?: BreakpointValue;
  rowStart?: BreakpointValue;
  rowSpan?: BreakpointValue;
}

/* ======================================================
   SERVICE GRID – HOVER / BACKGROUND SUPPORT
====================================================== */

export interface TileBackground {
  image?: {
    src: string;
    opacity: string;
    transform: string;
  };
  gradient?: string;
  color?: string;
}

export type TileContentKey = "default" | "hover" | "stats" | "icon";

export interface TileHoverSwap {
  default?: TileContentKey;
  hover?: TileContentKey;
}

export interface ServiceGridTile {
  id: string;
  title: string;
  href: string;
  image: string;
  decorImage?: string;
  placement?: GridPlacement;
  hoverSwap?: TileHoverSwap;
  background?: TileBackground;
}

export interface ServiceGridSection {
  id: string;
  type: "serviceGrid";
  grid: GridDefinition;
  metrics: GridMetrics;
  debug?: GridDebug;
  tiles: ServiceGridTile[];
}

/* ======================================================
   INSTITUTIONAL PROFILE
====================================================== */

export interface InstitutionalValue {
  title: string;
  description: string;
}

export interface InstitutionalProfileSection {
  id: string;
  type: "institutionalProfile";
  title: string;
  description: string;
  image: ImageType;
  values: InstitutionalValue[];
}

/* ======================================================
   OUR LATEST STORIES (HOME PREVIEW)
====================================================== */

export interface LatestStoryItem {
  id: string;
  title: string;
  date: string;
  image: string;
}

export interface LatestStoriesSection {
  id: string;
  type: "latestStories";
  title: string;
  items: LatestStoryItem[];
  cta: {
    label: string;
    href: string;
  };
}

/* ======================================================
   NEWS (SINGLE SOURCE OF TRUTH)
====================================================== */

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

/* ======================================================
   BREADCRUMB
====================================================== */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/* ======================================================
   NEW SECTIONS (BASED ON YOUR LATEST JSON)
====================================================== */

/* ---------- IMMIGRATION STATISTICS ---------- */

export interface ImmigrationStatisticItem {
  value: string;
  title: string;
  description: string;
}

export interface ImmigrationStatisticsSection {
  id: string;
  type: "immigrationStatistics";
  header: {
    title: string;
    year: string;
  };
  background?: {
    image?: string;
  };
  items: ImmigrationStatisticItem[];
}

/* ---------- LEADERSHIP PROFILE ---------- */

export interface LeadershipPerson {
  name: string;
  designation: string;
  image: string;
}

export interface LeadershipProfileSection {
  id: string;
  type: "leadershipProfile";
  person: LeadershipPerson;
  content: string[];
}

/* ---------- FOOTER ---------- */

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
export type SocialType = "instagram" | "x" | "facebook" | "youtube";

export interface FooterSocial {
  type: SocialType;
  href: string;
}

export interface FooterSection {
  id: string;
  type: "footer";
  columns: FooterColumn[];
  contact: {
    phone: string;
    email: string;
  };
  bottom: {
    copyright: string;
    logo: ImageType;
    social: FooterSocial[];
  };
}

/* ======================================================
   PAGE ROOT
====================================================== */

export type Section =
  | ServiceGridSection
  | InstitutionalProfileSection
  | LatestStoriesSection
  | ImmigrationStatisticsSection
  | LeadershipProfileSection
  | FooterSection;

export interface PageData {
  navbar: Navbar;
  sections: Section[];
  news: NewsItem[];
}
