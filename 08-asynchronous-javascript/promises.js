// promises are used to handle asynchronous operations in JavaScript

const cart = ["shos", "television", "laptop", "phone", "watch"];

createOrder(cart, function () {
  proceedtoPayment(orderId);
}); //inverson of control

const promise = createOrder(cart);
