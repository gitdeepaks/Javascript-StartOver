const addFive = (num) => {
  return num + 5;
};
const mulFour = (num) => {
  return num * 4;
};
const subsTow = (num) => {
  return num - 2;
};

const evaluate = compose(addFive, subsTow, mulFour);

console.log(evaluate(5));

function compose(...fns) {
  return function (init) {
    // let res = init;
    // for (let i = fns.length - 1; i >= 0; i--) {
    //   res = fns[i](res);
    // }

    return fns.reduceRight((acc, curVal) => {
      return curVal(acc);
    }, init);
  };
}

function pipe(...fns) {
  return function (init) {
    // let res = init;
    // for (let i = fns.length - 1; i >= 0; i--) {
    //   res = fns[i](res);
    // }

    return fns.reduce((acc, curVal) => {
      return curVal(acc);
    }, init);
  };
}

const evaluatePipe = pipe(addFive, subsTow, mulFour);
console.log(evaluatePipe(5));
