const debounce = (fn, timeOut = 300) => {
  let timer;
  return (...args) => {
    console.log("inner function", args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this.args);
    }, timeOut);
  };
};

const saveInput = (name) => {
  console.log("name", name);
};

const processChange = debounce(saveInput, 2000);

processChange("foo");
processChange("foo");
processChange("foo");
processChange("foo");
processChange("foo");
