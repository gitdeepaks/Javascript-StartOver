# Constructor Functions

Object literals are very useful in many ways, but what if you need a way to create multiple instances of the same object? This is where constructor functions come in.

Constructor functions are functions that are essentially blueprints to create new objects. They define properties and behaviors that will belong to the new object. 

We have used constructor functions many times already. For instance, when we created a new `Date` object, we used the `Date` constructor function.

```js
const now = new Date();
```

Anytime we use the `new` keyword, we are using a constructor function. Now, we want to create our own constructor function. Let's create a constructor function for a `Rectangle` object.

```js
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  // We can also hardcode properties
  this.type = 'Rectangle';
}
```

We use the `function` keyword to create a function. We give it a name, which is `Rectangle`. The first letter is capitalized, which is a convention for constructor functions. We pass in the parameters that we want to use to create the object. We use the `this` keyword to set the properties of the object.

What is returned from the constructor function is the new object that is created. We could actually do this:

```js
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;

  return this;
}
```

But there is no need to because the `this` keyword is implicitly returned by default.

We can now create a new `Rectangle` object like this:

```js
const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1); // Rectangle {name: "Rectangle 1", width: 10, height: 10}
```

So as you can see, when we log the rectangle, it is an object and it is prefixed with `Rectangle`. This is because we used the `Rectangle` constructor function to create the object.

You'll also notice the `prototype` object. Inside of that is the constructor function. We can actually add methods to the `prototype` and we're going to get into that soon.

We can now access the properties of the object like this:

```js
console.log(rect1.name); // Rectangle 1
```

When we use the `new` keyword, the following things happen:

1. A new empty object is created.
2. The constructor function is called with the arguments that we passed in.
3. The `this` keyword is set to the new empty object.
4. The new object is returned from the constructor function.

## Multiple Instances

The main advantage of using a constructor function is that we can create multiple instances of the same object. Let's create another `Rectangle` object.

```js
const rect2 = new Rectangle('Rectangle 2', 20, 20);
console.log(rect2); // Rectangle {name: "Rectangle 2", width: 20, height: 20}
```

So you see, we did not need to create an entirely new constructor function to create a new `Rectangle` object. We just used the same constructor function and passed in different arguments. This is much more efficient than creating a new object literal every time we want to create a new object.

## Methods

We can also add methods to our constructor function. Let's add an `area` method to our `Rectangle` constructor function. Those of you that are a little more advanced may say we should add this to the `prototype` object. We will get into that later.

```js
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

console.log(rect1.area()); // 100
```

## `constructor` Property

Every object has a `constructor` property. This property is a reference to the constructor function that was used to create the object. Let's log the `constructor` property of the `rect1` object.

```js
console.log(rect1.constructor); // ƒ Rectangle(name, width, height) { this.name = name; this.width = width; this.height = height; this.area = function () { return this.width * this.height; }; }
```

## `instanceof` Operator

We can use the `instanceof` operator to check if an object was created by a constructor function. Let's check if the `rect1` object was created by the `Rectangle` constructor function.

```js
console.log(square1 instanceof Rectangle); // true
```

## Encapsulation & Abstraction In Practice

This brings use to the first of the four principles of object-oriented programming, which is `encapsulation`. Encapsulation is the idea that we should group related variables and functions together. We should also hide the implementation details from the outside world. This is what we have done with the `Rectangle` constructor function. We have encapsulated the properties and methods that belong to the `Rectangle` object.

One of the benefits of encapsulation is that we can change the implementation details without affecting the outside world. For instance, we could change the name of the `area` method to `calculateArea` without affecting the outside world.

```js
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.calculateArea = function () {
    return this.width * this.height;
  };
}
```

Another advantage is when we call `square1.calculateArea()` we don't have to pass in any arguments. This is because the `this` keyword is set to the `square1` object. We can access the properties of the `rect1` object inside of the `calculateArea` method.

## Abstraction

Abstraction is the idea that we should only expose the necessary details to the outside world. We should hide the implementation details. We have already seen this with the `Rectangle` constructor function. We have hidden the implementation details of the `Rectangle` object. We have only exposed the properties and methods that we want the outside world to use.

In the next lesson, we will look more at `literals` and `constructors` as well as `boxing` and `unboxing`.
