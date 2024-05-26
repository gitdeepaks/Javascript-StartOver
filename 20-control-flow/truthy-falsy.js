const userEmail = "h@deepak.com";

if (userEmail) {
  console.log("user email");
} else {
  console.log("no email");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Obj is empty");
}

//  Nullish Coaliescibg oprator

let val1;

// val1 = undefined ?? 15;

// val1 = null ?? 10 ?? 20;

// ternary

// condition ? true : false;

const greenTeaprice = 100;

greenTeaprice <= 80 ? console.log("less then 80") : console.log("more than 80");
