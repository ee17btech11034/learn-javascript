/*
JS Data types:
    --> Officially 2 types of Data types Based on "Data Store in memory and Data Access":
        --> 1. Primitive Data types (Call by val)
                --> When we give the val to some func or var then it gives the copy of that val not the reference.                
                --> Number, String, Boolean, Undefined, Null, Symbol, BigInt
                    --> id1 = symbol("123") 
                        id2 = symbol("123") 
                        Here id1 and id2 will be different bcz Symbol returns unique val.
                    --> const bigNumber = 1234n; // BigInt literal


        --> 2. Non-Primitive Data types (Reference Data types)
                --> Can provide the reference of memory.
                --> Arrays, Objects, Functions, etc.
                    --> typeof (functionName) ==> functions but we call it "Object Functions"
    
    --> JavaScript is a dynamically typed language not a Static Typed.
        --> Variable types are determined at runtime, not at compile time.
        --> can change the variable type on run time as well
        --> let a = 5; // a is a number
        --> a = "Hello"; // now a is a string


JS Memory:
    --> 1. Stack Memory:
        --> All premetive.
        --> Stores primitive data types and references to non-primitive data types.
        --> It is faster to access and manage.
        --> Memory is automatically managed (LIFO - Last In First Out).

    --> 2. Heap Memory:
        --> Stores non-primitive data types.
        --> It is slower to access and manage.
        --> Memory is manually managed.

*/

"use strict";

let myName = "Raj"; // Primitive data type (String)
let nicName = myName; // 

console.log(`myName: ${myName}, nicName: ${nicName}`);
nicName = "Raju"; // Changing nicName does not affect myName
console.log(`After changing nicName,  myName: ${myName}, nicName: ${nicName}`);


let obj1 = { name: "Raj", age: 25 }; // Non-primitive data type (Object)
let obj2 = obj1; // obj2 holds the reference to the same object in memory
obj2.age = 26; // Changing obj2's age will affect obj1 as well
console.log(obj1, obj2)