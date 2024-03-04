# CommonJS Modules

Let's look at the first type of module syntax called `CommonJS`. This is an older syntax that is used in Node.js. You won't use this much on the front-end, but if you plan on being a full-stack or back-end developer, you'll need to know it.

Let's create an `app.js` file and a `utils.js` file. Let's say that the app file is the main entry point and utils is just some extra utility functions that we want to be able to use in multiple files.

In `utils.js`, I am going to create a function that will capitalize the first letter of every word.

```js
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}
```

I want to be able to import this into the `app.js` file and use it. In order to do that, we need to export it. We do that by using the `module.exports` object. We can then set it equal to the function that we want to export.

```js
module.exports = capitalizeWords;
```

Now, I can import it into the `app.js` file. In order to do that, we use the `require()` function. We pass in the path to the file that we want to import. We can then store it in a variable and use it.

```js
const capitalizeWords = require('./utils');

console.log(capitalizeFirst('hello world')); // Hello World
```

As you can see, we can import the function and use it in the `app.js` file.

## Exporting Multiple functions

In many cases, you will want to export more than one thing from a file. Let's create another function in `utils.js`.

```js
function makeMoney(amount) {
  return `$${amount}`;
}
```

To export both functions, we can use the `module.exports` object again. We can set it equal to an object with the functions as properties.

```js
module.exports = {
  capitalizeWords,
  makeMoney,
};
```

Now when we import it in the `app.js` file, we can destructure it and get both functions.

```js
const { capitalizeWords, makeMoney } = require('./utils');

console.log(capitalizeWords('hello world')); // Hello World
console.log(makeMoney(100)); // $100
```

## Exporting Classes

Functions are not the only thing that we can import/export. Let's create a file named `Person.js` and create a class in it.

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
```

Now, let's export it

```js
module.exports = Person;
```

Now we can use it in the `app.js` file.

```js
const Person = require('./Person');

const person1 = new Person('John', 30);
person1.greet(); // Hello, my name is John and I am 30
```

Remember, this is only for Node.js. You won't be able to use this on the front-end, at least without tooling.
