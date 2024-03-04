# Promises

Alright, so now we are going to learn about promises. A promise is an object that represents the eventual completion or failure of an asynchronous operation. The concept is that a promise is made to complete some kind of task or operation, such as fetching data from a server. Meanwhile, the rest of the code continues to execute. So it's asynchronous and non-blocking. When the task is complete, the promise is either fulfilled or rejected. It also prevents `callback hell`, which are multiple nested callbacks, as we saw in the previous video.

Most of the time, until you get into more advanced JavaScript, you will be dealing with the response from promises, not writing them. For instance, using the `fetch API` will return a promise. So you will need to know what to do with it. In this video, I will show you how to deal with them but also how to create them with the `Promise` constructor.

I'm going to show you how to refactor our posts code from callbacks to promises in the next video, but first I want to give you a super simple example of creating and dealing with promises, so that you can understand the syntax and the concept in general.

## Creating a Promise

We use the `Promise` constructor to create a new promise. The `Promise` constructor takes in a function that has two parameters, `resolve` and `reject`. The `resolve` function is called when the promise is successful and the `reject` function is called when the promise is not successful.

Let's create a simple promise:

```js
const promise = new Promise(function (resolve, reject) {
  // Do an async task
  setTimeout(function () {
    console.log('Async task complete');
    resolve();
  }, 1000);
});
```

So we used the `Promise` constructor to create a new promise and passed in the function with the `resolve` and `reject` parameters. We then used the `setTimeout` function to simulate an asynchronous task. After 1 second, we called the `resolve` function. This will "resolve" the promise.

## Consuming/Handling a Promise

If we run this code, nothing will happen because we haven't dealt with the promise yet. To do that, we use the `then` method. The `then` method takes in a function that will be called when the promise is resolved. I do want to mention that there is an alternate way to handle promises and that is with something called `Async/Await`, which we will be learning in a little bit. For now, we will use the `then` method.

```js
promise.then(function () {
  console.log('Promise consumed');
});
```

You also don't have to put the promise into a variable. You could just do this:

```js
new Promise(function (resolve, reject) {
  // Do an async task
  setTimeout(function () {
    console.log('Async task complete');
    resolve();
  }, 1000);
}).then(function () {
  console.log('Promise consumed');
});
```

If we look in the console, we can see that the `Async task complete` message is logged first and then the `Promise consumed` message is logged. To show you that this is asynchronous, I will add a global console log to the bottom of the file.

```js
console.log('Global console log');
```

Now if we run it, we will see the global console log first because the code is not blocked by the promise. The promise is asynchronous and non-blocking.

## Returning Data from a Promise

To return data from a promise, we simply pass it in the `resolve` function. Let's say we want to return a user object from a promise. We can do that like this:

```js
const promise = new Promise(function (resolve, reject) {
  // Do an async task
  setTimeout(function () {
    resolve({ name: 'John', age: 30 });
  }, 1000);
});
```

The `then` method takes in a function that has a parameter for the data that is returned from the promise. We can call it whatever we want, but I will call it `user`.

```js
promise.then(function (user) {
  console.log(user);
```

## Handling Errors

Remember, we also have a `reject` function that we can call when the promise is not successful, meaning there is some kind of error.

Let's create a variable that represents an error and then check for it and call the `reject` function if it exists. We will also pass in an error message.

```js
const promise = new Promise(function (resolve, reject) {
  // Do an async task
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});
```

If `error` is set to false, we get the same result as before. But let's set it to `true` and see what happens.

```js
let error = true;
```

So, we do see our error message, but notice it also says `Uncaught (in promise)`. This is because we are not handling the error. We can handle the error by using the `catch` method. The `catch` method takes in a function that has a parameter for the error message. We can call it whatever we want, but I will call it `error`.

```js
promise
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Now, we are handling the error and we can see the error message in the console.

We can shorten this with arrow functions and implicit returns.

```js
promise.then((user) => console.log(user)).catch((error) => console.log(error));
```

## `finally` Method

The `finally` method is used to execute code after the promise is resolved or rejected. It will run no matter what. I personally have not had too many instances where I needed to add a `finally` block, but you should know it exists. Let's add a `finally` method to our promise.

```js
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => console.log(name))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected'));
```

Now that you know the basic syntax of a promise, in the next lesson, we will re-factor our posts code from callback to promise.
