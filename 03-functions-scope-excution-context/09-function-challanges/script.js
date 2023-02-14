function getCelsius(f) {
    const celsius = (f - 32) * 5 / 9 //Conventional function
    return celsius
}

const getcel = (f) => ((f - 32) * 5 / 9); //Arrow Function


console.log(getCelsius(60))
console.log(getcel(60))


//challange 2

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
}


console.log(minMax([11, -2, 3, 42, 5, 67]))


    //challange 3

    ((length, width) => {
        const area = length * width;

        const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

        console.log(output);
    })(10, 5);


// console.log(output)


