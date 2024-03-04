# The 4 Basic Principles Of OOP

There are 4 basic principles of OOP that you should know about.

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

These principles are the foundation of OOP and are used in almost every OOP language. Right now, you are not expected to know how to implement these principles in your code. You will learn that later. For now, just know what they are and what they do.

## Abstraction

Abstraction is where we hide all but the relevant parts of an object in order to reduce complexity and increase efficiency.

The easiest way to explain and understand abstraction is to look at something like your car. As a user, do you really need to understand the details of what happens when you start your car? No, that's not your job. You don't need to know how it works. You just need to know how to use it. So you need to know about the ignition, gas, brakes, etc. You don't need to know how the fuel pump works to drive a car. That's abstraction. It's the process of hiding the details of how something works and only showing the the important parts.

Since objects can get pretty large and complex, it's not usually possible to show the user all the details of how the object works. There also is no reason to. The user of the object should only see and access what they need.

We deal with abstraction everywhere in programming. There are 100 things that I can think of that we have already done in this course that have used abstraction. For example, when we create an event listener, we use the `fetch()` method. We don't need to know exactly how it works. We just need to know how to use it. Even the public APIs that we have used also have a lot of abstraction. We just hit an endpoint. We have no clue what goes on behind the scenes. Another example is when we're working with events and call `addEventListener()` method. We don't need to know how the event listener works. We just need to know how to use it. As a programmer, you'll both use and create abstractions.

One of the most useful things about abstraction is that is reduces the complexity of our code and the impact of change. If we have a class of `User` and we want to add a new property, we don't have to change the code everywhere that we use the `User` class. We can just add the new property to the class and it will be available everywhere.

## Encapsulation

Encapsulation is the process of wrapping up data and methods into a single unit such as a class or function. This concept is also often used to hide the properties or state of an object from the outside. This is called information hiding or data hiding. When we create a class for example, the properties and methods are 'encapsulated' into that specific class. This is a way to keep our code organized and easy to understand. It also means that certain properties and methods are only accessible from within the class. Some languages have access modifiers like `private` and `public` keywords to indicate which properties and methods are accessible from the outside. JavaScript doesn't have those keywords, but the latest ES2022 update does include private fields using a `#` symbol. We'll look at that later.

I don't expect you to understand this example yet, but it uses encapsulation. The `radius` property is encapsulated into the `Circle` class. We can't access the `radius` property from outside the `Circle` class. So it's hidden from the outside world. We can access the `area` property from outside the class with what we call a `getter`. 

```js
class Circle {
  #radius;
  constructor(value) {
    this.#radius = value;
  }
  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
}
```

I know this is confusing now, but after the next two sections, you'll fully understand this. Another example of encapsulation that you should already understand is the scope chain. When we create a variable within a function, it's encapsulated in that functions scope. We can't access it from the global or any higher level scope.


## Inheritance

Inheritance is the process of inheriting the properties and methods from a parent class. This is a way to reuse code and reduce redundancy. We can create a parent class with some properties and methods, and then create child classes that inherit those properties and methods as well as have their own.

Even when we work with elements in the DOM, all HTML elements share some common properties and methods. For example, all HTML elements have a `style` property and a `addEventListener()` method. We can create a parent class of `HTMLElement` that has those properties and methods. Then we can create child classes of `HTMLButtonElement`, `HTMLDivElement`, etc. that inherit those properties and methods. Now, we can create instances of the `HTMLButtonElement` class and use the `style` property and the `addEventListener()` method.

To give you a very simple example, we have a class of `User` that has a property of `name` and a method of `sayHello()`. We can create a child class called `Admin` that inherits the `name` property and the `sayHello()` method. We can then add a new method to the `Admin` class called `deleteUser()`. Now, we can create an instance of the `Admin` class and use the `name` property, the `sayHello()` method, and the `deleteUser()` method.

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => u.name !== user.name);
  }
}
```

## Polymorphism

Polymorphism is a scary word, but it's not that intimidating when  you break it down. The word `poly` means `many` and `morph` means `form`. SO it describes situations in which something occurs in several different forms. This is a way to reuse code. It allows us to do away with long `if/else` or `switch` statements and use a single method that will work for different types of objects. A very common example of polymorphism is when we use the same method name for different types of objects.

For instance, we have a `User` object with a `sayHello` method. Then we have an `Admin` class that extends the `User` class and also has a sayHello method that does something different. We could have 10 more classes with a `sayHello` and they all do something different. So we're using **many forms** of `sayHello` (poly morph)

```js
class User {
  constructor(name) {
    this.name = name;
  }index.
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
class Admin extends User {
  sayHello() {
    console.log(`Hello, my name is ${this.name}. I am an admin.`);
  }
}
```

So those are about the simplest way I can explain the 4 principles. As we move through the next dozen or so videos, these will come into perspective.
