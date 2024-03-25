
let current_users:string[] = ["Ali", "Mazz", "Faizan", "Feroz", "Faiz", "AYAN"];

let new_users:string[] = ["clerk", "mustafa", "Din", "Ismail", "Zain", "fahad"];


new_users.forEach(new_user => {
    let existing_user = current_users.some(current_user => current_user.toLowerCase() == new_user.toLowerCase())
    
    if(existing_user){
        console.log("user", new_user,  " already exist!");
    }
    else{
        console.log("user ", new_user, "available!");
    }
});