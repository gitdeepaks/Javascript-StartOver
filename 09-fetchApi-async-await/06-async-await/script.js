const promimse = new Promise((resolve, reject) => {
  setTimeout(() =>

    resolve({ name: 'prom', age: 20 }), 1000)
}
);

promimse.then((data) = console.log(data));