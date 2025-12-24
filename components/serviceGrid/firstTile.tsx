import Image from "next/image";
import { ServiceGridTile } from "@/types/content";

export default function FirstTile({ tile }: { tile: ServiceGridTile }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
      {/* ===== CENTER IMAGE ===== */}
      <Image
        src={tile.image}
        alt={tile.title}
        width={260}
        height={260}
        priority
        className="
          w-[30%]
          max-w-[240px]
          h-auto
          mb-6
          drop-shadow-[0_10px_28px_rgba(0,0,0,0.35)]
        "
      />

      {/* ===== TITLE TEXT ===== */}
      <h3
        className="font-[700] text-[24px] leading-snug uppercase tracking-wider"
        dangerouslySetInnerHTML={{ __html: tile.title }}
      />
    </div>
  );
}
