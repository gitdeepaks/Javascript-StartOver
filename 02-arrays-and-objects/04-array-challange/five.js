const coding = ["js", "ts", "cpp", "python", "java"];

// coding.forEach(function (language) {
//   console.log(language);
// });

// coding.forEach((language) => {
//   language.replace("js", "ts");
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCode = [
  {
    lang: "Javasscript",
    languageFile: "js",
  },
  {
    lang: "TypeScript",
    languageFile: "ts",
  },
  {
    lang: "Java",
    languageFile: "java",
  },
];

myCode.forEach((item) => {
  console.log(item.lang);
});
