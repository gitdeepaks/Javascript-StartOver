const strLi = 'Hello';

const strObj = new String('Hello');


console.log(strLi, typeof strLi)

console.log(strObj, typeof strObj)

//Boxing
console.log(strLi.toUpperCase());
console.log(strLi[0]);



//Unboxing
strObj.valueOf()
