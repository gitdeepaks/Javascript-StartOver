// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an Sync Task
//   // DB Calls, Crypto Task, network
//  
//   setTimeout(() => {
//     console.log("Async tsk completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise(function (res, rej) {
//   setTimeout(function () {
//     console.log("Async Task 2");
//     res();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 Resolved");
// });

// const promiseThree = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res({ username: "Tea", email: "tea@tea.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let err = true;
//     if (!err) {
//       resolve({ user: "Deepak", pw: "12" });
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// const userName = promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.user;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(() => console.log("Finnaly Promise is either resolved or rejected"));

// const promiseFive = new Promise((res, rej) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       res({ user: "JavaScript", password: "123" });
//     } else {
//       rej("Error: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const resp = await promiseFive;
//     console.log(resp);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error, "Error");
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
