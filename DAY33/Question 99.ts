// Generate a date object representing your next birthday and log it to the code:
function getNextBirthday(day: number, month: number): Date {
  const today = new Date();
  let year = today.getFullYear();
  const birthday = new Date(year, month - 1, day);

  if (birthday < today) {
    birthday.setFullYear(year + 1);
  }
  return birthday;
}
const nextBirthday = getNextBirthday(15, 3);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
