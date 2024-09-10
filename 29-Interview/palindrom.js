const isPal = (str) => {
  return str === str.split("").reverse().join();
};

isPal("full");
