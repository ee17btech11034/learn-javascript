/*
JS Loops:
    --> For loop:
        --> it has a block scope

        for (Expression1; Expression2; Expression3) {
            code
        }
        
        Flow ==>  Expression1 -> check Expression2 -> code run -> Expression3 -> Expression2 -> code run .....
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
        }
    
}


*/


//For loop
for (let index = 0; index < 10; index++) {
    console.log(index);
}

//JS me outer bound nahi hota hai means if ind is out or range in arr, out==> undefined.

//break, continue keyword
// break :-> breaks control flow,     break if-else, for, switch etc.
//continue :-> just skip the below code for that iteration but continues next



//while loop
// --> initialize and increment we handle.
//Usable when we want to start the loop and we do not know the length; we break using keywords

// while (condition1) {
//     code
// }




//do-while loop
//--> it runs atleast once then check the condition

// do {
    
// } while (condition);