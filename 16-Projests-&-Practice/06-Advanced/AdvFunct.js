// callback function

[1, 2, 3].map(function (n) {});

// methode
const arr = [1, 2, 3];

arr.push(4);

const obj = {
  name: "john",
  hobiies: ["sport", "music"],
  calcAge: function () {
    return 2021 - this.hobbies.length;
  },
};

console.log(obj.calcAge());
// console.log(obj["calcAge"]());

const calcPrice = (sqMeter) => {
  return 10000 + sqMeter;
};

const res = calcPrice(1000);
console.log(res);
