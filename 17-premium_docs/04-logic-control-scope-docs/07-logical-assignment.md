# Logical Assignment

What we looked at in the last video was also technically logical assignment, however what we were evaluation was not necessarily the value that we were assigning. If what we are assigning is what we are evaluating, we can use a shorthand syntax.

## OR Logical Assignment (||=)

We can do something similar with `||=`. This will assigns the right side value only if the left is a falsy value.

Here is the long form of what we are going to do
```JavaScript
let a = null;

if (!a) {
  a = 10;
}
```

If `a` is truthy, it will be left alone. If it is falsy, it will be set to 10.

A shorter way would be to use the logical OR operator like we did in the last video.

```JavaScript
a = a || 10; 
```

An even shorter way would be to use the OR assignment operator 

```JavaScript
a ||= 10;
```

## AND Logical Assignment (&&=)

We can do something similar with the AND assignment operator

First, let's looka at the long version of what we're doing

```JavaScript
let b = 10;

if (b) {
  b = 20;
}

```

If `b` is `truthy` then we are setting it to 20. 

A shorter way would be to use the logical AND operator


```JavaScript
b = b && 20; 
```

We can make it even shorter by using the AND assignment operator

```JavaScript
b &&= 20; 
```

This returns 20 because the value of `b` is 10, which is truthy.

If we try this with a falsy value, we get that falsy value.

```js
let b = false;
b = b && 20; // false
```


## Nullish Coalescing Assignment (??=)

We can us `??=` to assign a value to a variable if it is null or undefined.

Here is the long version

```JavaScript
let c = null;

if (c === null || c === undefined) {
  c = 20;
}
```

Using the ?? operator

```JavaScript
c = c ?? 20;
```

Using the ??= assignment operator

```JavaScript
c ??= 20; 
```