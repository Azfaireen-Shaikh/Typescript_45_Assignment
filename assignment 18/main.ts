//Task 18
let placestovisit : string[] = ["Pakistan","korea","America","china"];
console.log("original order:", placestovisit);
console.log("Alphabetical Order:",[...placestovisit].sort());
console.log("original order after sorting:", placestovisit);
console.log("Reverse alphabetial order:", placestovisit);
console.log("original order after reverse sorting:",placestovisit);
console.log("reversed order:",placestovisit)
placestovisit.sort();
console.log("sorted in alphabetical order :",placestovisit);
placestovisit.sort((a,b)=> b.localeCompare(a));
console.log("sorted in reverse alphabetical order:",placestovisit);

