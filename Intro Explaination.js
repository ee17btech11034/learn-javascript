/*
JS String:
    --> we can use '' or "" or `` to declare
    --> String interpolation:
        --> Modern way is using  `` (template literals)
        --> we can use placeholders ${} to insert variable in string

*/

"use strict";

const myName = "Raj"; // A way to declare a string variable 
    // --> Behind the scene it is also calling new String("Raj") to create a string object
const nicName = new String("Raj"); // Another way to declare a string variable  
    // --> Creating a new instance using "new" keyword
    // --> Created with help of Constructor "String" of class "String"

console.log(myName); // Output: Raj
console.log(nicName); // Output: Raj
// Do these in browser console to see the difference


console.log(nicName.__proto__); // To access the prototype of string
console.log(nicName.length); // To get the length property of string

// Prototype Methods of String
console.log(nicName.toUpperCase()); // To get the uppercase property of string
console.log(nicName.charAt(1)); // To get the character at index 1 of string
console.log(nicName.indexOf("a")); // To get the index of the character "A" in the string


let otherName = "Rajkumar"
const substr1 = otherName.substring(0, 3); // To get the substring from index [0, 3)
const substr2 = otherName.substring(-4, 3); // To get the substring from index [0, 3) => Does not obey negative index

const substr3 = otherName.slice(0, 3); // To get the substring from [0, 3)
const substr4 = otherName.slice(-4, 3); // To get the substring  from -4 to index 3 => Obeys negative index

console.log(substr1); // Output: Raj
console.log(substr2); // Output: Raj
console.log(substr3); // Output: Raj
console.log(substr4); // Output: "" as 3 is in left side and -4 is in right. 

const substr5 = otherName.slice(3, -4);
console.log(substr5); // Output: k as [3, -4)



const str1 = "     Hii    \n" // white spaces
console.log(str1)
console.log(str1.trim()) // remove start and end whitespaces and new line chars as well

console.log(otherName.replace("jk", "jK"))// replacing "jk" with "JK" => did not change the actual string
console.log(otherName.includes("jk")) // To check if the string includes "jk" or not

const str2 = "Hello World Welcome to JavaScript"

console.log(str2.split(" ")); // To split the string into an array of substrings based on the separator " " (space)