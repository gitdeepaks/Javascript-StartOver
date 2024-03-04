# Unit Testing With Jest

Now, we're going to get setup with **Jest**, so that we can write unit tests.

Create a new folder to work in. You can call it whatever you want, but I'm going to call it `unit-testing-algorithms`.

We will be installing Jest using NPM, so we first need to run `npm init` to create a `package.json` file.

### Install Jest

Then, we can install Jest with

```bash
npm install -D jest
```

We are installing it as a dev-dependency, because we only need it for development.

### Create a .gitignore file

Next, create a `.gitignore` file and add `node_modules` to it. This will prevent the `node_modules` folder from being added to the repository.

### Create the test script

In your `package.json` file, add a `test` script:

```json
"scripts": {
  "test": "jest"
}
```

Now, when we need to run our tests, we just run `npm test`.

The way it works, is any file where we want to test, we make a file with the same name, but with `.test.js` at the end. For example, if we want to test a file called `sum.js`, we would create a file called `sum.test.js`.

Let's create a file called `sum.test.js` and add the following code:

```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toEqual(3);
});
```

We are importing the `sum` function from the `sum.js` file. Then, we are using the `test` function to create a test. The first argument is the name of the test, and the second argument is a function that contains the actual test, which is we expect to get 3 as an output, when we have an input of 1 and 2.

Let's run the test with `npm test`. You should see a fail message like this

```bash
 FAIL  ./sum.test.js
  × adds 1 + 2 to equal 3

  ● adds 1 + 2 to equal 3

    TypeError: sum is not a function

      2 |
      3 | test('adds 1 + 2 to equal 3', () => {
    > 4 |   expect(sum(1, 2)).toBe(3);
        |          ^
      5 | });
      6 |

      at Object.sum (sum.test.js:4:10)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.351 s, estimated 1 s
```

Obviously, this will fail because we did not even create a `sum()` function yet.

It will show how many tests ran, passed and failed and will also give us an error message.

In your `sum.js` file, add the following code:

```js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

Now, when you run `npm test`, you should see a success message like this:

```bash
 PASS  ./sum.test.js
  √ adds 1 + 2 to equal 3 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.413 s, estimated 1 s
```

Congrats! You just wrote your first unit test!
