import DefaultTile from "./DefaultTile";
import HoverTile from "./HoverTile";
import StatsTile from "./StatsTile";
import IconTile from "./IconTile";

/**
 * ALL AVAILABLE TILE COMPONENTS
 * Key comes from JSON
 */
export const TILE_COMPONENTS = {
  default: DefaultTile,
  hover: HoverTile,
  stats: StatsTile,
  icon: IconTile,
};

export type TileComponentKey = keyof typeof TILE_COMPONENTS;
