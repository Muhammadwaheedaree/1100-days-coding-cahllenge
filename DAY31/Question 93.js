// Find the index of "Banana"in an array of fruits and replace it with mango:
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Banana", "Strawberry"];
replaceBananaWithMango(fruits);
console.log(fruits);
