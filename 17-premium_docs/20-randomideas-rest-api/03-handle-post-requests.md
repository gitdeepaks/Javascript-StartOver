# Handling POST Requests & Data

Now that we have a basic API set up, we can start adding more functionality. We will start by adding the ability to create ideas with a POST request. This means that we need to send some data with the request.

In the `routes/ideas.js` file, we will add a new route to handle the POST request:

```js
// Create idea
router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
});
```

We are not using a database, so we are just going to add the idea to an array. We will also send back the idea that was created. Usually, when you integrate a database, it will create the ID automatically, but we are just going to increment the ID by 1.

The data that we send with our HTTP request will have the data of the idea. We can access this data with `req.body`. In order to do this, we do have to add a piece of middleware to our app. In the `server.js` file, add the following:

```js
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

This will allow us to access the data that we send with the request. Now, we can test out the POST request in Postman. In the body, we can add the text, tag and username of the idea. The endpoint stays the same - http://localhost:5000/api/ideas. However, we will also need to change the request type to POST.

## Sending data to the server

We need to send our idea data in the request body. In Postman, we can do this by clicking on the body tab and selecting `x-www-form-urlencoded`. We can then add the text, tag and username of the idea.

When you send your request, you should get a response with the idea that was created.

Remember, your data is just being saved in memory. If you restart the server, the data will be lost.

If you make a GET request right after, you will see that the idea was added to the array.

If we were using a database, most of this would be the same. We make the requests the same way, etc. It would actually be easier once the database is all configured, because we dont have to worry about the IDs. Also, there are methods we could use like `findByIdAndUpdate` to update the idea. Here, we are doing it manually.

In the next lesson, we will add the update and delete functionality
