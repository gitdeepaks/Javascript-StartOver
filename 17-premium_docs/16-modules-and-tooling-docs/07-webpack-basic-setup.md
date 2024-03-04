# Webpack Setup

Alright, now we are going to setup Webpack. Like I said, your configuration and what your tooling does can be as simple or advanced as you want. I'm going to try any keep it pretty simple. What I want to do is create a `webpack-starter` boilerplate that you can re-use in future applications. We're also going to use it to refactor the `Tracalorie` project. This is the boilerplate that I use. I will include the finished project in this lesson. I have a very similar project at https://github.com/bradtraversy/webpack-starter. It does have a few extra bells and whistles, but it is very similar and used in the same way.

Let's start off by creating a folder called `webpack-starter`. Open it with your text editor and run `npm init` to create a package.json file.

## Create folders

We are going to create a few folders. Create a `src` folder and a `dist` folder. The `src` folder is where we are going to put our source code. The `dist` folder is where we are going to put our bundled code. We are going to use the `dist` folder for production.

Create an `index.html` file in the `dist` folder. We'll put some boilerplate HTML in there for now. We are going to create a `script` tag and point it to a file called `main.js`. This file does not exist yet. This is the output file that Webpack is going to create for us.

Now, create a file called `index.js` in the `src` folder. This will be the entry point for our application. Let's also create a file called `message.js` in the `src` folder. This is going to be a module that we are going to import into the `index.js` file.

In the `message.js` file, let's export an object with an id and a text field. You could also export functions, classes, etc.

```js
export default {
  id: 1,
  text: 'Hello World',
};
```

We could also give it a variable name and export the variable

```js
const message = {
  id: 1,
  text: 'Hello World',
};

export default message;
```

Bring it into the `index.js` file and log the text message.

```js
import message from './message.js';
console.log(message);
```

Now, this is not code that would work on it's own in the browser. We need to bundle it with Webpack. We are going to use Webpack to bundle our code into a single file.

## Install Webpack

Now we are going to install Webpack. Run `npm install -D webpack webpack-cli`. We use the `-D` to save as a `development dependency`. Meaning this is a dev tool and it won't be used in production. This will get put in the `devDependencies` section in the package.json file.

## .gitignore

Let's create a `.gitignore` file. We don't want to commit the `node_modules` folder to GitHub. We also don't want to commit the `dist` folder. We are going to create that folder when we build our application. We are going to add the `dist` folder to the `.gitignore` file.

```txt
node_modules
dist
```

## Create Build Script

Let's open up the `package.json` file and create a build script. What I mean is a command that we can run to take our source code and bundle it into our production files. We don't have a config file yet, so I am just going to add the mode flag and set it to production.

```json

"scripts": {
  "build": "webpack --mode production"
}
```

Now, let's run `npm run build`. This will run the build script. We should see a `main.js` file show up in the `dist` folder. If we open up the `index.html` file in the browser, we should see `Hello World` in the console. I'll just use `live-server` for now, but I will show you a webpack dev server that we can use in a bit.

## Create webpack.config.js

Now we are going to create a `webpack.config.js` file. This is where we are going to put our Webpack configuration. We use the `CommonJS` module syntax in this particular file. We are going to exportindex. an object with our configuration. For now, let's add an entry and an output. I'm going to change the output file from `main.js` to `bundle.js`. We will also put the `mode` in here and take it out of the `package.json` file. We will also set it to `development` for now.

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

We used the `path` module to get us the absolute path. It's a built-in module in Node. We are going to use the `__dirname` variable to get us the current directory. We are going to use the `resolve` method to resolve the path.

Now let's change the script name in our HTML from `main.js` to `bundle.js`. Now, let's run `npm run build`. We should see a `bundle.js` file show up in the `dist` folder. If we open up the `index.html` file in the browser, we should see `Hello World` in the console. You can delete the `main.js` file now.

Notice we see a lot more stuff in the output file. This is because we are in `development` mode. It added some extra code to help us debug. You can change it to production when you are ready to deploy. The result is the same though.

## NPM Modules

We are now able to build much more advanced applications just being able to import files. We can also use `NPM` modules for our frontend apps.

Let's install a package called `UUID`, which will generate unique IDs for us. Run `npm install uuid`. Now, let's import it into the `message.js` file and use it for the id.

```js
import { v4 as uuidv4 } from 'uuid';
```

```js
export default {
  id: uuidv4(),
  text: 'Hello World',
};
```

Now, build again with `npm run build`. You should see a `bundle.js` file in the `dist` folder. If you open up the `index.html` file in the browser, you should see a different ID in the console everytime you refresh the page. We are now using the UUID package in our frontend app.

I'm going to remove `UUID`, because I don't want it in the boilerplate. I just wanted to show you we can use NPM modules.

```js
npm remove uuid
```

```js
// message.js
export default {
  id: 1,
  text: 'Hello World',
};
```

Make sure that you run `npm run build` again after you remove the package. Right now, you have to do this for every single change, but I will show you how to set up a dev server that will watch your files soon.

So, now that you know how to import files and use NPM modules, then build your production files with Webpack, let's move on to the next lesson and talk about `loaders`, specifically the `css` and `style` loaders.
