# Block Scope

`Block scope` is the scope that is available to all code inside of a `block`. A block is something like an if statement or any kind of loop. I know we haven't talked about these yet, but we'll get to them soon. Just know that they have their own scope.

```js
const x = 100;

if (true) {
  console.log(x); // 100
  const y = 200;
  console.log(x + y); // 300
}

console.log(y); // ReferenceError: y is not defined
```

As you can see, we can not access `y` in the global scope because it belongs to the if statement block.

### Loop Example

I know we have not gone over loops yet, but I want to show you that they do have their own block scope.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined
```

As you can see, `i` is only available inside of the loop.

### let & const vs var

For all of these examples, I used `const` to define my variables. Both `const` and `let` are block scoped. `var` on the other hand is NOT. Let's try an example with var.

```js
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined
console.log(c); // 500
```

If you use `var` with a for loop, it will also be accessible outside of the loop, which you do not want.

```JavaScript
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i); // 11
```

One thing I do want to mention is that `var` is at least **function-scoped**. So if you create a variable in a function with `var`, it will not be accessible outside of the function.

```js
function run() {
  var d = 100;
  console.log(d);
}

run();

console.log(d); // ReferenceError: d is not defined
```

When it comes to which of the 3 to use, I would suggest using `let` or `const`. Unless you have a good reason to use `var`. Having variables that are not accessible outside of their scope is usually a good thing.

Another difference with `var` is that when you create a global variable using it, that variable is put on the `window` object.

```JavaScript
const foo = 1;
var bar = 2;
```

You can check by typing `window` in your console and you will see `bar` will be there
