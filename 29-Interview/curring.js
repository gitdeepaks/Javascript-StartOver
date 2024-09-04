// function muliply(num1) {
//   return (num2) => {
//     return num1 * num2;
//   };
// }

// console.log(muliply(3)(2))

//
const curry = function (fn) {
  var airity = fn.length;
  console.log("airity", airity);
  return function f1(...args) {
    if (args.length >= airity) {
      console.log("enough");
      return fn(...args);
    } else {
      console.log("need more");
      return function f2(...moreArgs) {};
    }
  };
};

const currySum = curry((a, b, c) => a + b + c);

console.log(currySum(1, 2, 3));
