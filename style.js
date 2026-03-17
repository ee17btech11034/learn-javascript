/*
# Getter:
    --> When we do not want to give access of any property to user.
    --> Bydefault class creates getter and setter for each property by their name
    --> if we define getter then we will have to define setter as well
    --> setter gets the val from constructor as well
    --> getter always return something
    --> console.log(user2.uname);  --> triggers getter
# Setter
    --> to set the val
    --> user2.uname = "Rajesh"; // ← This triggers the setter               **********************************

## .length property is best example of getter and setter as it is just a property not a function but how does it calculate the length

# Important:
    --> User1 class
        --> When we create a new instance of class User.
            --> constructor will be called and it will try to set the values
            --> But setter with property names also get invoked. 
                --> It also tries to set the values.                           setter is uname()
                --> setter has         this.uname    in it.
                --> this.uname is also refering to setter because of same name. 
                --> think "uname" is a function of object, How do we access it? Using "this.uname"
                --> uname as approperty constructor me set ho rha hai. so this.uname will first refer to class methods/properties, etc.
        
        --> Here we will get "Error: RangeError: Maximum call stack size exceeded " error with both getter and setter.

    --> jinke bhi setter/getter bana rhe hai unko name thoda alag dedo ya fir uname ko change kr do.
*/



/*
class User{
    constructor(uname, email, password){
        this.uname = uname
        this.email = email
        this.password = password
    }
    get uname(){ //getter is defined for uname
        return this.uname.toUpperCaase()
    }
    set uname(val){ // setter for uname
        this.uname = val
    }
}
//whaever properties we set class provides getter and setter

const user1 = new User("Raj", 'raj@email.in', '124421') //RangeError: Maximum call stack size exceeded  ********
/*
    Error: RangeError: Maximum call stack size exceeded  
        
            this.uname inside setter referes to setter itself. 
            a  method calling itself is an infonite loop
* /    
*/





// to fix this we need to use different names

class User2{
    constructor(uname, email, password){
        this._uname = uname //jinke bhi setter/getter bana rhe hai unko name thoda alag dedo ya fir uname ko change kr do.
        this.email = email
        this.password = password
    }
    get uname(){ //getter is defined for uname
        return this._uname.toUpperCase()
    }
    set uname(val){ // setter for uname
        console.log("val in setter: ", val);
        console.log("this._uname in setter: ", this._uname);
        this._uname = val
    }
}

const user2 = new User2("Raj", 'raj@email.in', '124421')
console.log(user2._uname); //"Raj"
// console.log(user2.uname()); //user2.uname is not a function
console.log(user2.uname); //RAJ  --> getters are calles this way ************************************

// We can not invoke setter directly.
user2.uname = "Rajesh"; // ← This triggers the setter               **********************************

console.log(user2.uname); //RAJESH


















// Using function way
function User3(email, password){
    this._email = email
    this._password = password
    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(val){
            this._email = val
        }
    })
}

//doing the same what class code os doing

const user3 = new User3("rajaraja@email", "1928")
console.log(user3.email); //getter --> RAJARAJA@EMAIL
user3.email = "rajraje@email" // setter --> set the val
console.log(user3.email); //RAJRAJE@EMAIL





// We can create Object based

const object1 = {
    _email: "abc@email",
    _password: "123456789",

    get email(){
        return this._email
    },
    set email(val){
        this._email = val
    } 
}

// benefit is -> we can use factory function like constructor functions
// const user4 = Object.create() // create an obje which is refring to null as parent or reference
const user4 = Object.create(object1) //create an object which is refering from object1

console.log(user4); //{} because console.log       only shows own properties, not the inherited ones. ***************
console.log(user4.__proto__) // { _email: 'abc@email', _password: '123456789', email: [Getter/Setter] }
console.log(user4.email); //abc@email
