import { ServiceGridTile } from "@/types/content";

export default function StatsTile({ tile }: { tile: ServiceGridTile }) {
  return (
    <div className="text-white">
      <h4 className="text-sm uppercase">{tile.title}</h4>
      <p className="text-3xl font-bold mt-2">75+</p>
      <span className="text-xs">Years</span>
    </div>
  );
}
