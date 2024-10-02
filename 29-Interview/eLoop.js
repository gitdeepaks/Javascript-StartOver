console.log("First");
setTimeout(() => {
  console.log("Second");
}, 0);

Promise.resolve().then(() => {
  console.log("Third");
});

console.log("Fourth");
