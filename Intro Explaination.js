/*
Datatypes Conversions:
    --> To Number
        --> "33" ==> 33
        --> "33abc" ==> NaN bcz Nan is also number but not a valida number means not able to convert properly
        --> "null" ==> 0
        --> "undefined" ==> NaN
        --> "true" ==> 1
        --> "false" ==> 0

    --> To Boolean
        --> "33" ==> true
        --> "" ==> false
        --> 1 ==> true
        --> 0 ==> false
        --> null ==> false
        --> undefined ==> false
        --> NaN ==> false

    --> To String
        --> 33 ==> "33"
        --> null ==> "null"
        --> undefined ==> "undefined"
        --> true ==> "true"
        --> false ==> "false"
*/

"use strict";


// Convert to number
let a = "5"
console.log(`Value of a: ${a} and type is ${typeof a}`); // "5" and string 

let b = Number(a);
console.log(`Value of b: ${b} and type is ${typeof(b)}`); // 5 and Number

a = "55abc"
b = Number(a);
// console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // NaN and Number
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // NaN and Number

a = null
b = Number(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // 0 and Number

a = undefined
b = Number(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // NaN and Number

a = "true"
b = Number(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // 1 and Number

a = "false"
b = Number(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // 0 and Number


console.log("--------------------------------------------------");
// Convert to Boolean
a = "33"
b = Boolean(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // true and Boolean

a = ""
b = Boolean(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // false and Boolean

a = 1
b = Boolean(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // true and Boolean

a = 0
b = Boolean(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // false and Boolean

a = null
b = Boolean(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // false and Boolean

a = undefined
b = Boolean(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // false and Boolean

a = NaN
b = Boolean(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // false and Boolean


console.log("--------------------------------------------------");
// Convert to String
a = 33
b = String(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // 33 and String

a = null
b = String(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // null and String

a = undefined
b = String(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // undefined and String

a = true
b = String(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // true and String

a = false
b = String(a);
console.log(`a: ${a}, ${typeof(a)} ====> ${b}, ${typeof(b)}`); // false and String

