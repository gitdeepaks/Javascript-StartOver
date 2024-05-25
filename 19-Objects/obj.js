// Singleton

// Object Literals
// Object.create();

const mySym = Symbol("key1");

const JsUser = {
  name: "Deepak",
  surname: "Sankhyan",
  [mySym]: "mykey1",
  age: 19,
  location: "Jaipur",
  email: "deepak@deepak.com",
  isLoggedIn: true,
  lastLoggedin: ["Monday", "Thursday"],
};

// console.log(JsUser.email);

// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "deepak@chat.com";
// Object.freeze(JsUser);
// console.log(JsUser);

JsUser.greetings = function () {
  console.log("Hello User");
};
JsUser.greetingsTwo = function () {
  console.log(`Hello  User, ${this.name}`);
};

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
