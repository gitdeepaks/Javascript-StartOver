# Async / Await With Multiple Promises

So we know that we can chain promises together using multiple `.then()` methods. We can also use promise.all to wait for multiple promises to resolve. But what about using async / await to wait for multiple promises to resolve?

Let's look at our `getData()` function from a past lesson.

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

It fetches data from an endpoint and returns a promise. It can take anywhere from 1 to 4 seconds to resolve. I first showed you how to do this with callbacks, then with promises and chaining `.then()` methods, and now we're going to do it with async / await.

Just for reference, let's look at how we did this with promise chaining.

```js
getData('./movies.json')
  .then((movies) => {
    console.log(movies);
    return getData('./actors.json');
  })
  .then((actors) => {
    console.log(actors);
    return getData('./directors.json');
  })
  .then((directors) => {
    console.log(directors);
  });
```

We returned a value from each `.then()` method, and that value was passed to the next `.then()` method. This is ok. It looks better than callbacks, but it's still a little messy. We can do better.

```js
async function getAllData() {
  const movies = await getData('./movies.json');
  console.log(movies);
  const actors = await getData('./actors.json');
  console.log(actors);
  const directors = await getData('./directors.json');
  console.log(directors);
}

getAllData();
```

Or even better:

```js
async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}

getAllData();
```

We were able to use async / await to wait for multiple promises to resolve and it looks much nicer. We also have access to the data from each promise in the same scope.

## Using `fetch` instead of `XMLHttpRequest`

In the `getData()` function, we used the `XMLHttpRequest` object to fetch data from an endpoint. We could also use the `fetch()` API to do the same thing and get rid of the `getData()` function completely.

```js
async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

getAllDataWithFetch();
```

There is no returning from `.then()` methods. The code looks synchronous, but it's not. It's still asynchronous. We're just using async / await to make it look synchronous.

## `Promise.all()`

We can also still use `Promise.all()` to wait for multiple promises to resolve.

```js
async function getAllDataWithPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

getAllDataWithPromiseAll();
```

If you want, you can still use `.then()` on the response promise to get the data:

```js
async function getAllDataWithPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then((response) => response.json()),
    fetch('./actors.json').then((response) => response.json()),
    fetch('./directors.json').then((response) => response.json()),
  ]);

  console.log(movies, actors, directors);
}

getAllDataWithPromiseAll2();
```
