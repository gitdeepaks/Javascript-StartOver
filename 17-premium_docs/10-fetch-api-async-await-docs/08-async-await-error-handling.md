# Async/Await Error Handling

In the last lesson, we looked at how to use try...catch statements. In this lesson, we will look at how to use try...catch with Async & Await.

Let's use the same `getUsers()` example from the other lesson. I'll use the arrow function version:

```js
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  document.querySelector('#output').innerHTML = data
    .map(
      (user) => `
    <li>${user.name}</li>
  `
    )
    .join('');
};

getUsers();
```

Remember, with the fetch API, if we want to handle status codes like 404, we need to check the `status` or `ok` property on the response object.

In that case, we will throw an error:

```js
const getUsers = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');

  // Add this
  if (response.status !== 200) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();

  document.querySelector('#output').innerHTML = data
    .map(
      (user) => `
    <li>${user.name}</li>
  `
    )
    .join('');
};

getUsers();
```

In order to catch and use that error, we can use a try...catch statement. Let's also change the URL to something that will return a 404 error.

```js
const getUsers = async () => {
  try {
    // const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const response = await fetch('http://httpstat.us/404');

    if (response.status !== 200) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();

    document.querySelector('#output').innerHTML = data
      .map(
        (user) => `
    <li>${user.name}</li>
  `
      )
      .join('');
  } catch (error) {
    document.querySelector('#output').innerHTML = error;
  }
};

getUsers();
```

And remember from the earlier lesson, you can check for specific responses and give specific error messages if you want.

Again, you do not always have to use `try...catch`, just like you don't always need to use a `then...catch`. It depends on your use case.
