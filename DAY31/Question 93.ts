// Find the index of "Banana"in an array of fruits and replace it with mango:
function replaceBananaWithMango(fruits: string[]): void {
  const index = fruits.indexOf("Banana");
  if (index !== -1) fruits[index] = "Mango";
}
const fruits: string[] = ["Apple", "Banana", "Strawberry"];
replaceBananaWithMango(fruits);
console.log(fruits);
