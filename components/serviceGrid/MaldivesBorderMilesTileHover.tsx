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
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: "linear-gradient(45deg,#a7fef9,#85ddd9)" }}
    >
      {/* =====================
         CARD IMAGE (CENTER BOTTOM)
         ===================== */}
      <motion.div
        className="
          absolute
          left-1/2
          bottom-[5%]
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

      {tile.decorImage && (
        <motion.div
          className="
          absolute
          right-[-5%]
          bottom-[0%]
          z-0
          -translate-x-1/2
        "
        >
          <Image
            src={tile.decorImage}
            alt={tile.title}
            width={60}
            height={60}
            className="
            object-contain
            pointer-events-none
            scale-[100%]
          "
          />
        </motion.div>
      )}

      {/* =====================
         TITLE (TOP CENTER)
         ===================== */}
      <div className="absolute top-8 left-1/2 z-10 -translate-x-1/2 text-center gap-4 grid">
        <h3 className="text-black text-center text-[20px] leading-[24px] font-[400] tracking-wide">
          <span className="whitespace-nowrap">Shaker International</span> <br />{" "}
          <span className="whitespace-nowrap">Scholarship Programs</span>
        </h3>

        <div className="flex justify-center">
          <button
            className="
            inline-flex items-center justify-center
            px-8 py-1.5
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
            VISIT
          </button>
        </div>
      </div>
    </div>
  );
}
