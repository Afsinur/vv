"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * IMPORTANT:
 * Homepage preview uses NewsItem shape
 * href is DERIVED, not stored in data
 */
type StoryItem = {
  id: string;
  title: string;
  date: string;
  image: string;
};

type LatestStoriesProps = {
  title: string;
  items: StoryItem[];
  cta: {
    label: string;
    href: string; // "/news"
  };
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function LatestStories({
  title,
  items,
  cta,
}: LatestStoriesProps) {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-[30px] font-semibold text-[#0A2249] mb-14 tracking-wide"
        >
          {title}
        </motion.h2>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {items.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover="hover"
              className="
                group
                bg-white rounded-2xl
                border border-[#E3EAF4]
                overflow-hidden
                transition-shadow duration-300
                hover:shadow-[0_10px_30px_rgba(10,34,73,0.15)]
              "
            >
              {/* DERIVED href */}
              <Link href={`/news/${item.id}`} className="block h-full">
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    variants={{ hover: { scale: 1.04 } }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-[14px] font-semibold text-[#0A2249] leading-6 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#6B7280]">{item.date}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href={cta.href}
            className="
              inline-flex items-center gap-2
              bg-gradient-to-r from-[#0C286B] to-[#3266E2]
              text-white
              px-7 py-3
              rounded-md
              text-[14px] font-medium 
              transition
            "
          >
            {cta.label}
            <span className="text-lg leading-none">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
