function out(x) {
  return function (y) {
    return x + y;
  };
}
// explain in code

const getValue = () => {
  let score = 10;
  return () => ++score; //value increased then returned
};

const value = getValue();
const chai = getValue();
console.log(value()); //11-storing function reference
console.log(value()); //12 - storing function reference
console.log(chai());

const getValue1 = () => {
  let score = 10;
  return () => score++; //value  returned then increased
};
const val = getValue1();

console.log(val()); // function ka reference
console.log(val()); // function ka reference

function loadBalance() {
  let userBalance = 100;

  function addBalance() {
    let newValue = ++userBalance;

    return newValue;
  }
  return { addBalance };
}

const balance = loadBalance();
console.log(balance.addBalance());
console.log(balance.addBalance());
console.log(balance.addBalance());

console.log(loadBalance().addBalance());
