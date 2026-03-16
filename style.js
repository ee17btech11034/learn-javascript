/*

    # Objects: 
        --> Collection of properties and methods
    
    # class in JS:
        --> JS does not have classes like other languages, it has prototypes

    # Object Oriented Programming (OOP):
        --> OOP is a program peradaim --> style to write code
        --> parts of OOP:
                --> Object literal 
                        --> {}
                --> constructor functions
                --> Classes
                -- Instances (new, this)
                --> prototypes (also called proto) , etc.
        --> 4 pillers:
                --> 1. Abstraction
                        --> hide the details
                        --> Hiding complex implementation details and exposing only essential features, --> eg how fetch works internally
                        --> Abstraction is design-level — simplifies what the system does
                        --> Ex: Tell/show user that these are the methods/variables you can access, other things you can not see/check. user can not see the complex calculation happenig in function
                --> 2. Encapsulation
                        --> put in a wrapper and let user access allowed methods only
                        --> Bundling data and methods within a class and restricting access (e.g., via private fields), set values using setter, get by getters
                        --> Encapsulation is implementation-level — protects how it works
                        --> Ex: Tell/show user that you directly can not change private variables, you need public methods.
                --> 3. Inheritance
                        --> inherit properties from parent
                --> 4. Polymorphism 
                        --> single thing in different use cases. like console.log prints string, number, objects
                        --> 2 methods:
                            --> 1. Overloading 
                                    --> Compile-time polymorphism
                                    --> same function name with multiple arg size in same scope. on compile it is told which one to use. example from other lang
                                        --> int add(int a, int b)
                                        --> double add(double a, double b)
                                        --> int add(int a, int b, int c)
                            --> 2. Overriding 
                                    --> Runtime polymorphism
                                    --> same func name with same args.
                            
                        More definitions:
                            --> Type Handling (Ad-hoc Polymorphism)
                                --> A form of overloading where operations handle different types 
                                --> 2+5 = 7; "2"+5 = "25"   (operator overloading)
                                --> console.log can print any time like string, num, object, etc



    # this keyword:
            --> this keyword refers to current context



*/

// Object literal
const user = {
    username: "Raj", // property of this object
    signedIn: true,
    favnumber: [1, 2, 4],
    getUserName: function (){ //method
        console.log(`User name is ${this.username}`);
    }
}
//user is called a Object literal

user.getUserName()



//constructor function 
/*
  # new keyword:
        --? it is used to create new instance or context
        --> "new" is a operator and Func() is built-in constructor function
            --> abc = new Promice()
            --> abcd = new Date()

  # Flow:
        --> 1. First, object is created and function key-values are added
        --> 2. Second, `new` keyword create an instance or context for this object
        --> 3. Third, put all these values in `this` keyword 
        --> 4. Forth, return the context (inplicitly)
*/

function userFunc(username, loginCount, isLoggedIn){
    this.username = username; //binding these values to this context
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greet = function (){
                    console.log(`Hello, ${this.username}`);
                    
                };
    return this // need to return in new JS as it runs on strict mode
}

const user1 = userFunc("Raj", 15, true)   //creates these values in Global Object "this.usename" is created in "window" object in browser
console.log(user1) //if we add greet func then it is undefined    -> find the reason

const user2 = userFunc("Rajesh", 25, false) //it override user1 values as both are in Global Object
console.log(user1)



//To escape this mess -> use `new` keyword

const user3 = new  userFunc("Raja", 15, true)
console.log(user3)

const user4 = new userFunc("Rohit", 21, false) //it override user1 values.
console.log(user3) //only this context values not of the global context values



//Constructor
console.log(user3.constructor) //[Function: userFunc]
console.log(user3.constructor()) // object with "undefined" values

// instanceof operator, etc.