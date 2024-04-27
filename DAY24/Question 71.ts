// Compare let and const:
let age = 25;
age = 26;
console.log(age);

const myname = "waheed";
try {
  myname = "murad";
} catch (error) {
  console.log("Error: can't reassign a `const`-declared variable.");
}
