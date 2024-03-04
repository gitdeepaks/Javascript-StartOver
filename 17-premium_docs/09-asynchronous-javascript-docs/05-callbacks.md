# Callbacks

Let's touch on callback functions a bit more. A callback is simply a function that is passed into another function as an argument and executed within the function that it was passed into.

We have already used callbacks quite a few times in this course. For example, we've used them with `addEventListener()` and `setTimeout()`.

Just because a function takes in a callback does not mean that it is asynchronous. It is a way to handle asynchronous code, such as we saw with `setTimeout()`, where the callback is placed in the `task queue` and then it waits for the call stack to be empty before it is executed. But, we also used callbacks with high order array methods like `forEach()` and `map()`. These are not asynchronous. The callbacks are executed immediately in this case.

## Callback Recap

`addEventListener()` is a good example of a function that takes in a callback. Let's look at the following code.

```js
function toggle(e) {
  const bgColor = e.target.style.backgroundColor;

  if (bgColor === 'red') {
    e.target.style.backgroundColor = '#333';
  } else {
    e.target.style.backgroundColor = 'red';
  }
}

document.querySelector('button').addEventListener('click', toggle);
```

Notice, when we pass in a callback, we do not use parentheses. We just pass in the name of the function. Parentheses are used when we want to execute the function. The function is executed within the `addEventListener()` function at a later time (when the event occurs).

If we were to add parentheses, the function would execute immediately and the callback would not be passed into the `addEventListener()` function.

```js
function toggle(e) {
  // Add this
  console.log('toggle ran...');

  const bgColor = e.target.style.backgroundColor;

  if (bgColor === 'red') {
    e.target.style.backgroundColor = '#333';
  } else {
    e.target.style.backgroundColor = 'red';
  }
}

document.querySelector('button').addEventListener('click', toggle());
```

If you run the code above, you will see the console log right away. You will also get an error, because it can't read the event object.

## Implementing Callbacks

Until you are writing advanced JavaScript, you probably will not have too many times where you will actually create a function that takes in a callback, but let's try it, just to see how it works.

Let's create a couple posts inside of an array:

```js
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];
```

Now I am going to create two functions. One to create a new post and one to get all posts. The `createPost()` function is going to create after two seconds and the `getPosts()` function is going to get all posts after one second.

```js
function createPost(post) {
  setTimeout(() => {
    posts.push(post);
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

createPost({ title: 'Post Three', body: 'This is post three' });

getPosts();
```

We ran both functions, yet we only see the initial two posts. The third never shows up because the posts already showed up after one second then the `createPost()` function ran after two seconds. We need to use a callback to fix this.

We can use a callback to fix this. We can pass in a callback to the `createPost()` function and then call the `getPosts()` function inside of the callback.

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

Now, when we run the code, we see all three posts. The `createPost()` function is executed and then the callback is executed.

Where we can get in trouble with callbacks is when we have multiple callbacks nested within eachother. This is called callback hell. To address this, we can instead use something called `promises`, which we will get into a little later.

In the next ;lesson, I want to get into HTTP requests. Making HTTP requests will give us more realistic examples of asynchronous code, rather than just using `setTimeout()`.
