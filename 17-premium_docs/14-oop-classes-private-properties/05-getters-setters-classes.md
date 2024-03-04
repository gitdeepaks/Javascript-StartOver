# Getters & Setters With Classes

Getters and setters are methods that are used to get or set property values for objects. We can use them with classes, constructors, and object literals. I'm going to show you all three, but I'm going to start with classes, because it's the most common way to use them and the easier syntax.

There are a few reasons to use getters and setters. They allow you to control how a property is accessed. This is useful when you want to perform an action before returning the value of a property. For example, you may want to ensure that a property is always capitalized before getting or setting it.

They also allow you to keep the same syntax whether it's a regular property or a method.

They are also used with private properties. For example, you may have properties that you don't want to be accessed directly. Instead you'll have getters and setters for them. I'll get more into that soon.

I'm going to start off with a different example than our shapes classes. We're going to create a person class.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

With this class, I can access the first name and last name of a person like this:

```js
const person = new Person('John', 'Doe');
console.log(person.firstName); // John
console.log(person.lastName); // Doe
```

But what if I want to make sure that the first name and last name are always capitalized? I check that before I get it and/or set it.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
  }

  set firstName(value) {
    this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
  }
}
```

Now, when I get or set the first name, it will always be capitalized.

```js
const person = new Person('john', 'doe');
console.log(person.firstName); // John
```

I would probably do the same for the last name and create a utility function for capitalizing a string.

```js
class Person {
  // ...
  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
```

Let's say that we want to have a full name property that is the first name and last name combined. We could create a method called `getFullName` that returns the full name. But we can also create a getter for it, which would make it look like a property.

```js
get fullName() {
  return `${this.firstName} ${this.lastName}`;
}

set fullName(name) {
  const names = name.split(' ');
  this.firstName = names[0];
  this.lastName = names[1];
}
```

Now we can just access the full name like a property.

```js
const person = new Person('brad', 'traversy');
console.log(person.fullName); // John Doe
```
