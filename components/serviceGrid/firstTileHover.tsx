import Image from "next/image";
import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";

export default function FirstTileHover({ tile }: { tile: ServiceGridTile }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
      {/* ===== CENTER IMAGE ===== */}
      <Image
        src={tile.image}
        alt={tile.title}
        width={260}
        height={260}
        priority
        className="s
          w-[30%]
          max-w-[240px]
          h-auto
          mb-6
          drop-shadow-[0_10px_28px_rgba(0,0,0,0.35)]
        "
      />

      {/* <motion.div
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
      </motion.div> */}
      {/* ===== TITLE TEXT ===== */}
      <h3 className="text-white text-left text-[20px] leading-[24px] font-[400] tracking-wide">
        <span className="whitespace-nowrap">Shaker</span> <br />{" "}
        <span className="whitespace-nowrap">
          International Emergency Task Force
        </span>
      </h3>
    </div>
  );
}
