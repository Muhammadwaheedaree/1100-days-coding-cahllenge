//More conditional test
let string1 = "hello";
let string2 = "world";

// Tests for equality and inequality with strings
console.log(
  "Test for equality with strings: 'hello' == 'hello'. I predict True."
);
console.log(string1 === "hello");

console.log(
  "Test for inequality with strings: 'hello' != 'world'. I predict True."
);
console.log(string1 !== string2);

// Tests using the lower case function
console.log(
  "Test if 'HELLO' is equal to 'hello' after converting both to lowercase. I predict True."
);
console.log(string1.toLowerCase() === "hello");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num3 = 7;
let num4 = 10;

console.log("Test for numerical equality: 7 == 7. I predict True.");
console.log(num3 === 7);

console.log("Test for numerical inequality: 7 != 10. I predict True.");
console.log(num3 !== num4);

console.log("Test for greater than: 10 > 7. I predict True.");
console.log(num4 > num3);

console.log("Test for less than: 7 < 10. I predict True.");
console.log(num3 < num4);

console.log("Test for greater than or equal to: 10 >= 7. I predict True.");
console.log(num4 >= num3);

console.log("Test for less than or equal to: 7 <= 10. I predict True.");
console.log(num3 <= num4);

// Tests using "and" and "or" operators
let isTrue = true;
let isFalse = false;

console.log("Test for 'and' operator: true && true. I predict True.");
console.log(isTrue && isTrue);

console.log("Test for 'or' operator: true || false. I predict True.");
console.log(isTrue || isFalse);

// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];

console.log("Test if 'banana' is in the array. I predict True.");
console.log(!fruits.indexOf("banana"));

// Test whether an item is not in an array
console.log("Test if 'grape' is not in the array. I predict True.");
console.log(!fruits.indexOf("grape"));
