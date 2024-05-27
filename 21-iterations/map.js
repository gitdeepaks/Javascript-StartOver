const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => {
//   return num + 100;
// });

const newNums = myNums
  .map((num) => num * 100)
  .map((num) => num + 10)
  .filter((num) => num >= 170);
console.log(newNums);
