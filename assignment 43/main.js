var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//43
var magiciansName2 = ["ali", "fayyaz", "aliza", "bisma"];
var magiciansNamecopy = __spreadArray([], magiciansName2, true);
function show_magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, magiciansNamecopy_1 = magiciansNamecopy; _i < magiciansNamecopy_1.length; _i++) {
        var item = magiciansNamecopy_1[_i];
        withGreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreetings;
}
;
var myGreetings = show_magicians("Hello");
var makeArry = myGreetings.split('\n');
console.log(makeArry);
//original Array
console.log(magiciansName2);
