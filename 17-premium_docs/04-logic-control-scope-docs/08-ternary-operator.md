# Ternary operator

In addition to `if-else` and `switch`, there is a third way to write conditional logic. This is called the `ternary` operator. It is basically a shorthand, one line `if-else` statement. The actual operator is just a question mark. Let's take a look at the syntax

```JavaScript
condition ? true : false;
```

First, we have the condition to be evaluated as a boolean. Then we have a `?`, which is the **ternary operator** and after that is the expression that we want to happen if the condition is `true`. The `:` is the else. So the expression after that will execute if the condition is `false`.

Let's look at a simple if-else statement:

```JavaScript
const age = 19;

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote!');
}

// You can vote!
```

We can do the same thing using the ternary operator:

```JavaScript
age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');

// You can vote!
```

## Assigning result to a variable

In many cases, we want to store the result of the ternary operator in a variable.

```JavaScript
const canVote = age >= 18 ? 'You can vote!' : 'You can not vote!';

console.log(canVote); // You can vote!
```

This is much more compact than this:

```JavaScript
let canVote;

if (age >= 18) {
  canVote = 'You can vote!';
} else {
  canVote = 'You can not vote!';
}

console.log(canVote); // You can vote!
```

## Multiple statements

In most cases, you will just have a single expression in the true/false part of the ternary operator, however you can have Multiple statements by using a comma.

```JavaScript
const auth = true;

const redirect = auth
  ? (alert('Welcome To The Dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);
```

In the case above, it will alert and then return the last value in the ternary.

## Multiple Ternary Operators

We can also have multiple ternary operators and conditions. Much like an else-if.

```JavaScript
const canDrink =
  age >= 21
    ? 'You can drink!'
    : age >= 18
    ? 'You can have 1 beer'
    : 'You can not drink';

console.log(canDrink);
```

## Using `&&` as a shorthand

If your else(semi-colon) in a ternary is going to be null or you don't need an else, you can use the `&&` operator instead. Here is an example:

```JavaScript
auth ? console.log('Welcome to the dashboard') : null;
```

We could just do:

```JavaScript
auth && console.log('Welcome to the dashboard');
```

This is the same as:

```JavaScript
if (auth) {
console.log('Welcome to the dashboard');
}
```

Using the `&&` operator as a shorthand is a popular thing to do in React templates. Many times, you will see something like:

```JavaScript
{!loading && (
  <Fragment>Some UI</Fragment>
)}
```

Which is saying if done loading, then load the JSX fragment.
