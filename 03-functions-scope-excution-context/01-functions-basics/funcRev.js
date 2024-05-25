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
const newRes = logedinUserMessage("Deepak");

console.log(newRes);
