const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);
console.log(descriptor);

// const myNewObj = Object.create(null);

const chai = {
  name: "Lemon tea",
  price: 250,
  isAvaialable: true,

  orderChai: function () {
    console.log(`chai nahi bani`);
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false,
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, val] of Object.entries(chai)) {
  if (typeof val !== "function") {
    console.log(`${key}:${val}`);
  }
}
