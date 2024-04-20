//Shirinking Guest List:
var guests = ["rahman", "farman", "raheem"];
console.log("Greate news! I found a bigger dinner table!");
//adding more guest
guests.unshift("murad");
guests.splice(guests.length / 2, 0, "waheed");
guests.push("haji");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
console.log("Unfortunantly, I can only invite two poeple for dinner.");
while (guests.length > 2) {
    var removeguest = guests.pop();
    console.log("sorry, ".concat(removeguest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invite to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
