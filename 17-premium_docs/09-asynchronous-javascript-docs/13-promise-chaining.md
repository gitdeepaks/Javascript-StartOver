# Promise Chaining

You may have a case where you have a promise that returns another promise. In this case, you can chain the promises together. This is called promise chaining. You would do this if you had a promise that returned a value that you needed to use in another promise or had a sequence of asynchronous tasks that you needed to complete. Let's take our example from the previous lesson:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => console.log(error));
```

So we have a promise that resolves with a `user` object after 1 second. We're then logging the `user` object. Whatever we return from the `then` callback will be passed to the next `then` callback. So let's return the user's `name` property. We can then log the name in the next `then` callback.

```js
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => console.log(error));
```

We can chain as many `then` callbacks as we want. Let's say we wanted to get the user's `name` `length` property. We can do that by returning it and chaining another `then` callback.

```js
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => console.log(nameLength))
  .catch((error) => console.log(error));
```

We can go on and on like this. I think you'll already see how this is a good way to avoid `callback hell`, but I'll show you a direct comparison soon.

It's also good to know that if you have a `.then()` after a `.catch()`, the `.then()` will still run. This is because the `.catch()` only handles errors in the previous `.then()`. Let's change the `error` flag to `true` in the promise. and add a `.then()` after the `.catch()`.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; // Change this to true

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => console.log(nameLength))
  .catch((error) => console.log(error))
  .then((x) => console.log('This will run no matter what'));
```

We can even return something from the `.catch()` callback. This will be passed to the next `.then()` callback. Let's return a string.

```js
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => console.log(nameLength))
  .catch((error) => {
    console.log(error);
    return 123;
  })
  .then((x) => console.log('This will run no matter what', x));
```

Now that you know how to chain promises, let's look at how this compares to `callback hell`.
