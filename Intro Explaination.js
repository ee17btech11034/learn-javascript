/*

this Keyword:
    --> this keyword refers to current context or parent scope [only for Objects]. 
    --> context is just like values.
    --> this keyword in browser referes to "Window" Object
    --> this keyword in Node referes to empty object {} 
    --> can not use this in function scope


Arrow Functions:
    --> in ES6 (2015)
    --> use Arrow to define function
    --> (num1, num2) =>{} //we need to hold the val in variable
    --> Implicit return and Explicit return 
        --> Can not return Object in Implicit so better to wrap in ()
    
Immediately Invoked Function Expression (IIFE):
    --> A function we execute right when we define. 
    --> (function define)()
    --> it has its own scope and does not polute global values. Create private variables/functions.
    --> It is useful to avoid the pollution of Global scope variables. 
    --> Suppose there are some properties in global scope and we define that is our function as well then it will update the global one. 
    --> Multiple functions of same name are pulled in a single file. We will get the updated function right?
    --> Read more: https://www.tutorialsteacher.com/javascript/immediately-invoked-function-expression-iife 
    --> Run setup code immediately like connecting to DB, or some important functions
    --> //Befor and after IIFE we need a semicolon to tell that this is the end of the function. JS automatically does not know this

    */      

// "use strict";

const obj1 = {
    "name": "Raj",
    "age": 23,
    "thiscontext": function(){
        console.log("context or this :==>", this) //this referes to the object "{ name: 'Raj', age: 23, greet: [Function: greet] }"
    },
    greet: function(){
        console.log(`Hello ${this.name}`)
    },
}

obj1.thiscontext()
obj1.greet()
obj1.name = "Raja"
obj1.greet()

console.log(this) //{} -> empty object


function abc(){
    const name = "Rajesh"

    //In non-strict mode: this refers to the global object (window in browsers, global in Node.js). 
    //In strict mode: this is undefined.
    console.log(this) //undefined

    console.log(this.name) //undefined in both modes as "this" is only for objects but error in restrict mode
}
abc()



//++++++++++++++++++++ Arror Function +++++++++++++
console.log("++++++++++++++++++++ Arror Function +++++++++++++")

const func1 = () =>{
    const nae = "Raj"
    console.log(this)
    console.log(this.name)
}

func1()


//Explicit return -> if {} add krte ho to return statement use krna hi padega
const add = (num1, num2)=>{
    return (num1 + num2) //explicit return -> we are adding return statement
}
console.log(add(2, 3));


//inplicit return -> if oneline code function is there then no need to braces, just write the return line
// const add2 = (num1, num2) => num1 + num2  //it is also good but we need ( ) to return objects
const add2 = (num1, num2) => (num1 + num2) 
console.log(add2(2, 3));


// const add3 = () => {"name": "Raj"} //unexpected tocken ":" --> so btter to use 
const add3 = () => {name: "Raj"}
console.log(add3()) //undefined


const add4 = () => ({name: "Raj"})
console.log(add4()) //{ name: 'Raj' }


//++++++++++++++++++++ IIFE (immediatly Invoked Function Expression) +++++++++++++
console.log("++++++++++++++++++++ IIFE +++++++++++++");

// function func1(){}
// func1() // we executaed one line later -> NOT IIFE

(function func2(){ //name IIFE as it has a name
    console.log("Hello from normal IIFE");
})();

//Befor and after IIFE we need a semicolon to tell that this is the end of the function. JS automatically does not know this

(()=>{ //simple/unnamed IIFE 
    console.log("Hello from arrow IIFE");
})();

//Args
((name)=>{
    console.log(`Hello to ${name} from arrow IIFE`);
})("Raj");