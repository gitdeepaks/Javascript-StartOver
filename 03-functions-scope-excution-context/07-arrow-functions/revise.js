const user = {
  username: "deepak",
  price: 9999,
  welcomMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomMessage();
// user.username = "hero";
// user.welcomMessage();

// console.log(this);

// function green() {
//   let usename = "deepak";
//   console.log(this);
// }

// green();

const greenArrow = () => {
  //   let usename = "deepak";
  console.log(this);
};

// greenArrow();

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({ username: "Deepak" });

console.log(addTwo(7, 3));

const myArr = [2, 5, 6, 7, 8];
