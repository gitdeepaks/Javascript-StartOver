var obj = {
  name: "Deepak",
};

function sayHello(age, profession) {
  return "Hello" + this.name + "is" + age + "is a" + profession;
}

console.log(sayHello.call(obj, 24, "Developer"));

var status = "😊";

setTimeout(() => {
  const status = "🚀";

  const data = {
    status: "☕️",
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 500);

// append an array to another array

const arr = ["a", "b"];

const element = [0, 1, 2];

// arr.push(5);
arr.push.apply(arr, element);

// console.log(arr);

const minMax = [5, 2, 56, 78, 1];

console.log(Math.max.apply(null, minMax));
