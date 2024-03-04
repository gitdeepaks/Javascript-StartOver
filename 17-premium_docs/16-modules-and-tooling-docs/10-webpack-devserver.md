# Webpack DevServer Plugin

It get's quite annoying to have to run `npm run build` after every little change. There is a plgin that we can use that will watch our files and rebuild them for us. Let's install it.

```js
npm install -D webpack-dev-server
```

We now want to create a new NPM script to run the server. Let's open up the `package.json` file and add a new script.

```json
"scripts": {
  "build": "webpack",
  "start": "webpack serve"
}
```

## Add config

Before we run it, I just want to add some values to the config file. Right above the `modules` object, add the following:

```js
 devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    //..
  }
```

So here, we are telling the dev server to serve the files from the `dist` folder. We are also telling it to open the browser on start and to use hot module replacement. We are also telling it to compress the files and to fallback to the `index.html` file if it can't find the file.

Now, let's run `npm run dev` and it should open up on `http://localhost:3000`. If we make a change to the `index.js` file, it should rebuild the application and refresh the browser for us.

If I make a change, like change the message to 'Hello World from Webpack', it should rebuild the application and refresh the browser for us.
