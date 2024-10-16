import { useEffect, useRef } from "react";

export default function Ref() {
  const elem = useRef<HTMLInputElement>(null);
  useEffect(() => {
    // way-1
    if (elem.current) {
      console.log(elem.current.value);
    }
    // way-2
    console.log(elem.current?.value);
  }, []);
  return <input type="text" ref={elem} placeholder="input element"></input>;
}
