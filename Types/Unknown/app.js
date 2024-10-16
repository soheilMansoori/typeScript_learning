"use strict";
// any 
// unknown 
let test1 = 12;
test1++; // ok
test1.length; // ok but bug in any
test1.id = 6; // ok but bug in any
test1.push(15); // ok but bug in any
let test2 = 12;
if (typeof test2 === 'number') {
    test2++; // ok
}
if (typeof test2 === 'string') {
    test2.length; // ok
}
// test2.length // error  in unknown
// test2.id = 6 // error  in unknown
// test2.push(15) // error  in unknown
