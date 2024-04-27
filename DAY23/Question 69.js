// Deviding and Finding the Reminder:
function divideAndRemainder(dividend, divisor) {
    var quotiant = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotiant: quotiant, remainder: remainder };
}
console.log(divideAndRemainder(10, 3));
