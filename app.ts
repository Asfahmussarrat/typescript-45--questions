let guestlist = ["sukaina","ashfa","noveen","kanwal"];
let guestnotcomming = guestlist[0];
console.log(guestnotcomming ,  "not comming");
guestlist.splice(0 ,0, "komal");
guestlist.forEach(guest => console.log(`salam ${guest},would you like to come on dinner?`));