We have been working with `object literals` throughout this course. They are the simplest form of an object and great when you only need one instance of an object, which is usually the case when building simple applications. But what if you need to create multiple instances of an object? That's where `constructor functions` come in, which I will get to soon. But first, let's look at `object literals` a little closer. I also want to talk about the `this` keyword, which is used a lot in object oriented programming.

Let's say that we have a program that works with shapes, for whatever reason. I want to create a `Rectangle` object. So I'll use an object literal in this case. Let's give it some properties.

```js
const rect = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};
```

We can easily access properties with dot notation.

```js
console.log(rect.name); // Rectangle 1
```

This is nothing new right? We've been doing stuff like this all along. One thing that we haven't done is added a method to an object literal. Let's add a method to our `Rectangle` object that calculates the area of the rectangle.

```js
const rect = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
  area: function () {
    console.log('Show area');
  },
};
```

We can call the method like this:

```js
rect.area(); // Show area
```

## `this` keyword

The `this` keyword is used to refer to the current object. Let's have our `area` method return the area of the rectangle, which would be `width * height`.

```js
const rect = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rect.area()); // 100
```

As you can see, we can access the properties of the object using `this`. This is very useful when you have multiple objects that have the same properties and methods. You can use the `this` keyword to access the properties of the current object.

The `this` keyword seems to be confusing to a lot of people. It's actually pretty simple. It just refers to the current object. If you are in a method, it refers to the object that the method is part of. If you are in a function or the global scope, it refers to the global object, which is the `window` object in the browser.

Let's go outside of the object literal and try to access the `this` keyword.

```js
console.log(this); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
```

It gives us the window object. Remember, when we run our script, the first thing that the `execution context` does is create the `global object`, which is the `window` object in the browser. So `this` refers to the `window` object.

## Object Literal Drawbacks

There are a few drawbacks to using object literals. The first is that you can't create multiple instances of the same object. Let's say that we want to create another rect object. We can't do this with an object literal. We need to basically just create a new one from scratch.

```js
const rect2 = {
  name: 'Rectangle 2',
  width: 20,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rect2.area()); // 400
```

Imagine if we needed to create 100 rects. We would have to create 100 different object literals. This is not very efficient. We need a way to create multiple instances of the same object. This is where `constructor functions` come in, which we will talk about in the next lesson.
