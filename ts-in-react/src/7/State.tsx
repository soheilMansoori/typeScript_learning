import { useState } from "react";

export default function State(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        plus
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        minus
      </button>
    </>
  );
}
