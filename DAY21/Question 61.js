// Making enum for vehicles:
var vehiclesType;
(function (vehiclesType) {
    vehiclesType[vehiclesType["car"] = 0] = "car";
    vehiclesType[vehiclesType["auto"] = 1] = "auto";
    vehiclesType[vehiclesType["bike"] = 2] = "bike";
})(vehiclesType || (vehiclesType = {}));
console.log(vehiclesType.car);
