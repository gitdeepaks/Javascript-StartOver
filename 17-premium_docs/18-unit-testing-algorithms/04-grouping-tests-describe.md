# Grouping Tests With `describe()`

In the last lesson, we used the `test()` function to create a test. However, we can also use the `describe()` function to group tests together. This is useful when we have a lot of tests for a single function.

Let's take it a step further and write some tests for the FizzBuzz algorithm. We did this challenge a while back. Basically, it needs to return `Fizz` if the number is divisible by 3, `Buzz` if the number is divisible by 5, `FizzBuzz` if the number is divisible by both 3 and 5, and the number itself if it is not divisible by 3 or 5.

Create a file called `fizzbuzz.js` and add the following code:

```js
function fizzbuzz(num) {
  if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}
```

Notice, I left out the case where the number is divisible by both 3 and 5. We will add that later.

Let's create fizzbuzz.test.js and add the following code:

```js
const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });
  it('should return a number', () => {
    expect(typeof fizzBuzz(1)).toEqual('number');
  });
  it('should return 1 with the input of 1', () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
});
```

Here, we used the `describe()` function to group the tests together. The first argument is the name of the group, and the second argument is a function that contains the tests.

When we write a test, we use the `it()` function. The first argument is the name of the test, and the second argument is a function that contains the actual test. It is common convention to start the name of the test with `should`.

Then we use the `expect()` function to test the actual value. The first argument is the actual value, and the second argument is the expected value.

We are first testing if it is a function. Then if it returns a number if passed a number. Then if it returns 1 if passed 1.

Run `npm test` and you should get something like this

```bash
 PASS  fizzbuzz/fizzbuzz.test.js
 PASS  sum/sum.test.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.463 s, estimated 1 s
```

So we have 2 test suites, and 4 tests. 1 of them are from the `sum.test.js` file, and 3 of them are from the `fizzbuzz.test.js` file.

Instead of only testing for the number 1, let's add a few more cases. Replace the last test with

```js
it('should return the number if not divisible by 3 or 5', () => {
  expect(fizzBuzz(1)).toEqual(1);
  expect(fizzBuzz(13)).toEqual(13);
  expect(fizzBuzz(17)).toEqual(17);
});
```

So we can add as many cases as we want to test.

Now, let's test if we get `Fizz` if the number is divisible by 3. Add the following code after the last test:

```js
it('should return Fizz if divisible by 3', () => {
  expect(fizzBuzz(3)).toEqual('Fizz');
  expect(fizzBuzz(6)).toEqual('Fizz');
  expect(fizzBuzz(9)).toEqual('Fizz');
});
```

Also, if we get `Buzz` if the number is divisible by 5. Add the following code after the last test:

```js
it('should return Buzz if divisible by 5', () => {
  expect(fizzBuzz(5)).toEqual('Buzz');
  expect(fizzBuzz(10)).toEqual('Buzz');
  expect(fizzBuzz(20)).toEqual('Buzz');
});
```

Run `npm test` and you should get something like this

```bash
 PASS  fizzbuzz/fizzbuzz.test.js
 PASS  sum/sum.test.js

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.523 s, estimated 1 s
```

Finally, if we get `FizzBuzz` if the number is divisible by both 3 and 5. Add the following code after the last test:

```js
it('should return FizzBuzz if divisible by 3 and 5', () => {
  expect(fizzBuzz(15)).toEqual('FizzBuzz');
  expect(fizzBuzz(30)).toEqual('FizzBuzz');
  expect(fizzBuzz(45)).toEqual('FizzBuzz');
});
```

```bash
npm test
```

That test fails because we did not add the case where the number is divisible by both 3 and 5. Let's add that. Replace the `fizzbuzz.js` file with the following code:

```js
function fizzBuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return 'FizzBuzz';
  } else if (number % 3 == 0) {
    return 'Fizz';
  } else if (number % 5 == 0) {
    return 'Buzz';
  } else {
    return number;
  }
}
```

Now run the test again and it should pass.

## Clean up files

Let's create a folder for each algorithm and put the main file and test file into those. So you will have a folder called `sum` and a folder called `fizzbuzz`. Then, you will have a `sum.js` file and a `sum.test.js` file inside the `sum` folder, and a `fizzbuzz.js` file and a `fizzbuzz.test.js` file inside the `fizzbuzz` folder.

Let's move on to another algorithm in the next lesson
