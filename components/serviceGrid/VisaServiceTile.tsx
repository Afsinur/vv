"use client";

import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";
import SVGComponent from "@/public/svg/visa";
import Image from "next/image";

export default function VisaServiceTile({ tile }: { tile: ServiceGridTile }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* =====================
         VISUAL LAYER (SVG / IMAGE)
         ===================== */}
      <motion.div
        className="absolute inset-0 z-0 top-[32%] translate-y-[100%]"
        initial={{ scale: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <Image
          src={tile.image}
          alt={tile.title}
          width={500}
          height={500}
          className="
                    object-contain
                    pointer-events-none
                    scale-[100%]
                  "
        />
      </motion.div>

      {/* =====================
         CONTENT LAYER (STABLE)
         ===================== */}
      <div className="absolute z-10 flex items-center justify-center h-full bottom-[-30%] left-1/2 -translate-x-1/2">
        <h3
          className="
            text-white
            text-[32px]
            font-[400]
            uppercase
            tracking-wider
            text-center
          "
        >
          {tile.title}
        </h3>
      </div>
    </div>
  );
}
