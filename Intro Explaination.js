/*

JS:
    --> JS is Single Threaded languages.
    --> JS calls execution ==> "Process"
    --> Executes "line by line" and "left to right"

JS Execution Context:
    --> JS tells that how JS will execute our program file.
    --> First, JS creates "Global Execution Contex (GEC) / Global Environment"
            --> refers GEC to "this" keyword. All browser, Node, bun have their own GEC). 
            --> "window" is GEC in browser.
    --> Second, JS creates "Function Execution Context (FEC)"

    --> Mainly above 2 are the main but in Mongoose we have one more context
        --> "Eval Execution Context (EEC)"
                --> It is a property of GEC. So no need to know more now.


JS Code Execution:
    Phase 1: "Memory Phase / Memory Creation Phase / Creation Phase"
            --> Memory is allocated to variables
    Phase 2: "Execution Phase"


Call Stack:
    --> |              |
    --> |              |
    --> |              |
    --> |     sec func | -> sec is in first. else 
    --> |    first fun |
    --> | Global Scope |
    -->```````````````````
    --> LIFO concept
    --> Broser > Source > Snippets > create "a.js" file
    --> We have "call stack" there which can be helpful

*/      

// "use strict";



// Flow of this code
let num1 = 5;
let num2 = 9;

// console.log(add)
function add(val1, val2){
    let result = val1 + val2
    return result
}

let result1 = add(num1, num2)
let result2 = add(2, 4)

// Till Here


// Flow ::==>
/*
1. Global Execution Context: 
    --> JS creates this and assign to "this" keyword

2. Memory Phase: (First Cycle)
    --> memory creation "line by line"
    --> Code
        - num1 - undefined (but as it is const/let so can not access it)
        - num2 - undefined 
        - add -> definition (function definition) -> function definition as it is.
        - result1 -> undefined
        - result2 -> undefined

2. Execution Phase: (Second Cycle)
    --> Execution "line by line" and from left to right
    --> Code
        - num1 - 5
        - num2 - 9
        - add -> Nothing to de here
        - result1 -> go to function definition and creates its own Execution Context
                    --> It create "New Variable Environment + Execution thread" **************************
                    --> Memory creation phase and Execution phase will happen again for this function
                    --> memory Allocation Phase:
                        --> val1 = undefined
                        --> val2 = undefined
                        --> result = undefined
                    --> Execution Phase
                        --> val1 = 5
                        --> val2 = 9
                        --> result = 14 after process (5+9)
                        --> return this to parent Execution phase.
                    --> Delete this 
        - result2 -> similar as result1.
*/