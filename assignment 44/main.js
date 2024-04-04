//44
//Arry as a parameter
function mySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return " i want sandwich of ".concat(items);
}
var collection1 = mySandwiches("hum", "cheese", "lettace"); //can add as many you wish
var collection2 = mySandwiches("turkey", "swiss");
var collection3 = mySandwiches(); //without argument 
console.log(collection1);
console.log(collection2);
console.log(collection3);
