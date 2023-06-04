//for of
const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //   console.log(num);
}

const greet = "hello";
for (const gre of greet) {
  //   console.log(`Each char is ${gre}`);
}

//Maps

const map = new Map();
map.set("foo", "bar");
map.set("IN", "India");
map.set("USA", "America");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, "-", value);
}

const myObj = {
  game1: "BGD",
  game2: "NFS",
};

// for (const [key, value] of myObj) {
//   console.log(key, "-", value);
// }
