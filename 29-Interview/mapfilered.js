const numbers = [1, 2, 4, 5];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

const sum = numbers.reduce((acc, currVal) => acc + currVal, 0);

console.log(sum);

//map polyfill

Array.prototype.myMap = function (cb) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

//filter polyfill

Array.prototype.myFilter = function (cb) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

// reduce polyfill

Array.prototype.myReduce = (cb, initVal) => {
  let accumVal = initVal !== undefined ? initVal : this[0];
  let startIndex = initVal !== undefined ? 0 : 1;

  for (let i = 0; i < array.length; i++) {
    accumVal = cb(accumVal, this[i], i, this);
  }
  return accumVal;
};
