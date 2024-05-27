// reduce
const muns = [1, 2, 3, 4, 6, 7];

const myTotal = muns.reduce((acc, currVal) => {
  //   console.log(`acc:${acc}, currVal:${currVal}`);
  return acc + currVal;
}, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS",
    price: 4000,
  },
  {
    itemName: "RactJs",
    price: 6000,
  },
  {
    itemName: "ReactNative",
    price: 10000,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(priceToPay);
