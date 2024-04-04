let persoNname : string = "Azfaireen Shaikh"
//lowercase
console.log(`lowercase:`,persoNname.toLowerCase())

//uppercase
console.log(`uppercase:`,persoNname.toUpperCase())

//tittle case
console.log(`titlecase:`,persoNname.replace(/\b\w/g,c=> c.toUpperCase()))