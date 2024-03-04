# Classes

We have talked about OOP quite a bit and as I've said before, JavaScript does not have classes at its core. However, The ES6 spec does have classes and they are very similar to classes in other languages. I would say that most OOP languages use classes, including Java, C#, C++, PHP and Objective-C. If you have worked with a language that uses classes, then this should be pretty familiar to you.

What I mean when I say JavaScript does not have classes at it's core is that the code that is actually being run looks like what we have already learned. Constructor functions, prototypes, etc. However, ES6 gave us what is called a "syntactic sugar" for classes. This means that we can write code that looks like classes, but it is actually just constructor functions and prototypes under the hood.

It has become pretty popular to use classes in JavaScript. Many people think that it is a much easier and less confusing syntax. Also, a lot of people are coming from class-based languages. So, it is nice to have a syntax that is similar to what they are used to. What you use is completely up to you. We saw the basics of constructors/prototypes, now let's get into classes.

## Creating a Class

To create a class, we use the `class` keyword. We then give it a name. The name should be capitalized. This is just a convention. It is not required. We then use the `constructor` keyword to create a constructor function. This is the function that will be called when we create a new instance of the class. We can then add properties to `this` just like we would in a constructor function. We can also add methods to the prototype just like we would in a constructor function. Here is an example:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}
```

We can then create a new instance of the class by using the `new` keyword. We then call the class like it was a function. We pass in the arguments that the constructor function expects. Here is an example:

```js
const square = new Rectangle(10, 10);
```

We can then access the properties and methods on the instance just like we would with any other object. Here is an example:

```js
console.log(square.area()); // 100
```

In the `area()` method, we used `this` to access the properties. We can also access methods with `this`. Let's add a few more methods, including a `logArea()` method and access `area()` within it.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.height + this.width);
  }

  isSquare() {
    return this.height === this.width;
  }

  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

console.log(square.perimeter()); // 40
console.log(square.isSquare()); // true
square.logArea(); // Rectangle Area: 100
```

## Under The Hood

Let's log the `square` variable that we created from the class to the console:

```js
console.log(square);
```

Notice we see the same thing that we have been seeing when we use constructors/prototypes.

<img src="images/rect-class-console.png" width="500">

It is a `Rectangle` object with a `height` property of `10` and a `width` property of `10`. It also has an `area` method on the prototype. This is exactly what we would expect.

As I mentioned before, classes are just syntactic sugar for constructor functions and prototypes. So, what is actually happening when we create a class? Let's take a look:

```js
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function () {
  return this.height * this.width;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};

Rectangle.prototype.isSquare = function () {
  return this.height === this.width;
};

Rectangle.prototype.logArea = function () {
  console.log('Rectangle Area: ' + this.area());
};

const square = new Rectangle('Square', 20, 20);
console.log(square.perimeter()); 
console.log(square.isSquare()); 
square.logArea(); 
```

The same code that we have been writing throughout this section. The only difference is that we are using the `class` keyword and the `constructor` keyword and the code looks a bit nicer.

It's up to you on how you want to write your code. My job is just to show you the different ways that you can write it. Some people like the constructor/prototype method instead of using the abstraction of classes. Some people like neat structure of classes. I prefer classes most of the time, but I'll use either.
