// Use the .map() method to create a new array that contains the length of each word from an array of words:
var words = ["Hello", "World", "Typescript", "Javascript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
