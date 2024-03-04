# Sealing & Freezing Objects

Let's use our `rectObj` object from the previous lesson to demonstrate `sealing` and `freezing`.

```js
const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};
```

## Sealing

Sealing an object prevents new properties from being added to it. Existing properties can still be modified or deleted. It sets the `configurable` flag to `false` for all existing properties. `writeable` and `enumerable` flags are not affected.

```js
Object.seal(rectObj);

// Check flags
let descriptor = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptor); // {name: {…}, width: {…}, height: {…}, area: {…}}
```

Let's try and add a new property to the `rectObj` object.

```js
rectObj.color = 'red';
console.log(rectObj); // NOT added
```

Try removing an existing property from the `rectObj` object.

```js
delete rectObj.width;
console.log(rectObj); // NOT removed
```

I can not add a new property, however I can still modify existing properties.

```js
rectObj.height = 20;
console.log(rectObj); // Rectangle {name: "Rectangle 1", width: 10, height: 20}
```

## Freezing

Freezing an object prevents new properties from being added to it and prevents existing properties from being modified or deleted. It sets the `configurable` and `writable` flags to `false` for all existing properties.

Let's create a new object called `circleObj` and freeze it.

```js
const circleObj = {
  name: 'Circle 1',
  radius: 10,
};
```

```js
Object.freeze(circleObj);

// Check flags
let descriptor = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptor); // {name: {…}, width: {…}, height: {…}}
```

Let's try adding, removing and changing a frozen object:

```js
// Try adding a new property
circleObj.color = 'red';
console.log(circleObj); // Not added

// Try deleting a property
delete circleObj.width;
console.log(circleObj); // Not deleted

// Try changing a property
circleObj.name = 'Rectangle 2 Updated';
console.log(circleObj); // Not changed
```

## Checking if an Object is Sealed or Frozen

We can use the `Object.isSealed` and `Object.isFrozen` methods to check if an object is sealed or frozen.

```js
console.log('rectObj sealed? ', Object.isSealed(rectObj)); // true
console.log('rectObj frozen? ', Object.isFrozen(rectObj)); // false
console.log('circleObj frozen? ', Object.isFrozen(circleObj)); // true
console.log('circleObj sealed? ', Object.isSealed(circleObj)); // true
```

Notice that `rectObj` is only frozen and not sealed. `circleObj` is both sealed and frozen. This is because if we freeze an object, it is automatically sealed.
