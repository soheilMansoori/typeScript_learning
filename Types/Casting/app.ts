let test: unknown = "test";

let siteName: string = test as string; // way 1
let siteTitle: string = <string>test; // way 2

console.log((test as string).length);

let num1: unknown = "12";
let num2: unknown = "8";

console.log((num1 as number) + (num2 as number)); // !!!! not 20 => !!!! 128
