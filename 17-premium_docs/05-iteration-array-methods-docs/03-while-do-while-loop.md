# While Loops & Do While Loops

In the last video, we looked at `for` loops, which are used to iterate over a block of code until a condition is met. A `while` and `do while` loop does the same thing using a different syntax. They work a bit different as well.

### While Loop Syntax

The syntax for a while loop is very similar in many languages. The syntax is:

```JavaScript
while ([conditionExpression]) {
  statement
}
```

There are a few differences between the `for` loop, which we have already talked about, and the `while` loop.

In a `while` loop, the variable is initialized before the loop runs and it is initialized outside of the loop.

Let's look at a simple example and print Number 1-10, like we did with the `for` loop.

```JavaScript
let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}
```

For many cases, you could use a `while` or a `for` loop and achieve the same result, but a rule that many programmers follow is to use a `for` loop when you know the number of times you want to run the loop and use a `while` loop when the number of times the loop will run is unknown. That is not a mandatory convention, but something that a lot of people do.

### Looping Over Arrays

We can loop over arrays with `while` loops as well

```JavaScript
const arr = [10, 20, 30, 40];

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
```

### Nested While Loops

We can nest `while` loops to create a loop that runs a loop inside of a loop.

```JavaScript
let i = 1;

while (i <= 10) {
  console.log('Number ' + i);
  let j = 1;
  while (j <= 10) {
    console.log(i + ' * ' + j + ' = ' + i * j);
    j++;
  }
  i++;
}
```

## Do While Loops

The `do while` loop is a little different from the `while` loop. The `do while` loop will always run at least once, even if the condition is false.

So the answer to the question, "when would I want to use a `do while` loop?" is when you **always** want to run the block of code at least once.

The syntax for a `do while` loop is:

```JavaScript
do {
  statement
} while ([conditionExpression]);
```

Let's look at a simple example:

```JavaScript
let i = 1;

do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);
```

Now let's change the `i` value to 21. This means that the condition expression is never met, however, the console.log() will run at least once, even if the condition is false.

```JavaScript
let i = 21;

do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);
```

You can also use the `break` and `continue` statements with while and do while loops.
