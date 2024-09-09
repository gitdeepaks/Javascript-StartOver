const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "Jill", isActive: true },
  { id: 3, name: "John", isActive: false },
];

// const isNameExist = (name, users) => {
//   let exist = false;

//   for (let index = 0; index < users.length; index++) {
//     if (users[index].name === name) {
//       exist = true;
//     }
//   }
//   return exist;
// };
// const isName = (name, users) => users.some((user) => user.name === name);

const isName = (name, users) => {
  const index = users.findIndex((user) => user.name === name);
  return index >= 0;
};

// console.log(isName);
