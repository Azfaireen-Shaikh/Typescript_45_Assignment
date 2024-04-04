var name_1 = "azfaireen ";
var name_2 = "azfaireen shaikh";
var name_3 = " miss azfaireen shaikh";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 == 22) {
    console.log("eligible for vote in elder catogary");
}
if (age_1 != 22) {
    console.log("eligible for vote in elder catogory");
}
if (age_1 <= age_2) {
    console.log("YOUNGER");
}
if (age_2 >= age_1) {
    console.log("OLDER");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible not for vote");
}
if (age_1 == 18 || age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 == 22) {
    console.log("person is eligible not for vote");
}
var country = ["pakistan", "india", "america", "china"];
if (country.includes("pakistan")) {
    console.log("pakistan is in country list");
}
if (country.includes("america")) {
    console.log("america is not include in an array");
}
