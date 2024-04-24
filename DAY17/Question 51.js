// Refactoring to Arrow Functions;
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaRow = function (width, height) {
    return width * height;
};
console.log(calculateAreaRow(5, 7));
