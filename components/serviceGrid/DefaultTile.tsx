import Image from "next/image";
import { ServiceGridTile } from "@/types/content";

export default function DefaultTile({ tile }: { tile: ServiceGridTile }) {
  return (
    <>
      <h3 className="text-lg font-semibold uppercase z-10 relative">
        {tile.title}
      </h3>

      <Image
        src={tile.image}
        alt={tile.title}
        width={260}
        height={260}
        className="absolute bottom-4 right-4 w-[45%] opacity-90"
      />
    </>
  );
}
