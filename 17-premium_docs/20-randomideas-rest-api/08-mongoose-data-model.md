# Mongoose Data Model

With Mongoose, we can create a data model that will define the structure of our documents. This is similar to how we defined the structure of our tables in SQL. We can also define the data types of each field, as well as add validation to each field.

Create a folder called `models` and a new file called `Idea.js` inside of it. In this file, we will define our data model and schema.

```js
const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Idea', IdeaSchema);
```

In this file, we are importing the `mongoose` module and creating a new schema. We are then exporting the model using the `mongoose.model()` method. The first argument is the name of the model, and the second argument is the schema. The schema is just a collection of fields that we want to have in our documents.

We can now use this model to query our database, which we will do in the next lesson.
