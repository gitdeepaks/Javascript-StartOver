const { resolve } = require("bun");

const obj = {
  name: "Bob",
  getName() {
    return this.name;
  },
  getNameArrow: () => {
    // return this.name; // lexically bound in a arrow functions
  },
};

console.log(obj.getName());
console.log(obj.getNameArrow());

// Promise

function fetchData(url) {
  return new Promise((res, rej) => {
    //simultanious api calls

    setTimeout(() => {
      if (Math.random() > 0.5) {
        res(`Data is ${url}`);
      } else {
        rej(`Failed to fetch ${url}`);
      }
    }, 1000);
  });
}

fetchData("https://api.ex.com/data")
  .then((result) => {
    console.log(result);
    return fetchData("https://api.ex.com/data");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([
  "https://api.ex.com/data1",
  "https://api.ex.com/data2",
  "https://api.ex.com/dat3",
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
