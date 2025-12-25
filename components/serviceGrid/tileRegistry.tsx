import DefaultTile from "./DefaultTile";
import HoverTile from "./HoverTile";
import StatsTile from "./StatsTile";
import IconTile from "./IconTile";
import FirstTile from "./firstTile";
import TravellerTile from "./TravellerTile";
import TravellerApplyTile from "./TravellerApplyTile";
import VisaServiceTile from "./VisaServiceTile";
import VisaServiceTileHover from "./VisaServiceTileHover";
import ImmigrationWatchTile from "./ImmigrationWatchTile";
import ImmigrationWatchTileHover from "./ImmigrationWatchTileHover";
import MaldivianPassportTile from "./MaldivianPassportTile";
import MaldivianPassportTileHover from "./MaldivianPassportTileHover";
import MaldivesBorderMilesTile from "./MaldivesBorderMilesTile";
import MaldivesBorderMilesTileHover from "./MaldivesBorderMilesTileHover";
import FirstTileHover from "./firstTileHover";

export const TILE_COMPONENTS = {
  default: DefaultTile,
  first: FirstTile,
  firstHover: FirstTileHover,
  second: TravellerTile,
  secondHover: TravellerApplyTile,
  third: VisaServiceTile,
  thirdHover: VisaServiceTileHover,
  four: ImmigrationWatchTile,
  fourHover: ImmigrationWatchTileHover,
  five: MaldivianPassportTile,
  fiveHover: MaldivianPassportTileHover,
  six: MaldivesBorderMilesTile,
  sixHover: MaldivesBorderMilesTileHover,
  hover: HoverTile,
  stats: StatsTile,
  icon: IconTile,
};

export type TileComponentKey = keyof typeof TILE_COMPONENTS;
