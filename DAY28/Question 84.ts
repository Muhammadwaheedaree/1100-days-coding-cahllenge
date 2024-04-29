// Replacing Text in a string:
function replaceJavascriptWithTypescript(sentence: string) {
  return sentence.replace(/javascript/g, "Typescript");
}
console.log(
  replaceJavascriptWithTypescript(
    "I love javascript and javascript is awesome!"
  )
);
