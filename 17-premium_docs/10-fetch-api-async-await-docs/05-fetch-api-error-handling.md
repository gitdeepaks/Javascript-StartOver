# Fetch API Error Handling

In this lesson, I want to talk about error handling in the Fetch API. There are a couple things that you may not expect. It is important to understand the main HTTP status codes and what they mean, because it is important that you understand your API's response. So let's recap on the most common ones.

The `200` range is for successful responses.

- 200 - OK
- 201 - Created
- 204 - No Content

The `400` range is for client errors. This means that the request was not understood by the server.

- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found

The `500` range is for server errors. This means that the server encountered an error while processing the request.

- 500 - Internal Server Error

The most common of the common will be `200`, `404` and `500`. So let's look at how we can handle these in the Fetch API.

We can use the website [httpstat.us](http://httpstat.us) to send requests to and get a specific status code. Let's try it out.

```js
fetch('http://httpstat.us/200')
  .then((response) => {
    return response;
  })
  .then((data) => {
    console.log('Success');
  });
```

If you run this, you should see 'Success' logged to the console. Let's try a `404` now.

```js
fetch('http://httpstat.us/404')
  .then((response) => {
    return response;
  })
  .then((data) => {
    console.log('Success');
  });
```

A `404` is not a successful response. It means what we are requesting is not there. However, we are still seeing 'Success' logged to the console.

Let's try adding a `catch` to the end of the chain. Remember, a `catch` will catch any errors that occur in the chain. So let's try it.

```js
fetch('http://httpstat.us/404')
  .then((response) => {
    return response;
  })
  .then((data) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('Error:', error);
  });
```

Nothing happens. The `catch` is not called. This is because the `fetch` request itself was successful. The `catch` will only be called if there is a network error. So if we make a request to a URL that doesn't exist, we will see the `catch` called. let's try this:

```js
fetch('http://hello123.net')
  .then((response) => {
    return response;
  })
  .then((data) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('Error:', error);
  });
```

This does result with the `catch` being called. So we can use the `catch` to handle network errors. But what about the `404` or any other unsuccessful response? We want to handle that as well. We can do this by checking the `status` of the response and then throwing an error if we need to. Let's try it out.

```js
fetch('http://httpstat.us/404')
  .then((response) => {
    if (response.status !== 200) {
      throw new Error('Not 200 response');
    }
    return response;
  })
  .then((data) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('Error:', error);
  });
```

So we looked at the `status` of the response and if it is not `200`, we throw an error. `throw` is a keyword that will stop the chain and call the `catch` with the error that we throw. So now we are seeing the `catch` called with the error that we threw. Try a `200` response and you will see the `then` called. If you try a `500` response or anything but `200`, you will see the `catch` called.

If you want to check for specific status codes, you can use `else if` statements:

```js
fetch('http://httpstat.us/400')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not found');
    } else if (response.status === 400) {
      throw new Error('Bad request');
    } else if (response.status === 500) {
      throw new Error('Server error');
    } else if (response.status !== 200) {
      throw new Error('Not 200 response');
    }
    return response;
  })
  .then((data) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('Error:', error);
  });
```

There are other **success** status codes that you may want to handle. For example, `201` is a successful response that means a resource was created. You may want to handle this differently than a `200` response. You can do this by adding another `else if` statement. Let's try it out.

```js
fetch('http://httpstat.us/404')
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      throw new Error('Not 200 response');
    }
    return response;
  })
  .then((data) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('Error:', error);
  });
```

There is also an `ok` property on the response object. This is a boolean that is `true` if the status is in the `200` range. So we can use this as well:

```js
fetch('http://httpstat.us/400')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return response;
  })
  .then((data) => {
    console.log('Success');
  })
  .catch((error) => {
    console.log('Error:', error);
  });
```

## Add error handling to project

The random user API is pretty simple. We most likely won't get a 404 or 500 error. But we can still add some error handling. Let's add a `catch` to the end of the chain and show a message if there is an error.

```js
function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api/')
    .then((res) => {
      if (res.status !== 200) {
        throw new Error('Something went wrong');
      }
      return res.json();
    })
    .then((data) => {
      hideSpinner();
      const user = data.results[0];
      displayUser(user);
    })
    .catch((error) => {
      hideSpinner();
      userEl.innerHTML = `<p class="text-xl text-center text-red-500 mb-5">${error}</p>`;
    });
}
```

Now try and change the URL to `https://randomuser.me/api1/`. Now this would still run the catch even without the check because it doesn't exist, but the check is there to show for specific status codes and makes your code more less error prone.
