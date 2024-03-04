# For Loop

A loop is a **control structure**. It provides a way to do `iteration` in programming. Iteration is a process where you repeat something over and over again until a certain condition is or is met. This can help automate tasks.

There are many different kinds of loops in programming, and one of the most common loop is the `for` loop.

### For Loop Syntax

The syntax for a `for` loop is very similar in many languages. The syntax is:

```JavaScript
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```

- The **initial expression** usually initializes a variable/counter
- The **condition expression** is the condition that the loop will continue to run a long as it is met or until the condition is false
- The **increment expression** is the expression that will be executed after each iteration of the loop
- The **statement** is the code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

It is important to not that we use semi-colons to separate the different parts of the loop and not commas.

Here is a very simple example of a for loop that will print out the string "Number X" where X is the number of the iteration.

```JavaScript
for (let i = 1; i <= 10; i++) {
  console.log("Number " + i);
}

// Output:
// Number 1
// Number 2
// Number 3
// Number 4
// Number 5
// Number 6
// Number 7
// Number 8
// Number 9
// Number 10
```

The variable `i` is initialized to 1, and the condition is that the loop will continue to run until the value of `i` is greater than 10. The increment expression is that the value of `i` will be incremented by 1 each time the loop is run.

We could change the initial expression to 5 and it will start from 5 instead of 1.

```JavaScript
for (let i = 5; i <= 10; i++) {
  console.log("Number " + i);
}

// Output:
// Number 5
// Number 6
// Number 7
// Number 8
// Number 9
// Number 10
```

If I wanted to count up to 100 by 5s, I could change the initial expression to 0 and the increment expression to 5.

```JavaScript
for (let i = 0; i <= 100; i += 5) {
  console.log("Number " + i);
}

// Output:
// Number 0
// Number 5
// Number 10
// Number 15
// ...
// Number 100
```

## Block scope

Loops are considered a `block`, just like if statements. Remember that variables using `let` and `const` are scoped to the block they are defined in. So if we define a variable in a loop, we can not access it outside of the loop.

```JavaScript
for (let i = 0; i <= 100; i += 5) {
  const message = 'Number ' + i;
  console.log(message);
}

console.log(message); // ReferenceError: message is not defined
```

However, if we use `var`, we can access the variable outside of the loop. This is not a good practice, but it is possible.

```JavaScript
for (let i = 0; i <= 100; i += 5) {
  var message = 'Number ' + i;
  console.log(message);
}

console.log(message); // Number 100
```

## Testing Conditions

In many cases, you will be testing for a condition in a loop. Let's look at a simple example:

```JavaScript
for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my favorite number');
  }

  console.log('Number ' + i);
}
```

In the code above, we are testing the value of `i` to see if it is equal to 7. If it is, we will log the message "7 is my favorite number".

In the next video I will go over skipping an iteration and breaking out of a loop if a certain condition is true.

## Nested For Loops

`i` is a common variable name for a loop counter. Sometimes you will have a loop within a loop. In that case, you need to use a different variable name for each loop. `j` is a common variable name for a nested loop counter.

Here is an example where we loop through 1-10 and then have another loop in each iteration that shows that number multiplied by 1 - 10.

```JavaScript
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);
  for (let j = 1; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}
```

## Looping Over Arrays

Arrays have a `forEach()` method that allows you to loop over them. This is the most common way to loop over an array and we will be looking at `forEach()` and other array methods soon, however I do want to show you that we can loop over an array with a `for` loop.

```JavaScript
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

```

We simply specify the condition expression as long as `i` is less than the length of the array.

If you wanted to find a specific iteration and index, you could do something like this

```JavaScript
for (let i = 0; i < names.length; i++) {
  if (i === 2) {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}

```

### Infinite Loops

Infinite loops are something that you will probably run into at one point or another. They are loops that will never stop running. One common cause of this is forgetting to increment the counter. Then the condition is always met. This happens more with while loops, because of the way they are formatted.

To purposely create an infinite `for` loop, we could do this:

```JavaScript
for (let i = 0; i < Infinity; i++) {
  console.log('Number ' + i);
}
```
