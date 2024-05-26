// for of loop
const myArr = [1, 2, 3, 4, 5, 6, 7];

for (const vals of myArr) {
  //   console.log(vals);
}

const mtStr = "Hello there";

for (const greet of mtStr) {
  //   console.log(`Each char ${greet}`);
}

// Maps - Only for unique values

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObj = {
  game: "EASports",
  game1: "Contra",
};

// for (const [key, val] of myObj) {
//   console.log(key, val);
// }
