/*
JS Date and Time:
    --> milisonds from Jan 1, 1970 as it is easy to compare dates in this format.
    --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    --> let dateNow = new Date(); //2026-03-13T18:08:55.919Z --> Object
    --> let myTimeStamp = Date.now(); //milisonds from Jan 1, 1970 -> also a way to create date


*/

"use strict";
console.log(Date)

let dateNow = new Date();
console.log(dateNow) //2026-03-13T18:08:55.919Z --> Object
console.log(dateNow.toString()) //Fri Mar 13 2026 23:39:54 GMT+0530 (India Standard Time)
console.log(dateNow.toLocaleString()) //13/3/2026, 11:41:27 pm
console.log(dateNow.toLocaleDateString()) //13/3/2026
console.log(dateNow.toLocaleTimeString()) //11:41:44 PM
console.log(dateNow.toDateString()) //Fri Mar 13 20264


console.log("-------------")
let newDate = new Date(2026, 0, 13); //Months 0 se start hote hai. 13 jan 2026
// let newDate = new Date(2026, 0, 13); // Yr, Month, Date, Hr, Min, Sec
let newDate2 = new Date("2026-01-13"); // yaha month 1 se start honge
// let newDate2 = new Date("13-01-2026"); // yaha month 1 se start honge
console.log(newDate)
console.log(newDate.toDateString()) //Tue Jan 13 2026



let myTimeStamp = Date.now(); //milisonds from Jan 1, 1970 -> also a way to create date
console.log(myTimeStamp)
//We use this to compare dates in hotel bookings and all.

console.log(newDate2.getTime()) //milisonds from Jan 1, 1970 to 13 Jan 2026


//Convert to seconds -> divide by 1000 as it is milisec.
//But issue is it comes in decimal so iske liye Floor/round use kre not ceil
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

// let todaysDate = Date.now()
// console.log(todaysDate.getMonth()) //error as it is not a date object, it is milisec from Jan 1, 1970


let todaysDate = new Date(); //Now it is a date object ****************************************
console.log(todaysDate.getMonth()) //0 se start hote hai months
console.log(todaysDate.getDate()) //1 se start hote hai date
console.log(todaysDate.getFullYear()) //2026




// Customize date format
// console.log(dateNow.toLocaleString()) //13/3/2026, 11:41:27 pm
// we can customize it by passing options in toLocaleString
console.log(dateNow.toLocaleString('en-US', //'en-US' is for language and region 
    {day: '2-digit', 
        month: 'short', 
        year: 'numeric'})) //Mar 14, 2026
