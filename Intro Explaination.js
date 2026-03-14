/*

Map:
    --> same as objects
    --> uniques keys
    --> remeber insert key order.

Hight Order Array Loops:
    --> loops to traveser array

    --> For-of loop:
            --> for (const element of obj1) {} 
            --> element is val
            --> obj1 can be Array, String, Map 
            --> object is not iterable using forof

    
    --> For-in loop
            --> iterates over enumerable string properties
            --> for (const element in obj1) {}
            --> element is index
            --> obj1 can be Array, String but return indexes so not a good option; 
            --> no output on map
            --> Best for Objects as return keys

    --> for-each loop
            --> arrays ke prototype me hi ye function inserted hai. 
            --> arr.foreach(CallBackFunction)
                --> arr.foreach( function (item) {} )
                --> arr.foreach( (item) => {} )
                --> arr.foreach( item => {} ) //if single argument
                --> arr.foreach( func1 ) //function reference if func1 is defined somewhere
            --> can be used in Array, Map, Set
            --> Str, objects does not have this.
*/


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const str1 = "Raja Asiwal"

for (const element of arr1) {
    console.log(element);
    
}


for (const element of str1) { //all str chars
    console.log(element);
    
}


//Map
const map = new Map()

map.set("IN", "INDIA")
map.set("US", "USA")
map.set("NP", "NEPAL")
map.set("IN", "India") //did mutate

for (const element of map) { //element is array [key, val]
    console.log(element);
}

//array de-structure
for (const [key, val] of map) {
    console.log(key, ": ", val);
}

const obj1 = {
    "name1": "Raj",
    "name2": "Raja",
    "name3": "Rajesh",
}

// for (const element of obj1) { //obj1 is not iterable
//     console.log(element)
// }




console.log("+++++++++++++++++ For - in Loop++++++++++++++++++")
// For-in loop
// can be used to iterate objects

for (const key in arr1) {    //array
    console.log(arr1[key]); //not a best way
}

for (const key in str1) {   //return index like 0, 1, 2
    console.log(key);
}

// for (const key in map) {   //return index like 0, 1, 2
//     console.log(key);
// }

for (const key in obj1) {   //return index like 0, 1, 2
    console.log(obj1[key]);
}





console.log("+++++++++++++++++ For - each Loop++++++++++++++++++")
// For - Each Function

arr1.forEach(function (item) {
    console.log(item);
})

map.forEach((key, val) => {
    console.log(key, ": ", val);    
})

function print(item){
    console.log(item);
}
arr1.forEach(print) //pass only reference, do not execute this



//for each has multiple values comming
arr1.forEach((item, index, arr) => { //each val has access to item, index, whole array
    console.log(item, index, arr);
})


//foreach is best when array of objects in development