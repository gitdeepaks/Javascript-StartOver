# reduce() Method

The `reduce()` method can be a bit tricky, but it can be very useful. It takes an array and reduces it to a single value. A common use case is to get a total of all the values in an array. This would be useful in a shopping cart application.

## reduce() Syntax

```js
reduce(
  function (previousValue, currentValue, currentIndex) {
    /* … */
  },
  [initialValue]
);
```

The callback function that is passed into the `reduce()` method takes three arguments:

- `previousValue` or `accumulator` - The value returned from the last time the callback function was called. This is sometimes called the "accumulator".
- `currentValue` - The value of the current element being processed in the array.
- `currentIndex` - The index of the current element being processed in the array.

You can also pass in an `initialValue` after the callback function. This is the value to use as the first argument to the first call of the callback function. If no initial value is supplied, the first element in the array will be used.

### Simple Example

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 55
```

We could shorten it up to:

```js
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum2); // 55
```

If I made the initial `previousValue`/`accumulator` 10, we would get 65. 10 would be the starting point
```js
const sum2 = numbers.reduce((acc, curr) => acc + curr, 10);

console.log(sum2); // 65
```


If we were to do the same thing using a `for of` loop, it would look like this:

```js
const sum3 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
  return acc;
};

console.log(sum3()); // 55
```

### Using reduce with objects
You will most likely be working with objects, so let's look at an example of products where we want to get a sum of all of the `price` properties.

```JavaScript
const cart = [
  { name: 'Prooduct 1', price: 130 },
  { name: 'Product 2', price: 150 },
  { name: 'Product 3', price: 175 },
];

const total = cart.reduce(function (accumulator, product) {
  return accumulator + product.price;
}, 0);

console.log(price); // 455
```
