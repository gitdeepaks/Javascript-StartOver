const user = {
  name: "Kim",
  age: 20,
  hobbies: ["music", "sport"],
  city: "Seoul",
};

const { city, age } = user;

console.log(age);

const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const [a, b, c, d, e, f, g, h, i, j] = arr;

console.log(
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth
);

// spread operator

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// primituve vs reference

// console.log(5 === "5"); // false
// console.log([1.2] === [1, 2]); // false

// undefined vs null

let num;

const data = {
  cities: ["Seoul", "Busan", "Daegu"],
  month: "September",
};

console.log(data.temp); // undefined

let name = null;

console.log(name); // null
