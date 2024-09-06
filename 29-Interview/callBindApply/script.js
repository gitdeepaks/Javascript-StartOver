var obj = {
  name: "Deepak",
};

function sayHello(age, profession) {
  return "Hello" + this.name + "is" + age + "is a" + profession;
}

// console.log(sayHello.call(obj, 24, "Developer"));

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
