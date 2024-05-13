// array of current users
let currentUsers = ["sukaina","ashfa","noveen","kanwal","asifa"];
// array of new users
let newUsers = ["usman","ali","arslan","shahid","maaz"];
// loop for newUsers to check userNames availability
newUsers.forEach(new_one_user =>{
    let our_condition = currentUsers.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLowerCase())

     if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`);

    } else{
        console.log(`This user ${new_one_user} is available.`);
    }

    
})