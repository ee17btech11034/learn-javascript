/*

JS Control Flow /Logic Control:
    --> operators: <, >, <=, >=, ==, !=, ===, !==, 
    --> && (AND), || (OR) , ! (NOT)
    -->if - else conditions:
            --> code execute if it is true.
    --> Switch


--> truthy - Falsy Values:->
        --> Just check if it is defined or not. Does not check the val.

Nullish Coalescing Operator (??) :=>
        --> just focus on => null, undefined
        --> let num = a ?? b ?? c;
            --> num = a if a is not null or undefined
            --> num = b if a is null/undefined and b is not null/undefined
        --> It is not a good practice if your code has any val "null/undefined" 
            --> this is the best way to handle them as we can add true or false in end as well
            --> a ?/ b ?? c ?? false

Ternary Operator:=>
        --> small/short form of 'if-else'
        --> condition ? expressionIfTrue : expressionIfFalse

*/      

// "use strict";

//implicit Scope: -> execute in one line
const money = 1000;
if (money > 500) console.log("Money > 500"); //; is needed to end the scope

if (money > 600) console.log("Money > 600"),  //; is needed to end the scope
console.log("Money > 900"); // this also comes under this scope as we need semicolon to end but it is not a good practice


// Switch Case:
// -- if no break then once it is match all below code will execute 

//It searches top-to-bottom for a matching case.
// If no match is found, it jumps to the default block (if present).


let month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    default:
        break;
}

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//     case 4:
//         console.log("Apr");
//     default:
//         console.log("Else");
// } //mar apr else

// month = 9
// switch (month) {
//     default:
//         console.log("Else");
//     case 1:
//         console.log("Jan");
//     case 2:
//         console.log("Feb");
//     case 3:
//         console.log("Mar");
//     case 4:
//         console.log("Apr");
    
// } //else jan, feb, mar, apr


month = 3
switch (month) {
    default:
        console.log("Else");
    case 1:
        console.log("Jan");
    case 2:
        console.log("Feb");
    case 3:
        console.log("Mar");
    case 4:
        console.log("Apr");
    
} //mar, apr







//truthy -falsy value:
// Some val we assume as true or false, like empty string, empty array, etc. 

// All objects are truthy, and in JavaScript, arrays are a type of object.  ***************************
// The language checks existence, not emptiness — so if it's an object (even empty), it's considered true in a boolean context. 
// an empty string has no characters, so it's logically equated with absence or emptiness



// let val = "" //falsy bcz it is defined in JS that it has some val like nothing or NaN
// let val = "abc" //thruthy
// let val = [] //thruthy
// let val = null //falsy
let val = {} //falsy
if (val){
    console.log("Val is there means Truthy");
}
else {
    console.log("Val is not there means Falsy");
}
/*
Falsy Val:=>  false, 0, -0, BigInt 0n, ", null, undefined, NaN"
Truthy Val:=> "0", "false", " ", [], {}, function(){}



Use length property 
if (arr1.length === 0) 
if (Object.keys(obj1).length === 0) 

false == 0 -> true
false == "" -> true
0 == "" -> true
*/





// Nullish Coalescing Operator (??) :=>
let val1;
val1 = 5 ?? 10; //5 if first val is available then first else second
val1 = null ?? 10; //10 if first val is available then first else second
val1 = undefined ?? 10; //10 if first val is available then first else second

console.log(val1)



//Ternary  Operator
const age = 23
let result = (age > 18) ? "Can Drive" : "Can not drive"
console.log(result);
