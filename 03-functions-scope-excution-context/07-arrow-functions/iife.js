// Immediatly Invoked Function Expression
// Global scope se pullution hota hai kai baar usko hatane ke liye

(function tea() {
  //named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED 2 ${name}`);
})("Deepak");
