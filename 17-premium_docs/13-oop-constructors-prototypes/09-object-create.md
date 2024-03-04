# Using Object.create()

The `Object.create()` method creates a new object, using an existing object as the prototype of the newly created object. This is an alternate way to create objects and set the prototypes of an object.

Let's look at creating a rectangle object using a constructor function and adding a few prototype methods:

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

const rectangle1 = new Rectangle(4, 4);
console.log(rectangle1.isSquare(), rectangle1.area());

```

Nothing new here. We have already learned this. I want to show you another way to do this using the `Object.create()` method.

First, we create an object that will be the prototype(s) of the `Rectangle` object:

```js
const rectanglePrototypes = {
  isSquare: function () {
    return this.height === this.width;
  },
  area: function () {
    return this.height * this.width;
  },
  perimeter: function () {
    return 2 * (this.height + this.width);
  },
};
```

I'm going to put the Object.create() method inside of a function called `createRectangle()`. This function will take in the `height` and `width` and return a new `Rectangle` object:

```js
function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}

const rectangle2 = createRectangle(5, 8);
console.log(rectangle2, rectangle2.isSquare());
```

As you can see, we get the same result as before. We have created a new `Rectangle` object using the `Object.create()` method. We have also set the prototype of the `Rectangle` object to the `rectanglePrototypes` object.

Both examples do the same thing and give the same result. The `Object.create()` method is just another way to create objects and set the prototype of an object.

When we use the `new` keyword, the prototype of the object includes the constructor function's prototype property. This happens automatically. When we use the `Object.create()` method, we can manually set the prototype to any object we want.

You could use either method to create objects and set prototypes. Using the `new` keyword is more common, but you could use either method.

`Object.create()` is also very useful when we use inheritance. We will learn about inheritance in the next lesson.
