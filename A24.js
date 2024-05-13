"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declaration of variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
//testing string equals to string
console.log("is apple is equal to apple?");
console.log(apple == "apple");
//testing string is not equals to string
console.log("apple is not equals to apple?");
console.log(apple != "apple");
//testing lowercase declaration
console.log(" is APPLE is equal to apple after converting to lowercase? ");
console.log(uppercaseApple.toLowerCase() == "apple");
//testing not equals to lowercase declaration
console.log("is APPLE is not equal to apple after converting toNamespacedPath lowercase()");
console.log(uppercaseApple.toLowerCase() != "apple");
//numericals operation applied
//equals to
console.log("is ten is equal to twenty?");
console.log(ten == twenty);
//not equals to
console.log("is ten is not equals to twenty?");
console.log(ten != twenty);
//greater than
console.log("is ten is greater than zero?");
console.log(ten > 0);
//less than
console.log("is twenty less than 10?");
console.log(twenty < 10);
//equais to or greater than
console.log("is ten is greater than or equals to 5?");
console.log(ten >= 5);
//less than or equals to
console.log("is twenty is less than or equal to 10?");
console.log(twenty <= 10);
//conditional operators and & or
console.log("is twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
//one more example of 'and'operator
console.log("is twenty is not equal than 10 and twenty is equal to 30?");
console.log(twenty != 10 && twenty == 30);
//let see "or" operator||;
console.log("is 20  isgreater than 50 OR twenty is equal to 20?");
console.log(20 > 50 || 20 == 20);
//second example of OR
console.log("Is 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//conditions for arraY
//INCLUDED IN ARRAY
console.log("is orange is included in array? ");
console.log(fruits.includes("orange"));
//NOT INCLUDED IN ARRAY
console.log("is orange is not included in array?");
console.log(!fruits.includes("orange"));
