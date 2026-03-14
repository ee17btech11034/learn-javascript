/*
JS Functions:
    --> A block of code which can be used multiple times just with one reference.
    --> function greet(); gret is the name
    --> functions are hoisted with declare with "undefined" params val.

    --> Rest operator: (...) is REST and SPREAD operator
        --> function calculatetotalPrice(...itemPrices){
            --> itemPrices will be in an array.

*/      

"use strict";

function greet(){ //return "undefined"
    console.log("Hello")
}
console.log(greet); //reference to function
greet(); //execute it


//num3 is default param
function add(num1, num2, num3 = num1 * num2){ //num1, num2, num3 are parameters-> when we define a function
    console.log("num1: ", num1)
    console.log("num2: ", num2)
    console.log("num3: ", num3, "\n")
    return num1 + num2
}

// let sum = add(2, 5) //2,5 are arguments

let sum = add() //num1, num2 are undefined but num3 is Nan as undefined*undefined
sum = add(1) //1, undefined, NaN
sum = add(2, 3) //2, 3, 6 (3*2)
sum = add(2, 3, 5) //2, 3, 5

// sum = add(1, "a") // for these scenarios we check all params in function and then we do the calculations
// That's whyc TypeScript Best

function add(num1, num2, num3 = num1 * num2){ 
    if (num1 === undefined){
        console.log("num1 is not defined");        
        return //return "undefined"
    }
    else if (!num2){
        console.log("num1 is not defined"); 
    }//
    return num1 + num2
}



//When we do not know how many args user wil provide then we use REST operator
//function calculatetotalPrice(val1, val2, ...itemPrices){ //left to right
function calculatetotalPrice(...itemPrices){
    console.log(itemPrices)
}

calculatetotalPrice(1, 2, 3)
calculatetotalPrice(1, 2, 3, 4, 5)