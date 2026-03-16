/*
    # fetch:
        --> returns a promise
        --> If something is written in Async-Await and we see any await then below code will not run until it is resolved. 
        --> That's why we wait for it to resolve

        --> Why await keyword:
            --> await tells this line itself that I will be doing some process so wait for me to complete.
    
    # fetch in details:
        --> https://blog.logrocket.com/fetch-api-node-js/#introducing-fetch-api ==> Read this
        --> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch then this
        --> we can send more args like usename and password to fetch as well
    

    # Error will only occure when browser was not ablse to request else everything is a response. ***************************************
        --> fetch only rejects on network failures (e.g., no connection, DNS error).  
        --> Any HTTP response — including 5xx, 4xx — is a resolved promise. 

        --> That's why we should check response.ok or response.status


    # fetch internal process:
        --> response = fetch("abc") -> when we call it 2 actions are fired (parallely)
            --> 1. create 3 private datastructures like we can not access
                    --> a. data                   -> variable intially undefined or anything. 
                    --> b. onfulFilled            -> an empty array
                    --> c. onRejection            -> an empty array
            --> 2. Network request handles (browser/node)  -> 
                    --> 2 type of reply:
                        --> a. resolve()
                                --> if resolved then it updates/put this into onFulFilled array. 
                        --> b. reject()
                                --> if rejected then it updates/put this into onRejection array. 

            --> Once 2nd is done then 
                --> if onFulFilled is updated then it has a function which dumps the data into 'data' variable
                --> if onRejection is updated then it has a function which dumps the data into 'data' variable
            
            --> once datat variable has something then it update 'response' variable we defined in global scope
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