// const tinder = new Object();

const tinder2 = {};
tinder2.id = "123abc";
tinder2.name = "deepak";

tinder2.isLoggedIn = false;

// console.log(tinder2);

const reglarUser = {
  email: "sun@gmail.com",
  fullname: {
    userFullname: {
      firstName: "Deepak",
      LastName: "Sankhyan",
    },
  },
};

// console.log(reglarUser.fullname?.userFullname);

const Ibj1 = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
};

const Ibj2 = {
  5: "e",
  6: "f",
  7: "g",
  8: "h",
};
const Ibj4 = {
  9: "i",
};

// const obj3 = { ...Ibj1, ...Ibj2 };

// const obj3 = Object.assign({}, Ibj1, Ibj2, Ibj4);

const obj3 = { ...Ibj1, ...Ibj2, ...Ibj4 };

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "d@g.com",
  },
  {
    id: 2,
    email: "s@g.com",
  },
  {
    id: 3,
    email: "v@g.com",
  },
  {
    id: 4,
    email: "b@g.com",
  },
];

users[1].email;
console.log(tinder2);

console.log(Object.keys(tinder2));
console.log(Object.values(tinder2));
console.log(Object.entries(tinder2));

console.log(tinder2.hasOwnProperty("isLoggedIn"));
