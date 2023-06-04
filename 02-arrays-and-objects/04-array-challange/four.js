const myObj1 = {
  js: "Javascript",
  ts: "TypeScript",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObj1) {
  //   console.log(`${key} shortcut is for ${myObj1[key]}`);
}

const programming = ["js", "ts", "ruby", "swift", "java"];

for (const key in programming) {
  console.log(key);
}
