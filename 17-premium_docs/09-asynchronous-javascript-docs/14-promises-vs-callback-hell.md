# Promises vs Callback Hell

So a couple videos back, I showed you an example of what we call "callback hell". This is when you have a bunch of callbacks nested inside of each other. It can get really messy and creates a pyramid of code that is hard to follow. It's also hard to debug.

What I want to do now is create that same `getData` function to get our movies, actors and directors, but I want to use promises instead of callbacks. To get our data, we are still using the XMLHttpRequest (XHR) object. We will be switching to the `fetch API` very soon.

Let's first create the function:

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

As you can see, we created a new promise and if everything goes as planned and we get a `200` status code, then we will resolve the promise. If we get an error, then we will reject the promise.

# Handling Multiple Functions

We will call the the first `getData` function to get the movies and we are going to use the `then` method to handle the response from the promise.

```js
getData('./movies.json').then((movies) => {
  console.log(movies);
});
```

Now, we want to call `getData` again to get the actors and directors. We can do this by chaining another `then` method. What's great about this is whatever we return from the first `then` method, we can use that in the second `then` method. So let's return the next `getData` function and pass in the actors endpoint. Then we will do it again for the directors.

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

So, as you can see, we are able to chain multiple `then` methods together just like we did in the last lesson. This is a lot cleaner than having a pyramid of code. It's also easier to debug because we can see exactly where the error is happening.

We can also use the `catch` method to handle any errors.

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
  })
  .catch((error) => console.log(error));
```

So more importantly than creating promises, right now, I want you to understand how to handle them with `then` and `catch`.

In the next video, I'm going to show you how to handle multiple promises with `Promise.all`.
