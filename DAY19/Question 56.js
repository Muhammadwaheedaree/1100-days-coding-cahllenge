// Keep Only Strings:
var mixedArray = [1, "apple", 2, "banana", true, "correct"];
var StringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(StringsArray);
