# NPM Modules

`NPM` stands for `Node Package Manager`. It's a package manager for JavaScript. It's used to install 3rd-party packages and modules that we can use in our projects. There are over a million packages that you can install in a single command. Packages are hosted at `npmjs.com`.

Let's create another `app.js` file. I'm going to install and use `Axios`, which is a 3rd-party HTTP client that is similar to the Fetch API, but even more powerful.

When you create a Node.js app, the first thing that you usually do is run `npm init`. This will create a `package.json` file. This file is used to store information about your project. It's also used to store information about the packages that you install. It's kind of like a manifest file. It's also used to store scripts that you can run from the command line. We'll talk more about that later. For now, let's just run `npm init` and accept all of the defaults.

```bash
npm init
```

You can also run `npm init -y` to accept all of the defaults without having to answer any questions.

In this file, you will see some standard information about the project. You will also see a `dependencies` object. This is where the information about the packages that we install will be stored. Let's install `axios`.

```bash
npm install axios
```

Now, if you look at your `package.json` file, you will see `axios` listed in your projects dependencies. You will also see a new folder called `node_modules`. This is where the packages that we install will be stored. If you look in it you will see a bunch of folders because our dependencies/packages use other dependencies. So this file gets VERY large. It is important that you do not commit this folder to version control. You should add it to your `.gitignore` file. Let's do that now.

```bash
echo "node_modules" >> .gitignore
```

Now, when we commit our code, the `node_modules` folder will not be included.

Let's go to our `app.js` and import axios

```js
import axios from 'axios';
```

Now we can use it to fetch some data from an API. Let's use the `JSON Placeholder` API to fetch a single post.

```js
async function getPost() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(res.data);
}
getPost();
```

We are able to use `axios` because we installed and imported it.

Let's install one more package called `Lodash`. This is a utility library that has a lot of useful methods. Let's install it. We can use `i` as a shorthand for `install`.

## Global Packages

You can also use the `-g` option to install packages globally. This means it's not installed in your local project in the `node_modules` folder. It's installed globally on your system and you can use it whereever you want. 

An example would be `create-react-app`. This is a utility that you can run to generate a new React boilerplate. You could install this globally like this:

```bash
npm install -g create-react-app
```

You could then run it from anywhere.

## Dev Dependecies

Sometimes, you may use packages that are strictly for your development environment. An example would be `nodemon`, which monitors your application so you don't have to keep running it. Nodemon would not be needed in your production environment, so you could install it as a dev dependency with the `-D` option

```bash
npm install -D nodemon
```

Then, in your package.json file, it would be put in a `devDependencies` object.


## NPM Scripts

Let's say that we want to run our `app.js` file. We could run `node app.js`, but that's kind of long. We can create a script in our `package.json` file to make this easier. Let's add a `start` script.

```json
{
  "name": "npm-modules",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.21.1",
    "lodash": "^4.17.21",
    "uuid": "^8.3.2"
  }
}
```

Now we can run `npm start` to run our `app.js` file.

Note that if you use something other than `start`, you will have to run `npm run <script name>`. Let's change start to `dev`. Let's ass a `dev` script that will run our app with Nodemon

```json
{
  "name": "npm-modules",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.21.1",
    "lodash": "^4.17.21",
    "uuid": "^8.3.2"
  }
}
  ```

To run Nodemon, we would do the following

```bash
npm run dev
```

So those are the basics of NPM. You'll be using it quite a bit as a JavaScript developer.
