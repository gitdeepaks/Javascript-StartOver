const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data fetch");
  }, 1000);
})
  .then((result) => console.log(result))
  .catch((e) => console.error(errors));
