//42
var magiciansName = ["usman", "haseeb", "wajahat"];
function show_magicians(greet) {
    for (var _i = 0, magiciansName_1 = magiciansName; _i < magiciansName_1.length; _i++) {
        var item = magiciansName_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians("hello,how are you Mr.");
show_magicians("hello"); //2nd time caling
