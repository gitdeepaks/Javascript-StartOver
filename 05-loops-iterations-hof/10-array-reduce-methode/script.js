const numbers = [1, 2, 3, 4, 5, 6, 78, 9, 10]

const sum = num.reduce(function (accumlator, currentValue) {
    return accumlator + currentValue;

}, 0);

const sum2 = numbers.reduce((accumlator, currentValue) => accumlator + currentValue, 10)


console.log(sum)
console.log(sum2)

//using for loop

const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }

    return acc;
}


console.log(sum3())


const cart = [
    { id: 1, name: 'Prod 1', price: 130 },
    { id: 2, name: 'Prod 2', price: 160 },
    { id: 3, name: 'Prod 3', price: 180 },
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price;
}, 0)

console.log(total)


