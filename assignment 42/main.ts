//42
let magiciansName =["usman","haseeb","wajahat"]

function show_magicians(greet:string){
    for(let item of magiciansName){
        console.log(greet ,item);
    }
};
show_magicians("hello,how are you Mr.");
show_magicians("hello"); //2nd time calling
 