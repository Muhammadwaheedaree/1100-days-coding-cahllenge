// Function Expression vs Function Declaration:
function squareDeclaration(number: number): number {
  return number * number;
}
const squareExpression = function (number: number): number {
  return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));
