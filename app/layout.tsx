import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "M. Shaker | Youth Leadership & Community Development",
  description:
    "M. Shaker is dedicated to empowering youth through leadership, creativity, education, and community-driven initiatives for a better future.",
  robots: "index, follow",
  authors: [{ name: "M. Shaker" }],
  themeColor: "#111827",
  openGraph: {
    title: "M. Shaker — Empowering Youth & Future Leaders",
    description:
      "Empowering young minds through leadership, creativity, teamwork, and education to build confident future leaders.",
    url: "https://www.M.shaker.com",
    siteName: "M. Shaker",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.M.shaker.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "M. Shaker youth leadership and community development",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="" />
        <link rel="canonical" href="https://www.M.shaker.com" />
        <meta name="author" content="M. Shaker" />
        <meta
          name="keywords"
          content="M. Shaker, youth leadership, community development, education, creativity, leadership training, youth empowerment"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body
        className={`${oswald.className} relative scroll-padding bg-gradient-to-b from-[#0B1C3A] to-[#12274e]`}
      >
        {children}
      </body>
    </html>
  );
}
