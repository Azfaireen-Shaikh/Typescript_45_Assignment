//44
//Arry as a parameter

function mySandwiches(...items: string[]){
    return ` i want sandwich of ${items}`;
}

let collection1 = mySandwiches("hum", "cheese","lettace");//can add as many you wish
let collection2 = mySandwiches("turkey","swiss");
let collection3 = mySandwiches();//without argument 
console.log(collection1)
console.log(collection2)
console.log(collection3)
