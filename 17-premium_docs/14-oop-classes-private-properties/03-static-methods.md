# Static Methods

Static methods are methods that are available on the class itself. They are not available on the instances of the class. Static methods are often used to create utility functions or to hold data that is shared across all instances of the class. Let's create our `Shape` and `Rectangle` class from the previous example and add a static method called `getClassName`.

A static method is created the same way as a regular method. The only difference is that we use the `static` keyword.

```js
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(this.name);
  }

  static getClassName() {
    return 'Shape';
  }
}
```

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

  static getClassName() {
    return 'Rectangle';
  }
}
```

Let's try to crate an instance of a `Rectangle` and call the `getClassName` method.

```js
const rect = new Rectangle('Rectangle', 10, 20);

rect.getClassName(); // TypeError: rect.getClassName is not a function
```

This does not work, because the `getClassName` method is not available on the instance of the `Rectangle` class. It is only available on the class itself.

```js
console.log(Shape.getClassName());
console.log(Rectangle.getClassName());
```

So if you have a method where you don't need to access the instance of the class, you can make it a static method. This way you can call it directly on the class.
