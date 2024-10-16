const arr: [] = [];
const array: string[] = ["name", "age"];
array.push("test");
// array.push(false) // errro

const testArray: (string | boolean | number)[] = ["name", false, 20];

const obj: { id: number; name: string; arr: string[] } = {
  id: 1,
  name: "soheil_mansooti",
  arr: ["test"],
};

const my2DArray: (string | number)[][] = [
  [1, "admin", 21],
  [2, "user", "test"],
];
