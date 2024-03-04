# For Of Loop

The `for of` loop is used to loop through iterable objects, such as arrays and strings as well as some things that we have not talked about yet like maps and sets. They can replace `for` loops in many cases.

### For Of Syntax

```JavaScript
for (variable of iterable) {
  // do something
}
```

Let's look at a simple example that loops over an array.

```JavaScript
const arr = [1, 2, 3, 4, 5];

for (const number of arr) {
  console.log(number);
}

// 1 2 3 4 5
```

This is cleaner than a `for` loop because we simply give the value for each iteration a name and then we can use that name to access the value, rather than creating a condition expression using the array length and then using `i` as the index.

## Iterating Over Strings

You may not think of a string as an iterable, but it is. If you needed to loop over every letter in a string, you could.

```JavaScript
const greet = 'Hello World';

for (const letter of greet) {
  console.log(letter);
}

// H E L L O W O R L D
```

## Iterating Over Maps

We haven't talked about Maps yet, but they are very similar to arrays. I will go over Maps later, but just to show you a quick example:

```JavaScript

  const map = new Map();
  map.set('name', 'John');
  map.set('age', 30);

  for (const [key, value] of map) {
    console.log(key, value);
  }
```

There are other objects like sets and generators that we can use with `for of` loops, but I will go over that stuff later on. I don't want to overwhelm you with stuff that you won't be using very often. At least right now.
