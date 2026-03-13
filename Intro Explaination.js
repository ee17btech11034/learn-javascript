/*
JS Number:
    --> Ways to define Numbers
        --> const num1 = 100 // no methods and type in output even in browser
        --> const num2 = new Number(200)
    // new Number(200) tells specifically that we need type NUMBER
        --> Check the console and browser console
        --> In here out=> [number, 200] -> telling the type specifically
            --> In Browser => Methods are also present in prototype.
    
    // I think reason is in num1 simple assign number is done
    // num2 uses Number class that's why we are able to see the methods

*/

"use strict";
console.log(Number)
const num2 = new Number(200) // Uses Number Class/Objects to create 
const num1 = 100; // assign number and uses new Number method only

// console.log(` num1: ${num1}`) //not like this

console.log(num1)
console.log(num2) // check this in browser

console.log(num1.toString()) // 
console.log(num2.toString()) // 
console.log(num2.toString().length) // 
console.log(num1.toFixed(2)) // 2 digits after decimal and as a string

let num3 = 3.456789
console.log(num3.toFixed(2), typeof(num3.toFixed(2))) // "3.46" as 2 digits after decimal and round off

console.log(num3.toPrecision(3)) //"3.46" as 3 digits in total--> start from left to right and can provide in e^ x as well
// Precision Round off be kr deta hai
num3 = 23.456789
console.log(num3.toPrecision(3), typeof(num3.toPrecision(3))) // "23.5"

num3 = 123.556789
console.log(num3.toPrecision(3)) // "124"

num3 = 1123.456789
console.log(num3.toPrecision(3)) // "1.12e+3" as 3 digits in total and in e^x form as well


num3 = 1000000

console.log(num3.toLocaleString()) // "1,000,000" return str based on Users lang like commas at k, million for US people
console.log(num3.toLocaleString("en-IN")) // "10,00,000" return str as per Indian count


//Min and Max val of number (not bigint) in JS

const minNumber = Number.MIN_VALUE
const maxNumber = Number.MAX_VALUE
const maxSafeIntNumber = Number.safeInteger // 2^53 - 1 as max safe integer in JS

console.log(`Min Number: ${minNumber} and Max Number: ${maxNumber}`) // Min Number: 5e-324 and Max Number: 1.7976931348623157e+308





console.log("---------Maths------------------")
// math Library or Object
console.log(Math)
console.log(Math.abs(-4)) //4 as |-x|

console.log(Math.round(4.4)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.ceil(4.4)) // 5 as it rounds up to nearest integer
console.log(Math.floor(4.7)) // 4 as it rounds down to nearest integer


console.log(Math.random()) // 0 to 1 random number
console.log(Math.random() *10) // 0 to 1 random number

// Generate random number between 5 to 13
const min = 5
const max = 13
let temp_num = Math.random(); // 0 - 1
temp_num = Math.random() * 10 // 0 - 10
temp_num = Math.random() * (max - min) // 0 - 8
temp_num = Math.random() * (max - min) + min // 5 - 13  but decimals as well
// temp_num = Math.fllor(Math.randon() * (max - min) + min // 5 - 13  but decimals as well

const generatedNum = Math.floor((Math.random() * (max - min +1)) + min) // 5 - 13  but decimals as well
console.log(generatedNum)