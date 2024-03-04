# Function Basics

Functions are a way to group code together. They make code more readable and easier to understand. Let's look at some of the basics.

## Creating a function

Creating or defining a function is simple. We use the function keyword, followed by the name of the function, followed by parentheses. Then we create the function body wrapped in curly braces.

```js
function sayHello() {
  console.log('Hello World');
}
```

When we create a function, we don't add a semi-colon at the end of the curly braces.

Just creating the function does not execute any code. We need to "call" or "invoke" the function to execute the code within it.

```js
sayHello(); // Hello World
```

### Function Parameters

You can define parameters for functions to allow the user to input specific data when calling the function.

```js
function add(x, y) {
  console.log(x + y);
}

add(5, 5); // 10
```

#### Parameters vs. Arguments

- Parameters are the names of the variables that are used to pass data into a function.
- Arguments are the values that are passed into the function

### Returning a value

The function that we created just console logs a message. In the real world, you'll usually want to return a value from a function.

Anything that you put after the return will not get executed because you are essentially ending the function and returning to the parent scope.

```JavaScript
function subtract(x, y) {
  return x - y;

  // This code will not execute
  console.log('After the return');
}

// This will not output anything
subtract(10, 5);

// You could log the value like This
console.log(subtract(10, 5)); // 5

// Usually we do something with the return value, like store it in a variable

const result = subtract(10, 5);
```

You can also return without a value. This is useful for functions that don't return anything. You may have a function to update or delete some data on a server, but don't have a need to return anything.
