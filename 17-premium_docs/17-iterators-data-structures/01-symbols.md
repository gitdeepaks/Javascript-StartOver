# Symbols

It was a long time ago that we talked about the primitive types of JavaScript, such as strings, numbers and booleans, however, we did not really address Symbols, which are also a primitive data type. They are a bit harder to understand than the others, so I wanted to wait a while before we talked about them.

Symbols are used to create unique identifiers for objects. They are created using the `Symbol()` function, which can be called with an optional string as its parameter. This string is used to describe the symbol, and is useful when debugging code. The value that you pass in is strictly for identification. Let's create a couple symbols.

```js
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym1); // Symbol(foo)
console.log(sym2); // Symbol(bar)
console.log(typeof sym1); // symbol
```

It is important to remember that when we create a symbol, we do not use the `new` keyword. It is not a constructor function. This prevents developers from creating an explicit Symbol wrapper object instead of a new Symbol value. We can do that with strings, numbers and booleans, but not with symbols.

We can get the read-only `description` property of a Symbol, but keep in mind, this is just an identifier, it is not a value.

```js
console.log(Symbol('sym1').description); // sym1
console.log(Symbol().description); // undefined
```

## Symbols are unique

Symbols are unique. So if we do the following, we get false.

```js
console.log(Symbol('sym1') === Symbol('sym1'));
```

This is because the `Symbol()` function creates a new symbol each time it is called. This is why we can pass in a string to the function. It is used to identify the symbol, but it is not used to create the symbol.

One use case for Symbols is when we want to create objects that have private properties. We can use Symbols to create private properties that are not accessible outside of the object. Let's create an object that has a private property.

```js
const user = {
  [Symbol('id')]: 1,
  name: 'John',
  email: 'john@gmail.com',
};

user.id = '123';

console.log(user); // { name: 'John', email: 'john@gmail.com', id: '123', [Symbol(id)]: 1 }
```

Changing the id does not change the symbol value, it just adds a new property to the object.

This will not work either

```js
console.log(user[Symbol('id')]); // undefined
```

So symbols are a good way to hide properties from the outside world. If you're creating a library or something like that.

## Non-Enumerable

We can also see that the symbol is not enumerable. It is not returned when we use `Object.keys()` or `Object.values()`.

```js
console.log(Object.keys(user)); // [ 'name', 'email', 'id' ]
console.log(Object.values(user)); // [ 'John', 'john@gmail.com', '123' ]
```

Since Symbols are not enumerable, we cannot use `for...in` to iterate over them.

```js
for (let key in user) {
  console.log(key);
}
```

## getOwnPropertySymbols

We can use `Object.getOwnPropertySymbols()` to get an array of all the symbols in an object.

```js
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]
```

## Well-known Symbols

There are a few well-known symbols that are used by JavaScript. These are used to create special objects that have special properties. For example, the `Symbol.iterator` symbol is used to create objects that are iterable. We will talk about this in a later chapter.

## Symbol.for()

There is another way to create symbols. We can use the `Symbol.for()` function. This function takes a string as its parameter. It will search for an existing symbol that has the same string as its description. If it finds one, it will return that symbol. If it does not find one, it will create a new symbol with the string as its description.

The Symbols are stored in a global symbol registry. So it first checks the registry before creating it. Having it in a global registry means that if we create a symbol using `Symbol.for()`, we can access it from anywhere in our code.

```js
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4); // true
```

`sym3` and `sym4` are the same symbol. They are both referencing the same symbol in the global symbol registry.

## Symbol.keyFor()

We can use the `Symbol.keyFor()` function to get the description of a symbol. It takes a symbol as its parameter. It will return the description of the symbol if it is in the global symbol registry. If it is not in the global symbol registry, it will return `undefined`.

```js
console.log(Symbol.keyFor(sym3)); // foo
```

If we use `Symbol()` to create a symbol, it will not be in the global symbol registry, so it will return `undefined`.

```js
console.log(Symbol.keyFor(sym1)); // undefined
```

## toString() & valueOf()

These do exactly what you think. They get the Symbol in string form and the primitive value of the Symbol.

```js
// toString() - returns a string representation of a symbol

console.log(sym1.toString()); // Symbol(sym1)
console.log(sym3.toString()); // Symbol(foo)

// valueOf - returns a primitive value of a symbol
console.log(sym1.valueOf()); // Symbol(sym1)
console.log(sym3.valueOf()); // Symbol(foo)
```

## Well-Known Symbols

There are some well-known symbols, also called 'built-in symbols' that are used by JavaScript engines to provide certain language features and are shared by all built-in objects. For example, `Symbol.iterator` is utilized to iterate over items in arrays, strings, or even to define your own iterator function. We're going to go over iterators very soon and we'll look more into this, but in all honesty, you probably won't use these all too much, but I did want to mention them.

You can actually see all of the built-in symbols by running the following code:

```js
console.log(Object.getOwnPropertyNames(Symbol));

//  ['length', 'name', 'prototype', 'for', 'keyFor', 'asyncIterator', 'hasInstance', 'isConcatSpreadable', 'iterator', 'match', 'matchAll', 'replace', 'search', 'species', 'split', 'toPrimitive', 'toStringTag', 'unscopables']
```

If you want to look more into these, you can, but I would say they're beyond the scope of this course because I only want to focus on things that you'll use on a frequent basis.
