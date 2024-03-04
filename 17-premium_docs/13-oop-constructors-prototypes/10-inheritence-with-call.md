# Prototypical Inheritance & the `call()` Method

I've already talked about prototypical inheritance. We saw that the `Rectangle` constructor function as well as any array as well as many other things inherits from the `Object.prototype` or `objectBase`. This is why we can use the `toString()` method on our `Rectangle` object or on an array.

What I want to do now is show you how we can use inheritance with our own objects. I want to create a `Shape` constructor function that will be the base for other shapes. So we can create a `Circle`, `Square`, etc and have them all inherit from the `Shape` constructor function as well as any prototype methods we add to the `Shape` constructor function.

Let's create a very simple constructor function for a `Shape`:

```js
function Shape(name) {
  this.name = name;
}
```

The only property I am going to add to the `Shape` constructor function is the `name` property.

## `call()`

The `call()` method allows us to call a function with a given `this` value and arguments provided individually. The `call()` method is a predefined JavaScript method. It can be used for a variety of purposes. We will use it to call the `Shape` constructor function from the `Rectangle` constructor function.

```js
function Rectangle(name, height, width) {
  Shape.call(this, name);

  this.height = height;
  this.width = width;
}
```

```js
const rect1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rect1); // Rectangle { name: 'Rectangle 1', height: 10, width: 10 }
```

As you can see, we are calling the `Shape` constructor function from the `Rectangle` constructor function using `call()`. We are passing in the `this` value and the `name` property. This will set the `name` property on the `Rectangle` object. Then we can add the `height` and `width` properties to the `Rectangle` object.

### Why use `call()`?

If we did not use the `call()` method, we would get an error that says **Uncaught TypeError: Shape is not a constructor**. This is because the `Shape` constructor function would be called as a regular function and in a regular function, the `this` value is the `window` object. We need to use the `call()` method to set the `this` value to the `Rectangle` object.

Let's do the same with a `Circle` constructor function:

```js
function Circle(name, radius) {
  Shape.call(this, name);

  this.radius = radius;
}
```

```js
const circle1 = new Circle('Circle 1', 10);
console.log(circle1); // Circle { name: 'Circle 1', radius: 10 }
```

## Inheriting Prototype Methods

Let's add a `logName()` method to the `Shape` constructor function and try to use it on the `Rectangle` object

```js
Shape.prototype.logName = function () {
  console.log(`Shape name is: ${this.name}`);
};

rect1.logName();
```

This will throw an error: **Uncaught TypeError: rect1.logName is not a function**. The prototype methods are not inherited automatically from the `Shape` constructor function.

We can fix this by using the `Object.create()` method. We're going to set the `Rectangle.prototype` to the `Shape.prototype` using the `Object.create()` method.

```js
Rectangle.prototype = Object.create(Shape.prototype);
```

We have to use the `Object.create()` method because if you just set the `Rectangle.prototype` to the `Shape.prototype`, the `constructor` property and the prototype chain will be broken.

Now, let's try to call the `logName()` method on the `Rectangle` object:

```js
rect1.logName(); // Shape name is: Rectangle 1
```

It works! We can also call the `logName()` method on the `Circle` object:

```js
circle1.logName(); // Shape name is: Circle 1
```

So again, JavaScript will look for `logName()` directly on the `Rectangle` or `Circle` object. It will not find it, so it will look at the object's prototype which is the `Shape.prototype`. It will find the `logName()` method and will use it.

## Set constructor property

Right now, if we log the constructor of the `Rectangle` object, we will get the `Shape` constructor function:

```js
console.log(rect1.constructor); // [Function: Shape]
```

This may cause some unexpected results in the future, so you probably want to set the `constructor` property on the `Rectangle.prototype` to the `Rectangle` constructor function.

```js
Rectangle.prototype.constructor = Rectangle;

console.log(rect1.constructor); // [Function: Rectangle]
```

We can do the same for the `Circle` constructor function:

```js
Circle.prototype.constructor = Circle;
```

## Polymorphism - Overwriting Prototype Methods

You should also be able to overwrite prototype methods. Let's add a `logName()` method to the `Rectangle` constructor function:

```js
Rectangle.prototype.logName = function () {
  console.log(`Rectangle name is: ${this.name}`);
};

rect1.logName(); // Rectangle name is: Rectangle 1
```

This is an example of polymorphism. We are able to have the same method name on different objects and have different results. We could have 100 different objects and all of them could have a `logName()` method and they would all do something different.
