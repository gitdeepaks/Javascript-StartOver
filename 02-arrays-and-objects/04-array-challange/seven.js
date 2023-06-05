const myNumms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nuwNums = myNumms.map((n) => {
//   return n + 10;
// });
const nuwNums = myNumms
  .map((n) => {
    return n * 10;
  })
  .map((n) => n + 1)
  .filter((n) => n >= 40);

console.log(nuwNums);
