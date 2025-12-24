"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import data from "@/data/data.json";
import Navbar from "../navbar/Navbar";
import Footer from "../sections/Footer";
import { PageData } from "@/types/content";

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
  content: string[];
}

const news: NewsItem[] = data.news;
const ITEMS_PER_PAGE = 9;

const data1 = data as PageData;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function getPaginationPages(current: number, total: number) {
    const pages: (number | "...")[] = [];

    const windowSize = 5; // how many numbers to show
    const half = Math.floor(windowSize / 2);

    let start = Math.max(1, current - half);
    let end = Math.min(total, current + half);

    // Shift window if near start
    if (start === 1) {
      end = Math.min(total, windowSize);
    }

    // Shift window if near end
    if (end === total) {
      start = Math.max(1, total - windowSize + 1);
    }

    // First page + dots
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    // Window pages (ONLY SOURCE OF NUMBERS)
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Last page + dots
    if (end < total) {
      if (end < total - 1) pages.push("...");
      pages.push(total);
    }

    return pages;
  }

  // ✅ Featured = first item from JSON
  const featured = news[0];

  return (
    <>
      <Navbar {...data.navbar} />
      <section className="max-w-7xl mx-auto px-4 py-14">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-8">NEWS HUB</h1>

        {/* ✅ Featured News (Clickable) */}
        {featured && (
          <Link
            href={`/news/${featured.id}`}
            className="grid md:grid-cols-2 gap-6 mb-12 group"
          >
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                width={800}
                height={450}
                className="object-cover w-full h-full group-hover:scale-105 transition"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold leading-snug group-hover:text-blue-600 transition">
                {featured.title}
              </h2>

              {featured.excerpt && (
                <p className="mt-3 text-gray-600 text-sm">{featured.excerpt}</p>
              )}

              <span className="mt-4 text-xs text-gray-400">
                {featured.date}
              </span>
            </div>
          </Link>
        )}

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id}>
              <article className="border rounded-xl overflow-hidden hover:shadow-md transition h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* ✅ Pagination (Fully Dynamic & Fixed) */}
        <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          >
            Prev
          </button>

          {getPaginationPages(currentPage, totalPages).map((p, i) =>
            p === "..." ? (
              <span key={`dots-${i}`} className="px-2 text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={`page-${p}`}
                onClick={() => setCurrentPage(p)}
                className={`px-3 py-1 border rounded text-sm ${
                  p === currentPage ? "bg-blue-600 text-white" : ""
                }`}
              >
                {p}
              </button>
            )
          )}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>

      <div className="mb-80"></div>

      {data1.sections.map((section) => {
        if (section.type === "footer") {
          return <Footer key={section.id} section={section} />;
        }
        return null;
      })}
    </>
  );
}
