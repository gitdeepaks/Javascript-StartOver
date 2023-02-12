//Array challange 

//chhange 1

const arr = [1, 2, 3, 4, 5]

arr.reverse()
arr.push(0)
arr.unshift(6)

console.log(arr)


// challange 2

const arr1 = [1, 2, 3, 4, 5]

const arr2 = [5, 6, 7, 8, 9, 10]

//solution

// const arr3 = arr1.slice(0, 4).concat(arr2);

const arr4 = [...arr1, ...arr2];

arr4.splice(4, 1);
console.log(arr4)