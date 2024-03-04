# Fetch API

So you saw how we can use the `XMLHttpRequest` object to make HTTP requests. But there's a more modern way that's been added to the browser to make HTTP requests, called the `Fetch API`. It's a little bit easier to use than the `XMLHttpRequest` object. It's also more powerful. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP. We'll talk about that later, but right now, we're just going to learn how to make simple requests.

## How Fetch Works

`fetch()` is a method that only requires one argument, which is the URL or file path that you want to make the request to. It returns a `promise` that resolves to a `Response` object. The `Response` object contains the response from the server.

Let's make a request to get the data in the `movies.json` file. You know how to handle `promises` now, so you can use the `then` method to handle the response.

```js
fetch('./movies.json').then(function (response) {
  console.log(response);
});
```

You can use this syntax or you can use the arrow function syntax, which is what I prefer and probably what I will be using for the rest of the course.

It is important to note that this does not directly return the data or the JSON response body (in this case, movies) but instead returns a promise that resolves with a `Response` object with a bunch of properties. It includes stuff like the `status` of `200`, `statusText` of `ok`. It has a `body` property that contains a `ReadableStream` object. To extract the JSON data from the `Response` object, we return the `json()` method, which returns a second promise that resolves with the data that we're looking for.

Remember, when we chain `then` methods, the return value of the first `then` method is passed as an argument to the second `then` method. We can call that argument whatever we want, but in this case, we'll call it `data`.

```js
fetch('./movies.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
```

We can shorten this up using arrow functions and implicit returns. This is commonly what you'll see in the wild.

```js
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Fetching Text

Usually we want to fetch JSON data, but just to show you it is possible, we can fetch plain text. Let's create a file named `test.txt` and just add some random text in it. We can use the `text()` method to get the text from the `Response` object.

```js
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));
```

## Fetching Data from an API

Now that we know how to make a request to a local file, let's make a request to an API. There are a ton of public APIs that we can use. Some of them do not require any type of authentication, but some of them do. You may need to register what we can an API key, and send that with your request. We'll talk about that later.

One of my favorite resources on the Web is this GitHub repo called [Public APIs](https://github.com/public-apis/public-apis). It's a list of public APIs that you can use in your projects. There are all kinds of categories and it tells you if there is any authentication required, if HTTPS is required and if there is a CORS policy, which we will talk about later.

Most public APIs will have documentation showing you which endpoints are available and what kind of data you can expect back as well as any operations that the API lets you run.

Let's try getting data from a couple APIs that don't require any authentication.

We've already looked at the public GitHub API in the last section. Let's make a request to the GitHub API to get information about a user. Feel free to replace my username with your own.

```js
fetch('https://api.github.com/users/bradtraversy')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

Here is the response that we get back:

```json
{
  "login": "bradtraversy",
  "id": 1198226,
  "node_id": "MDQ6VXNlcjExOTgyMjY=",
  "avatar_url": "https://avatars.githubusercontent.com/u/1198226?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/bradtraversy",
  "html_url": ",
  "followers_url": "https://api.github.com/users/bradtraversy/followers",
  "following_url": "https://api.github.com/users/bradtraversy/following{/other_user}",
  "gists_url": "https://api.github.com/users/bradtraversy/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/bradtraversy/subscriptions",
  "organizations_url": "https://api.github.com/users/bradtraversy/orgs",
  "repos_url": "https://api.github.com/users/bradtraversy/repos",
  "events_url": "https://api.github.com/users/bradtraversy/events{/privacy}",
  "received_events_url": "https://api.github.com/users/bradtraversy/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Brad Traversy",
  "company": "Traversy Media",
  "blog": "http://www.traversymedia.com",
  "location": "Charleston, SC",
  "email": null,
  "hireable": null,
  "bio": "Full Stack Web Developer & Instructor",
  "twitter_username": "traversymedia",
  "public_repos": 185,
  "public_gists": 32,
  "followers": 10000,
  "following": 0,
  "created_at": "2012-09-30T15:36:51Z",
  "updated_at": "2021-03-31T20:19:57Z"
}
```

So we could use any of this data to display on our page.


