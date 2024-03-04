# Generators

Generators are similar to iterators. In fact, they are basically used to "generate" iterators. You can use them for the same thing, but they have a much easier syntax and are easier to maintain. Generators are functions that can be paused and resumed. They are created using the `function*` syntax. We can use the `yield` keyword to pause the function. We can also use the `yield*` keyword to delegate to another generator function.

Let's look at an example.

```js
function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

const iterator = createTeamIterator(teams);

console.log(iterator.next().value); // Red Sox
console.log(iterator.next().value); // Yankees
console.log(iterator.next().value); // Astros
console.log(iterator.next().value); // Dodgers
console.log(iterator.next().done); // true
```

As you can see, we get the same results as we did with the iterator. The only difference is that the syntax is much easier to read and maintain.

We can also use a for...of loop with a generator.

```js
for (const team of createTeamIterator(teams)) {
  console.log(team);
}
```

Or we can use a spread operator.

```js
console.log([...createTeamIterator(teams)]);
```

We can also use `destructuring` to get the values.

```js
const [first, second, third] = createTeamIterator(teams);
console.log(first, second, third);
```
