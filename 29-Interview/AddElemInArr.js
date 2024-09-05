const numbers = [1, 2];

const append = function (arr, el) {
  //   arr.push(el);
  return [...arr, el];
  //   return arr;
};

console.log(append(numbers, 3));
console.log(numbers);
