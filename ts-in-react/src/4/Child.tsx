import { CSSProperties, ReactElement } from "react";

type ChildTypes = {
  color: string;
  // children?: React.ReactNode; // way-3
  // children?: JSX.Element; // way-4
  // children?: ReactElement; // way-5
};

// way-1
export default function Child({
  color,
  children,
}: React.PropsWithChildren<ChildTypes>): JSX.Element {
  // this type show css properties
  const styles: CSSProperties = {
    color,
    fontSize: "24px",
  };
  return (
    <>
      <h1 style={styles}>this is child component</h1>
    </>
  );
}

// way-2
// const Child: React.FC<React.PropsWithChildren<ChildTypes>> = ({ color }) => {
//   // this type show css properties
//   const styles: CSSProperties = {
//     color,
//     fontSize: "24px",
//   };
//   return (
//     <>
//       <h1 style={styles}>this is child component</h1>
//     </>
//   );
// };

// export default Child;
