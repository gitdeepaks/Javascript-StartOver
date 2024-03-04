# Get Elements By Tag

We are going to get a little bit more advanced and realistic with our unit testing. I don't expect anyone to get this without watching, unless you're a very experienced JS developer. We are going to test a function that takes a DOM tree and a tag name and returns an array of all the elements in the tree with that tag name.

This shows you how you can write code that has to do with the DOM and still test it without having to actually create a DOM tree. We won't have any actual HTML or DOM elements. We will just create some mock elements within our test code.

Remember, we have no DOM. We are working within Node.js. In order to create mock elements, we need to use the `jsdom` test environment. First off, we need to create a Jest config file and add the following to it:

```js
const config = {
  testEnvironment: 'jsdom',
};

module.exports = config;
```

With recent versions of jest, we need to install an additional package for this to work. So open your terminal and run the following command:

```bash
npm install -D jest-environment-jsdom
```

Now, we should be able to create mock elements in our tests.

## Tests

```js
const getElementsByTag = require('./getelementsbytag');

describe('Get Elements By Tag', () => {
  it('should be a function', () => {
    expect(typeof getElementsByTag).toEqual('function');
  });
  it('should return an array', () => {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });
  it('should return an empty array if no root element is passed in', () => {
    expect(getElementsByTag()).toEqual([]);
  });
  it('should return only the root element in the array if no tagName is passed in', () => {
    const root = document.createElement('div');
    expect(getElementsByTag(root)).toEqual([root]);
  });
  it('should return the correct elements', () => {
    const root = document.createElement('div');

    // Add some child elements to the root
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const span = document.createElement('span');
    root.appendChild(p1);
    root.appendChild(span);
    span.appendChild(p2);

    // Call the function and save the result
    const result = getElementsByTag(root, 'p');

    // Assert that the result is an array containing the two p elements
    expect(result).toEqual([p1, p2]);
  });
});
```

## The Code

We want to pass in a `root` element and a `tagName`. We want to return an array of all the elements in the tree that have that tag name. We will use the `tagName` property of the element to check if it matches the tag name we are looking for.

```js
function getElementsByTag(root, tagName) {
  if (!root) return [];
  if (!tagName) return [root];

  let result = [];

  // Check if the root is the tag we are looking for, if so, add it to the result
  if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
    result.push(root);
  }

  // Check if the root has any children, if so, recursively call getElementsByTagName on each child
  // This will merge the results of each child into the result array
  if (root.hasChildNodes()) {
    for (let child of root.children) {
      result = result.concat(getElementsByTag(child, tagName));
    }
  }

  return result;
}

module.exports = getElementsByTag;
```

We start off by checking if the `root` is `null` or `undefined`. If it is, we return an empty array. This is because we don't want to return `null` or `undefined` from our function. We want to return an array.

if we pass in only the `root` and no `tagName`, we return an array containing only the `root` element.

Next, we create an empty array called `result`. This is where we will store all the elements that match the tag name we are looking for.

We then check if the `root` element has the tag name we are looking for. If it does, we add it to the `result` array. We use the `tagName` property of the element to check if it matches the tag name we are looking for. We use `toLowerCase` to make sure we are comparing the tag names in a case-insensitive way.

Next, we check if the `root` element has any children. If it does, we loop through each child and recursively call `getElementsByTagName` on each child. `Recursive` means that we are calling the same function within the function. We then merge the results of each child into the `result` array.

Finally, we return the `result` array.
