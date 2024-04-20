//Shirinking Guest List:
let guests: string[] = ["rahman", "farman", "raheem"];
console.log("Greate news! I found a bigger dinner table!");
//adding more guest
guests.unshift("murad");
guests.splice(guests.length / 2, 0, "waheed");
guests.push("haji");

guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
console.log("Unfortunantly, I can only invite two poeple for dinner.");
while (guests.length > 2) {
  let removeguest = guests.pop();
  console.log(`sorry, ${removeguest}, I can't invite you to dinner.`);
}
guests.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invite to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
