const asyncFunc11 = (cb) => {
  setTimeout(() => {
    cb(11);
  }, 3000);
};
const asyncFunc12 = (cb) => {
  setTimeout(() => {
    cb(1);
  }, 3000);
};
const asyncFunc13 = (cb) => {
  setTimeout(() => {
    cb(12);
  }, 2000);
};
const asyncFunc14 = (cb) => {
  setTimeout(() => {
    cb(13);
  }, 1000);
};

asyncParallel = (asyncFuncs, callback) => {
  const resArr = new Array(asyncFuncs.length);

  let resCounter = 0;

  asyncFuncs.forEach((asyncFunc, index) => {
    asyncFunc((value) => {
      resArr[index] = value;
      resCounter++;
      if (resCounter >= asyncFuncs.length) {
        callback(resArr);
      }
    });
  });
};

asyncParallel =
  ([asyncFunc11, asyncFunc12, asyncFunc13, asyncFunc14],
  (res) => {
    console.log(res);
  });
