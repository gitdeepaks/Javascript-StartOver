# Has Duplicate IDs

We are going to continue to work with the DOM test environment and test a function that takes a DOM tree and returns `true` if there are any duplicate IDs in the tree and `false` if there are not.

## Tests

```js
const hasDuplicateIds = require('./hasduplicateids');

describe('DOM Tree Has Duplicate IDs', () => {
  it('should be a function', () => {
    expect(typeof hasDuplicateIds).toEqual('function');
  });
  it('should return an boolean', () => {
    expect(typeof hasDuplicateIds()).toEqual('boolean');
  });
  it('should return false if no root element is passed in', () => {
    expect(hasDuplicateIds()).toEqual(false);
  });
  it('should return true if there are duplicate ids', () => {
    // Create a mock element tree
    const root = document.createElement('div');
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');
    root.appendChild(child1);
    root.appendChild(child2);

    // Add duplicate ids to the tree
    root.id = 'root';
    child1.id = 'child';
    child2.id = 'child';

    // Call the function and save the result
    const result = hasDuplicateIds(root);

    // Assert that the result is true
    expect(result).toEqual(true);
  });
  it('should return false if there are no duplicate ids', () => {
    // Create a mock element tree
    const root = document.createElement('div');
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');
    root.appendChild(child1);
    root.appendChild(child2);

    // Add duplicate ids to the tree
    root.id = 'root';
    child1.id = 'child1';
    child2.id = 'child2';

    // Call the function and save the result
    const result = hasDuplicateIds(root);

    // Assert that the result is true
    expect(result).toEqual(false);
  });
});
```

## Keeping Our Tests DRY By Using `beforeEach` and `afterEach`

As you can see, we have some repeating code where we are creating our root element, adding children, ids, etc. We can use a `beforeEach` block to set up the mock element tree and then use `afterEach` to clean up the mock element tree.

What these blocks do is run before and after each test. This allows us to set up the mock element tree before each test and then clean it up after each test.

```js
const hasDuplicateIds = require('./hasduplicateids');

describe('DOM Tree Has Duplicate IDs', () => {
  let root;
  beforeEach(() => {
    root = document.createElement('div');
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');
    root.appendChild(child1);
    root.appendChild(child2);
  });
  afterEach(() => {
    root = null;
  });
  it('should be a function', () => {
    expect(typeof hasDuplicateIds).toEqual('function');
  });
  it('should return an boolean', () => {
    expect(typeof hasDuplicateIds()).toEqual('boolean');
    root.id = 'root';
    root.children[0].id = 'child';
    root.children[1].id = 'child';
    const result = hasDuplicateIds(root);
    expect(typeof result).toEqual('boolean');
  });
  it('should return false if no root element is passed in', () => {
    expect(hasDuplicateIds()).toEqual(false);
  });
  it('should return true if there are duplicate ids', () => {
    root.id = 'root';
    root.children[0].id = 'child';
    root.children[1].id = 'child';
    const result = hasDuplicateIds(root);
    expect(result).toEqual(true);
  });
  it('should return false if there are no duplicate ids', () => {
    root.id = 'root';
    root.children[0].id = 'child1';
    root.children[1].id = 'child2';
    const result = hasDuplicateIds(root);
    expect(result).toEqual(false);
  });
});
```

## The Code

```js
function hasDuplicateIds(root, idSet = new Set()) {
  if (!root) return false;

  // If the root has an id and the idSet already has that id, return true
  if (idSet.has(root.id)) return true;

  // If the root has an id, add it to the idSet
  root.id && idSet.add(root.id);

  // If the root has children, recursively call the function on each child
  if (root.hasChildNodes()) {
    for (let child of root.children) {
      const result = hasDuplicateIds(child, idSet);
      if (result) return true;
    }
  }

  return false;
}

module.exports = hasDuplicateIds;
```

We are passing in a root element to the tree and a set of ids. We are using a set because it is a data structure that only allows unique values. If we add a value to the set that already exists, it will not be added.

Then we are checking if the root has an id and if the idSet already has that id. If it does, we return true. If it does not, we add the id to the idSet.

Then we are checking if the root has children. If it does, we are recursively calling the function on each child. If any of the children return true, we return true. If none of the children return true, we return false.
