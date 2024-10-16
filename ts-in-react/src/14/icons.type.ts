type SvgIconTypes = {
  children: React.ReactNode;
  svg: boolean;
  png?: never;
};
type PngIconTypes = {
  children: React.ReactNode;
  svg?: never;
  png: boolean;
};

export type IconsProps = PngIconTypes | SvgIconTypes;
