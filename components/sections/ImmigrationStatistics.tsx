"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ImmigrationStatisticsSection,
  ImmigrationStatisticItem,
} from "@/types/content";

interface Props {
  section: ImmigrationStatisticsSection;
}

export default function ImmigrationStatistics({ section }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}

      {section.background?.image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={section.background.image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Exact dark-blue gradient */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(515deg, #1f3b82 0%, #0f1f4a 45%, #070f2b 100%)",
            }}
            className="absolute inset-0"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-white text-3xl tracking-wide font-semibold uppercase">
            {section.header.title}
          </h2>
          <p className="text-white/80 text-xl mt-2">{section.header.year}</p>
        </motion.div>

        {/* Stats Rows */}
        <div className="space-y-16">
          {section.items.map((item: ImmigrationStatisticItem, i: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Left Big Number */}
              <div className="text-white text-[56px] font-semibold tracking-tight">
                {item.value}
              </div>

              {/* Right Content */}
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/75 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>

              {/* Divider */}
              <div className="md:col-span-2 h-px bg-white/20 mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
