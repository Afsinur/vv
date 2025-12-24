import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Morad Shaker | Youth Leadership & Community Development",
  description:
    "Morad Shaker is dedicated to empowering youth through leadership, creativity, education, and community-driven initiatives for a better future.",
  robots: "index, follow",
  authors: [{ name: "Morad Shaker" }],
  themeColor: "#111827",
  openGraph: {
    title: "Morad Shaker — Empowering Youth & Future Leaders",
    description:
      "Empowering young minds through leadership, creativity, teamwork, and education to build confident future leaders.",
    url: "https://www.moradshaker.com",
    siteName: "Morad Shaker",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.moradshaker.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Morad Shaker youth leadership and community development",
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
        <link rel="canonical" href="https://www.moradshaker.com" />
        <meta name="author" content="Morad Shaker" />
        <meta
          name="keywords"
          content="Morad Shaker, youth leadership, community development, education, creativity, leadership training, youth empowerment"
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

      <body className={`${oswald.className} relative scroll-padding`}>
        {children}
      </body>
    </html>
  );
}
