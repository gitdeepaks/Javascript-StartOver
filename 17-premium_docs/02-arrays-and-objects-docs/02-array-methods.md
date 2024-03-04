# Array Methods

As we talked about earlier, arrays are a special kind of `object`. Objects have `properties` and `methods`. In JavaScript, those methods are stored in the `prototype chain`. We'll talk much more about prototypes later on, but we already saw that both `string objects` and `number objects` have properties and methods in their prototypes.

### Array methods

#### push()

Push adds an element to the end of the array.

```js
arr.push(6); // [1, 2, 3, 4, 5, 6]
```

#### pop()

Pop removes the last element of the array.

```js
arr.pop(); // [1, 2, 3, 4, 5]
```

#### unshift()

Adds an element to the beginning of the array.

```js
arr.unshift(0); // [0, 1, 2, 3, 4, 5]
```

#### shift()

Takes an element off of the start of the array.

```js
arr.shift(); // [1, 2, 3, 4, 5]
```

#### reverse()

I'll let you figure out what this does.

```js
arr.reverse(); // [5, 4, 3, 2, 1, 0]
```

### Returning values from an array

The methods above are all used to manipulate a current array. These methods are typically used to return some kind of value from an array.

#### includes()

Returns `true` if the array contains the value you pass in.

```js
arr.includes(5); // true
```

#### indexOf()

Returns the index of the value you pass in.

```js
arr.indexOf(5); // 4
```

#### Return string from array

```js
arr.toString(); // "1,2,3,4,5"
arr.join(); // "1,2,3,4,5"
```

### slice() and splice()

These are similar in that they both are used to return a new array using a subset of the current array.

#### slice()

slice() takes in two parameters. One being the starting index and one being the ending index.

```js
const newArr = arr.slice(1, 3); // [2, 3]
```

#### splice()

splice() takes in the starting index and the number of elements from the staring index. If you leave off the number of elements, it will take from the starting index and on.

```js
const newArr = arr.splice(1, 3); // [2, 3, 4]
```

Another difference is that slice() does not modify the original array and splice() does. If you log the original array, you will see those elements are gone.

To pluck out a single value, use splice and pass the start index and then 1 as the second arg because you only want to remove that element.

```js
const newArr = arr.splice(2, 1); // [3] the original array would be [1, 2, 4, 5]
```

You can also start from the end with a negative value

```js
const newArr = arr.slice(-2); // [4, 5]
```


### Chaining methods

You can also chain these methods together. Just be aware of what is being returned from the previous method.

```js
x = arr.concat(arr2).reverse();
x = arr3.slice(1, 3).toString();
```