//task16 part1
var guestArr = ["anousha", "ahad", "saad", "mirab"];
var cannotattend = "anousha";
var newguest = "amna";
guestArr[guestArr.indexOf(cannotattend)] = newguest;
console.log(guestArr);
// guestArr.map((items) =>
// console.log(`Dear ${items},i found a bigger dinner table so i am invited more peoples.` ));
//task16 part2
var guestbegin = "moiz";
guestArr.unshift(guestbegin);
console.log(guestArr);
//task16 part3middle
var middleGuest = "bushra";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 3, middleGuest);
console.log(guestArr);
//task16 part4append
guestArr.push("zeeshan");
console.log(guestArr);
//part5
guestArr.map(function (items) {
    return console.log("Dear  ".concat(items, ",you are invited in the more people list on dinner"));
});
