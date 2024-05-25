// function sayName() {
//   console.log("D");
//   console.log("E");
//   console.log("E");
//   console.log("P");
//   console.log("A");
//   console.log("K");
// }

// sayName();

// function addNum(num1, num2) {
//   console.log(num1 + num2);
// }

function addNum(num1, num2) {
  //   let res = num1 + num2;
  //   return res;

  return num1 + num2;
}

const res = addNum(8 + 2);

// console.log("Result", res);

function logedinUserMessage(username = "Sam") {
  if (!username) {
    console.log("please enter username");
    return;
  }
  return `${username} loggedin`;
}

// const newRes = logedinUserMessage("Deepak");
// const newRes = logedinUserMessage("Deepak");

// console.log(newRes);

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 7000, 10000, 20000, 700000));

const user = {
  username: "deepak",
  price: 991,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "Deepak",
  price: 3999,
});

const myNewArr = [200, 400, 600, 999];

function returnSecondValue(getArr) {
  return getArr[1];
}

console.log(returnSecondValue([200, 500, 1000]));
