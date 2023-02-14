
function add(a, b) {
    return a + b;
}

// const add = (a, b) => {
//     return a + b;
// };


//implicit return
const subtract = (a, b) => a - b;


const double = (a) => a * 2;

//returning the object

const createObj = () => ({



    name: 'Double'
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

numbers.forEach(function (n) {
    console.log(n)
});

// Arrow function in a call back
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 6));
// console.log(double(10));