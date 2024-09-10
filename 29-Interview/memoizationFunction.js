const memoizeAdd = () => {
  let cache = {};

  return (val) => {
    if (val in cache) {
      console.log(`fething from cache`);
      return cache[val];
    } else {
      console.log("res calculating");
      const res = val + 10;
      cache[val] = res;
      return res;
    }
  };
};
const newAdd = memoizeAdd();

console.log(newAdd(9));
console.log(newAdd(9));
