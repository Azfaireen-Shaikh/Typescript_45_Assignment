var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task 18
var placestovisit = ["Pakistan", "korea", "America", "china"];
console.log("original order:", placestovisit);
console.log("Alphabetical Order:", __spreadArray([], placestovisit, true).sort());
console.log("original order after sorting:", placestovisit);
console.log("Reverse alphabetial order:", placestovisit);
console.log("original order after reverse sorting:", placestovisit);
console.log("reversed order:", placestovisit);
placestovisit.sort();
console.log("sorted in alphabetical order :", placestovisit);
placestovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placestovisit);
