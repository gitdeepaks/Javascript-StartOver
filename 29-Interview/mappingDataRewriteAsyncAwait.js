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

const getMappedUsers = async () => {
  try {
    const users = await getUsers();

    const userStatuses = await getUserStatus();

    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find(
        (userStatus) => userStatus.id === user.id
      ).isActive;

      return { ...user, isActive };
    });
    console.log(`mappedUsers ${mappedUsers}`);
  } catch (error) {
    console.log(`error ${error}`);
  }
};

getMappedUsers();
