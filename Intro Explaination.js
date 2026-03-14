/*
JS Scope:
    --> Global Scope:
        --> Main function's scope or scope of script. 
        --> gobal scope of NodeJS env and browser env is different. (Read more about it)
        --> whatever val we define in this will be available in its child scopes.

    --> Local Scope:
        --> Local scope is binded by {} in function , if-else, for loop etc
            --> a. Block Scope:
                    --> Scope inside a {}
                    --> Like if-else, for, etc.
            -->b. function Scope:
                    --> sScope inside a function {}.
                    --> function name(){}
                    --> function scope is a special type of block scope.
            -> only diff between Block Scope and Function scope is Hoisting of var. 
                --> var is hoisted outer scope (like global) if defined in block scope
                --> var is hoisted to function scope if defined in function
    

*/      

"use strict";

//we can write code with let or const and the check these. 



// Functions:


// using function name
console.log(add1(3)); //4 as functions with Names are hoisted 
function add1(num){ //hoisted declaration     "function add1(num(undefined));"
    return num+1
}

console.log(add1(3));


//using reference and store that in variable
//In JS, variables are so powerful that they can hold any val.
// console.log(add2(3)); //can not access add2 before initialization
const add2 = function(num){ //function is hoisted but const are in Temporal Dead Zone, will throw error
    return num+1
}
console.log(add2(6));
