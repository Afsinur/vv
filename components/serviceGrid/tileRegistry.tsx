import DefaultTile from "./DefaultTile";
import HoverTile from "./HoverTile";
import StatsTile from "./StatsTile";
import IconTile from "./IconTile";
import FirstTile from "./firstTile";
import TravellerTile from "./TravellerTile";
import TravellerApplyTile from "./TravellerApplyTile";

export const TILE_COMPONENTS = {
  default: DefaultTile,
  first: FirstTile,
  second: TravellerTile,
  secondHover: TravellerApplyTile,
  hover: HoverTile,
  stats: StatsTile,
  icon: IconTile,
};

export type TileComponentKey = keyof typeof TILE_COMPONENTS;
