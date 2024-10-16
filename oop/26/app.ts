// * 2

type Combine = string | number;

const add = (param1: Combine, param2: Combine): Combine => {
  if (typeof param1 === "string" && typeof param2 === "string") {
    return param1.toString() + param2.toString();
  } else if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  return 0;
};
