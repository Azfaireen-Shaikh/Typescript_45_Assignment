//Task 30
var users = ["areeba", "saad", "saba", "naila"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "areeba") {
        console.log("Hello , would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(users, ", thank you for logging in again"));
    }
}
