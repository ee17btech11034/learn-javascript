/*

# JS:
    --> Single threaded 
    --> Synchronous :-> run sequentially
    --> comperativaly slow but 
        --> we can not get JS Engine alone as 
        --> we get this in runtime engines like browser (v8), NodeJs, etc
# Execution Context:   
    --> How code executes
    -- stack, heap

# Blocking and Non-blocking:
    --> Blocking Code:
        --> block the code execution until it completes
        --> Read file Sync
    --> non-blocking Code:
        --> does not block the code execution 
        --> Read file ASync



# Event Loop:
    ## JS Engine: 
        --> Heap
        --> Stack (for script calls) -> LIFO
    
    ## Web API or Node or any other environment -> Here we will discuss webAPI
    ## Web API:
        --> These provide extra wrappers and queue based on requirements which makes this Asynchronous

        --> async task come to this from stack like 
            --> DOM API (Node does not have one) similar to filesystem which Node has but browser does not
            --> setTimeOut, setinterval, etc.
            --> fetch (promise)
        
        --> It creates 2 queues:
            -----------https://www.w3docs.com/learn-javascript/event-loop-microtasks-and-macrotasks.html --------------
            --> 1. Microtask queue:
                    --> also called High priority queue
                    --> Promise.then, queueMicrotask, MutationObserver
            --> 2. Macrotask queue:
                    --> low priority queue / simple queue
                    --> setTimeout, setInterval, I/O, UI rendering
        
        --> then it puts those async tasks in these queues accordingly.
        --> once script is done then 
            --> high priority queues puts its task in stack in SEQUENCE. 
                --> like promise.then.then.then is resent then first this will resolve fully as this will be in a stack.
            --> low priority queues puts its task in stack in SEQUENCE. 

*/
