# ES Modules

When it comes to the front-end and the browser, things can be a bit more complicated. You're not going to be using CommonJS modules in the browser. You technically can if you use a module bundler, but ES Modules are much more popular and more modern.

## Browser Compatibility

Modern browsers support ES Modules, however older browsers do not. This is why it is suggested that you use a module bundler like Webpack to bundle our modules into a single file that can be used in the browser. We'll talk more about module bundlers in the next video. Using something like Webpack or Parcel has other benefits as well. You can install and use `NPM` modules. You can install plugins to do all kinds of things to optimize your code. They typically have some kind of local web server as well. Although, that's not really a big deal, because we have `Live Server` installed in VS Code.

In this lesson, we are not going to use any module bundlers. We're just going to use ES Modules in Chrome. The import/export syntax is the same wether you use a module bundler or not.

## The `type="module"` Module Attribute

Create an `index.html` file and an `app.js` file to start with. Since we are going to be using modules in the browser, when you add the `<script>` tag to the HTML file, you need to add the `type="module"` attribute. This tells the browser that this is an ES Module. You can also add the `defer` attribute, which will make sure that the script is loaded after the HTML is loaded. This is just a good practice to get into.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="app.js" type="module" defer></script>
    <title>ES Modules</title>
  </head>
  <body>
    <h1>ES Modules</h1>
  </body>
</html>
```

## Creating Modules

Let's do the same thing that we did in the `CommonJS` lesson. Although, ths time I'm going to create a folder called `modules` and put my files in there. Let's start with our `modules/utils.js` file.

```js
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

function makeMoney(amount) {
  return `$${amount}`;
}

export { capitalizeWords, makeMoney };
```

As you can see, to export, we use the `export` keyword. We can export multiple things by separating them with a comma. So remember, with `CommonJS`, we use `module.exports = {}`, with ES Modules, we use `export {}`.

Now, let's use it in the `app.js` file.

```js
import { capitalizeWords, makeMoney } from './modules/utils.js';

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));
```

So instead of using `require()` like we did with `CommonJS`, we use the `import` keyword. Since we are exporting and importing multiple things, we use curly braces and commas. When we do not use a bundler, we need to include the file extension on the import.

Now, let's create a `Person.js` file and export a single class.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

export default Person;
```

Notice we used `export default` instead of `export`. This is because we are only exporting one thing. We can only use `export default` once per file. If we try to use it more than once, we will get an error. You can use as many `export` statements as you want.

Let's import `Person`

```js
import Person from './modules/Person.js';

const person = new Person('Mark', 29);
person.greet();
```

Notice we didn't use curly braces. That's because we exported as default.

So that is the `ES Module syntax`. It's a bit nicer than `CommonJS`. You can also use `Node.js` with ES Modules, there is just a little bit of setup that goes into it. In the next video, I will show you how to setup the webpack module bundler.
