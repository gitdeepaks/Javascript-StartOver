const myObj = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  r: "Rust",
};

// for (const key in myObj) {
//   console.log(`${key} for ${myObj[key]}`);
// }

const programming = ["js", "rust", "swift", "ruby"];

for (const key in programming) {
  console.log(programming[key]);
}
