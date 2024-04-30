// Generate a date object representing your next birthday and log it to the code:
function getNextBirthday(day, month) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(15, 3);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
