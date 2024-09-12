//

function pause(mills) {
  return new Promise(function p(resolve) {
    setTimeout(function s(params) {
      resolve("resolve");
    }, mills);
  });
}

const start = Date.now();

console.log("Starts");

pause(1000).then((res) => {
  const end = Date.now();
  const secs = (end - start) / 1000;
  console.log(`${res} : ${secs}`);
});
