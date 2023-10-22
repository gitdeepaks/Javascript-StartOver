// jsvascript is a single threaded language that can be non-blocking

// console.log("Namaste");

// setTimeout(function learnJS() {
//   console.log("Javascript");
// }, 5000);

// console.log("Season 2");

const cart = ["shos", "television", "laptop", "phone", "watch"];

api.createOrder(cart, function () {
  api.proceedToPayment();
});

// inversion of control
