var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// list of countries in array
var countriestovisit = ["qattar", "america", "sudan", "bangladesh"];
// print the array
console.log("originallist", countriestovisit);
// print the array in alphabetical order
console.log("alphabeticalorder:", __spreadArray([], countriestovisit, true).sort());
//print array in same order as original
console.log("still in original order:", countriestovisit);
//print array in same order as original
console.log("still in original order:", countriestovisit);
// print array in reverse order
console.log("reverseorder:", __spreadArray([], countriestovisit, true).reverse());
// print the array in still original order
console.log("still in original order:", countriestovisit);
// change the order of original array now
console.log("original order reversed:", countriestovisit.reverse());
// back to the original order in array
console.log("back to original order:", countriestovisit.reverse());
// print the array again in alphabetical order
console.log("sorted in alphabetical order:", countriestovisit.sort());
// print again the reversed order been changed
console.log("original order reversed:", countriestovisit.reverse());
