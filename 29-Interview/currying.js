//curring is process of transforming a function with multiple arguments into a sequence of function each taking a single argument. it allows partila application of a function's arguments.

//Normal
function add(a, b, c) {
  return a + b + c;
}

// curried
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      a + b + c;
    };
  };
}

console.log(add(1, 2, 3));
console.log(curriedAdd(1)(2)(3));
