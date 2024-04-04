let guests : string[] =["ali","zainab","faiz","asad"];
console.log("Due to limited space ,we are invited two people only");


while (guests.length > 2){
    const removedGuest = guests.pop();
    console.log(`sorry, ${`removedGuests`}, you are no longer invited to dinner.`)
}

guests.forEach((guest)=>{
console.log(`Dear${guest},you are still invited to dinner.`);
});

guests.pop();
guests.pop();
console.log("final guest list",guests);


