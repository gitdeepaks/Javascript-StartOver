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
