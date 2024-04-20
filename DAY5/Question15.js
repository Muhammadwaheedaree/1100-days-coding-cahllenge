// changing guests list:
var guests = ["faisal", "rahman", "farman"];
var unableToAttend = "faisal";
var newGuest = "raheem";
var dinnerInvitation = "dear";
// Printing dinner invitations to each guest
for (var i = 0; i < guests.length; i++) {
    console.log(dinnerInvitation + guests[i] + ", I would like to invite you to dinner.");
}
// Print the name of the guest who can't make it
console.log(unableToAttend + " can't make it to the dinner.");
// Replace the guest who can't make it with the new guest
var indexOfUnableToAttend = guests.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guests[indexOfUnableToAttend] = newGuest;
}
// Printing second set of dinner invitations to each remaining guest
for (var i = 0; i < guests.length; i++) {
    console.log(dinnerInvitation +
        guests[i] +
        ", I would like to invite you to dinner.");
}
