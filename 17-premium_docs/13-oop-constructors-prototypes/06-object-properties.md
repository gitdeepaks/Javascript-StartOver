# Object Properties

Now, we're going to talk about properties and how we can add and remove them as well as look at some methods that we can use to get information about an object. Now, I just want to mention that a lot of this stuff, we have already talked about because they also pertain to `object literals`. So, we're going to talk about them again, but just in the context of `constructor functions`.

Let's use the same `Rectangle` constructor function that we used in a previous lesson. We're going to create a `rect1` object and log it to the console.

```js
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1); // Rectangle {name: "Rectangle 1", width: 10, height: 10, area: ƒ}
```

## Adding & Removing Properties

We add and remove properties the same way that we would with `object literals`. Let's add a `color` property to the `rect1` object.

```js
rect1.color = 'red';
console.log(rect1); // Rectangle {name: "Rectangle 1", width: 10, height: 10, area: ƒ, color: "red"}
```

We can also remove properties from objects using `delete`. Let's delete the `color` property from the `rect1` object.

```js
delete rect1.color;
console.log(rect1); // Rectangle {name: "Rectangle 1", width: 10, height: 10, area: ƒ}
```

## `hasOwnProperty` Method

We can use the `hasOwnProperty` method to check if an object has a specific property. Let's check if the `rect1` object has a `color` and a `name` property.

```js
console.log(rect1.hasOwnProperty('color')); // false
console.log(rect1.hasOwnProperty('name')); // true
```

## `Object.keys` Method

We can use the `Object.keys` method to get an array of all the properties of an object. Let's get the properties of the `rect1` object.

```js
console.log(Object.keys(rect1)); // (3) ["name", "width", "height"]
```

## `Object.values` Method

We can use the `Object.values` method to get an array of all the values of an object. Let's get the values of the `rect1` object.

```js
console.log(Object.values(rect1)); // (3) ["Rectangle 1", 10, 10]
```

## `Object.entries` Method

We can use the `Object.entries` method to get an array of all the properties and values of an object. Let's get the properties and values of the `rect1` object.

```js
console.log(Object.entries(rect1)); // (3) [Array(2), Array(2), Array(2)]
```

## Looping Through Object Properties

We can use a `for...of` loop to loop through all the entries of an object. Let's loop through the `rect1` object.

```js
for (let entry of Object.entries(rect1)) {
  console.log(entry); // (2) ["name", "Rectangle 1"], (2) ["width", 10], (2) ["height", 10], (2) ["area", ƒ]
}
```

This will give us all properties, even the method. We can use `typeof` to check if the value is a function. Let's loop through the `rect1` object and check if the value is a function.

```js
for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key}: ${value}`); // name: Rectangle 1, width: 10, height: 10
  }
}
```

We can also use a `for...in` loop to loop through all the properties of an object. Let's loop through the `rect1` object.

```js
for (let key in rect1) {
  console.log(`${key}: ${rect1[key]}`);
}
```

## `Object.assign` Method

We can use the `Object.assign` method to copy the properties and values of one object to another.

Let's create a new object with a `color` property

```js
const obj = { color: 'green' };
```

Now let's create a new object that has the properties of `rect` and `obj`

```js
const rect2 = Object.assign(obj, rect1);
console.log(rect2); // Rectangle {name: "Rectangle 1", width: 10, height: 10, color: "green"}
```

## Spread Operator

We can do the same exact thing with the spread operator (...). Let's create a new object that has the properties of `rect` and `obj`

```js
const rect3 = { ...obj, ...rect1 };
console.log(rect3);
```
