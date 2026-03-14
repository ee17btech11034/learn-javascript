/*
JS Arrays:
    --> a data structure to store data in a list form
    --> can store any type of data (numbers, strings, objects, etc.)
    --> can store multiple values with mutiple types in a single variable

    Shallow Copy: -> ref is assigned so change in one will change the other
    Deep Copy: -> new memory is assigned so change in one will not change the other



    let arr = [1, 2, 3, 4, 5]; do this in browser console and then `arr`
            --> length property
            --> There will be a prototype inside prototype.
    Slice and Splice:
        Slice: return a new array by slicing the original array, does not change the original array
        Splice: return a new array by splicing the original array, changes the original array
    
    Use SPREAD Operator to concate 2 arrays.
    --> isArray, from, of ==> Read more about it.
*/

"use strict";

//Define array
let arr = [1, 2, 3, 4, 5];
let arr2 = [1,2,3,"Hello", true, {name: "John"}, [1,2,3]];
let arr3 = new Array(1, 2, 3, 4, 5);

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr3[1]); //element at index 1, index start from 0.


arr.push(6); //add element at the end of the array
console.log(arr);
arr.pop(); //remove element from the end of the array and return that element
arr.pop(3); //does not take argument and remove the last element of the array

console.log(arr);



arr.unshift(0); //push in start, it shfts all elements to right which is machine heavy task
console.log(arr);
arr.shift(); //remove from start, it shfts all elements to left which is machine heavy task
console.log(arr);


console.log(arr.length); //length of the array
console.log(arr.includes(3)); //check if element is present in the array or not, return true or false
console.log(arr.indexOf(3)); //return index of the element, if not found return -1


let newArr = arr.join() // return a string by joining all elements of the array, default separator is comma
console.log(newArr, typeof(newArr));
let newArr2 = arr.join("-") // return a string by joining all elements of the array, separator is "-"
console.log(newArr2);



//Slice and Splice
let arr4 = [1, 2, 3, 4, 5];
console.log("A: ", arr4);
let slicedArr = arr4.slice(1, 4); //[ 2, 3, 4 ] sub arr[1, 4)
console.log("Sliced: ", slicedArr);
console.log("B: ", arr4); //[ 1, 2, 3, 4, 5 ] no change in main arr

let splicedArr = arr4.splice(2, 1); //[ 3 ] start from index 2 and remove 1 element
console.log("Spliced: ", splicedArr);
console.log("C: ", arr4); //[ 1, 2, 4, 5 ] bcz splice change actual array




// 
let arr5 = [1, 2, 3];
let arr6 = ["a", "b", "c"]

// arr5.push(arr6)
// console.log(arr5); //[ 1, 2, 3, [ 'a', 'b', 'c' ] ] -> directly push as an array and change main array.

let concatArr = arr5.concat(arr6) // return new array does not change main arr(arr5).
console.log(concatArr); //[ 1, 2, 3, 'a', 'b', 'c' ]

//We prefer to use SPREAD Operator 
const spreadArr = [...arr5, ...arr6] // dereference or spread arrays and create a new arr
console.log(spreadArr); //[ 1, 2, 3, 'a', 'b', 'c' ]


const nestedArr = [1, 2, 3, [4, 5], 6, [6, 3, [1, 2, [7, 8]]], 9] //we have array inside array
//here depth or nested value is: 4 as 4 time indepth hai.
const flatArr = nestedArr.flat(Infinity) // we need to give depth, infinity means solve max possible as well
console.log(flatArr);



console.log(Array.isArray("Raj")); // return true if it is arr else false
console.log(Array.from("Raj")); // create arr and return
//we can convert string,  objects to array.
console.log(Array.from({"name": "Raj"}));//[] as it did not find a way to create arr *****************
// we will have to explicitly tell that we want arr of Keys or values.



let val1 = 100
let val2 = 200
let val3 = [300, 400]

console.log(Array.of(val1, val2, val3)); // [ 100, 200, [ 300, 400 ] ] returns a new array
