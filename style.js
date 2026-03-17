/*
# Lexical Scoping:
        --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures#lexical_scoping
        --> If we define some variables and an inner function in a function
            --> then inner function ca access this variable
        --> a is accesible in main and inner but not outside. This scoping is called Lexical Scoping.
        --> Reason: inner() execution is done so it clean the memory for that Execution context *********************

# Closures:
        --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures

        --> we return reference of inner function to main function.
        --> when we return  that mean it is bringing            "its lexical scope not execution context"    *********
        --> // inner function run hua with main2 ke context ke sath , outside main.
        --> When we want to hide some details then we define them in main and return inner function as inner function can have only output
        --> Useful in Abstraction, Encapsulation

        --> check the index file for real life example


# Using IIFE to block access for variables:
        --> IIFE runs right away when defined.
        --> if we can return an object and store that then I can access IIFE's properties.
        --> i can manage return object
*/


// Lexical Scoping

function main(){
    let a = 5
    console.log("a inside main: ", a);

    function inner(){
        let b = 8
        console.log("a inside inner: ", a);
    }

    inner() // execution is done so it clean the memory 
    // console.log("binside main: ", b); // b is not defined -> so can not access
}

main()
// console.log("a outside main: ", a);  // a is not defined

// a is accesible in main and inner but not outside. This scoping is called Lexical Scoping.





//Closures
function main2(){
    let a = 5
    console.log("a inside main2: ", a);
    function inner(){
        let b = 8
        console.log("a inside inner in main2: ", a);
        console.log("b inside inner in main2: ", a);
    }

    return inner; //here we are returning reference
}


const inner_ref = main2() // store the reference of inner function
console.log(inner_ref); //function
console.log(inner_ref()); // inner function run hua with main2 ke context ke sath



//other way to write it

function main3(a){
    let b = 5



    return function(){   // return reference in same line
        console.log("inner");
    }
}





// IIFE to block the acces -> behaves like private methods variables

const clothStore = (function(){
    const ownerName = "Raj";
    const salesLog = [];
    const demandLog = [];

    function userBoughtLogs(name, price){ // yaha function keyword dena padega
        salesLog.push(`${name} paid the amount of Rs ${price}`)
        return `Thanks ${name} for buying from us.`
    }
    function showownerName(){
        console.log("Owner is: ", ownerName)
    }

    return {
        salesHistory: userBoughtLogs,
        demandLog,
        mostdemandItem(){
            // we can write this way as well
        }
    }
})();

// Here we can acces thing only ion return object using                   "clothStore."
// even               typeof(clothStore.ownerName) => undefined    --> best way to check any property *************************