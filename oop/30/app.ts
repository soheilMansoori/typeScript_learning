type param = string | number;

function add(param1: number, param2: number): number;
function add(param1: string, param2: string): string;

function add(param1: param, param2: param): param {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    return param1.toString() + param2.toString();
  } else {
    return 0;
  }
}

const result = add("MMD", "Amin");

console.log(result.split(""));
