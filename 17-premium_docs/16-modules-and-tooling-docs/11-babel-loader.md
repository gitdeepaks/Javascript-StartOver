# Babel Loader

The last thing that I want to do is setup `Babel`, which is a JavaScript transpiler that will take any modern JavaScript that we write and transpile it into older code that older browsers can understand. These days, I guess it is not completely mandatory, but it's still a good idea to make our code more backwards compatible.

We can install Babel and the Babel loader with the following command:

`npm install -D babel-loader @babel/core @babel/preset-env`

Then in the Webpack config, we need to add a rule to the module object. We also need to add a new property to the config object called `resolve`. This will tell Webpack what file extensions we want it to resolve. We are going to add `.js`. We also want to exclude anything in the `node_modules` folder. We also want to add the preset-env to the options object.

```js
module: {
  rules: [
    //..
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
  ],
},
```

Now, we can run `npm run dev` or `npm run build` and it should work as expected.

If you want to test it out, you can use an arrow function in your source code, and you will see it will be a regular function in your build file.

So we have a modern front-end dev environment setup. We have Webpack, Babel, and DevServer all setup and working. We can now start to refactor the Tracalorie app using this `webpack-starter` project.
