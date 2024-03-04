# Class Inheritance

We looked at the ES6 class syntax in the previous lesson. In this lesson, we will look at inheritance in classes.

Inheritance is the ability to create a new class from an existing class. The new class will inherit all the properties and methods of the existing class. This is called a `subclass` or `child class`. The existing class is called a `superclass` or `parent class`.

Let's create a parent class of `Shape`. This class will have a constructor that takes in a name. It will also have a `logName` method that will log the name to the console. Here is an example:

```js
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(this.name);
  }
}
```

Now, let's create a subclass of `Shape` called `Rectangle`. This class will have a constructor that takes in a height and width. It will also have an `area` method that will return the area of the rectangle. Here is an example:

```js
class Rectangle extends Shape {
  constructor(name, height, width) {
    super(name);
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}
```

We did a couple of new things here. First, we used the `extends` keyword to create a subclass of `Shape`. This is how we tell JavaScript that `Rectangle` is a subclass of `Shape`. Second, we used the `super()` method to call the constructor of the parent class. We need to do this so that the `name` property is set on the instance. If we did not call `super`, the `name` property would not be set on the instance. Third, we added the `height` and `width` properties to the instance. Finally, we added the `area` method to the instance.

We can create a `Circle` class and do the same thing.

```js
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}
```

We can now create a new instance of `Rectangle` and/or `Circle` and call the `logName` method. Here is an example:

```js
const square = new Rectangle('Square', 10, 10);
square.logName(); // Square
```

Let's log the square variable to the console.

```js
console.log(square);
```

<img src="images/rect-class-inherit.png" width="500">

You can see that in the prototype, the constructor is the `Rectangle` class. The `prototype` property is the `Shape` class. This is how inheritance works in JavaScript. The `Rectangle` class inherits all the properties and methods of the `Shape` class. You can see the `logName()` function in the `Shape` prototype. This is how the `logName()` method is available on the `Rectangle` instance.

We can use `instanceOf` to check if our `square` instance is an instance of the `Rectangle` AND the `Shape` class. Which it is.

```js
console.log(square instanceof Rectangle); // true
console.log(square instanceof Shape); // true
```

## Overriding Methods

We can override methods in a subclass. Let's override the `logName` method in the `Rectangle` class.

```js
 logName() {
    console.log('Rectangle name is: ' + this.name);
  }

 square.logName(); // Rectangle name is: Square
```
