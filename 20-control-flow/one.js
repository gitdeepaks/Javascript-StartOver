// if

const isUserLoggedIn = true;

const temprature = 46;

// if (temprature === 50) {
//   console.log("less then 50");
// } else {
//   console.log("temprature is greated than 50");
// }

// console.log("Executed");

const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test 2"); //implicit scope not good practice

// Nesting

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 200");
// }

const userLoggedIn = true;

const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allowed to buy");
}

if (loggedInfromGoogle || loggedInfromEmail | true) {
  console.log("user loggedIn");
}
