import Image from "next/image";
import { ServiceGridTile } from "@/types/content";

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

      {/* ===== TITLE TEXT ===== */}
      <h3 className="text-white text-center text-[20px] leading-[24px] font-[400] tracking-wide">
        <span className="whitespace-nowrap">Shaker International</span> <br />{" "}
        <span className="whitespace-nowrap">Emergency Task Force</span>
      </h3>
    </div>
  );
}
