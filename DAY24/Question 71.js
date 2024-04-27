// Compare let and const:
var age = 25;
age = 26;
console.log(age);
var myname = "waheed";
try {
    myname = "murad";
}
catch (error) {
    console.log("Error: can't reassign a `const`-declared variable.");
}
