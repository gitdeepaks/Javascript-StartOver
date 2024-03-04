# Connecting To MongoDB

Now that we have our cloud database hooked up to our application, we need to connect to it. We'll use the [Mongoose](https://mongoosejs.com/) library to do this.

## Installing Mongoose & dotenv

We are actually going to install two packages right now. One is Mongoose, which is called an "ODM" or "Object Document Mapper". This is a library that allows us to connect to our MongoDB database and interact with it. The other is called [dotenv](https://www.npmjs.com/package/dotenv), which is a library that allows us to store environment variables in a file called `.env`. We'll use this to store our MongoDB connection string.

```bash
npm install mongoose dotenv
```

## .env Setup

Let's add our MongoDB connection string as an environment variable. Create a file called `.env` in your root folder. Add the connection string that you copied from MongoDB Atlas in the last lesson. It should look something like this:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0-0z0z0.mongodb.net/ideas_db?retryWrites=true
```

I also add my port here. I'm going to use port 5000. You can use whatever port you want.

```bash
PORT=5000
```

Now, in the `server.js` file, we need to require the dotenv package and call the config method. This will load the environment variables from the `.env` file.

```js
require('dotenv').config();
```

Now, I will create a variable called `PORT` and set it to the value of the `PORT` environment variable. If it doesn't exist, I will set it to 5000. Then, just use that in the `app.listen` method.

```js
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```

## Connecting To MongoDB

Now, let's connect to MongoDB. We'll use the Mongoose library to do this. Instead of putting this code directly in the `server.js` file, I'm going to create a folder called `config` and in it, create a new file called `db.js`. This will be a separate file that will handle all of our database connection logic.

```js
const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
```

Now, in the `server.js` file, we need to require the `connectDB` function and call it.

```js
const connectDB = require('./config/db');

connectDB();
```

Now when you start your server, you should see a message that says "MongoDB Connected".

Congrats, you've connected to your MongoDB database!
