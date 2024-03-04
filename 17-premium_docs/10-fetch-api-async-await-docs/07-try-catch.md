# Try...Catch

A try...catch statement is used to handle errors in JavaScript. It is a syntax that allows you to write code that will run if an error occurs, and code that will run if no error occurs. The reason that I am choosing to cover this now is because it is how we usually handle errors with Async & Await. With the `.then()` syntax, we can use the `.catch()` method, which you could use with Async/Await if you want, but usually to handle errors. With Async & Await, we use a try...catch statement. I will get into using it with Async & Await in the next lesson.

Let's start off by just logging a variable that does not exist:

```js
console.log(x);
```

If we run this code, we will get an error in the console:

```bash
Uncaught ReferenceError: x is not defined
```

Notice how it says `uncaught`? Let's wrap this code in a try...catch statement:

The basic syntax is as follows:

```js
try {
  // Try to execute this code
} catch (error) {
  // If an error occurs, execute this code
}
```

Let's add the console.log and also log any errors:

```js
try {
  console.log(x);
} catch (error) {
  console.log('Error:', error);
}
```

Now, if we run this code, we will see the error in the console:

```bash
Error: ReferenceError: x is not defined
```

So we still get the same message, but it does not say `uncaught`. This is because we are handling the error.

## When To Use Try...Catch

There is no reason to fill your code with try...catch statements. You should use a try...catch statement when you are doing something that may result in an error and you plan on handling that error. For example, if you are making an API request and you are not sure if the request will succeed, you can use a try...catch statement to handle the error if it occurs. We can then do something with the error, like display it on the page:

```js
try {
  console.log(x);
} catch (error) {
  document.body.append(error);
}
```

There may be times where you do some kind of check and then want to throw an error if the check fails. For example, let's say we have a function that takes in a number and doubles it. We want to make sure that the argument is a number.

```js
function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }

  return number * 2;
}
```

Let's try to call this function with a string inside a try...catch statement:

```js
try {
  const y = double('a');
} catch (error) {
  console.log(error);
}
```

We get the following error, which we can now do whatever we want with:

```bash
Error: a is not a number
```

## Finally Block

The finally block is a block of code that will always run, regardless of whether an error occurs or not. It is very similar to the `.finally()` method that we can use with `.then()`.

Let's say we want to log a message after the try...catch statement runs. We can do this with the finally block:

```js
try {
  const y = double('a');
} catch (error) {
  console.log(error);
} finally {
  console.log('This will always run');
}
```

In the next video, we will look at how to use try...catch with Async & Await.
