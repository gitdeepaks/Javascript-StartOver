# Fetch Options

When we make a request with the fetch API, the first parameter is the URL, but we can also pass in an object as the second parameter to add options to the request.

Some of the available options are:

- `method`: The HTTP method to use, such as `GET`, `POST`, `PUT`, `DELETE`, etc. By default it is `GET`.
- `headers`: An object containing any custom headers that you want to add to the request.
- `body`: The data to send with the request. If you are submitting form data for instance, you can send that data here. It can be a string, a `Blob`, a `BufferSource`, a `FormData`, a `URLSearchParams`, or a `USVString`.

There are others as well such as `mode`, `credentials`, `cache`, `redirect`, `referrer`, `referrerPolicy`, `integrity`, and `keepalive`. You can read more about them [here](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters).

## JSONPlaceholder API

For this video and the next project, we will be using the [JSON Placeholder Fake REST API](https://jsonplaceholder.typicode.com/). This API gives us access to a bunch of different endpoints for resources like posts, users, todos, etc. 

It is a REST API, which adheres to specific standards when it comes to HTTP methods and how the endpoint URLs are structured. We will be using the blog post resource for this. These are the REST endpoints

- GET /posts **Fetch all posts**
- GET posts/1 **Fetch a post with the ID of 1**
- POST /posts **Add a new post**
- PUT /posts/1 **Update a post with the id of 1**
- DELETE /posts/1 **Delete a post with the id of 1**

Now, we can make the requests, just know that the data does not actualy persist into any database. So for instance, when we make a post request, we get a successful response, however the data does not stick because it is not actually saved in the database. They can't let the pubic add any data they want. There is a tool called `JSON Server` from this developer that we can use to store data locally. We will look at that later.

## Making a POST Request

By default, when we pass a URL into `fetch()` it will make a `GET` request. This is what we use if we want to retrieve data from a server. But what if we want to send data to the server? We can do that by passing in an object as the second parameter to `fetch()`. This object can contain options for the request, including the `method` option.

Let's make a POST request to the [JSON Placeholder](https://jsonplaceholder.typicode.com/) API. 

Usually, when we make a `POST` request, we send some form data to the server to create some kind of resource like a blog post, user, etc.

JSONPlaceholder has endpoints for creating posts, users, and comments. Let's make a `POST` request to create a new post.

```js
function createPost({ title, body }) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

createPost({ title: 'My Post', body: 'This is my post' });
```

The `body` option is where we send the data to the server. We can send any kind of data here, but we need to make sure that the server knows what kind of data we are sending. We do this by setting the `Content-Type` header to the appropriate value. In this case, we are sending JSON data, so we set the `Content-Type` header to `application/json`. We also need to make sure that the data is in the correct format. In this case, we need to convert the data to a string using `JSON.stringify()`.

We can also add any custom headers that we wanted. For instance, the API may require you to authenticate and get a token and then send that token with a request to access a protected route.

```JavaScript
headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'token': 'abc123'
  }
````

The server will respond with the data that we sent, but it will also add an `id` property to the object. This is the ID of the new post that was created.

If you open your DevTools and go to the `Network` tab, you will see all of the info about the request and response including the headers, payload, status and response.
