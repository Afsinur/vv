import { ServiceGridTile } from "@/types/content";

export default function HoverTile({ tile }: { tile: ServiceGridTile }) {
  return (
    <div className="flex items-center justify-center h-full text-white">
      <span className="text-xl font-semibold">Explore {tile.title}</span>
    </div>
  );
}
