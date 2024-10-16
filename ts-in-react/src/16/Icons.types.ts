type Vertical = "top" | "center" | "bottom";
type Horizontal = "left" | "center" | "right";

type Position =
  | Exclude<`${Vertical}-${Horizontal}`, "center-center">
  | "center";

type SvgIconTypes = {
  children?: React.ReactNode;
  svg: boolean;
  png?: never;
  position: Position;
};
type PngIconTypes = {
  children?: React.ReactNode;
  svg?: never;
  png: boolean;
  position: Position;
};

export type IconsProps = PngIconTypes | SvgIconTypes;
