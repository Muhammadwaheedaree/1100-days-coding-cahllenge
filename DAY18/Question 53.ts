// Pulling Apart a Nested Object:
let developerSkills = {
  languages: ["Javascript", "Typescript", "Python"],
  framworks: ["React", "Angular", "Vue"],
  tools: ["Git", "Webpack", "Docker"],
};
let { languages, framworks, tools } = developerSkills;
console.log(
  `language: ${languages[0]}, framework: ${framworks[0]}, tools: ${tools[0]}`
);
