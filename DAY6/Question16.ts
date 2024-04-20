//More Guest:
let guests: string[] = ["rahman", "farman", "raheem"];
console.log("Greate news! I found a bigger dinner table!");
//adding more guest
guests.unshift("murad");
guests.splice(guests.length / 2, 0, "waheed");
guests.push("haji");

guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
