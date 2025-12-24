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
  columns: BreakpointValue; // e.g. { mobile:1, tablet:2, desktop:3 }
}

/**
 * Visual metrics for the grid
 */
export interface GridMetrics {
  rowHeight: BreakpointValue; // px
  gap?: number; // px
}

/**
 * Optional debug helpers
 */
export interface GridDebug {
  showGrid?: boolean;
}

/**
 * Exact placement of a tile inside the grid
 * (CSS Grid style, 1-based)
 */
export interface GridPlacement {
  colStart?: BreakpointValue;
  colSpan?: BreakpointValue;
  rowStart?: BreakpointValue;
  rowSpan?: BreakpointValue;
}

/* ======================================================
   SERVICE GRID – HOVER SWAP SUPPORT
====================================================== */

/**
 * What content shows in tile states
 */
export interface TileBackground {
  /** Background image (base layer) */
  image?: { src: string; opacity: string; transform: string };

  /** Gradient overlay (top layer) */
  gradient?: string;

  /** Solid color fallback */
  color?: string;
}
export type TileContentKey = "default" | "hover" | "stats" | "icon";

/**
 * Controls which content shows by default and on hover
 */
export interface TileHoverSwap {
  default?: TileContentKey;
  hover?: TileContentKey;
}

/**
 * Single service tile/card
 */
export interface ServiceGridTile {
  id: string;
  title: string;
  href: string;

  /** image path only (for next/image) */
  image: string;
  decorImage?: string;

  /** exact grid placement (optional) */
  placement?: GridPlacement;

  /** hover behaviour control (optional) */
  hoverSwap?: TileHoverSwap;
  background?: TileBackground;
}

/**
 * Service Grid section
 */
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
   PAGE ROOT
====================================================== */

export type Section =
  | ServiceGridSection
  | InstitutionalProfileSection
  | LatestStoriesSection;

export interface PageData {
  navbar: Navbar;
  sections: Section[];
  news: NewsItem[];
}
