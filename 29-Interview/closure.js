//function that has access to its own scope, the outer function's scope and the global scope. it remember the environment in which it has created

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
