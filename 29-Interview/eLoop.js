console.log("First");
setTimeout(() => {
  console.log("Second");
}, 1000);

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log("third");
  }, 500);
});

console.log("Fourth");
