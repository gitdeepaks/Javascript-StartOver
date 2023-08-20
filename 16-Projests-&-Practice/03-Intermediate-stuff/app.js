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
