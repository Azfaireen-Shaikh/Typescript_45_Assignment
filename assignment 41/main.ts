//41
function show_magicians (magicians : string[]) : void {
    for (const magician of magicians)
    console.log(magician.charAt(0).toLocaleLowerCase()+ magician.slice(1));
}

const magician  : string [] = ["ali","hamza","bilal",]
show_magicians(magician)