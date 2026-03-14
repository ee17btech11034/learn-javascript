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

    --> console.log(obj2.dietplan?.morning.food); //we add ? to be on safer side that if "dietplan" not present then undefined not error
    --> .assign or spread operator
    --> de-structure of objects

    --> JSOn is object with keys as strings and val as string or a datatype.
        --> Random user me API
        --> Use JSOn formator to format JSON data
*/      

"use strict";

const obj1 = new Object() //using constructor, it is a Singleton
console.log(obj1); // {} same 


// nested Objects:
const obj2 = {
    "name": "Raj",
    "favnumber": [1, 2, 4],
    "dietplan": {
        "morning": {
            "food": ["sprouts", "apple"],
            "exercise": ["pushups", "yog"],
        },
        "evening": {
            "food": ["carrot", "chapati"],
            "exercise": ["pushups", "pullups"],
        }
    }
}

console.log(obj2.dietplan.morning);
console.log(obj2.dietplan.morning.food);
console.log(obj2.dietplan?.morning.food); //we add ? to be on safer side that if "dietplan" not present then undefined not error
console.log(obj2.dietplans?.morning.food); //undefined as dietplans not present


const obj3 = {
    1: "a",
    2: "b"
}

const obj4 = {
    3: "c",
    4: "a",
    // 1: "b" //aisa hai to wo update kr dega
}

const obj5 = {obj3, obj4} //{ obj3: { '1': 'a', '2': '2' }, obj4: { '3': 'a', '4': '2' } }
console.log(obj5);

const obj6 = Object.assign(obj3, obj4) // target is obj3
console.log("target obj3: ", obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'a' } as obj3 modified
console.log("obj6: ", obj6)

const obj7 = Object.assign({}, obj3, obj4) // we prefer to use {} as target 
console.log("target {}: ", obj3)
console.log("obj7: ", obj7)


const obj8 = {...obj3, ...obj4}
console.log("spread: ", obj8);

console.log(Object.keys(obj8)); //array of keys
console.log(Object.values(obj8)); //array of values
console.log(Object.entries(obj8)); //[[key, val], [key, val]]   array of array key values

console.log(obj8.hasOwnProperty('1')); //takes key and return boolean



// Object De-structure
const obj9 = {
    "users_full_name": "Raj",
    "age": "23",
}

console.log(obj9.users_full_name); //everytime i will have to write this long text

//de-structure it
const {users_full_name} = obj9
console.log(users_full_name);

//use short name

const {users_full_name:userName} = obj9 //************************** */
console.log(userName); //i can use nic name to call it
