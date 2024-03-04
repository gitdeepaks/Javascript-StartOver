# Break & Continue

## Break Statement

We can create conditions inside of a loop to test for different things within each iteration. There may be cases where you want to stop the loop from running if a certain condition is met. In this case, you can use a `break` statement to break out of the loop.

Let's say we have a loop that prints Numbers 1 - 20, but if the number is 15, we want to exit the loop.

```JavaScript
for (let i = 1; i <= 20; i++) {
  if (i === 15) {
    console.log('Found the number 15!');
    break;
  }

  console.log('Number ' + i);
}
```

## Continue Statement

We can also use a `continue` statement to skip the rest of the code in the current iteration and continue to the next iteration.

```JavaScript
for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13!');
    continue;
  }

  console.log('Number ' + i);
}
```
