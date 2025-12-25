"use client";

import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MaldivesBorderMilesTile({
  tile,
}: {
  tile: ServiceGridTile;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* =====================
         CARD IMAGE (CENTER BOTTOM)
         ===================== */}
      <motion.div
        className="
          absolute
          left-1/2
          bottom-[-10%]
          z-0
          -translate-x-1/2
        "
      >
        <Image
          src={tile.image}
          alt={tile.title}
          width={200}
          height={120}
          className="
            object-contain
            pointer-events-none
            scale-[110%]
          "
        />
      </motion.div>

      {/* =====================
         TITLE (TOP CENTER)
         ===================== */}
      <div className="absolute top-12 left-1/2 z-10 -translate-x-1/2 text-center">
        <h3
          className="text-white text-center text-[32px] leading-tight font-[400] uppercase tracking-wide"
          dangerouslySetInnerHTML={{ __html: tile.title }}
        />
      </div>
    </div>
  );
}
