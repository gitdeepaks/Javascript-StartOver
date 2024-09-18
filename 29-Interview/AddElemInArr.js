const numbers = [1, 2];

const append = function (arr, el) {
  //   arr.push(el);
  return [...arr, el];
  //   return arr;
};

console.log(append(numbers, 3));
console.log(numbers);

function sayHello() {
  console.log("hello");
}

//what is closure ?
// closure is a function that remembers and has access to variables in the local scope in which it was created.

// what is lexical scoping ?
// lexical scoping means that the scope of a variable is limited to the block in which it was declared.

// please explain "this" in Javascript ?
// "this" keyword is used to refer to the object that is executing the current function.

// give a exaple in code of "this" in Javascript ?
// "this" keyword is used to refer to the object that is executing the current function.

class User {
  /**
   * Creates a new User object
   * @param {string} name - the name of the user
   */
  constructor(name) {
    this.name = name;
  }
  /**
   * Prints the name of the user
   */
  printName() {
    console.log(this.name);
  }
}
