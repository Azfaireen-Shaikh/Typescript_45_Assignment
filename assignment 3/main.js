var persoNname = "Azfaireen Shaikh";
//lowercase
console.log("lowercase:", persoNname.toLowerCase());
//uppercase
console.log("uppercase:", persoNname.toUpperCase());
//tittle case
console.log("titlecase:", persoNname.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
