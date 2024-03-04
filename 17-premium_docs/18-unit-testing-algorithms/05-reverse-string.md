# Reverse A String

## Instructions

Create a function called `reverseString` that takes a string as an argument and returns the string reversed.

## Tests

Let's make sure that `reverseString` works as expected. it should be a function and return a string. It should also return the string reversed.

```js
const reverseString = require('./reverseString');

describe('Reverse String', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });
  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });
  it('should return the string reversed', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('Howdy')).toEqual('ydwoH');
    expect(reverseString('Greetings from Earth')).toEqual(
      'htraE morf sgniteerG'
    );
  });
});
```

## Hint

There is no method to reverse a string, but there is a method to reverse an array and strings can be converted into arrays and vice versa.

If you want to try and create the function on your own, you can do so in the `reverseString.js` file. Then just run `npm test` to see if your function passes the tests.

<details>
  <summary>Click For Solutions</summary>

## Solution 1

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

We can use the `split` method to split the string into an array of characters. We can then use the `reverse` method to reverse the array. Finally, we can use the `join` method to join the array back into a string.

This is probably the most straightforward way to solve this problem. Let's look at another solution.

## Solution 2

```js
function reverseString(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
```

We can use a `for` loop to iterate through the string. We can then add each character to the beginning of the `reversed` variable. We can then return the `reversed` variable.

## Solution 3

```js
function reverseString(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}
```

We can use the `reduce` method to iterate through the string. We can then add each character to the beginning of the `reversed` variable. We can then return the `reversed` variable.

</details>
