const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// const eveneNUmbers = numbers.filter(function (n) {
//     return n % 2 === 0;
// })

//short method

const evene = numbers.filter((n) => n % 2 === 0);


console.log(eveneNUmbers);


//for each

let evenNum;

numbers.forEach((n) => {
    if (n % 2 === 0)
        evenNum.push(n);
})

console.log(evenNum)


