const marverHeros = ["thor", "ironman", "spiderman"];

const dcHeros = ["superman", "flash", "batman"];

// marverHeros.push(dcHeros);

// console.log(marverHeros[3][1]);

// const allHeros = marverHeros.concat(dcHeros);
// console.log(allHeros);

const all_new_Heros = [...marverHeros, ...dcHeros];
// console.log(all_new_Heros);

const anothherArrEx = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_arr = anothherArrEx.flat(Infinity);

console.log(real_another_arr);

console.log(Array.isArray("Deepak"));
console.log(Array.from({ name: "deepak " }));

let scope1 = 100;
let scope2 = 200;
let scope3 = 300;

console.log(Array.of(scope1, scope2, scope3));
