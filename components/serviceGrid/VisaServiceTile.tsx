import Image from "next/image";
import { ServiceGridTile } from "@/types/content";

export default function VisaServiceTile({ tile }: { tile: ServiceGridTile }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
      {/* ===== FLAGS IMAGE ===== */}
      <Image
        src={tile.image}
        alt={tile.title}
        width={420}
        height={120}
        priority
        className="
          absolute
          top-8
          left-1/2
          -translate-x-1/2
          w-[70%]
          max-w-[360px]
          h-auto
          pointer-events-none
        "
      />

      {/* ===== TITLE ===== */}
      <h3
        className="
          text-white
          text-[18px]
          font-semibold
          uppercase
          tracking-wider
          mt-12
        "
      >
        {tile.title}
      </h3>
    </div>
  );
}
