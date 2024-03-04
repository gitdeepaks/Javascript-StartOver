# Immediately Invoked Function Expressions (IIFE)

Usually when we deal with functions, we define them and then when we want to run them, we call/invoke them. There may be times where you want to define a function and run it at the same time. In JavaScript, we can do this with an **immediately invoked function expression**, also called an IIFE (pronounced "Iffy").

## Why Use an IIFE?

There are a few reasons why you may want to use an IIFE. One of the biggest reasons is to avoid **global scope pollution**.

If I have a second JavaScript file loading, whether I created it or it is some 3rd party library, etc and in that file is something like this.

```JavaScript
	const user = 'Brad';
```

and then in my script I don't know about that global variable and I create a variable with the same name, it will break my script. Becaue we are defining two variables in the same scope.

```JavaScript
	const user = 'John'; // Results in error
```

To fix this, I could create an IIFE

## IIFE Syntax

The syntax for an IIFE is a little strange. You have to wrap the function keyword and the function body in parentheses. You then have another set of parentheses to indicate that it is an invocation, just like you would with a regular function call.

```JavaScript
(function() {
  const user = 'John';
  console.log(user); // John
})();

// Outside of IIFE
console.log(user); // Brad
```

When it comes to global scope pollution, if you have a small script with little to no dependencies, this most likely won't be a problem. If you have a larger project, especially if multiple people are working on it, then you may want to use an IIFE because you don't know exactly which variables and functions have been defined.

## Adding Parameters

You can also create an IIFE that takes parameters.

```JavaScript
(function (name) {
  console.log('Hello ' + name);
})('John');

// Hello John
```

## Using Arrow Functions

We can also use the arrow function syntax to create an IIFE.

```JavaScript
(() => {
  console.log('Hello from the IIFE!');
})();
```

## Named IIFE

The examples above are all unnamed functions. We can give IIFEs a name, however, the function name would only be available from within the IIFE. So we could use something called **recursion**, which is when a function calls itself. The function would not be available outside the IIFE. I would not suggest running the function within itself, because it will cause an infinite loop.

```JavaScript
(function hello() {
  console.log('Hello from the IIFE!');

  hello() // Causes infinite loop
})();

hello(); // Error: hello is not defined
```

IFFEs are also used in specific design patterns such as the **revealing module pattern**, which I will talk about later.
