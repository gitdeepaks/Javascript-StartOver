# Palindrome

A palindrome is a word that is spelled the same forwards and backwards. For example, `kayak` and `rotator` are both palindromes. `hello` and `world` are not palindromes.

## Instructions

Create a function called `palindrome()` that takes a string as an argument and returns `true` if the string is a palindrome and `false` if it is not.

## Tests

```js
const palindrome = require('./palindrome');

describe('palindrome', () => {
  it('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof palindrome('hello')).toEqual('boolean');
  });
  it('should return true if is a palindrome', () => {
    expect(palindrome('kayak')).toBeTruthy();
    expect(palindrome('rotator')).toBeTruthy();
    expect(palindrome('wow')).toBeTruthy();
  });
  it('should return false if is not a palindrome', () => {
    expect(palindrome('hello')).toBeFalsy();
    expect(palindrome('world')).toBeFalsy();
    expect(palindrome('bye')).toBeFalsy();
  });
  it('should return false if includes spaces', () => {
    expect(palindrome(' wow')).toBeFalsy();
    expect(palindrome('wow ')).toBeFalsy();
  });
});
```

We are testing to make sure that `palindrome` is a function and that it returns a boolean. We are also testing to make sure that it returns `true` if the string is a palindrome and `false` if it is not. It should also return `false` if the string includes spaces.

<details>
  <summary>Click For Solutions</summary>

## Solution 1

```js
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
```

This is very similar to one of the solutions for the `reverseString` problem. We can use the `split` method to split the string into an array of characters. We can then use the `reverse` method to reverse the array. Finally, we can use the `join` method to join the array back into a string. Then we simply need to check if the `str` is equal to the `reversed` string.

## Solution 2

```js
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
```

We can use the `every` method to check if every character in the string is equal to the character at the same index in the reversed string. We can use the `str.length - i - 1` to get the index of the character in the reversed string.

</details>
