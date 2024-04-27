// Deviding and Finding the Reminder:
function divideAndRemainder(
  dividend: number,
  divisor: number
): {
  quotiant: number;
  remainder: number;
} {
  let quotiant = Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  return { quotiant, remainder };
}
console.log(divideAndRemainder(10, 3));
