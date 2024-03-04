# Client Folder Setup

In the last lesson, I explained the structure of our app, now we will implement it. I renamed my api folder from `randomideas-api` to `randomideas-app`, because now it will be a fullstack app. I also created a `client` folder in the root of the project.

### Setting the Static Folder

Express has a built in middleware function called `express.static` that allows us to serve static files from any folder. We will use this to serve our production files from the `public` folder.

Create a `public` folder in the root and add the following code to your `server.js` file:

```js
const path = require('path');
// ...

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));
```

Now, if you add an `index.html` file to the `public` folder, you can access it at `http://localhost:5000/index.html`.

### Client Folder & Webpack Starter

I am going to use the Webpack starter that we created a few lessons ago. Create a folder called `client` and copy the contents of the `webpack-starter` folder, including the `src` folder into your `client` folder. You should not have a `dist` folder in your `client` folder. Delete it if you have one. `public` will be the new `dist` folder. Also, do not copy any `node_modules` folder. We will install our dependencies after.

From the client, install your frontend dependencies:

```bash
cd client
npm install
```

#### Setting the Build Folder

In your `webpack.config.js` file, change the `output` path to

```js
 output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js',
  },
```

and for the devServer path...

```js
 devServer: {
    static: {
      directory: path.resolve(__dirname, '../public'),
    }
  },
```

Now, when you run `npm run build`, your files will be built into the `public` folder. You can try it now. Open a new terminal and cd into your `client` folder. Run `npm run build` and you should see your files in the `public` folder.

Now, run your devserver from the client folder:

```bash
npm run dev
```

So at this point, you should have one terminal running your API (localhost:5000) and another terminal running your devserver (localhost:3000).

### RandomIdeas Theme

In this lesson, you will have a zip file called `randomideas-theme.zip`. It is just an index.html and a style.css. Add the index.html to the client, overwriting the one from `webpack-starter` and add the style.css to the `src/css` folder.

In the index.html, remove the link to the style.css. We can import that into our JS. Also, remove the script tag for the bundle.js. That is automatically added at build time.

Now, in your `index.js` file, import the style.css file:

```js
import '../css/style.css';
```

Delete the import of `message.js` and delete that file. You should now just see the hardcoded ideas in the html file.
