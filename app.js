var guestlist = ["sukaina", "ashfa", "noveen", "kanwal"];
var guestnotcomming = guestlist[0];
console.log(guestnotcomming, "not comming");
guestlist.splice(0, 0, "komal");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to come on dinner?")); });
