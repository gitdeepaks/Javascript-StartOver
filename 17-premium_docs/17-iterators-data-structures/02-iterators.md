# Iterators

An `iterator` is an object that defines a sequence and potentially a return value upon completion. It's an object that implements the `iterator protocol` by having a `next()` method. The `next()` method returns an object with two properties: `value` and `done`. The `value` property is the value of the next item in the sequence. The `done` property is a boolean that is `true` if the iterator is done with its sequence.

## Iterator Example 1

We're going to create an `app` object that has an array of baseball teams.

```js
const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
};
```

We want to create an iterator that will iterate through this teams array and return the next team in the sequence. We need to create a function in the object called `next` that returns the next team in the sequence. We also need to create a variable called `nextIndex` that will keep track of the next team in the sequence.

The `next()` function should return an object with a `value` and a `done` property. The `value` property is the next team in the sequence. The `done` property is `true` when the sequence is complete.

```js
const app = {
  nextIndex: 0,
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  next() {
    if (this.nextIndex >= this.teams.length) {
      return { done: true };
    }

    const returnValue = { value: this.teams[this.nextIndex], done: false };
    this.nextIndex++;
    return returnValue;
  },
};
```

We can call the `next()` function to get the next team in the sequence.

```js
console.log(app.next()); // { value: 'Red Sox', done: false }
console.log(app.next()); // { value: 'Yankees', done: false }
console.log(app.next()); // { value: 'Astros', done: false }
console.log(app.next()); // { value: 'Dodgers', done: false }
console.log(app.next()); // { done: true }
```

We can use a while loop with our iterator.

```js
let next1 = app.next();

while (!next1.done) {
  console.log(next1.value);
  next1 = app.next();
}
```

Now, even though this is an iterator, is not iterable such as a built int Array or Map in JavaScript. We can not use a for...of loop with our iterator.

```js
for (const team of app) {
  console.log(team); // TypeError: app is not iterable
}
```

In order for this to be iterable and work with a for...of loop, we need to add a `Symbol.iterator` to our object.

## Iterator Example 2

In this example, we will do the same thing as the previous example, but we will use the built-in `Symbol.iterator`.

```js
const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};
```

So here, we are using `Symbol.iterator` to create a function where we are returning an object that has a `next()` function. The `next()` function returns the next team in the sequence. If the sequence is complete, it returns `done: true`.

We can use the iterator like this:

```js
const iterator = app[Symbol.iterator]();
console.log(iterator.next().value); // Red Sox
console.log(iterator.next().value); // Yankees
console.log(iterator.next().value); // Astros
console.log(iterator.next().value); // Dodgers
console.log(iterator.next().done); // true
```

We could also use this iterator in a `while` loop.

```js
let next = iterator2.next();

while (!next.done) {
  console.log(next.value);
  next = iterator2.next();
}
```

Or we could use it in a `for...of` loop.

```js
// For of loop
for (const team of app2) {
  console.log(team); // Res Sox, Yankees, Astros, Dodgers
}
```

So we're creating our own iterators. You may not use this stuff right now as a beginner, but it's good to know that this is how iterators work.
