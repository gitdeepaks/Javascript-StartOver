# Callback To Promise Refactor

In the previous lesson, we saw how to use promises to handle asynchronous code. In this lesson, we will refactor our callback code to use promises.

Here is the original code:

```js
function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
```

We call the `createPost` function and pass in the `getPosts` function as the callback. This is the function that will be called when the `createPost` function is done. The `getPosts` function will get all the posts and display them on the page.

## Creating a Promise

To refactor this, let's get rid of the `cb` parameter and create a `promise` instead. We will use the `Promise` constructor to create a new promise. The `Promise` constructor takes in a function that has two parameters, `resolve` and `reject`. The `resolve` function is called when the promise is successful and the `reject` function is called when the promise is not successful.

We will create a variable that represents an error and then check for that error. If it is true, then we will call the `reject` function. If it is false, then we will call the `resolve` function.

```js
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = true;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}
```

The `getPosts` function will stay the same.

```js
function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}
```

## Handling the Promise

To handle promises, we use the `then` method, which takes in a function that will be called when the promise is resolved. We will simply pass in the `getPosts` function as the `then` method.

```js
createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts);
```

This way, we don't have to pass any callback into the `createPost` function. The `then` method will be called when the promise is resolved.

## Handling The Error

We can also add a `catch` method to handle the error. The `catch` method takes in a function that will be called when the promise is rejected.

We will create a `showError` function that will display the error on the page.

```js
function showError(error) {
  const h1 = document.createElement('h1');
  h1.innerHTML = `<strong>${error}</strong>`;
  document.querySelector('#posts').appendChild(h1);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(showError);
```

There we go. We have successfully refactored our callback code to use a promise.
