# Nodemon & Routes Folder

So right now, we have to keep restarting our app everytime we make a change. This is not ideal. We can use a package called `nodemon` to automatically restart our app when we make changes.

Let's install as a dev dependency:

```bash
npm install -D nodemon
```

Now, in your `package.json` file, you can add a script to run your app with `nodemon`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

From now on, in development, you can run `npm run dev` to start your app with `nodemon` and you will not have to restart your app everytime you make a change.

## Cleaning up the routes

Right now we have our idea routes in the main `server.js` file. This is not ideal. We should move them to a separate file. Let's create a new folder called `routes` and inside that folder, create a new file called `ideas.js`.

In order to use the Express router, we need to import it:

```js
const express = require('express');
const router = express.Router();
```

Now, we can move our ideas and idea routes to this file. We do have to make a couple changes to the routes. We are using the router now, so we need to change the `app.get()` to `router.get()`. We also need to change the paths from `/api/ideas` to `/` because we are already in the `/api/ideas` route. The single idea route will be `/:id` because we are already in the `/api/ideas` route.

Lastly, we need to export the router (I always forget this 🤨):

```js
module.exports = router;
```

## Hook up routes folder

Now we need to hook up the routes folder. In your `server.js`, you can remove the 2 idea routes and add the following:

```js
const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);
```

`app.use` is a way to add middleware to your app. In this case, we are adding the `ideasRouter` middleware to the `/api/ideas` route. This means that all the routes in the `ideasRouter` will be prefixed with `/api/ideas` automatically.

So now the api should work the same as before, but we have a cleaner `server.js` file. You can go ahead and test out the `/api/ideas` and `/api/ideas/:id` routes in postman.

In the next lesson, we will make it so that we can add ideas with a POST request.
