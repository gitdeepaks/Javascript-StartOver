# `http` module - Creating a Server

The `http` module is a core module that allows us to create a server and listen for requests. You can create a complete web server with just this module, however, it is not recommended. The `http` module is low-level and does not provide many features that are needed in a production environment. For example, it does not handle routing, sessions, or any static files. To create a production-ready web server, you would use a framework, such as Express. Express as well as other frameworks are built on top of the `http` module. We will be using Express in the next lesson.

## Creating a Server

To create a server, we use the `createServer` method. This method takes a callback function that is called every time a request is made to the server. The callback function takes two parameters, `request` and `response`. The `request` object contains information about the request, such as the URL, headers, and body. The `response` object is used to send a response back to the client. The `response` object has a method called `end` that takes a string as a parameter. This string is what is sent back to the client.

```js
const http = require('http');

const server = http.createServer((request, response) => {
  response.end('Hello World');
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000. Ready to accept requests!');
});
```

We now actually have a server running on our localhost on port 5000. So you can make requests to that server. You can use the browser, since it is a `GET` request by default. Or you can use a tool like Postman. Or you can use the `curl` command in the terminal.

```bash
curl localhost:5000
```

I would suggest using `Postman`. That's what I'll be using. You can get it from [https://www.postman.com/](https://www.postman.com/) for free.

If you are using your browser, open up the `network` tab in the developer tools. Then refresh the page. You should see a request to `localhost:5000`. If you click on it, you can see the response. You can also see the request and response headers.

Congratulations! You have created your first server! It doesn't do anything except say hello, but it is a server.

## Routing

The `http` module does not have any built-in routing. So we have to implement it ourselves. We can do this by checking the `request.url` property. If the URL matches a certain pattern, we can send a response back to the client. If the URL does not match, we can send a 404 response.

```js
const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end('<h1>Welcome</h1>');
  } else if (url === '/about') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end('<h1>About Us</h1>');
  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>Page not found</h1>');
  }
});
```

It is important to note that when you change anything, you have to restart your server. you can do this by pressing `ctrl + c` in the terminal. Then run `node index.js` again.

Creating routes and doing other things without a framework can get very tedious. We would have to write a lot of `if` statements to handle all the different routes. What I have done is created a route for the index page, about and then a 404 page. If you go to `localhost:5000/about`, you should see the about page. If you go to `localhost:5000/anythingelse`, you should see the 404 page.

Remember we talked about status codes? The `200` response means `ok` so I used that on the index and about pages. The `404` response means `not found` so I used that on the 404 page.

## Returning an HTML File

We can also return an HTML file instead of a string. We can do this by using the `fs` module. The `fs` module allows us to read and write files. We can use the `readFile` method to read an HTML file and send it back to the client.

```js
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    fs.readFile('index.html', (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'content-type': 'text/html' });
        response.end('<h1>Sorry, we have a problem on our end</h1>');
      } else {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(file);
      }
    });
  } else if (url === '/about') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end('<h1>About Us</h1>');
  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>Page not found</h1>');
  }
});
```

You can go ahead and create an about and a 404 page if you want.

## Returning a JSON File

Node.js can of course server HTML files, but usually we want to create a backend API with Node.js. So we want to return JSON data. You saw earlier that we used public APIs like the GitHub API, the movie database, the chuck norris joke API and many others. They all served JSON data. We can put some JSON data in a file and return it to the client.

let's change the `about` route to `posts`. We will also get rid of the `fs` module. We will put some JSON with some blog posts at the top of the file. Then when we hit the endpoint of `http://localhost:5000/posts`, we will return the JSON data.

```js
const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: true, message: 'Welcome' }));
  } else if (url === '/posts') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: true, data: posts }));
  } else {
    response.writeHead(404, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: false, error: 'Not found' }));
  }
});
```

When creating a response with JSON data, you have to set the `content-type` header to `application/json`. When formatting your JSON, it's common to have a `success` property that is a boolean. If the request was successful, it will be `true`. If it was not successful, it will be `false`. You can also have an `error` property if the request was not successful. You can also have a `data` property if the request was successful. You can put whatever data you want in there. This is the convention that I like to use.

Now if you visit `http://localhost:5000/posts`, you should see the JSON data.

## Getting a single post

We can also get a single post. We can do this by using the `request.url` property. We can use the `split` method to split the URL into an array. Then we can get the last item in the array. That will be the id of the post. We can then use that id to get the post from the array.

```js
const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

const server = http.createServer((request, response) => {
  const url = request.url;
  const id = url.split('/')[2];

  if (url === '/') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: true, message: 'Welcome' }));
  } else if (url === '/posts') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: true, data: posts }));
  } else if (url === `/posts/${id}`) {
    const post = posts.find((post) => post.id === Number(id));
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: true, data: post }));
  } else {
    response.writeHead(404, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: false, error: 'Not found' }));
  }
});
```

Now, if you go to `http://localhost:5000/posts/1`, you should see the first post. If you go to `http://localhost:5000/posts/2`, you should see the second post.

So this is the VERY beginning of creating an API. Like I said, usually you are not going to do it this way with 'vanilla Node.js'. It would be too tedious, you would need to write a ton of code and it wouldn't be as secure as if you used a framework. But this is just to give you an idea of how it works.
