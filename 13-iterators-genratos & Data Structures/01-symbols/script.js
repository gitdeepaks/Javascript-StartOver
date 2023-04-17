const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym)
console.log(sym.description)
console.log(sym1.description)
console.log(sym2.description)

console.log(Symbol('sym') === Symbol('sym'))


const user = {
    [Symbol('id')]: 1,
    name: 'John Doe',
    email: 'john@doe.com',
};

console.log(user[Symbol('id')])
//Symbol are NOT enumerable

// console.log(Obeject.keys(user));
// console.log(Obeject.values(user));


for (let key in user) {
    console.log(key)
}
//getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user))


//Symbol.for()

const sym3 = Symbol.for('foo')
const sym4 = Symbol.for('foo')


console.log(sym3 === sym4)

console.log(Symbol.keyFor(sym3))
console.log(Symbol.keyFor(sym1))


console.log(sym1.valueOf())
console.log(sym3.valueOf())
console.log(sym.valueOf())

console.log(Object.getOwnPropertyNames(Symbol))