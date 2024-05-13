"use strict";
// creating an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//creating  by for.loop
for (let oneNumber of numbers) {
    let ordinalending;
    if (oneNumber === 1) {
        ordinalending = "st";
    }
    else if (oneNumber === 2) {
        ordinalending = "nd";
    }
    else if (oneNumber === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log(`${oneNumber}${ordinalending}`);
}
