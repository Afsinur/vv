"use client";

import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImmigrationWatchTile({
  tile,
}: {
  tile: ServiceGridTile;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* =====================
         VISUAL LAYER (FLAG / DECOR)
         ===================== */}
      <motion.div
        className="
          absolute
          right-[-110px]
          bottom-[-200px]          
          z-0
        "
      >
        <Image
          src={tile.image}
          alt={tile.title}
          width={260}
          height={260}
          className="
            object-contain
            opacity-95
            pointer-events-none scale-[130%]
          "
        />
      </motion.div>

      {/* =====================
         CONTENT LAYER (STABLE)
         ===================== */}
      <div className="absolute left-8 bottom-[0%] -translate-y-1/2 z-10">
        <h3
          className="text-white text-[32px] leading-tight font-[400] uppercase tracking-wide"
          dangerouslySetInnerHTML={{ __html: tile.title }}
        />
      </div>
    </div>
  );
}
