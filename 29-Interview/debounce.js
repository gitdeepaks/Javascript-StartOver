// const throttle = (fn, timeOut = 300) => {
//   let isWaiting = false;
//   return (...args) => {
//     // console.log("inner function", args);
//     if (!isWaiting) {
//       fn.apply(args);
//       isWaiting = true;
//       setTimeout(() => {
//         isWaiting = false;
//       }, timeOut);
//     }
//   };
// };

// const saveInput = (name) => {
//   console.log("name", name);
// };

// const processChange = throttle(saveInput, 2000);

// processChange("foo");
// setTimeout(() => {
//   processChange("foo");
// }, 1000);
// processChange("foo");
// processChange("foo");
// processChange("foo");

const debouncePolyfill = (cb, d) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

// throttle polyfill

const throttlePolyfill = (cb, d) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};
