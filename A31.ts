// creating an array
let userName = ["sukaina","ashfa","noveen","admin","kanwal"];
if(userName.length ===0){
    console.log("your array is empty we need to find user!")

}
else{
    // using forEach loop on array
    userName.forEach(oneuser=>{
        if(oneuser === "admin"){
            console.log(`Hello ${oneuser},would you like to see a status report?`);
        }else{
            console.log(`Hello ${oneuser},thank you for logging in again.`);
        }
    }
        )
}
