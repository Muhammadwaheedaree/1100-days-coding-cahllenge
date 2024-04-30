// Create a javascript snippet that calculates and loga how many days are left until New year:
// Write a function that returns tha current date in the format:

function daysUntilNewYear(): number {
  const today = new Date();
  const newYear = new Date(today.getFullYear() + 1, 0, 1);
  const diff = newYear.getTime() - today.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}
console.log(daysUntilNewYear() + "days until New Year.");
