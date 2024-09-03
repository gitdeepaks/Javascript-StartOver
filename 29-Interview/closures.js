const privateCounter = () => {
  let count = 0;

  return {
    increment: (val = 1) => {
      count += val;
    },
    getVal: () => {
      return count;
    },
  };
};

const counter = privateCounter();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());
