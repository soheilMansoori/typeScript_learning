// DRY !!
let item1: string | number = 12;
let item2: string | number = 13;
let item3: string | number = 14;

item1 = "JS";

// Alias Type
type Combine = string | number;

let item4: Combine = 12;
let item5: Combine = 13;
let item6: Combine = 14;

item4 = "TS";
