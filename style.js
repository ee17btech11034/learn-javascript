/*
# Promise:
    --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    --> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    --> 3 states:
        --> 1. pending
        --> 2. fulfilled
        --> 3. rejected

    --> In earlier days (ES4) there were no Promises, People used "Async Await"
        --> that time there some libraries which provided this functionality (promise, .then, .catch) like Q, BlueBird
        --> Later in ES6, JS integrated blueBird in it.


        --> Chaining:
            --> Promise.then.then.catch.then.catch.finally 
            --> finally always run

    Async Await:
        --> async await directly errors ko handle nhi kr skte hai
        --> better to use try-catch block for response from Promise

    # Callback hell / pyramid of doom:
        --> this in JavaScript refers to a situation where multiple nested callbacks are used to handle dependent asynchronous operations, resulting in code that is deeply indented and hard to read or maintain.
        --> getUser(userId, (user) => {
                getOrders(user, (orders) => {
                    processOrders(orders, (processed) => {
                        sendEmail(processed, (confirmation) => {
                            console.log("Done:", confirmation);
                        });
                    });
                });
            });
    
    # fetch:
        --> returns a promise
        --> If something is written in Async-Await and we see any await then below code will not run until it is resolved. 
        --> That's why we wait for it to resolve

        --> Why await keyword:
            --> await tells this line itself that I will be doing some process so wait for me to complete.
    
*/

// create promise
const promiseOne = new Promise(function(resolve, reject){
    //can do async task like DB calls, Crypt (pass generate/compare), network, etc
    setTimeout(()=>{
        console.log("Async task is completed in promise 1")
    }, 1500)
})

//resolve is directly linked to .then
//reject is directly linked to .catch

//consume Promise
promiseOne.then((res)=>{
    console.log(".then after promise 1 resolve") // it will never run  because we did not link resolve to .then
})






// Promise 2 -> resolve - .then link
const promiseTwo = new Promise(function(resolve, reject){
    //can do async task like DB calls, Crypt (pass generate/compare), network, etc
    setTimeout(()=>{
        console.log("Async task is completed in promise 2")
    }, 1500);
    resolve() // resolve is linked but read the issue below "output"
})


//consume Promise
promiseTwo.then((res)=>{
    console.log(".then after promise 2 resolve") // it will never run  because we did not link resolve to .then
})


//Output till this code is:
/*
    .then after promise 2 resolve
    style.js:21 Async task is completed in promise 1
    style.js:42 Async task is completed in promise 2

Reason is: resolve() is called in Promise and as sequence it will run once settimeout is in macro queue.
Fix: put resolve in settimeout


const promiseTwo = new Promise(function(resolve, reject){
    //can do async task like DB calls, Crypt (pass generate/compare), network, etc
    setTimeout(()=>{
        console.log("Async task is completed in promise 2")
        resolve() // resolve is linked
    }, 1500);
})
*/



// Pass response from Promise to .the
// resolve(data) or resolve(data.response()) -> it can be object, array, function, anything
// we use `return "returned"` to return or pass to next .then 


// Reject
// reject(error)





// Async Await
// We can use async-await on Promise instead of .then or .catch. It's just that 
async function consumePromiseTwo() {
    const response = await promiseTwo
}


//try-catch
async function consumePromiseTwo() {
    try { //handles .then
        const response = await promiseTwo
        console.log(response);
    } catch (error) { //.catch
        console.log(error)
    }
    
}


// fetch
// it is a lib/object which return a promise. (library to object)
const uri = "https://api.github.com/users/ee17btech11034"
async function getUserDetails(url) {
    try {
        const data = await fetch(url) 
        console.log(typeof(data)); //object
        // console.log(data); //object
        // console.log(data.json()); //Promise of pending state  BEcause .json also takes some time to parse and convert
        const response = await data.json(); //wait for it to resolve
        
    } catch (error) {
        console.log("error occured");
    }    
}

getUserDetails(uri)




//direct .then .catch

fetch(uri)
    .then((res)=>{
        console.log(".then using fetch")
        return res.json()
    })
    .then((res)=>{
        console.log(res) //can not do this in above .then
    })
    .catch((e)=>{
        console.log("Error: ", e);        
    })