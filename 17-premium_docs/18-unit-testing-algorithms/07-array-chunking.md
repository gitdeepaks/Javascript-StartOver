# Array Chunking

## Instructions

Create a function called `chunk()` that takes in an array and a size. The function should return a new array where each element is a sub-array of the given size.

## Tests

I am going to change it up a bit here and use the built-in Node.js `assert` library along with Jest. We don't have to do this and it will do the same thing, but it's just to show you there are multiple ways to test and you may run into this. You can read more about `assert` [here](https://nodejs.org/api/assert.html).

An `assertion` is a statement that is either true or false. If it is false, then the program will throw an error. We can use `assert` to test our code. We can use `assert.equal` to test if two values are equal. We can also use `assert.deepEqual` to test if two objects are equal. We can also use `assert.ok` to test if a value is truthy.

```js
const chunk = require('./arraychunk');
const assert = require('assert');

describe('Array Chunking', () => {
  it('Should implement array chunking', () => {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
  });
});
```

We are going to use `assert.deepEqual` to test if the returned array is equal to the expected array. We can use `assert.deepEqual` to test if two arrays are equal. We can also use `assert.deepEqual` to test if two objects are equal.

<details>
  <summary>Click For Solutions</summary>

Let's also change our functions up a bit and use arrow functions.

## Solution 1

```js
const chunk = (array, size) => {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
};
```

This is a very common solution. We create an empty array called `chunked`. We then loop through the given array. We then check if the last element in `chunked` is equal to the given size. If it is, we push a new chunk into `chunked` with the current element. If not, we add the current element into the chunk.

## Solution 2

```js
const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
};
```

This is a very similar solution to the first one. We create an empty array called `chunked`. We then loop through the given array. We then use the `slice` method to get a slice of the given array from the current index to the current index plus the given size. We then push the slice into `chunked`. We then increment the index by the given size.

</details>
