// Cars:
function make_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(make_car("Tyota", "Corolla", ["color", "red"], ["year", 2024]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunfloor", true]));
