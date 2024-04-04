var guests = ["ali", "zainab", "faiz", "asad"];
console.log("Due to limited space ,we are invited two people only");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("sorry, ".concat("removedGuests", ", you are no longer invited to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear".concat(guest, ",you are still invited to dinner."));
});
guests.pop();
guests.pop();
console.log("final guest list", guests);
