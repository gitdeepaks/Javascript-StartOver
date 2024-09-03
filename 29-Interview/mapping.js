const users = [
  {
    id: 1,
    name: "Kaggle",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "Kaggle2",
    isActive: true,
    age: 23,
  },
  {
    id: 3,
    name: "Kaggle3",
    isActive: false,
    age: 19,
  },
];
// const name = [];
// for (let index = 0; index < users.length; index++) {
//   name.push(users[index].name);
// }
// console.log(name);

// const name = users.map((user) => user.name);
// console.log(name);

const names = users.filter((user) => user.isActive).map((user) => user.name);
// console.log(names);

const namess = users.filter((user) => !user.isActive.map((user) => user.name));
console.log(namess);
