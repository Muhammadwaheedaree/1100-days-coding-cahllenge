// Pulling Apart a Nested Object:
var developerSkills = {
    languages: ["Javascript", "Typescript", "Python"],
    framworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};
var languages = developerSkills.languages, framworks = developerSkills.framworks, tools = developerSkills.tools;
console.log("language: ".concat(languages[0], ", framework: ").concat(framworks[0], ", tools: ").concat(tools[0]));
