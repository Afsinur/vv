"use client";

import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImmigrationWatchTileHover({
  tile,
}: {
  tile: ServiceGridTile;
}) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#503b70b5 0,#c0a7f3bc 100%)",
      }}
    >
      {/* =====================
         VISUAL LAYER (FLAG / DECOR)
         ===================== */}
      <motion.div
        className="
          absolute
          right-[-70px]
          bottom-[-120px]          
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
            pointer-events-none scale-[90%]
          "
        />
      </motion.div>

      {/* =====================
         CONTENT LAYER (STABLE)
         ===================== */}
      <div className="absolute left-8 bottom-[-15%] -translate-y-1/2 z-10">
        <h3 className="text-white text-left text-[20px] leading-[24px] font-[400] tracking-wide">
          <span className="whitespace-nowrap">Shaker</span>
          <br />
          <span className="whitespace-nowrap">
            Global Environmental Foundation
          </span>
        </h3>

        <button
          className=" mt-3
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
  );
}
