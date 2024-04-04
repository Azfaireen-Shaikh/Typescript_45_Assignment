let Current_Users : string[]=["Areeba","Saad","Saba","Naila","Hamza"]
let new_users : string[]= ["areeba","naila","aliza","fatima","haseeb"]
let current_users_lower : string [] = Current_Users.map(user =>user.toLowerCase())

for (let new_user of new_users) {
if(current_users_lower.includes(new_user.toLowerCase())){
    console.log(`sorry${new_user},that name is taken`)
}else{
    console.log(`yes${new_user},is still in available list`)
}
}