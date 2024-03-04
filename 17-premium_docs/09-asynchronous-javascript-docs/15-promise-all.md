# Handle Multiple Promises with `Promise.all()`

There may be some instances where you want to handle multiple promises at the same time. For example, you may want to get data from multiple endpoints at the same time. We did this in the last video by chaining multiple `then` methods together. However, there is another way to handle multiple promises at the same time and that is with `Promise.all()`.

Let's take our `getData` function from the last video and use `Promise.all()` to handle multiple promises at the same time.

```js
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}
```

Now, let's store each promise response in a variable:

```js
const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');
```

Instead of chaining multiple `then` methods, we can use `Promise.all()` to handle all of the promises at the same time. We will pass in an array of promises and then we can use the `then` method to handle the response.

```js
Promise.all([moviesPromise, actorsPromise, directorsPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
```

It's as easy as that. If I wanted to add another promise to the mix, I would just add it to the array.

```js
const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');
const dummyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Dummy data');
  }, 2000);
});

Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
```

So now that you know how to work with promises, we can start to learn the `fetch API`, which is a much more modern and cleaner way to make HTTP requests than the `XMLHttpRequest` object.
