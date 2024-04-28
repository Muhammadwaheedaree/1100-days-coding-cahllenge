// Iterating Over Object Properties:
function logObjectProperties(obj: object) {
  for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}
logObjectProperties({
  make: "Tyota",
  model: "Corolla",
  year: 2025,
  color: "black",
});
