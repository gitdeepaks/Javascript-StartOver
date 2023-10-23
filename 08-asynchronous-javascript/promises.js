// promises are used to handle asynchronous operations in JavaScript

// const cart = [
//   "shos",
//   "television",
//   "laptop",
//   "phone",
//   "watch",
//   "kurta",
//   "pants",
//   "shirt",
// ];

// createOrder(cart, function () {
//   proceedtoPayment(orderId);
// }); //inverson of control

// const promise = createOrder(cart);

// // {data: {orderId: 1234}, error: null}
// promise.then(function (orderId) {
//   proceedtoPayment(orderId);
// });

// fetch("https://api.github.com/users/techsithgit");

const user = fetch("https://api.github.com/users/gitdeepaks");

console.log(user);
user.then(function (response) {
  console.log(response);
});

//pending -> fulfilled or rejected  are the states of a promise
