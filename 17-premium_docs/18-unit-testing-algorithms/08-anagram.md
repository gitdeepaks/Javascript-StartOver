# Anagrams

An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

## Instructions

Create a function called `anagram()` that takes two strings as arguments and returns `true` if the strings are anagrams and `false` if they are not.

## Tests

```js
const anagram = require('./anagram');

describe('Anagram', () => {
  it('should be a function', () => {
    expect(typeof anagram).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof anagram('ram', 'arm')).toEqual('boolean');
  });
  it('should return true if is an anagram', () => {
    expect(anagram('cinema', 'iceman')).toBeTruthy();
    expect(anagram('hello world', 'world hello')).toBeTruthy();
    expect(anagram('god', 'dog')).toBeTruthy();
  });
  it('should return false if is not an anagram', () => {
    expect(anagram('hello', 'fellow')).toBeFalsy();
    expect(anagram('world', 'twirl')).toBeFalsy();
    expect(anagram('lose', 'choose')).toBeFalsy();
  });
});
```

We are testing to make sure that `anagram` is a function and that it returns a boolean. We are also testing to make sure that it returns `true` if the string is a anagram and `false` if it is not.

<details>
  <summary>Click For Solutions</summary>

## Solution 1

```js
function anagram(str1, str2) {
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
```

We can use a helper function called `buildCharMap` to build a character map for each string. We can then loop through the character map of the first string and check if the character exists in the second string's character map. If it does, we can check if the character count is the same. If it is not, we can return `false`. If it is, we can continue looping. If we make it through the entire loop, we can return `true`.

</details>
