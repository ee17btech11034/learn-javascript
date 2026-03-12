/*
Variable Declaration (Keywrds used to declare variables):
    -> var: (var a = 10)
        --> can be re-assigned (a = 10)
        --> can be re-declared (var a = 10) in same of different scope
        --> Hoisted and initialized with undefined at the start of the scope.
            --> console.log(a) // undefined
            --> var a = 10;  -> is valid 
        --> var is function-scoped or globally scoped; Not block-scoped
            --> Means if we define var in a function we can not access it outside
            --> but if we define it in a block then we can access
            --> Hoisted is done in function scope only.
    
    -> let
        --> can be re-assigned (a = 10) but can not be re-declared (let a = 10) in the same scope
        --> Hoisted but not initialized (Temporal Dead Zone till val is assigned) so can not access it till then.
        --> So we can say "Not hoisted" (cannot be used before declaration)
    
    -> const
        --> can not be re-assigned or re-declared
        --> Hoisted but same in TDZ zone) so "Not hoisted" (cannot be used before declaration)
        --> Must be initialized at declaration.

https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone

Print way:
    -> We can console log multiple variables in a single console using table as well 
        --> console.table([a, b, c])
    */

const a = 5;
// a = 6; // This will throw an error because 'a' is declared as a constant and cannot be re-assigned.

let b = 10;
b = 15; // This is allowed because 'b' is declared with 'let' and can be re-assigned.
// let b = 20; // This will throw an error because 'b' cannot be re-declared in the same scope.

var c = 20;
c = 25; // This is allowed because 'c' is declared with 'var' and can be re-assigned.
var c = 30; // This is allowed because 'c' can be re-declared with 'var' in the same scope.

d = 6; //is also valid but it is not recommended to use undeclared variables as it can lead to unexpected behavior and bugs in the code. It will be treated as a global variable, which can cause issues if there are other variables with the same name in different scopes.
d = 9; //this approach creates a global variable https://community.appsmith.com/content/guide/variables-javascript-comprehensive-guide-var-let-and-const#:~:text=this%20approach%20creates%20a%20global%20variable 



let e; // This is valid, but 'e' is declared without an initial value, so it will be undefined until it is assigned a value.



console.table([a, b, c, d, e]);


{
    console.log("Inside function");
    var f1 = 30;
}
function func(){
    console.log("Inside function");
    var f2 = 30;
}

// console.log(f2); // This will throw an error because 'f' is declared with 'var' inside the function and is not accessible outside of it.
console.log(f1); // This will log 30 because 'f1' is declared with 'var' and is function-scoped, so it is accessible outside of the block but not outside of the function.



console.log(d);
console.log(typeof d);
function foo() {
    var variable1, variable2;

    variable1 = 5;
    variable2 = 6;
    return variable1 + variable2;
}
console.log("foof:", foo());