// app/(campaigns)/events/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {};
export default function CampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
