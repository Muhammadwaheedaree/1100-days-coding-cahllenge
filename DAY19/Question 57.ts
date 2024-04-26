// Find the average grade:
let grades = [88, 94, 72, 53, 77];
let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
