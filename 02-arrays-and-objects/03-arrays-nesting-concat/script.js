
let x;
const fruits = ['apple', 'peer', 'orange']


const berries = ['strawberry', 'blueberrry', 'resberry']


// fruits.push(berries)

// x = fruits[3]

const allFruits = [fruits, berries]

x = allFruits[1][0]

x = fruits.concat(berries)

//spread opearators

x = [...fruits, ...berries]; //spread opeartors

//Flatten Array 
const arr = [1, 2, [3, 4], 5, [6, 7], 8]

x = arr.flat();

//Static methods

x = Array.isArray(fruits)

x = Array.from('12345')

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c)

console.log(x);