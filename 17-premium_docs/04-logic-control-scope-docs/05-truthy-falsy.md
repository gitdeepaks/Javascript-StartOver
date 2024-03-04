# Truthy & Falsy Values

So we looked at some control structures for evaluating some basic expressions such as if something is greater than a value. We can also pass in a single value.

```js
const email = 'test@test.com';

if (email) {
  console.log('You passed in an email');
} else {
  console.log('Please enter email');
}
```

This will return true because when you put something in an if statement, it is coerced into a boolean. A string with something in it is what we call a **truthy** value.

### Converting a value to a boolean

We can test truthy and falsy values by converting them to a boolean using the `Boolean` function. We saw this a while back when we looked at data types.

```js
console.log(Boolean(name)); // true
```

We can also use the **!!** (double bang) to convert to a boolean.

```js
console.log(!!name); // true
```

Let's look at the values in JavaScript that are considered **falsy**.

### falsy Values

- false (obviously)
- 0 (also -0 and BigInt 0n)
- "" (empty string)
- null
- undefined
- NaN

If we test any of these in an if statement, it will evaluate to `false`.

```js
const x = 0;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}
```

We talked about type conversion a while ago. If we convert any of these values to a Boolean, they will result in `false`.

```js
console.log(Boolean(0)); // false
```

### Truthy Values

Everything that is not falsy will evaluate to `true`, however, Some of these may surprise you.

- Everything else that is not falsy
- true (obviously)
- '0' (string with 0)
- 'false' (string with false)
- ' ' (space in a string)
- [] (empty array)
- {} (empty object)
- function() {} (empty function)

If we test any of these in an if statement, it will evaluate to `true`.

```js
const x = '0';

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}
```

### Truthy & Falsy Caveats
Let's say we have a variable called `children` that refers to the number of children someone has and we want to check it.

```js
let children = 2;

if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter the number of children you have');
}

// You have 2 children
```

Now that you understand that 0 is falsy, you will understand why the following will not work correctly.

```js
let children = 0;

if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter the number of children you have');
}

// Please enter the number of children you have
```

In this case, we want 0 to be a valid value for children, but it is falsy, so the `else` block will run and say it is not defined.

This is something that you have to be aware of. There are multiple solutions to this problem. We could check to see if the variable is not `undefined` or `null`.

```js
if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter the number of children you have');
}
```

You probably want the value to be a number. So you could check if the value is NaN (Not a Number) with the `isNaN()` function.

```js
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter the number of children you have');
}
```

### Checking For Empty Arrays and Objects

Since empty arrays and objects are truthy, we can not simply check for the variable that holds them.

Check for an empty array:

```js
const arr = [];

if (arr.length === 0) {
  console.log('The array is empty');
}
```

Check for an empty object:

```js
const obj = {};

if (Object.keys(obj).length === 0) {
  console.log('The object is empty');
}
```

### Loose Equality Comparison

As I stated earlier in the course, I prefer to use `===` unless there is a specific reason to use `==`. Using double equals (==) can cause some unexpected behavior. Let's take a look at some of the weirdness that can happen when using `==`.

`false`, zero and empty strings are equivalent (when using ==)

```JavaScript
false == 0; // true
false == ''; // true
0 == ''; // true
```
