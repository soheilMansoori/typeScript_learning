import { IconsProps } from "./Icons.types";

function Icons({ children, png, svg, position }: IconsProps): JSX.Element {
  return <div>{children}</div>;
}

function Test() {
  return <Icons svg position="bottom-left" />;
}
