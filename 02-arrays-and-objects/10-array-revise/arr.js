const myArr = [1, 2, 3, 4, 5, 6, 7];

const myHeros = ["JuniorG", "Shaktimaan"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(myArr[1]);
// console.log(myArr2);

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(4));

const newArr = myArr.join();
console.log(myArr);
// console.log(typeof newArr);

// slice splice

console.log("A", myArr);

const nArr1 = myArr.slice(1, 3);

console.log(nArr1);
console.log("B", myArr);

const nArr2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(nArr2);
