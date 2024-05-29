// let myName = "deepak     ";
// let myWebsite = "deepaksankhyan.com     ";

// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderpower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.deepak = function () {
  console.log(`deepak is present in all objects`);
};

Array.prototype.heyDeepak = function () {
  console.log(`Deepak say hello`);
};

// heroPower.deepak();

myHeros.deepak();
myHeros.heyDeepak();
// heroPower.heyDeepak();

// inheritance

const user = {
  name: "tea",
  email: "t@g.com",
};

const teacher = {
  makeCourse: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fulltime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// modern
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "Chai       ";

String.prototype.truLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUserName.truLength();
"deepak".truLength();
"iceTea".truLength();
