import Image from "next/image";
import { ServiceGridTile } from "@/types/content";

export default function TravellerApplyTile({
  tile,
}: {
  tile: ServiceGridTile;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[linear-gradient(135deg,#4fd1c5_0%,#2c7a7b_100%)]">
      {/* ===== TEXT + CTA (LEFT) ===== */}
      <div className="absolute left-16 bottom-20 z-10">
        <h3
          className="text-white text-[32px] leading-tight font-[400] uppercase tracking-wide"
          dangerouslySetInnerHTML={{ __html: tile.title }}
        />

        <button
          className=" mt-3
            inline-flex items-center justify-center
            px-4 py-1.5
            text-[13px]
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

      {/* ===== PLANE IMAGE ===== */}
      <Image
        src={tile.image}
        alt={tile.title}
        width={800}
        height={800}
        priority
        className="
          absolute
          right-[-12%]
          top-[18%]
          w-[70%]
          max-w-[520px]
          h-auto
          pointer-events-none
          drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]
        "
      />

      {/* ===== LUGGAGE IMAGE (OPTIONAL DECOR) ===== */}
      {tile.decorImage && (
        <Image
          src={tile.decorImage}
          alt=""
          width={240}
          height={240}
          className="
            absolute
            right-[15%]
            bottom-[28%]
            w-[20%]
            max-w-[140px]
            h-auto
            pointer-events-none
            drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]
          "
        />
      )}
    </div>
  );
}
