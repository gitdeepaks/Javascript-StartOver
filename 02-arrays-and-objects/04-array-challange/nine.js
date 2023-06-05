const muuNums = [1, 2, 3];

const total1 = muuNums.reduce(function (acc, curr) {
  console.log(`acc: ${acc}, curr: ${curr}`);
  return acc + curr;
}, 0);

const total = muuNums.reduce((acc, curr) => acc + curr, 0);
console.log(total);

const shoppingCart = [
  { itemName: "js Course", price: 299 },
  { itemName: "mobileDev", price: 399 },
  { itemName: "data sice", price: 599 },
];

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(price);
