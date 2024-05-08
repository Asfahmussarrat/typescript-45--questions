// list of countries in array
let countriestovisit:string[] = ["qattar","america","sudan","bangladesh"];
// print the array
console.log("originallist" , countriestovisit);
// print the array in alphabetical order
console.log("alphabeticalorder:" ,[... countriestovisit].sort());
//print array in same order as original
console.log("still in original order:" ,countriestovisit);
//print array in same order as original
console.log("still in original order:" ,countriestovisit);
// print array in reverse order
console.log("reverseorder:" ,[...countriestovisit].reverse());
 // print the array in still original order
 console.log("still in original order:" , countriestovisit);
 // change the order of original array now
 console.log("original order reversed:" , countriestovisit.reverse());
 // back to the original order in array
 console.log("back to original order:", countriestovisit.reverse());
 // print the array again in alphabetical order
 console.log("sorted in alphabetical order:" , countriestovisit.sort());
 // print again the reversed order been changed
 console.log("original order reversed:", countriestovisit.reverse());