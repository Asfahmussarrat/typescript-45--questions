"use strict";
//Making an Array of Great Magicians;
let MagicianNames = ["Junaid Bangalli", "Pooja Nagan", "HareeRatti", "sifferGanda"];
function show_Magicians(greet) {
    for (let item of MagicianNames) {
        console.log(greet, item);
    }
}
;
show_Magicians("Hello,");
show_Magicians("Hello ,how are you Mr,");
