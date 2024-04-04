let guestArr : string[] = ["mirab" ,"Ahad", "Saad ","ramish"];
let cannotattend : string ="ramish"

// console.log(cannotattend+ " " "can not attend the dinner. ")

let newguest : string = "anousha"

guestArr[guestArr.indexOf(cannotattend)]= newguest;

// console.log(guestArr)
guestArr.map((items) =>

console.log(`Dear${items}, you are invited to the dinner.`)
)