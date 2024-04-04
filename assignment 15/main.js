var guestArr = ["mirab", "Ahad", "Saad ", "ramish"];
var cannotattend = "ramish";
// console.log(cannotattend+ " " "can not attend the dinner. ")
var newguest = "anousha";
guestArr[guestArr.indexOf(cannotattend)] = newguest;
// console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear".concat(items, ", you are invited to the dinner."));
});
