import Image from "next/image";
import { ServiceGridTile } from "@/types/content";
import { motion } from "framer-motion";

export default function TravellerTile({ tile }: { tile: ServiceGridTile }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* ===== TEXT (BOTTOM LEFT) ===== */}
      <div className="absolute left-16 bottom-10 z-10">
        <h3
          className="text-white text-[32px] leading-tight font-[400] uppercase tracking-wide"
          dangerouslySetInnerHTML={{ __html: tile.title }}
        />
      </div>

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

      {/* ===== AIRPLANE IMAGE ===== */}
      <Image
        src={tile.image}
        alt={tile.title}
        width={900}
        height={900}
        className="scale-[210%] absolute right-[-55%] bottom-[-2%] w-[85%] max-w-[600px] h-auto pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
      />
    </div>
  );
}
