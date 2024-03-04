# If Statements

In any programming language, there will be times where you need to execute certain blocks of code and commands if a certain condition is true or false. Without the ability to have this type of conditional logic, programming wouldn't really be possible.

The structure of an `if-statement` is as follows:

```js
if (condition) {
  // code to execute if condition is true
}
```

The code block will only execute if the condition is true. If the condition is false, the code block will not execute.

The condition is a boolean expression that evaluates to true or false. In fact, we could put in true or false directly

```js
if (true) {
  // code to execute if condition is true
}

if (false) {
  // code to execute if condition is false
}
```

There are something called truthy and falsy values in JavaScript. I will get more into this in a bit.

## Comparison Operators

A few sections back, we looked at the comparison operators. These operators are used to compare values and return a boolean value.

<img src="images/comparison-operators.png" alt="" style="width:500px;"/>

We could use these operators to compare values.

```js
const x = 10;

if (x > 5) {
  console.log(`${x} is greater than 5`);
}

if (x === 10) {
  console.log(`${x} is equal to 10`);
}
```

## if-else Statements

Instead of doing nothing if the condition is false, we can execute different code blocks depending on the condition.

```js
const x = 10;

if (x > 5) {
  console.log(`${x} is greater than 5`);
} else {
  console.log(`${x} is less than or equal to 5`);
}
```

## Block Scope

We talked about this earlier, but remember that variables defined with `let` or `const` inside of a block are not accessible outside of that block. `var` variables are, but I would not suggest using them.

```js
const x = 10;

if (x > 5) {
  const y = 20;
  console.log(`${x} is greater than 5`);
  console.log(`${y} is greater than 5`);
}

console.log(y); // ReferenceError: y is not defined
```

## Shorthand If

If the code within your if and else is a single statement and not a block of code, you omit the parentheses. It is usually not recommended and you don't see it that often, but you can do it.

```js
if (x > 5) console.log(`${x} is greater than 5`);

if (x > 5) console.log(`${x} is greater than 5`);
else console.log(`${x} is less than 5`);
```

You actually can have multiple statements, but they need to be separated with a comma.

```js
if (x > 5)
  console.log(`${x} is greater than 5`),
    console.log('another line'),
    console.log(`and another`);
```

I would not personally do this.
