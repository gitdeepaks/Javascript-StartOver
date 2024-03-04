# Sets

Sets are a data structure that allows you to store a collection of unique values. They are unordered and they do not allow duplicates. Sets are useful when you want to store a collection of values that you want to check for membership, but you don't care about the order of the values.

## Creating a Set

To create a set, you use the `new Set()` constructor. You can pass in an iterable, such as an array, to initialize the set with values.

```js
const set = new Set([1, 2, 3, 4]);
```

Sets contain only unique values. If you try to add a value that already exists in the set, it will be ignored.

```js
const set = new Set([1, 2, 2, 3, 3, 4]);
// set = {1, 2, 3, 4, 5}
```

## Adding to a Set

To add a value to a set, you use the `add()` method.

```js
set.add(5);
```

## Checking for Membership

To check if a value is in a set, you use the `has()` method.

```js
set.has(5); // true
set.has(6); // false
```

## Removing from a Set

To remove a value from a set, you use the `delete()` method.

```js
set.delete(5);
set.has(5); // false
```

## Converting a Set to an Array

To convert a set to an array, you use the `Array.from()` method.

```js
const setArray = Array.from(set);
```

## Converting an Array to a Set

To convert an array to a set, you use the `new Set()` constructor.

```js
const arraySet = new Set([1, 2, 3, 4, 5]);
```

## Iterating using a for...of loop

To iterate through a set, you can use a `for...of` loop.

```js
for (let item of set) {
  console.log(item);
}
```

## Create an iterator

To create an iterator, you use the `values()` method.

```js
const iterator = set.values();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

This should make sense after the last few lessons.

## Clear the set

```js
set.clear();
```

In the next lesson, we'll look at maps.
