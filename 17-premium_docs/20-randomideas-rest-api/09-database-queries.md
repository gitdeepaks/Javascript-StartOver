# Database Queries

Now that we have Mongoose setup and a data model for our ideas, we can use really easy methods to query our database. We will be using the `Idea` model that we created in the last lesson.

Let's go into our `routes/ideas.js`

We will start by importing the `Idea` model:

```js
const Idea = require('../models/Idea');
```

## Async/await

Mongoose methods return promises, so we can use async/await to handle the promises. We will be using async/await in all of our routes. So before the callback function, we will add `async` and then we can use `await` before the Mongoose method.

## Get All Ideas

Now in the GET / route, let's get the ideas from the database and send them instead of the hardcoded ones. Yes, I know there are not any in there yet, but that's ok, we will still just get an empty array.

We can do this easily by using the `find()` method.

```js
// Get all posts
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});
```

Now, go to Postman and go to the route `http://localhost:5000/api/ideas`. You should see an empty array.

## Create an Idea

Now let's add a new idea to the database.We can use the `save()` method to save the idea to the database.

```js
// Create idea
router.post('/', async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});
```

Now, go to Postman and create a new POST request to `http://localhost:5000/api/ideas`. Be sure to add the text, tag and username in the body of the request. You should get a response with the idea that was created.

Now, make a get request to `http://localhost:5000/api/ideas` and you should see the idea that you just created.

It has the text, tag, username, date and an `_id` field. This is the unique identifier for the idea. We will use this to get a single idea and to delete an idea. You will also see `__v`, this is the version number of the document. This is used by Mongoose to keep track of changes to the document.

## Single Idea

Let's update the route that gets a single idea by it's ID. We can use the `findById()` method to get a single idea by it's ID.

```js
// Get single idea
router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});
```

Go to Postman and make a GET request to `http://localhost:5000/api/ideas/ID_OF_IDEA`. You should get the idea that you created.

## Update Idea

Now for the update route, we will is `findByIdAndUpdate()` to update the text and tag

```js
// Update idea
router.put('/:id', async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
          username: req.body.username,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedIdea });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});
```

Now, make a PUT request to `http://localhost:5000/api/ideas/ID_OF_IDEA` and update the title and body. You should get the updated idea back.

## Delete Idea

Finally, we will add the code to delete the idea. We will use the `findByIdAndDelete()` method to delete the idea.

```js
// Delete idea
router.delete('/:id', async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});
```

We now have a fully functional API that can create, read, update and delete ideas from the database.

In the next section, we will create a simple front-end to interact with our API.
