"use client";

import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MaldivianPassportTile({
  tile,
}: {
  tile: ServiceGridTile;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* =====================
         VISUAL LAYER (PASSPORT IMAGE)
         ===================== */}
      <motion.div
        className="
          absolute
          left-[16px]
          bottom-[-60px]
          z-0
        "
      >
        <Image
          src={tile.image}
          alt={tile.title}
          width={220}
          height={220}
          className="
            object-contain
            pointer-events-none
            rotate-[56deg]
             
          "
        />
      </motion.div>

      {/* =====================
         CONTENT LAYER (STABLE)
         ===================== */}
      <div className="absolute right-8 bottom-8 z-10 text-right">
        <h3
          className="text-white text-left text-[32px] leading-tight font-[400] uppercase tracking-wide"
          dangerouslySetInnerHTML={{ __html: tile.title }}
        />
      </div>
    </div>
  );
}
