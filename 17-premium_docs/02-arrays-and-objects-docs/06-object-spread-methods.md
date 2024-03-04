# Object Nesting, spreading, methods and more

So we saw how to create object literals in JavaScript. I want to go a bit deeper and look at nesting, the spread operator as well as some static methods on the Object constructor.

First, I do want to show you another way of creating objects that you may run into and that is by using the Object constructor.

```js
const todo = new Object();
// Same as
const todo = {};
```

We can add properties to the object using dot notation.

```js
todo.id = 1;
todo.title = 'Buy milk';
todo.completed = false;
```

Later on when we get more into OOP, I'll show you how we can create our own object constructors that we can use to create multiple instances of the same object. So that we can do something like this:

```js
const todo1 = new Todo();
```

For now, we'll stick with static object literals.

### Nesting objects

We can put objects inside other objects.

```js
const person = {
  address: {
    coords: {
      lat: 42.3601,
      lng: -71.0589,
    },
  },
};
```

If we want to access nested objects, we simply use dot notation

```js
person.address.coords.lat;
```

### Spread operator

The spread operator is used to **spread** across object properties into a new object. Let's first look at another example of nesting.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 4 };

const obj3 = { obj1, obj2 }; // { { a: 1, b: 2 }, { c: 1, d: 4 } }
```

### Object.assign()

We can do the same thing we did with the spread operator with the Object.assign() method.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 4 };

const obj3 = Object.assign({}, obj1, obj2); // { a: 1, b: 2, c: 1, d: 4 }
```

The first param we pass in is an empty object, then each one after is an object we want to spread into the empty object.

In the code above, we are simply nesting. We can use the spread operator to spread the properties instead of just nesting the entire object.

```js
const obj3 = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 1, d: 4 }
```

### Arrays of objects

In many cases, you will be dealing with arrays of objects.

```js
const people = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Mike' },
];
```

We can access the name **Sara** like this:

```js
people[1].name; // Sara
```

### Object methods

The Object() constructor has some helpful methods that we can use, just like the `Number()` and `String()` constructors. We already looked at `Object.assign()`, let's look at some others.

#### keys()

Get an array of all the keys in an object.

```js
Object.keys(person); // ['name', 'age', 'address']
```

#### Getting the length of an object

We can't use the `length` property directly on an object. If I do the following, it will look for a 'length' property.

```js
person.length; // undefined
```

However, we can first get the keys of the object and then use the length property on the keys array.

```js
Object.keys(person).length; // 3
```

#### values()

We can get an array of all the values in an object.

```js
Object.values(person); // [ 'John', 30, { address } ]
```

#### entries()

Get an array of key/value pairs

```js
Object.entries(person); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'address', { address } ] ]
```

#### hasOwnProperty()

Get a boolean indicating if the object has the property

```js
person.hasOwnProperty('name'); // true
```
