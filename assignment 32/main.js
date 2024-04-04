var Current_Users = ["Areeba", "Saad", "Saba", "Naila", "Hamza"];
var new_users = ["areeba", "naila", "aliza", "fatima", "haseeb"];
var current_users_lower = Current_Users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("sorry".concat(new_user, ",that name is taken"));
    }
    else {
        console.log("yes".concat(new_user, ",is still in available list"));
    }
}
