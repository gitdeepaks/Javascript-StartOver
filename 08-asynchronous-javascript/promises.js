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

// const user = fetch("https://api.github.com/users/gitdeepaks");

// console.log(user);
// user.then(function (response) {
//   console.log(response);
// });

//pending -> fulfilled or rejected  are the states of a promise
// promise is an object which represent the eventual compltion of an asynchronous operation.
const promOne = new Promise(function (res, rej) {
  // do an async task

  setTimeout(function () {
    console.log("task is complete");
    res();
  }, 3000);
});

promOne.then(function () {
  console.log("promise is comsumed");
});

new Promise(function (res, rej) {
  setTimeout(function () {
    console.log("Async Task Two");
    res();
  }, 1000);
}).then(function () {
  console.log("promise two is consumed");
});

const promiseTwo = new Promise(function (res, rej) {
  setTimeout(function () {
    res({ username: "deepak", email: "chaiya@example.com" });
  }, 1000);
});
promiseTwo.then(function (user) {
  console.log(user);
});

const promiseThree = new Promise(function (res, rej) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      res({ email: "chai@chai.com", passwor: "pass@123" });
    } else {
      rej("somethng went wrong");
    }
  }, 1000);
});
promiseThree
  .then((user) => {
    console.log(user.username);
  })
  .then((myuser) => {
    console.log(myuser);
  })
  .catch((err) => {
    console.log(err);
  });
