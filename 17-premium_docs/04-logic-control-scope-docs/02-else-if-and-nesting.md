# Else-if and Nesting

There may be cases where you want to execute different code blocks depending on multiple conditions. In this case, you can use an `else if` statement.

Let's make this a bit more interesting and have certain logs during certain hours.

```js
const d = new Date();
const hour = d.getHours();
```

```js
if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Night!');
}
```

## Nesting

There may be cases where you need to have `if statements` inside of `if statements`. In this case, you can use a `nested` `if statement`.

```js
if (hour < 12) {
  console.log('Good Morning!');

  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Night!');

  if (hour >= 20) {
    console.log('zzzzzzzzzzz!');
  }
}
```

## Multiple conditions

We can test for multiple conditions in the same if statement by using the `&&` (AND) and the `||` (OR) logical operators.

```js
if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}
```
