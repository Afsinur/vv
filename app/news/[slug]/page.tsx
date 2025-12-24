import data from "@/data/data.json";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import { PageData } from "@/types/content";
import Footer from "@/components/sections/Footer";
const data1 = data as PageData;

export default function NewsDetails({ params }: { params: { slug: string } }) {
  const news = data.news.find((n) => n.id === params.slug);
  if (!news) return notFound();

  return (
    <>
      <Navbar {...data.navbar} />

      <main className="bg-white max-w-5xl mx-auto px-6 py-14">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "News", href: "/news" },
            { label: news.title },
          ]}
        />

        <Link href="/news" className="text-sm text-blue-600 hover:underline">
          ← Back to All News
        </Link>

        <h1 className="text-[28px] font-semibold mt-6 mb-2">{news.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{news.date}</p>

        <div className="relative aspect-[16/9] mb-10">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="space-y-6 text-[15px] leading-7 text-gray-700">
          {news.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </main>

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
