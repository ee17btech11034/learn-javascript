/*
# Object Properties:
    --> Q. Math.PI = 3.14.... which is by default hardcoded. we want to make changes to that. 


*/

console.log("Default Math.PI: ", Math.PI) //3.14
Math.PI = 5
console.log("After first Math.PI: ", Math.PI) //3.15  but how and why it did not change


//Lets look at property
// Object.getOwnPropertyDescriptor  --> helps us to find the propery
const mathProperties = Object.getOwnPropertyDescriptor(Math)
console.log("mathProperties: ", mathProperties); //undefined as it asks for property not for Object

const mathProperties2 = Object.getOwnPropertyDescriptor(Math, "PI") // Object, Key
console.log("mathProperties2: ", mathProperties2); // 
/*
    Output: 
          {
            value: 3.141592653589793,
            writable: false,
            enumerable: false,
            configurable: false
            }
    
    Here we can see 
        --> writable: false --> writable is property of PI and val is false
            --> People can not edit it
        --> enumerable: false --> "NOT ENUMERABLE" -- we can not run loop on this. 
    We can not change these.
*/



//Factory function -> function to create an object
// const obj1 = Object.create(null) //{}
// const obj1 = Object.create() // {} -->by default bhi arg null hi jata hai 



//Lets set these on our object as well.
const myUser = {
    name: "Raja Aiswal", //******
    username: "rasiwal",
    favnumbers : [1, 2, 4],
    isAvailable: true,
    greet: function (){
        console.log(`Greetings to ${this.username} aka ${this.name}`);
        
    } 
}

const myUnameProperties = Object.getOwnPropertyDescriptor(myUser, "username") //obj, key
console.log("myUnameProperties: ", myUnameProperties);
/*
output:
    {
        value: 'rasiwal',
        writable: true,
        enumerable: true,
        configurable: true
    }

*/

//loop on object
// for (const [key, val] of myUser) { //Object is not iterable using for-of loop
for (const [key, val] of Object.entries(myUser)) {
    //print only if simple key-val nt function or array
    // if (typeof val != 'function' && typeof val != 'array'){ //issue is  (type of arr == Obj)
    if ((typeof val != 'function') && (!Array.isArray(val))){ //issue is  (type of arr == Obj)
        console.log(`${key}: ${val}`);
        
    }
}
/*
Output:
        name: Raja Aiswal
        username: rasiwal
        isAvailable: true

*/



//set new property
Object.defineProperty(myUser, "username", {
    writable: false,
    enumerable: false,
})

myUser.name = "Raja Yeswal"
myUser.username = "rajyeswal"
for (const [key, val] of Object.entries(myUser)) {
    if ((typeof val != 'function') && (!Array.isArray(val))){ //issue is  (type of arr == Obj)
        console.log(`${key}: ${val}`);
        
    }
}
/*
    output:
        name: Raja Yeswal
        isAvailable: true


    Here username is not present as it is not enumerable, so won;t come in for loop.
*/
console.log("new username: ", myUser.username); //rasiwal -> as writable is false so can not update this


Object.defineProperty(myUser, "name", {
    writable: false,
    enumerable: true,
})// we can set multiple properties as well