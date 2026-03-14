/*
Filter:
    --> forEach does not return anything.
    --> arr.filter(Callback) //callback with return "true/false"

Map:
    --> filter handles with boolean return and does not return modified val
    --> arr.map(Callback) //calback return updated val

Chaining:
    --> arr.map(C1).map().filter().filter().map() //it can be anylong chain

Reduce:
    --> Accumulate and return an single number
    --> arr.reduce( CallBack, initialVal)
    --> arr.reduce( (accumulate, num) => (accumulate + num), initialVal)//initialVal is 0 generally
        --> for first run accumulate = initialVal and then it returns the new val
*/


//If I want to return some val from for-each then it is impossible

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let foreachReturn = arr1.forEach((num) => {
    console.log(num)
    return "Yes"
})

let foreachReturn2 = arr1.forEach((num) => ("Yes")) //implicit return

console.log("foreachReturn: ", foreachReturn); // undefined as for-each does not return anything


//if we want to do some calculation on keys then we need filter.


const newArr = []
arr1.forEach((num)=>{
    if (num > 4){
        newArr.push(num)
    }
})
console.log(newArr) //This can be achieved by Filter



console.log("++++++++++++++++++++++++ Filter ++++++++++++++++++++");

let filterReturn = arr1.filter((num) => (num > 4)) //true when num > 4 so number will be returned
console.log("filterReturn: ", filterReturn); //[ 5, 6, 7, 8, 9, 10 ]

let filterReturn2 = arr1.filter((num) => {num > 4}) //we will need to use "return num > 4" is using {}
console.log("filterReturn2: ", filterReturn2); //[] -> Empty array




console.log("++++++++++++++++++++++++ Map ++++++++++++++++++++");

const addedArr1 = arr1.map((num) => (num+3))
const addedArr2 = arr1.map((num) => {return num+3}) //need to use return as opened an new scope

console.log("addedArr1: ", addedArr1);


console.log("++++++++++++++++++++++++ Chaining ++++++++++++++++++++");
const chainingArr = arr1.map((num)=>(num+10)).map((num)=>(num*2))
const chainingArr2 = arr1.map((num)=>(num+10))
                        .map((num)=>(num*2))
                        .filter((num)=>(num>25))

console.log("chainingArr: ", chainingArr);
console.log("chainingArr2: ", chainingArr2);





console.log("++++++++++++++++++++++++ Reduce ++++++++++++++++++++");

const summ = arr1.reduce((accumulate, num) => (accumulate + num), 0)
console.log("Sum: ", summ)