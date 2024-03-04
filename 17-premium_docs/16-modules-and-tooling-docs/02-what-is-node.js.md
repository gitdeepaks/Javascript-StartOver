# What Is Node.js?

Alright, so this is not a Node.js course, so we won't be doing a deep dive into Node. I do want you to be familiar with it though, because it's a very popular environment for JavaScript and even as a front-end developer, you'll be working with `NPM` and to use NPM, you need to install Node.js.

So Node.js is a runtime environment. Up to this point, we've been executing our JavaScript code in the browser. Node.js is simply another environment to execute JavaScript code. It allows us to write server-side code with JavaScript. Just like other languages, such as Python, Ruby and Java. Server-side code is code that can interact with databases and the filesystem, etc.

Node is built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. The way Node works is very similar to how the browser works. It uses an event loop, callbacks, promises, async/await, etc. It's essentially the browser environment minus the window object. Node does have a global object, it's just not called `window`,it's called `global`. In Node, we don't have a document object model. So it's not used for creating interfaces like we do in the browser. It's used for creating back-end applications and APIs. It's also used for creating command line tools among other things.

## Installing Node.js

Installing Node is extremely easy. Just go to the [Node.js website](https://nodejs.org/en/) and download the latest version. Once it's installed, you can check the version by opening up your terminal/command line and typing `node -v`. This should return the version number. You can also check the version of `npm` by typing `npm -v`. This should also return the version number.

Let's create a folder to work in and an app.js file

```js
mkdir node-playground
cd node-playground
touch app.js
code app.js
```

## Running a .js file

Add `console.log('Hello World');` to the app.js file.

There is no browser in this environment, so `console.log()` will output to the terminal.

Now let's run this file in the terminal. We can do this by typing `node app.js`. We can also leave off the `.js` extension and just do `node app`. You should see `Hello World` logged to the terminal.

Instead of just doing a hello world, let's fetch some data.

The fetch API actually was not part of Node.js up until recently. We had to use an NPM package like `node-fetch` or `axios` if we wanted to make requests.

```js
async function getUser() {
  const response = await fetch('https://api.github.com/users/bradtraversy');
  const data = await response.json();
  console.log(data);
}
getUser();
```

Now let's run this file in the terminal with `node app.js`.

You should see the data logged to the console. Now let's run this file in the terminal.
