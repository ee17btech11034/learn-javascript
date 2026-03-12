/*
Echma Standards:
    --> A standard for JavaScript that defines the syntax and semantics of the language. It is developed and maintained by the TC39 committee, which consists of JavaScript developers and experts from around the world. The latest version of the Echma standard is ECMAScript 2021 (ES12), which was released in June 2021.
    --> like user wll give input and how for loop will work and what will be the output. 
    --> MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript
    --> Official Doc: https://tc39.es/ecma262/
    --> ECMA just write standards not JS. Engines will have to support those standards.


Strict mode:
    --> Strict mode is a feature in JavaScript that allows you to write more secure and error-free code. 
    --> It can be enabled by adding the "use strict" directive at the beginning of a JavaScript file or function. 
    --> When strict mode is enabled, it changes the behavior of certain JavaScript features, such as variable declarations, function parameters, and error handling. 
    --> For example, in strict mode, you cannot use undeclared variables, and it will throw an error if you try to do so.
    -- But in modern way it is default enabled.


Data Types:
    --> number :=> range is -2^53 to 2^53, it is used to represent both integers and floating-point numbers. 
            --> It also includes special values like NaN (Not a Number) and Infinity.
    --> bigint :=> It is a new data type introduced in ECMAScript 2020 that allows you to represent integers larger than the maximum safe integer (2^53 - 1) that can be represented by the Number data type.
            --> Used in Trading or big platforms like FB.
    --> String :=> It is used to represent text and is enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
            --> Always prefer "" or ``
    --> Boolean :=> It represents a logical value that can be either true or false.
    --> Null :=> It represents the intentional absence of any object value. It is often used to indicate that a variable has no value or that an object property is empty.
            --> let a = null;
            --> console.log(`type of null: ${typeof null}`)  ==> Object
    --> Undefined :=> It represents the absence of a value or the uninitialized state of a variable. When a variable is declared but not assigned a value, it is automatically assigned the value of undefined.
    --> Symbol :=> It is a new data type introduced in ECMAScript 2015 that represents a unique identifier. 
            --> Symbols are often used as property keys in objects to avoid naming conflicts.
    
    
    --> Objects :=> It is a complex data type that allows you to store collections of data and more complex entities. 
            --> Objects can be created using object literals, constructor functions, or classes. 
            --> They can have properties (key-value pairs) and methods (functions that operate on the object's data).
    
    
    */

"use strict";
console.log(a)
var a = 5;

console.log("a: ", a)
console.log(`type of a: ${typeof a}`)

 
console.log(`type of null: ${typeof null}`) // Object (this is a known quirk in JavaScript, null is considered an object type)
console.log(`type of undefined: ${typeof undefined}`) // Undefined