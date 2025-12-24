// /types/shared.ts
export type ShareIcon =
  | "facebook"
  | "twitter"
  | "linkedin"
  | "whatsapp"
  | "copy"
  | "link"
  | string;

export type ShareLink = {
  icon: ShareIcon; // required
  href: string;
  label?: string;
};
