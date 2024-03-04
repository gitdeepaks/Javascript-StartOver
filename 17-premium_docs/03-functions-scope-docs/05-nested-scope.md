# Nested Scope

### Nested Functions

In JavaScript, we can also define a function within a function. This is called a `nested function`. This relates to something called `closures`, which we will talk about later. When it comes to scope, any variable defined in the parent function is available to the nested/child function, but not the other way around.

```js
function first() {
  const x = 500;

  function second() {
    const y = 600;
    console.log(x); // 500
  }

  console.log(y); // ReferenceError: y is not defined

  second();
}

first();
```

As you can see, the `x` variable is defined in `first()`, so we have access to it in the child function, `second()`. However, the `y` variable is defined in `second()`, so we can't access it in the parent function, `first()`. We can access variables from parents but can not access variables from child functions.

### Nested If

Just like with functions, we can access the parent block scope, but not the nested/child scope

```JavaScript
if (true) {
  const x = 100;
  // Nested if
  if (x === 100) {
    const y = 200;
    console.log(x + y); // 300
  }

  // console.log(y); // ReferenceError: y is not defined
}

// console.log(y); // ReferenceError: y is not defined

```
