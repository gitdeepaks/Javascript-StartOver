# More on Params & Arguments

When we create a function, we can allow data to be passed in by creating **parameters** or "params". The data that we pass in when we invoke a function is called an **argument**. I want to look a little more into them.

```js
function registerUser(user) {
  return user + ' is registered';
}

console.log(registerUser('John')); // John is registered
```

First off, if it isn't obvious, the variable of `user` is only available inside the function. The area within the function is called the function's `scope`.

If I try to log the name variable outside of the function, I will get an error.

```js
console.log(user); // Uncaught ReferenceError: user is not defined
```

We will talk more about scope soon.

Let's see what happens if we run the `registerUser()` function, but without passing in a parameter.

```js
console.log(registerUser()); // Undefined is registered
```

### Default Parameters

Sometimes, we may want to make parameters optional and have a default value for them if not passed in. In the ES2015 update, they added a new and easy syntax for this. Before that update, we would do something like this.

```js
function registerUser(user) {
  if (!user) {
    user = 'Bot';
  }
  return user + ' is registered';
}
```

But now, we can simply add the default value with the "=" sign

```js
function registerUser(user = 'Bot') {
  return user + ' is registered';
}

console.log(registerUser()); // Bot is registered
```

### Rest Parameters

Usually, you will know exactly which parameters will be passed to your functions. In the case of a function that takes in multiple arguments that we won't know beforehand, we can use the "rest" operator to collect all of the arguments into an array.

```js
function sum(...numbers) {
  return;
}

sum(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

As you can see, all the params we pass in are put into an array.

We have not learned about loops yet, but let's say that we want to add all of the numbers passed in. We could do the following.

```js
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4)); // 10
```

### Passing objects as arguments

We don't always pass in a primitive value as an argument. Sometimes we want to pass in an object.

```js
function registerUser(user) {
  console.log(`User ${user.id}(${user.name}) has been registered`);
}

const user = {
  id: 1,
  name: 'John',
};

registerUser(user); // User 1(John) has been registered

// or we can pass the object directly:

registerUser({
  id: 1,
  name: 'John',
});
```

### Passing arrays as arguments

We may want to pass in an array. Let's create a function that takes in an array and returns a random number.

```js
function getRandom(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getRandom(numbers)); // 4
```
