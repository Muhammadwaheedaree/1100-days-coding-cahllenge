// Function Expression vs Function Declaration:
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));
