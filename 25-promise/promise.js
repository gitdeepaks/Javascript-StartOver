// States in Promises Pending, Fulfilled, Rejected

// Creating a Promise

const promiseOne = new Promise((resolve, reject) => {
  // Do an async tasks
  // DB calls , cryptography, network

  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Ascunc 2  resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "DeepakTea", email: "deepak@rmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = true;

    !err
      ? resolve({ username: "Deepak", pw: "123" })
      : reject("ERROR: Something went wrong");
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Executed the promisses four"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = true;

    !err
      ? resolve({ username: "Javascript", pw: "123" })
      : reject("ERROR: JS went wrong");
  }, 1000);
});

const conSumePromiseFive = async () => {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

conSumePromiseFive();

// const getAllUsers = async () => {
//   try {
//     const res = await fetch("https://api.github.com/users/deepaksankhyan");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error, "Error");
//   }
// };

fetch("https://api.github.com/users/deepaksankhyan")
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
