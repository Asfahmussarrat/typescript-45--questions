"use strict";
// making a FUNCTION
function make_shirt(size = "large", printmessage = "I love typescript") {
    console.log(`creating the size${size} shirt with the${printmessage}print on shirt`);
}
// calling the function
make_shirt();
//calling the function on medium size by default message
make_shirt("medium");
//calling a function by small size by new message
make_shirt("small", "I love A.I");
