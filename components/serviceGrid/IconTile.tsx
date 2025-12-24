import Image from "next/image";
import { ServiceGridTile } from "@/types/content";

export default function IconTile({ tile }: { tile: ServiceGridTile }) {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src={tile.image}
        alt={tile.title}
        width={96}
        height={96}
        className="opacity-90"
      />
    </div>
  );
}
