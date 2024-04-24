// Refactoring to Arrow Functions;
function calculateArea(width: number, height: number): number {
  return width * height;
}
let calculateAreaRow = (width: number, height: number): number =>
  width * height;
console.log(calculateAreaRow(5, 7));
