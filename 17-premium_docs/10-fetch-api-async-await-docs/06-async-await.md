# Async / Await

Now that we know how about promises, I want to show you an alternate way to consume them called `Async & Await`. We already saw that we can use the `.then()` method to handle the promise. That method is cleaner than the callback syntax, but it can get a little messy when you have a lot of nested `.then()` methods. That's where `Async & Await` comes in. It allows us to write asynchronous code that looks synchronous. It's also a lot easier to read and understand.

Let's take the first promise that we created a while ago and convert it to use `Async & Await`.

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

So this code will create a promise that resolves after 1 second. I'll use the `.then()` syntax for comparison:

```js
promise.then((data) => {
  console.log(data);
});
```

When we use `Async & Await`, we create a function that is prefixed with the `async` keyword. We can then use the `await` keyword in front of any promise. This will pause the execution of the function until the promise is resolved. Once the promise is resolved, we can store the result in a variable.

```js
async function getPromise() {
  const response = await promise;
  console.log(response);
}

getPromise();
```

As you can see, this does the same exact thing, but it's a lot easier to read and understand. It reads like a normal synchronous function. We simply add the `async` keyword to the function, and then we use the `await` keyword in front of the promise. It is important to stress that you will not be able to use the `await` keyword outside of an `async` function. If you try it, you will get an error.

## Async / Await with Fetch

Using Async/Await with the Fetch API is very similar. We'll create a function that is prefixed with the `async` keyword. We'll then use the `await` keyword in front of the `fetch()` method. This will pause the execution of the function until the promise is resolved. Once the promise is resolved, we can store the result in a variable.

You can use any API, but I'm going to use the `users` endpoint from https://jsonplaceholder.typicode.com.

```js
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  console.log(data);
}

getUsers();
```

Now, remember the Fetch API returns the initial `Response` object. We can't get the JSON data from that object directly. We need to use the `.json()` method on the response object. This will return another promise, so we need to use the `await` keyword again. Once the promise is resolved, we can store the result in a variable.

Let's make it a bit more interesting and show the users on the page. I know this is not a DOM lesson, but I want to make sure I keep you on your toes.

Add a `div` with an `id` of `output` to the `index.html` file.

```html
<div id="output"></div>
```

Then edit your `getUsers()` function

```js
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

 console.log(data);
}

getUsers();
```

## Using Async / Await with Arrow Functions

When we use arrow functions, the `async` keyword goes before the arrow. Here is the same function as above, but using an arrow function.

```js
const getUsers2 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

 console.log(data);
};

getUsers2();
```

## Do I need to use Async/Await?

No, you don't need to use Async/Await. It's just another way to consume promises. It's a lot easier to read and understand, but it's not required. You can use the `.then()` method if you want. I almost never use the `.then()` method. I think it's a lot easier to read and understand the `Async & Await` syntax. We'll mostly be using the `Async & Await` syntax for the rest of the course. If you'd like to use the `.then()` method, you can. It's just a matter of preference.

Next, let's look at how to handle errors using `try/catch`.
