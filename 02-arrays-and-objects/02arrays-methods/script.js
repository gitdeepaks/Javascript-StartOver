let x;

const arr = [55, 65, 73, 76, 88];

// arr.push(100)
// arr.pop()
// arr.unshift(99)
// arr.shift()

// arr.reverse()

// x = arr.includes(55)
x = arr.indexOf(55,)

x = arr.slice(1, 4);
// x = arr.splice(1, 4);
// x = arr.splice(3, 1)

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x)