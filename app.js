// list of guest in Array
var guestlist = ["sukaina", "ashfa", "noveen", "kanwal"];
// not comming
var guestnotcomming = guestlist[0];
console.log(guestnotcomming, "not comming");
// add and remove the guestlist
guestlist.splice(0, 1, "komal");
// printing the news for bigger table
console.log("Good news ! we have found bigger table for a dinner.");
// guest replace to come first
guestlist.unshift("zarmina");
// guest to come in end in array
guestlist.push("erum");
// guest in the middle of array
var middleindex = Math.floor(guestlist.length / 2);
// guest in mid of array
guestlist.splice(middleindex, 0, "nadia");
// print update list
console.log("updated lists of guest");
// invitation for dinner
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to come on dinner")); });
//inform that only that two guests can be invited for dinner with
console.log("unfortunately,the new dinner table wont arrive on time,so i can only invite two guests to dinner with me");
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("sorry ,".concat(removeguest, " i cant invite you to dinner."));
}
//print the invitation to two guests
console.log("invitation to the last 2guests:");
guestlist.forEach(function (lasttwo) { return console.log("luckily ${lasttwo) , you are still invied to dinner"); });
// removing lasts two guests from list
guestlist.pop();
guestlist.pop();
console.log("empty list:", guestlist);
