// varibles
let description = "We need a new floor";
const SqaureMeter = 1000;
const isLoading = true;
const floorOptions = ["wood", "carpet", "tile", "concrete"];

const renovationJob = {
  owner: {
    name: "John",
    age: 30,
    address: { street: "123 Main St", city: "New York", state: "NY" },
  },
  ownerName: "John",
  maximumBudget: 10000,
  catagory: "bathroom",
  newShower: true,
  colorOptions: ["red", "blue", "green"],
  calculatePrice: function () {
    2000 + 1000;
  },
};

const error = {
  statusCode: 404,
  description: "Not Found",
  retry: true,
};

const myNew = document.querySelector("#new");
myNew.innerHTML = `<h1>This is JS and the Owner Name -${renovationJob.ownerName}</h1>`;

// functions

//traditional way
// function calculateNewPrice(sqMeter) {
//   const price = 2000 + 5000 + sqMeter;
//   return price;
// }

// //invoking the funnction
// const res = calculateNewPrice(2000);

// console.log(res);

// let calcPrice = function (sqMeter) {
//   const price = 2000 + 5000 + sqMeter;
//   return price;
// };

// console.log(calcPrice(8000));

const calcNprice = (sqMeter) => 2000 + 5000 + sqMeter;

console.log(calcNprice(9000));

// string concatination and template literals
const price = 9000;
const result = `The price is ${price}`;

// if-else bs ternary operator
const pricee = 93000;
if (price >= 2000) {
  console.log(`hello ${pricee}`);
} else {
  console.log(`blabla ${pricee}`);
}

// ternary operator

const resultt = price > 2000 ? `hello ${pricee}` : `blabla ${pricee}`;
console.log(resultt);
