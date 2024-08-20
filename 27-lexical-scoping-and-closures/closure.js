// document.getElementById("orange").onclick = function () {
//   document.body.style.backgroundColor = `orange`;
// };
// document.getElementById("green").onclick = function () {
//   document.body.style.backgroundColor = `green`;
// };

// function clickHandler(color) {
//   //   document.body.style.backgroundColor = `${color}`;
//   return function () {
//     document.body.style.backgroundColor = `${color}`;
//   };
// }

// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");
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
console.dir(counter.getVal());
counter.increment();
console.dir(counter.getVal());

const privateSecret = () => {
  const secret = "foo";

  return () => secret;
};

const getSecret = privateSecret();
console.log(getSecret());
