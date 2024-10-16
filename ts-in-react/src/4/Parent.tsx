import Child from "./Child";

export default function Parent() {
  const childData = [{ color: "red" }, { color: "pink" }, { color: "blue" }];

  return (
    <>
      <h1>this is Parent Component</h1>
      {childData.map((child) => (
        <Child {...child} key={child.color}>
          <div>content</div>
        </Child>
      ))}
    </>
  );
}
