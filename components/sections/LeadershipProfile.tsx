"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LeadershipProfileSection } from "@/types/content";

interface Props {
  section: LeadershipProfileSection;
}

export default function LeadershipProfile({ section }: Props) {
  const { person, content } = section;

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-32">
        {/* Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-20"
        >
          {/* Name & Title */}
          <div className="pl-2">
            <h2 className="text-[#1f3f7a] text-[38px] font-semibold leading-tight">
              {person.name}
            </h2>
            <p className="text-gray-600 text-[17px] mt-3">
              {person.designation}
            </p>
          </div>

          {/* Portrait */}
          <div className="flex justify-end pr-6">
            <Image
              src={person.image}
              alt={person.name}
              width={300}
              height={420}
              className="object-contain scale-150"
              priority
            />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-20 mb-14 max-w-[820px]" />

        {/* Body Text */}
        <div className="space-y-6">
          {content.map((paragraph: string, i: number) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              className="text-gray-700 text-[15px] leading-[1.75]"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
