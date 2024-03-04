# Express API Setup

Now we are going to get into some back-end web development. We are going to build a simple REST API using Express. This will be a random ideas API, so the data will be ideas that people post. We'll keep it simple and just have the idea text, a tag, the date and a username. We won't be adding authentication or anything, even what we're doing now is way beyond what I planned for this course. We'll just add the username to the request.

We will implement `CRUD` functionality, which is create, read, update and delete. Express handles a lot of the heavy lifting for us, so we can focus on the important stuff.

Create a folder called `randomideas-api` and `cd` into it.

First, we need to install Express. Let's initialize our project with a `package.json` file:

```bash
npm init -y
```

Then we can install Express:

```bash
npm install express
```

Now we can create a file called `server.js`. You can call it absolutely anything you want, but `server.js` is a common name for the main file in a Node.js API.

Let's start by

- Importing Express
- Creating an instance of the `express` function
- Creating a route that responds to a `GET` request to the `/` path
- Listening on port 5000

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
```

As you can see, this is much simpler and cleaner than the vanilla Node.js server we built in the previous lesson. We have this `app` object that we can use to create routes. We can also use it to listen for requests on a specific port, etc.

Now, let's add an NPM script to our `package.json` file so we can start the server with `npm start`:

```json
"scripts": {
  "start": "node server.js"
},
```

Now you can run `npm start` to start the server. You should see the message `Server is listening on port 5000` in your terminal.

As far as data, I'm just going to keep the data in memory for now. Create an array with a few ideas right in the `server.js` file under where we initialized the `app` object:

```js
const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];
```

Let's create a route that responds to a `GET` request to the `/api/ideas` path. It will return an array of ideas. Add this to the bottom of your `server.js` file above the `app.listen()` call:

```js
// Get all ideas
app.get('/api/ideas', (req, res) => {
  res.json(ideas);
});
```

The reason that I used `/api/ideas` instead of just `/ideas` is because I want to keep the API separate from the front-end. I don't want to have to worry about the front-end routes conflicting with the API routes.

All of our routes take in a callback with a request and response object. The request object contains information about the request, such as the path, query string, headers, etc. The response object contains methods for responding to the request, such as `send()`, `json()`, `status()`, etc. We are sending back a JSON response with the `res.json()` method. This will automatically set the `Content-Type` header to `application/json`.

Now we can test it out in Postman. Create a new GET request to http://localhost:5000/api/ideas. You should see the array of ideas in the response body.

Let's also create a route for individual ideas. We can use a route parameter to get the ID of the idea we want to get. Add this to the bottom of your `server.js` file:

```js
// Get single idea
app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    res.status(404).json({ success: false, error: 'Resource not found' });
  } else {
    res.json({ success: true, data: idea });
  }
});
```

We specified ':id' in the route. We can then access that route parameter using `req.params.id`.

Then we are using the `find()` method to find the idea with the ID that matches the route parameter. If we don't find a idea, we send a 404 status code and an error. If we do find an idea, we send it back as a successful JSON response.

You have to restart the server to see the changes. I will show you a tool to get around that soon.

Test it out in Postman. Create a new GET request to http://localhost:5000/api/ideas/1. You should see the idea with the ID of 1 in the response body.

Try going to http://localhost:5000/api/ideas/4. You should see the error message in the response body.

In the next lesson, I will show you how to use a package called `Nodemon` to automatically restart the server when you make changes. We will also clean up our code a bit and create a separate file for our routes.
