// Strings
const text = "Hello World everyone!";

// length
console.log(text.length);

// includes

console.log(text.includes("H"));

// toUpperCase

console.log(text.toUpperCase());

// trim

console.log(text.trim());

// substring()

console.log(text.substring(0, 5));

// chaining
const res = text.toUpperCase().trim().substring(0, 5);
console.log(res);

const resp = {
  stausCode: 500,
  ok: false,
};

if (resp.ok) {
  console.log("Everything is fine");
}

// Array

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// push
number.push(10);

console.log(number.includes(5));

// forEach

console.log(number[1] * 2);
number.forEach((elem) => {
  console.log(elem * 2);
});

// objects of array

const data = [
  {
    name: "John",
    age: 23,
  },

  {
    name: "Mike",
    age: 25,
  },
  {
    name: "Ron",
    age: 28,
  },
];

console.log(data[0].age);

// Objects

const person = {
  name: "John",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  address: {
    city: "New York",
    state: "NY",
  },
};

console.log(person.name.city);

const username = input.value;
const password = input.value;

const newUser = {
  username: username,
  password: password,
};

// pasing arguments of function

function logUser(user) {
  console.log(user.name);
  console.log(user.age);
}

function user(params) {
  name: "Emily";
  age: 23;
}

logUser(user);

// increment(++) decrement(--)

let num = 1000;

num--;
console.log(num);

function doSomthing() {
  let b = 5;
}

// function intermeidate

function addNumber() {
  const newNumber = 5;

  console.log(newNumber);
}

addNumber();

// refactoring

const soSomthing = () => {
  console.log(true);
  console.log(true);
  console.log(true);
  console.log(true);
  console.log(true);
};

// Hoisting

var number;
number = 5;
console.log(number);
logStuff();
function logStuff() {
  console.log("hello");
}
