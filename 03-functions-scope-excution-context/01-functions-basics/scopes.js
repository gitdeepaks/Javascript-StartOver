// var c = 300; //GLobal scope

let a = 200;
if (true) {
  // Block scope
  let a = 10;
  const b = 20;
  //   console.log("Inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "deepak";

  function two() {
    const website = "deepaksankhyan.com";
    // console.log(userName);
  }
  //   console.log(website);

  two();
}

// one();

if (true) {
  const usename = "deepak";

  if (usename === "deepak") {
    const website = " mywebs";
    // console.log(usename + website);
  }
  //   console.log(website);
}
// console.log(usename);

// ************** interesting **************
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
