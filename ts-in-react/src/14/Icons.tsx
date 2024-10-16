import { IconsProps } from "./icons.type";

// bad way
// type IconsProps = {
//   children: React.ReactNode;
//   svg: boolean;
//   png: boolean;
// };

function Icons({ children, png, svg }: IconsProps): JSX.Element {
  return <div>{children}</div>;
}

function Test(): JSX.Element {
  //   return <Icons png svg/>; // error
  return <Icons png children="test content" />; // ok
  return <Icons svg children="test content" />; // ok
}

export default Icons;
