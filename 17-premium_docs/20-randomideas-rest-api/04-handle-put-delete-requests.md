# Handling PUT & DELETE Requests

We can read and create ideas via our API, now let's add the functionality to update and delete ideas.

## Updating Ideas

In the `routes/ideas.js` file, we will add a new route to handle the PUT request:

```js
// Update idea
router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    res.status(404).json({ success: false, error: 'Resource not found' });
  } else {
    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag;

    res.json({ success: true, data: idea });
  }
});
```

We are going to find the idea that we want to update by the ID. If the idea is not found, we will send back an error. If the idea is found, we will update the text and/or tag of the idea. We are not going to allow username updates. We will then send back the updated idea.

Try it out in Postman. Make a `PUT` request to `http://localhost:5000/api/ideas/1`. Remember to choose PUT as the request type and to send the `text` and `tag` in the request body.

## Deleting Ideas

In the `routes/ideas.js` file, we will add a new route to handle the DELETE request:

```js
// Delete idea
router.delete('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    res.status(404).json({ success: false, error: 'Resource not found' });
  } else {
    const index = ideas.indexOf(idea);
    ideas.splice(index, 1);

    res.json({ success: true, data: {} });
  }
});
```

We are going to find the idea that we want to delete by the ID. If the idea is not found, we will send back an error. If the idea is found, we will find the index of the idea in the array and remove it. We will then send back an empty object.

Now, make a `DELETE` request to `http://localhost:5000/api/ideas/1`. Remember to choose DELETE as the request type.

<img src="images/delete-success.png" width="600">

We now have a complete `CRUD` REST API. We can create, read, update and delete ideas.
