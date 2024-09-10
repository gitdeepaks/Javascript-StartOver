const users = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Jonk" },
  { id: 2, name: "Jacky" },
];

const userStatus = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true },
];

const getUsers = () => {
  return new Promise((res) => {
    res(users);
  });
};

const getUserStatus = () => {
  return new Promise((res) => {
    res(userStatus);
  });
};

// getUsers().then((user) => {
//   getUserStatus().then((userStatus) => {
//     const mappedUsers = user.map((user) => {
//       const isActive = userStatus.find(
//         (userStatus) => userStatus.id === user.id
//       ).isActive;
//       return { ...user, isActive };
//     });
//     console.log(`mappedUsers ${mappedUsers}`);
//   });
// });

const mappedUsers = () => {};
Promise.all([getUsers(), getUserStatus()]).then(([user, userStatus]) => {
  const mappedUsers = user.map((user) => {
    const isActive = userStatus.find(
      (userStatus) => userStatus.id === user.id
    ).isActive;
    return { ...user, isActive };
  });
  console.log(`mappedUsers ${mappedUsers}`);
});
