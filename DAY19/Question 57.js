// Find the average grade:
var grades = [88, 94, 72, 53, 77];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
