//43
let magiciansName2 =["ali","fayyaz","aliza","bisma"]
let magiciansNamecopy=[...magiciansName2]
function show_magicians(greet :string){
    let withGreetings ="";
    for(let item of magiciansNamecopy){
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings ;
};
let myGreetings = show_magicians("Hello")
let makeArry =myGreetings.split('\n')
console.log(makeArry);
//original Array
console.log(magiciansName2)