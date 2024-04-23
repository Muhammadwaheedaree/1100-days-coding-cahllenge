// Cars:
function make_car(
  manufacture: string,
  model: string,
  ...options: [string, any][]
): object {
  let car = { manufacture, model };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}
console.log(make_car("Tyota", "Corolla", ["color", "red"], ["year", 2024]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunfloor", true]));
