/*
JS Objects:
    --> key, val pair
    --> 2 ways to declare:
        --> 1. As an literal
            --> can have multiple instances
            --> a = {}
        --> 2. Using Constructor
            --> When we create using this then That is a "Singleton" object means it will have a single instance.
            --> Object.create()

    --> Use sumbol as an key.
    --> when we use [] in key that means that will be treated a s property not as standard key.
    --> this keyword

*/      

"use strict";
//{} are called literals
const userDetails = {
    "name": "Raj",
    "age": 18,
    location: "JP", //automatically uses string
    isLogged: false,
    favNumbers: [1, 2, 4],
    "full name": "Raj Asiwal",
}

console.log(userDetails);
console.log(userDetails.age); // here we can access without ""
// console.log(userDetails.full name); // can not use here as it will throw error
// console.log(userDetails."full name"); // not allowed
// console.log(userDetails[location]); //error 'location' not defined as obj keys are string
console.log(userDetails["location"]); //


// Symbol as a key
const mySymbol = Symbol("key12")
const obj2 = {
    "full name": "Raj Asiwal",
    mySymbol: "key1", // this key will be in string format
    [mySymbol]: "key2", // this will be a property not a key will be in Symbol format
}

console.log(obj2["mySymbol"], typeof(obj2["mySymbol"])) // access key as a string
console.log(obj2.mySymbol);

console.log(obj2[mySymbol]) // access key as a Symbol
console.log("key type:", typeof(Object.keys(obj2)[1])) // string
console.log("key type:", typeof(Object.keys(obj2)[2])) // undefined bcz it does not include Symbol keys
console.log(Object.getOwnPropertySymbols(obj2))



// val mutation
const obj3 = {
    "name": "Raj",
    "age": 18,
    location: "JP", //automatically uses string
    isLogged: false,
}

console.log(obj3["name"]);
obj3["name"] = "Raja"
console.log("Change 1: ", obj3["name"]);

Object.freeze(obj3) // freeze object and does not mutate
// obj3["name"] = "Rohit" //  error as we can not change
console.log("Change after freeze: ", obj3["name"]);



// functions
const obj4 = {
    name: "Raja",
}
obj4.greet = function(){
    console.log("Hello from greet");   
}
obj4.greet2 = function(){ // easy to use obj3.greet2 that obj3["greet2"]
    console.log(`Hello ${this.name} from greet2`);   //this keyword refrs to the object
}

console.log(obj4.greet); //[Function (anonymous)] reference of this function
console.log(obj4.greet()); //"Hello from greet" \n "undefined" it executes 2 times.
console.log(obj4.greet2());//"Hello Raja from greet2" \n "undefined" executes 2 times
