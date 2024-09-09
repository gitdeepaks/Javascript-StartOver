const arr = [1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6];

const minVal = Math.min(...arr);

const mionArr = arr.filter((el) => el === minVal);

console.log(mionArr.length);
