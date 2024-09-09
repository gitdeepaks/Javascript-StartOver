// const uniqueArr = (arr) => {
//   return [...new Set(arr)];
// };

// const usiQueArr = (arr) => {
//   const res = [];
//   arr.forEach((element) => {
//     if (!res.includes(element)) {
//       res.push(element);
//     }
//   });
//   return res;
// };

const usequeArrq = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};
