/*
# Prototype:
    -->  JS's default behavious is prototypal.
        --> If JS is looking/searchin for something and it does not find it there then
            --> it will go "one above layer" (parent) and so on (grandparents), 
            --> until it gets the desired output or null
    --> arrow functions does not have access to `this` keyword, it is because of prototype.
    --> prototype provides the access of `new`, `this`, classes, inheritance, etc.

    --> in browser console `arr = [1, 2, 3]`
        --> `arr`
            --> we will see array values, length property, prototype
            --> if open prototype (array)
                --> this also has some methods which can be applied on arr.
                --> this has prototype (Objecttype)
                    --> it also has some methods like constructors, etc.
        --> Here we can see JS keeps the track of all parents in prototypes.
        --> Array must be created from Object. 
        --> prototype chain:  ********************************
            --> arr → Array.prototype → Object.prototype → null   
    
    --> 

*/

const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.prototype); //undefined
/*

    --> arr.prototype is undefined because:

            --> arr is an instance of Array, not the constructor itself. 
            --> The prototype property exists only on constructor functions (like Array, Object, etc.). 
            --> On instances, you access the prototype via __proto__ or Object.getPrototypeOf(arr). 
            --> Array.prototype    OR   arr.__proto__

*/

console.log(arr.__proto__); //all methods in array prototype
console.log(arr.__proto__.__proto__); //all methods in Object prototype




//Functions

function helloFunc(num){
    return num*2
}

helloFunc.power = 3
console.log(helloFunc.power);  //output will be 3 ==> Means it is behaving like Object as we can use dot (.) method
console.log(helloFunc.prototype) //{} in Node and {} with Object prototype available in browser

// Function's working/functionality behaves like function but it is an object too. *************************



// new keyword importance:

function userDetails(uname, score){
    this.uname = uname;
    this.score = score;
    return this;
}

const user1 = userDetails("Raj", 250)
console.log(user1); //printMe is not added yet.

//suppose I want to add new methods or property to this function
userDetails.prototype.printMe = function(){
    console.log(`Hi ${this.uname}, your score is: ${this.score} .`);
    
} //these are added in prototype methods

const user2 = userDetails("Raja", 270)
console.log(user2); //printMe is not added yet. Because printMe was added later (after function declaration is done)

//If we want all functionalities to be available then use "new"
// `new` tells function to add and bound these functions

const user3 = new userDetails("Rajesh", 285)
console.log(user3); 
console.log(user3.__proto__);  //there we can check


userDetails.prototype.incScore = function(){
    this.score ++;
    console.log(`Hi ${this.uname}, your score is: ${this.score -1} ==> ${this.score} .`);
}

const user4 = new userDetails("Rohit", 298)
user4.incScore() //we can directly access al parent's methods (with just single doct (.)



/*
 # `new` keyword Flow:
        --> step 1: Object Creation :==> `new` keyword initiates the creation of a new JS Object.
        --> step 2: prototype linked :==> newly created object gets linked to the prototype property of the constructor function; means constructor's methods, properties are available.
        --> step 3: Constructor is called :==> constructor function is called with the specified arguments and this is bound to the newly created object.
                    -- if no explicit return then `undefined` in restrict mode and `this` in simple mode
        --> step 4: new object returned :=> After constructor function call, if it does not return non-premitive (object, array, function, etc), the newly created object is returned


*/



// prototype flow
let arr1 = [1, 2]
let obj1 = {
    uname: "Raj"
}

Object.prototype.greetFunc = function(){
    console.log("Hii from Object prototype");
}

//Here we added this functionality to Object. Therefor it will be available to all its descendents.

obj1.greetFunc() //Hii from Object prototype
arr1.greetFunc() //Hii from Object prototype



//inheritance
let obj2 = {uname:"Raj"}
let obj3 = {score:250,
    __proto__: obj2 //obj3 will have all properties from obj 2
}

//other way is 
// obj3.__proto__: obj2
console.log(obj3.uname);

//These are outdated, so lets use new ones
//modern
Object.setPrototypeOf(obj3, obj2) //obj3 will inherit from obj2








// `call` and `this` keyword

function setUserName(uname){
    console.log("setting uname")
    this.uname = uname
}

function setUserDetails(uname, age, score){
    setUserName(uname)
    this.age = age 
    this.score = score
}

const user_1 = new setUserDetails("user1", 18, 250)
console.log(user_1) //setting uname                  setUserDetails { age: 18, score: 250 }

/*
output:
    setting uname
    setUserDetails { age: 18, score: 250 }

Why uname is not present:
    --> Becuase when `setUserName()` runs in call stack it uses its own context and `this` referes to the context of function `setUserName()`
    --> When execution is completed then it is removed from that stack. ALL wiped OUT ***********************************************************************

    --> To solve this issue we use `.call` it says use  `setUserDetails` 's `this` and provide the reference
        --> .call takes first parameter `this`-> optional
*/

function setUserName2(uname){
    console.log("setting uname")
    this.uname = uname
}

function setUserDetails2(uname, age, score){
    setUserName2.call(this, uname)
    this.age = age 
    this.score = score
}

const user_2 = new setUserDetails2("user2", 18, 254)
console.log(user_2) //setting uname           setUserDetails2 { uname: 'user2', age: 18, score: 254 }