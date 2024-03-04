# Math Object

JavaScript has a built-in object called `Math`. This object has a bunch of methods that have to do with mathematical operations. It comes in handy when you need to do things like find the square root or absolute value of a number, when you need to round up or down or when you need to generate a random number. Let's see some examples.

You can see what is available with:

```JavaScript
console.log(Math);
```

#### Math.abs()

Returns the absolute value of a number

```JavaScript
Math.abs(-5); // 5
```

#### Math.round()

Returns the rounded value of a number

```JavaScript
  Math.round(5.5); // 6
```

#### Math.ceil()

Returns the smallest integer greater than or equal to a number (rounds up)

```JavaScript
Math.ceil(5.5); // 6
```

#### Math.floor()

Returns the largest integer less than or equal to a number (rounds down)

```JavaScript
Math.floor(5.5); // 5
```

#### Math.sqrt()

Returns the square root of a number

```JavaScript
Math.sqrt(25); // 5
```

#### Math.pow()

Returns the value of a number raised to the specified power

```JavaScript
Math.pow(5, 2); // 25
```

#### Math.min()

Returns the smallest of the two numbers

```JavaScript
Math.min(5, 10); // 5
```

#### Math.max()

Returns the largest of the two numbers

```JavaScript
Math.max(5, 10); // 10
```

#### Math.random()

Returns a random number between 0 and 1

```JavaScript
Math.random(); // 0.83929
```

This returns a decimal. If you want let's say a random integer between 1 and 10, you can multiply the result of Math.random() by 10 and round it down.

```JavaScript
Math.floor(Math.random() * 10) + 1; // 5
```

We had to round down first with `Math.floor()` or we would get a decimal. We also added 1 otherwise we would get a number between 0 and 9. This is important to understand for the next challenge.

To get a random integer between two numbers, you can do

```JavaScript
const min = 10;
const max = 20;
x = Math.floor(Math.random() * (max - min + 1)) + min; // 17
```
