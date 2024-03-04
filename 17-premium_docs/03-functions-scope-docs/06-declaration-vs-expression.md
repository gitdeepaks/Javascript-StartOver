# Function Declaration vs Function Expression

Up to this point, we know how to declare a function and call or invoke it. There is another way that we can create functions and that is with a function expression. Let's first declare a function just like we've been doing.

```js
function addDollarSign(value) {
  return '$' + value;
}

addDollarSign('10'); // '$10'
```

A function expression is when we assign a function to a variable.

```js
const addPlusSign = function (value) {
  return '+' + value;
};

addPlusSign('10'); // '$10'
```

Notice that we invoke them the same exact way, but we define them differently. The expression is just a variable assigned to a function. Semi-colons are optional in JS, for the most part, but if you are using them, you would put one at the end of the function expression, because again, we are assigning a variable.

## Hoisting

I am not going to explain the ins and outs of hoisting here, I will do that soon when we get into something called `execution context`, but in very simple terms, hoisting is the process of moving all of the function and variable **declarations** to the top of the current scope. before the code is run.

I do want to mention that both functions and variables/function expressions are hoisted, but only function declarations are available before the code is run.

Let's try and access the `addDollarSign()` function **before** it is defined.

```js
const money = addDollarSign('10'); // '$10'

function addDollarSign(value) {
  return '$' + value;
}
```

This still works, however, if we try this with a function expression, it will not work

```js
addPlusSign('10'); // Cannot access 'addPlusSign' before initialization

const addPlusSign = function (value) {
  return '+' + value;
};
```

I will get more into hoisting later, but for now, just know that you can define a function declaration and a function expression. Which one to use really comes down to preference. It may seem that declarations are better because of the way they're hoisted, but in reality, it's not good practice to use functions before they are defined. Using expressions actually makes your code less prone to errors in my own opinion.
