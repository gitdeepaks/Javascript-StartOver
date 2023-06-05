const array2 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4
const initialValue = 3;
const suWithInitia = array2.reduce((acc, curr) => acc + curr, initialValue);

console.log(suWithInitia);
