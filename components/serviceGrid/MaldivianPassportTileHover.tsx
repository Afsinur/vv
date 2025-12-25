"use client";

import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MaldivianPassportTileHover({
  tile,
}: {
  tile: ServiceGridTile;
}) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: "linear-gradient(45deg,#31b4f0,#85ceff)" }}
    >
      {/* =====================
         VISUAL LAYER (PASSPORT IMAGE)
         ===================== */}
      <motion.div
        className="
          absolute
          left-[60px]
          top-[60px]
          z-0
        "
      >
        {tile.decorImage && (
          <Image
            src={tile.decorImage}
            alt={tile.title}
            width={220}
            height={220}
            className="
            object-contain
            pointer-events-none
            rotate-[6deg]
             scale-[120%]
          "
          />
        )}
      </motion.div>

      {/* =====================
         CONTENT LAYER (STABLE)
         ===================== */}
      <div className="absolute right-10 bottom-12 z-10 text-right grid gap-4">
        <h3 className="text-black text-left text-[20px] leading-[24px] font-[400] tracking-wide">
          <span className="whitespace-nowrap">Shaker Global Women’s</span>
          <br /> <span className="whitespace-nowrap">Rights Foundation</span>
        </h3>

        <div className="flex justify-start">
          <button
            className="
            inline-flex items-center justify-center
            px-10 py-1.5
            text-[16px] 
            font-semibold
            uppercase
            tracking-wide
           bg-[#0C286B] text-white
            rounded
            hover:bg-[#062a2a]
            transition-colors
          "
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
