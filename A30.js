"use strict";
// creating an array
let userName = ["sukaina", "ashfa", "admin", "noveen"];
// using forEach loop on array
userName.forEach(oneuser => {
    if (oneuser === "admin") {
        console.log(`Hello  ${oneuser} ,would you like to see a status report ?`);
    }
    else {
        console.log(`Hello ${oneuser} ,thankyou for logging in again.`);
    }
});
