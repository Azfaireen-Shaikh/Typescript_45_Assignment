//task16 part1
let guestArr : string[] =["anousha","ahad","saad","mirab"]
let cannotattend : string ="anousha"

let newguest : string = "amna"
guestArr[guestArr.indexOf(cannotattend)] = newguest
console.log(guestArr)

// guestArr.map((items) =>
// console.log(`Dear ${items},i found a bigger dinner table so i am invited more peoples.` ));

//task16 part2
let guestbegin : string = "moiz"
guestArr.unshift(guestbegin);
console.log(guestArr)

 //task16 part3middle
 let middleGuest: string = "bushra"
 let middleIndex= guestArr.length/3;
 guestArr.splice(middleIndex,3,middleGuest)
 console.log(guestArr)

 //task16 part4append
 guestArr.push("zeeshan")
 console.log(guestArr)

 //part5
 guestArr.map((items)=>
 console.log(`Dear  ${items},you are invited in the more people list on dinner`));