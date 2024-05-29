const user = {
  username: "deepak",
  loginCount: 10,
  signedIn: true,

  getUserDetails: function () {
    // console.log(`Username:${this.username}`);
    // console.log("Got user details from DB");
    // console.log(this);
  },
};

// console.log(user.getUserDetails());

// console.log(this);
("");
// const prom = new Promise();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Deepak", 12, true);
const userTwo = new User("Chai", 11, true);

console.log(userOne.constructor);
// console.log(userTwo);
