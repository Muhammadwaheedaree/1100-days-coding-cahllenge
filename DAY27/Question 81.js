// Iterating Over Object Properties:
function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObjectProperties({
    make: "Tyota",
    model: "Corolla",
    year: 2025,
    color: "black",
});
