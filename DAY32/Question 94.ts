// Use the .map() method to create a new array that contains the length of each word from an array of words:
const words: string[] = ["Hello", "World", "Typescript", "Javascript"];
const lengths: number[] = words.map((word) => word.length);
console.log(lengths);
