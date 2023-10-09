// creat a promise
const p = new Promise((resolve, reject) => {
  const numberOfApples = 20;

  if (numberOfApples > 10) {
    resolve("Success"); //fulfilled
  } else {
    reject("No have enough Apples"); //rejected or failed
  }
});

// consume a promise with .then() & .catch()

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});

// consume a promise with async await & try catch
checkRes = async () => {
  try {
    const val = await p;
    console.log(val);
  } catch (reason) {
    console.log(reason);
  }
};
checkRes();

// why and when to use promises
// feth API

const pf = fetch("https://reqres.in/api/users");

pf.then((res) => {
  console.log(res);

  if (!res.ok) {
    new Promise.reject("4xx or 5xx error");
    return;
  } else {
    return res.json();
  }
})
  .then((data) => {
    console.log(data.data[7].email);
  })
  .catch((err) => {
    console.log(err);
  });
