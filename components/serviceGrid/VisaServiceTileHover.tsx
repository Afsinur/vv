"use client";

import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";
import SVGComponent from "@/public/svg/visa";
import Image from "next/image";

export default function VisaServiceTileHover({
  tile,
}: {
  tile: ServiceGridTile;
}) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#fac791e1,#bd9469e8)",
      }}
    >
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
      </motion.div>{" "}
      <motion.div
        className="
                absolute
                right-[5%]
                bottom-[5%]
                z-0
                -translate-x-1/2
              "
      >
        <Image
          src={`/images/service-grid/prog.gif`}
          alt={tile.title}
          width={60}
          height={60}
          className="
                  object-contain
                  pointer-events-none
                  scale-[150%]
                "
        />
      </motion.div>
      {/* =====================
         CONTENT LAYER (STABLE)
         ===================== */}
      <div className="absolute left-[50%] bottom-14 z-10 -translate-x-1/2">
        <h3 className="text-white text-center text-[20px] leading-[24px] font-[400] tracking-wide">
          <span className="whitespace-nowrap capitalize">
            OPERATION BANGLADESH
          </span>
        </h3>

        <button
          className=" mt-3
            inline-flex items-center justify-center
            px-10 py-1.5
            text-[16px]
            ml-[18%]
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
