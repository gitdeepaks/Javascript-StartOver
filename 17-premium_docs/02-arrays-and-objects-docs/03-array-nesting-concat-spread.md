# Nesting, concat, spread & Array Object Methods

To get you more familiar with arrays, we are going to look at nesting, concatenation and the spread operator

Let's create our fruit array again

```javascript
const fruits = ['apple', 'pear', 'orange'];
```

and let's create a "berries" array

```javascript
const berries = ['strawberry', 'blueberry', 'rasberry'];
```

Now let's nest the berries array inside the fruit array

```javascript
fruits.push(berries);// ['apples', 'oranges', 'pears', ['strawberries', 'blueberries', 'raspberries']]
```

Now if we want to access blueberries for example, we can do so

```javascript
fruits[3][1]; // blueberries
```

We could also create a new variable and nest both arrays:
```JavaScript
const allFruits = [fruits, berries];
```

```javascript
allFruits[1][1]; // blueberries
```

#### concat()

We may not want to nest arrays, but we can concatenate them together into the same array using `concat()`.

```javascript
const newArr = fruits.concat(berries);// ['apples', 'oranges', 'pears', 'strawberries', 'blueberries', 'raspberries']
```

So now we have a single array with all of the values of both arrays. There is no nesting going on.

#### Spread operator (...)

The spread operator is a very useful operator that allows us to spread out an array into another array. We can use it to achieve the same type of stuff that concat() does. The spread operator also works with object literals, which we will talk about very soon.

```javascript
const newArr2 = [...fruits, ...berries]; // ['apples', 'oranges', 'pears', 'strawberries', 'blueberries', 'raspberries']
```


### Flatten an array

You can use the `flat()` method to flatten an array. It takes in a parameter for the depth. If you don't want a limit to the depth, you could use `Infinity`.

```js
const arr = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, [11, 12]]]];
x = arr.flat(Infinity);
```



### Static properties on the Array object

The Array object in JavaScript actually has some helpful methods directly associated with it that we can use.

#### Array.from()

Check if something is an array.

```js
Array.isArray(fruits); // true
Array.isArray('Hello'); // false
```

#### Array.from

Convert an array-like object into an array.

```js
Array.from('12345'); // ['1', '2', '3', '4', '5']
```

#### Array.of()

Create an array from a variable number of arguments.

```js
const a = 1;
const b = 2;
const c = 3;
y = Array.of(a, b, c); // [1, 2, 3]
```

