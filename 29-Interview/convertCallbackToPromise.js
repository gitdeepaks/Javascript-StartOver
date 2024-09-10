const asyncFunc = (cb) => {
  setTimeout(() => {
    cb(1);
  }, 3000);
};

const promisifyAsyncFunc = () => {
  return new Promise((res) => {
    asyncFunc((data) => {
      res(data);
    });
  });
};

promisifyAsyncFunc().then((res) => console.log(res));
