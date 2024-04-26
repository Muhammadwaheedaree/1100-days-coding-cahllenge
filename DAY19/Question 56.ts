// Keep Only Strings:
let mixedArray = [1, "apple", 2, "banana", true, "correct"];
let StringsArray = mixedArray.filter((item) => typeof item === "string");
console.log(StringsArray);
