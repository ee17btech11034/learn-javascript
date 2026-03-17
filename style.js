/*
# Class Methods:    
    --> methods are similar to functions, just we do not need to use `function` keyword


*/

//ES6 -> introduced classes
//classes are nothing but the wrapper on function and new keyword.

class User {
    constructor(uname, password, email){
        this.uname = uname
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}124`
    }
    showUserDetails(){
        console.log(`Uname is: ${this.uname}; email is: ${this.email}`)
    }
}
const user1 = new User("user1", 'user1@123', 'user1@email.com')

console.log(user1.encryptPassword());
user1.showUserDetails()
console.log("user1 pass: ", user1.password);




// Behind the scene  --> It also uses function

function User2(uname, email, password){
    this.uname = uname
    this.email = email
    this.password = password
    this.encryptPassword = function (){
        return `${this.password}124`
    }
}

User2.prototype.showUserDetails = function (){
    console.log(`Uname is: ${this.uname}; email is: ${this.email}`)
}

const user2 = new User2("user2", "user2@email.com", "user2@123")

console.log(user2.encryptPassword());
user2.showUserDetails()
console.log("user2 pass: ", user2.password);




// Inheritance
class User3 extends User {
    constructor(uname, email, password, extra){
        super(uname, password, email)
        this.extra = extra
    }
}

const user3 = new User3("user3", "user3@email.com", "user3@123", 'just extra')

console.log(user3.email);

console.log("user1 == user3 :", user1 == user3) //2 instances  --> false
console.log("user1 === user3 :", user1 === user3) //2 instances  --> false
console.log("User3 === user3 :", User3 === user3) //class and it's instance  --> false

console.log(user3 instanceof User3); //is user3 instance of User3  -->  true
console.log(user3 instanceof User); //is user3 instance of User3 -->  true
console.log(User3 instanceof User); //is user3 instance of User3 -->  false





// static keyword  -> just like private to class only

class User4 extends User3{
    constructor(uname, email, password, extra){
        super(uname, email, password, extra)
    }
    // createUniqueID(){
    //     //this is the function I do not want to give access to user
    // }
    static createUniqueID(){ // user instance can not access this
        this.__id = "1y187"
        console.log("created unique id");
    }
    showUserDetails(){
        console.log(`Uname is: ${this.uname}; email is: ${this.email}; ID: ${this.__id}`)
    }
}

const user4 = new User4('user4', 'user4@email.com', 'user4@123', 'extra4')
console.log(user4.__id) //undefined
// user4.createUniqueID() // error as we can not access this
user4.showUserDetails() //id val is undefined

User4.createUniqueID() //it runs successfully

/*
The __id is undefined because:
        --> createUniqueID is a static method — it runs on the class, not on instances. 
        --> this.__id = "1y187" sets a property on the class (User4), not on the instance (user4). 
        --> showUserDetails tries to access this.__id on the instance, which doesn't have it. 

*/



//Fixed one

class User5 extends User3{
    constructor(uname, email, password, extra){
        super(uname, email, password, extra)
        // createUniqueID() //createUniqueID is not defined
        User5.createUniqueID() //
    }
    // createUniqueID(){
    //     //this is the function I do not want to give access to user
    // }
    static createUniqueID(){ // user instance can not access this
        this.__id = "1y187"
    }
    showUserDetails(){
        console.log(`Uname is: ${this.uname}; email is: ${this.email}; ID: ${this.__id}`)
    }
}

const user5 = new User5('user5', 'user5@email.com', 'user5@321', 'extra5')
console.log("user5__id: ", user5.__id); //undefined -> can not access as instance
user5.showUserDetails() //again id is undefined



/*
The __id is still undefined because:
        --> createUniqueID() is static, so this refers to the class, not the instance. **********
        --> this.__id = "1y187" sets a property on the class, not on the user5 object. 
        --> showUserDetails() tries to access this.__id on the instance, which doesn’t have it. 

*/


//Fix this:

class User6 extends User3{
    constructor(uname, email, password, extra){
        super(uname, email, password, extra)
        this.__id = User6.createUniqueID()
    }
    // createUniqueID(){
    //     //this is the function I do not want to give access to user
    // }
    static createUniqueID(){ // user instance can not access this
        return "1y187"
    }
    showUserDetails(){
        console.log(`Uname is: ${this.uname}; email is: ${this.email}; ID: ${this.__id}`)
    }
}

const user6 = new User6('user6', 'user6@email.com', 'user6@321', 'extra6')
console.log("user6.__id: ", user6.__id); //user6.__id:  1y187
user6.showUserDetails() //id is present

/* Naming convention
        -->  __ (like _) is a convention to indicate that a property is internal or private, but it’s not enforced. 
        -->  Example: __proto__ is a built-in property — the double underscore signals it’s a low-level feature, not for direct use. 
        -->  For true privacy, use # (private fields): #id, which is not accessible outside the class. 
*/


// make id private

class User7 extends User3{
    #id //we will have to declare the private fields first
    constructor(uname, email, password, extra){
        super(uname, email, password, extra)
        this.#id = User7.createUniqueID()
    }
    static createUniqueID(){ // user instance can not access this
        return "1y187"
    }
    showUserDetails(){
        console.log(`Uname is: ${this.uname}; email is: ${this.email}; ID: ${this.#id}`)
    }
}

const user7 = new User7('user7', 'user7@email.com', 'user7@321', 'extra7')
// console.log("user7.__id: ", user7.#id); //Error as we can onot access this private variable
user7.showUserDetails() //got the id




// Lets randomize ths id
class User8 extends User3{
    #id //we will have to declare the private fields first
    constructor(uname, email, password, extra){
        super(uname, email, password, extra)
        this.#id = User8.createUniqueID()
    }
    static createUniqueID(){ // only current class can access this
        const idchars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let uniqueid=  ""
        let randomID = 0 // so that function does not generate again and again but we do not want anyone to access this variable outside the if. 
        for (let i = 0; i < 6; i++) {
            randomID = Math.random() //[0, 1)
            randomID = (randomID * 36) //[0, 36) -> all includes decimals as well
            randomID = Math.floor(randomID) //[0, 36) --> only int
            uniqueid += idchars[randomID]
        }
        
        return uniqueid
    }
    showUserDetails(){
        console.log(`Uname is: ${this.uname}; email is: ${this.email}; ID: ${this.#id}`)
    }
}

const user8 = new User8('user8', 'user8@email.com', 'user8@321', 'extra8')
// console.log("user8.__id: ", user8.#id); //Error as we can onot access this private variable
user8.showUserDetails() //id is there
const user8_1 = new User8('user8_1', 'user8_1@email.com', 'user8_1@321', 'extra8_1')
user8_1.showUserDetails() //Both user8 and user8_1 has unique ids.


//Abstraction:  is hiding implementation details — the user doesn't know how createUniqueID works.
//Encapsulation is bundling data and methods, and controlling access — using #id or static to restrict visibility.
    //--> tells us how user will access data.
//polymorphism: showUserDetails is overridden in User4 from User.