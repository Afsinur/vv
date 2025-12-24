import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";

import data from "@/data/data.json";
import type { Section } from "@/types/content";

import { getAllCampaigns } from "@/lib/campaigns";
import type { Campaign } from "@/types/campaigns";

/** Change this to your production domain */
const SITE_URL = "https://www.sispinternationalhometeamclub.org";

/* ────────────── SEO ────────────── */
export const metadata: Metadata = {
  title: "All Events",
  description: "Browse active and past events.",
  alternates: { canonical: `${SITE_URL}/events/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/events/`,
    title: "All Events",
    description: "Browse active and past events.",
    images: [{ url: `${SITE_URL}/og/sisp-events.jpg` }],
    siteName: "SISP International Junior Home Team Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Campaigns",
    description: "Browse active and past campaigns.",
    images: [`${SITE_URL}/og/sisp-events.jpg`],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

/* ────────────── Page ────────────── */
export default function CampaignsIndexPage() {
  const sections = (data.sections ?? []) as Section[];
  const items = getAllCampaigns();

  return (
    <>
      {sections.map((s, idx) =>
        s.type === "header" ? <Header key={idx} data={s} /> : null
      )}

      <PageHeader
        data={{
          type: "pageHeader",
          title: "All Events",
          crumbs: [{ label: "Home", href: "/" }, { label: "All Events" }],
          height: { base: 220, md: 320 },
          background: { src: "/images/demm.jpg", alt: "Campaigns header" },
          overlay: { color: "rgba(7,16,45,.86)", vignette: true },
        }}
      />

      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {items.length ? (
            <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
              {items.map((c: Campaign) => {
                const href = `/events/${c.slug}`;
                const pct =
                  c.goal > 0
                    ? Math.min(100, Math.round((c.raised / c.goal) * 100))
                    : 0;
                return (
                  <a
                    key={c.slug}
                    href={href}
                    className="block rounded-lg overflow-hidden border hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={c.hero.src}
                        alt={c.hero.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold line-clamp-2">
                        {c.title}
                      </h3>
                      {c.excerpt ? (
                        <p className="text-sm opacity-75 mt-1 line-clamp-2">
                          {c.excerpt}
                        </p>
                      ) : null}
                      <div className="mt-3 text-sm opacity-80">
                        {c.location}
                      </div>

                      <div className="mt-3 h-2 bg-gray-100 rounded">
                        <div
                          className="h-full bg-gray-800 rounded"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="mt-3 text-xs opacity-70">
                        {pct}% funded
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <p className="opacity-70">No campaigns yet.</p>
          )}
        </div>
      </section>

      {sections.map((s, idx) =>
        s.type === "footer" ? <Footer key={idx} data={s} /> : null
      )}
    </>
  );
}
