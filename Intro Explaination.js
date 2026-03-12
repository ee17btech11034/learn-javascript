/*
JS Operators:
    --> +, -, *, /, % (modulus)
    --> ++, -- (increment and decrement)
    --> =, +=, -=, *=, /= (assignment operators)
    --> ==, ===, !=, !==, >, <, >=, <= (comparison operators)
    --> &&, ||, ! (logical operators)


    My View: 
        --> JS reads code from top to bottom and left to right. 
        --> So, it will first evaluate the expression on the left and then move to the right.

        --> console.log("3" + 4); ("34") Here + is binary operator with 2 operands "3" and 4. so concatination happened.
        --> console.log(+ "3"); (3 as num) Here + is unary operator with 1 operand "3". so it converted string to number and returned 3.
*/

"use strict";

console.log(5 + 3); // Addition ==> 8
console.log(5**3); // Exponentiation ==> 125
console.log(10 % 3); // Modulus ==> 1

let a = 5
// console.log(a++); // Post-increment ==> 5 (returns the value before incrementing)
// console.log(++a); // Pre-increment ==> 7 (returns the value after incrementing)

console.log(5 == "5"); // Loose equality ==> true (compares values after type coercion)
console.log(5 === "5"); // Strict equality ==> false (compares values and types)

console.log("a" + "b"); // String concatenation ==> "ab"

console.log(1 + "2"); // Type coercion ==> "12" => it started to read from left and found a string so concatinated this
console.log("3" + 4); // Type coercion ==> "34" => it started to read from left and found a string but it is a number in string so it converted it to number and added this
console.log(1 + 2 + "4"); // Type coercion ==> "34" => it started to read from left and found 2 nums and added those and then found a string so concatinated.


console.log(+ true); // Unary plus operator ==> 1 (converts true to 1)
console.log(+false); // Unary plus operator ==> 0 (converts false to 0)

console.log(+""); // Unary plus operator ==> 0 (converts string to number)

// let x = y = z = 10; //z is not defined bcz of "Strict Mode" but it will not throw an error because of right to left associativity of assignment operator. So, it will first assign 10 to z and then assign z to y and then assign y to x.
// it is assigned like z = 10, y = 10, x = 10

console.log("---------------Comparison Operators------------------------")
//Comparison Operators
//Operators like >, < convert to numbers
// operators like ==, === do not convert to numbers
console.log(null > 0); // Here null converted to num so, 0 > 0 false
console.log(null == 0); //false bcz null does not have equal val as 0
console.log(null >= 0); // Here null converted to num so, 0 >= 0 true

console.log("--------------")
//undefined always returns false when compared with any value using comparison operators,
console.log(undefined >= 0); // false
console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

//That's why we avoid this type of comparisons.




console.log("--------------")
console.log("2" == 2); // true bcz it just check the value and convert string to num and then compare
console.log("2" === 2); // false bcz it check the value and data type (STRICT CHECK) and here type is different so false