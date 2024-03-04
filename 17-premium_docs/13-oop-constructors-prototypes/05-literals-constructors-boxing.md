# Literals vs Constructors & Boxing

We somewhat went over this already, but I want to talk a little bit about literals vs constructor functions when it comes to all types of data including `strings`, `numbers`, etc. We have constructors for strings, numbers, booleans, arrays, and objects. We can use either literals or constructor functions to create these. Literals are obviously shorter and more common and easier but let's take a look at both syntax and see what the differences and similarities are.

```js
const strLit = 'Hello';
const strObject = new String('Hello');

console.log(strLit, typeof strLit); // Hello string
console.log(strObj, typeof strObj); // String {"Hello"} object
```

We see that `typeof` returns `string` for the literal and `object` for the object.

## Boxing

When we use a method such as `toUpperCase()` on a string literal, JavaScript creates a wrapper object around it. This is called `boxing`. So essentially, it is the same as calling `toUpperCase()` on a string object.

```js
console.log(strLit.toUpperCase());
// Same as
console.log(strObj.toUpperCase());
```

## `valueOf` property & Unboxing

We can use the `valueOf` method to get the primitive value of the string object. This is called `unboxing` because we are unboxing the object and getting the primitive value.

```js
console.log(strObj.valueOf()); // Hello
```

## `constructor` Property

Because of boxing, there is still a constructor property on the string literal. We can use the `constructor` property to see what the constructor function is for the string literal and object.

```js
console.log(strLit.constructor); // [Function: String]
console.log(strObj.constructor); // [Function: String]
```

## `instanceof` Operator

We can also use the `instanceof` operator to check if an object is an instance of a constructor function. The literal will return `false` and the object will return `true`.

```js
console.log(strLit instanceof String); // false
console.log(strObj instanceof String); // true
```

Let's look at some other type literals vs constructor functions.

```js
const numLit = 20;
const numObj = new Number(20);

const boolLit = true;
const boolObj = new Boolean(true);

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

const funcLit = function (x) {
  return x * x;
};

const funcObj = new Function('x', 'return x * x');

console.log(funcObj(10));

const objLit = { name: 'Jeff' };
const objObj = new Object({ name: 'Jeff' });
```

As you can see, there is even a constructor for objects. When we execute the following code:

```js
const obj = {};
```

JavaScript actually creates an object behind the scenes and then assigns it to the variable `obj`. So the following code is actually the same as the code above.

```js
const obj = new Object();
```

Hopefully this helps you understand the differences between literals and constructor functions. I know it can be confusing at first, but once you get the hang of it, it will be much easier to understand. Also, even if you do not fully understand, that doesn't mean you can't be a great developer. A lot of this stuff is behind the scenes and just stuff you have to learn and practice.
