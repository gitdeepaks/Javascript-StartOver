# What Is OOP?

Now we're going to get into `Object Oriented Programming` or `OOP` using JavaScript. The way that we write object-oriented code with JavaScript is a little different than some other languages and even a bit controversial and I will get to that soon, but first, I want to talk about what OOP actually is outside of specific languages.

`OOP` is a **programming paradigm**. In short, a programming paradigm is a way of thinking about programming, and a way of structuring your code. You could dumb it down to the word "style". There are many different programming paradigms and certain languages are built for certain paradigms. The most common are `procedural`, `object-oriented` and `functional`. You can read more about paradigms [here](https://www.freecodecamp.org/news/what-exactly-is-a-programming-paradigm/)

What we have been doing so far is mostly `procedural` programming, although, we have definitely used some elements of `OOP` and even `functional` programming. JavaScript is an extremlet flexible language and you can do things in many different ways. Which can be a good thing, because you have a lot of freedom, but it can be bad because it can get really confusing and also cause you to sometimes write code that isn't that great. In `procedural` programming, we write functions that perform actions, and we call those functions to perform those actions. In `object-oriented` programming, we write objects that contain both data and functions, and we interact with those objects to perform actions. Some languages force you to write all of your code within objects.

## What Is An Object?

An object is a 'self-contained' piece of code and is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. So, essentially, an object is a **collection of properties and methods**. Objects are used as building blocks and can interact with one another.

We have already had some experience working with objects such as `Math` and `Date`. In fact, just about everything in JavaScript is an object. Primitive data types like strings are not objects, however they are treated like objects when we use methods like `toUpperCase()`. As I stated earlier in the course, when we use a method like that on a string, JavaScript is actually creating a temporary object behind the scenes to perform the action. This is called a `wrapper object`.

JavaScript has many was to create objects incliding object literals, constructor functions, which we'll be covering soon, classes, factories, etc.

Any entity in your application could be an object. For example, if you are building a blog, you might use objects like `users` and `posts`. Just to give you a better idea of what would be looked at as an object, here is a list of random objects:

- `user`
- `post`
- `comment`
- `UI component`
- `product`
- `order`
- `cart`
- `customer`
- `employee`
- `message`
- `book`

## Why Use OOP?

There are a lot of reasons to use OOP for certain projects, but the main reason is that it makes your code easier to understand and easier to maintain. It helps prevent what we call 'Spaghetti Code`. OOP is also very flexible and can be used to build complex applications. It is also very easy to reuse code in OOP, which is one of the main reasons why it is so popular.

## When To Use OOP

Where OOP really shines and makes sense is when you are building a complex application and will need multiple instances of an object. It's also helpful if youre working on a team. If you are building a relatively simple application, you probably should not use OOP. For the stuff that we have done up to this point, I would not use it. And when I say I would not use OOP, I mean I wouldnt create custom classes or constructor functions. In JavaScript, we're always using objects, so we're always using some aspect of OOP.

## Components of OOP

Technically we have created objects many times as we have been using `object literals`. However, I wouldn't call that `OOP`. We've just been using object literals to create a single object and structure data into key/value pairs. With OOP, we create blueprints to create multiple instances of an object. 

Now OOP within JavaScript is a bit differen than most languages. A lot of that has to do with the inner mechanics and the browser environment. In JavaScript, we use something called `constructor functions` as well as `prototypes`. With these we can create blueprints to create objects. Most languages use `classes`. JavaScript doesn't use classes in the core language, however, the ES6 update gave us the class syntax. THis is called `syntactic sugar`. So we have the easier to write class syntax, but it's really using constructors and prototypes under the hood. I'm going to show you both ways.


Some important components of OOP in JavaScript are:

- `Constructor Functions` Are the way that JavaScript creates a blueprint for an object.
- `Prototypes` A way for objects to inherit properties and methods from one another.
- `Classes` Another way to create a blueprint for an object. They are not a part of the core JavaScript language, but they are a part of the `ES6` specification. So we can use classes as a type of syntactic sugar to make our code easier to read and write. Classes are a core part of many other languages.
- `Instances` Objects are instantiated from a blueprint like a constructor or a class. This way we can create multiple objects that all have their own property values and can share the same methods.

Below is an example of a very simple class. I'm not showing you this to teach you the syntax yet, I'm just showing you this to give you some perspective of how OOP works. This class is essentially a blueprint for an object and it includes properties and methods. We can use that blueprint to create what are called `instances` of that object. in this case, users.

<img src="images/oop-blueprint-classes.png" width="600">

The class alone is just the blueprint. It's useless in our code if we don't use it. You can think of it just like a blueprint for a house. The blueprint is just a piece of paper, it's not a house. We have to use the blueprint to build the house. In this case, the blueprint is for a user and each user is the actual object. We can create as many users as we want using the blueprint.

Now like I said, JavaScript doesn't actually have classes in the core language, it uses something called`constructor functions` and `prototypes`, but we can still write our code using classes and it get's transpiled into regular JavaScript. We will talk about both constructors, prototypes and classes in more detail later.

In the next lesson, I just want to go over some of the main principles of OOP.
