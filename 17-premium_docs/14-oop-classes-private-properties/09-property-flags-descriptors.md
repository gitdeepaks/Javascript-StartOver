# Property Flags & Descriptors

Property flags are internal attributes of a property. They are not accessible directly, but we can use `Object.getOwnPropertyDescriptor`. The following is a list of available property flags:

- `[[Configurable]]` - if `true`, the property can be deleted and these attributes can be modified, otherwise not
- `[[Enumerable]]` - if `true`, the property will be returned in a `for...in` loop, otherwise not
- `[[Writable]]` - if `true`, the value of the property can be changed, otherwise not
- `[[Value]]` - the value of the property

## `getOwnPropertyDescriptor` Method

When we create a new object, wether it is an object literal or an instance from a constructor or a class, the flags for all properties are set to `true` by default. The `getOwnPropertyDescriptor()` method returns an object with property flags. This object is called a property descriptor.

Before, we create our own object and experiment, let's check the flags for the `Math.PI` property.

```js
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor); // {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
```

As you can see, the property flags of the `Math.PI` property are `false`. If we try and change the value of the `Math.PI` property, it will not work.

```js
Math.PI = 3;
console.log(Math.PI); // 3.141592653589793
```

Let's create an object literal called `rectObj` object to work with. It will have a `name`, `height` and `width` property. You could also use a constructor or a class to create the object, but an object literal is easier to work with.

```js
const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

console.log(rectObj); // {name: "Rectangle 1", width: 10, height: 10}
```

## Get Property Flags

Let's get the property flags of the `name` property of the `rectObj` object.

```js
console.log(Object.getOwnPropertyDescriptor(rectObj, 'name'));
// {value: "Rectangle 1", writable: true, enumerable: true, configurable: true}
```

They are all set to `true` by default.

## Change Property Flags

We can use the `Object.defineProperty` method to change the property flags of an existing property. Let's change the property flags of the `name` property of the `rectObj` object.

```js
Object.defineProperty(rectObj, 'name', {
  writable: false,
  enumerable: false,
  configurable: false,
});
```

if we check again the property flags of the `name` property, we can see that they have changed.

```js
console.log(Object.getOwnPropertyDescriptor(rectObj, 'name'));
// {value: "Rectangle 1", writable: false, enumerable: false, configurable: false}
```

Now let's try and change the name value to something else:

```js
rectObj.name = 'Rectangle 1 Updated';
console.log(rectObj.name); // Rectangle 1
```

The name was not updated because we set the `writable` flag to `false`. Let's try and delete the `name` property:

```js
delete rectObj.name;
console.log(rectObj.name); // Rectangle 1
```

The `name` property was not deleted because we set the `configurable` flag to `false`.

Let's try and enumerate through the properties of the `rectObj` object. I'm going to use a `for...of` loop on the Object.entries method to get the key and value of each property.

```js
for (let [key, value] of Object.entries(rectObj)) {
  if (typeof value !== 'function') {
    console.log(`${key}: ${value}`);
  }
}
```

Notice the `name` property was not returned because we set the `enumerable` flag to `false`.

So we have really limited the access to the `name` property of the `rectObj` object. We can't change the value, delete the property, or enumerate through it. We can't even change the property flags of the `name` property because we set the `configurable` flag to `false`.

## `Object.getOwnPropertyDescriptors` Method

The `Object.getOwnPropertyDescriptors` method returns an object with all the property flags of the object.

```js
console.log(Object.getOwnPropertyDescriptors(rectObj));
// {name: {…}, width: {…}, height: {…}, area: {…}}
```

They are all true except for the `name` property, because we changed them.
