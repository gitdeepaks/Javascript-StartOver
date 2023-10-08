const number = [10, 100, 500, 1000];

// push
number.push(10000);
console.log(number); // [10, 100, 500, 1000, 10000]

//forEach
number.forEach((num) => {
  console.log(num + 10);
});

//map
const newNumber = number.map((num) => {
  return num + 10;
});
// console.log(newNumber); // [20, 110, 510, 1010, 10010] we get a new array

// /some
const num = number.some((num) => {
  return num > 100000;
});
//  console.log(num); // yes

// find
const res = number.find((num) => {
  return num > 8000;
});
// console.log(res); // 10000
// filter()
const newNum = number.filter((num) => {
  return num > 400;
});

// console.log(newNum); // [500, 1000, 10000]
