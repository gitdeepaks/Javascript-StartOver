# Getters & Setters Using defineProperty

In the last lesson, I showed you how to create getters and setters with the `get` and `set` keywords inside of a class. But there's another way that we can do this that is common with `constructor functions` and that is using the `Object.defineProperty()` method.

It takes three arguments. The first is the object that we want to add the property to (this). The second is the name of the property that we want to add. And the third is an object that contains the getter and setter functions. Let's add a getter and setter for the `firstName` and `lastName` property

```js
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this._firstName;
    },
    set: function (value) {
      this._firstName = value;
    },
  });

  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this._lastName;
    },
    set: function (value) {
      this._lastName = value;
    },
  });
}
```

As you can see, the original properties are prefixed with an underscore. Because we want the non-underscore version to be the getter and setter.

Now, we can use it in the same way we used the class version. I'm going to use lowercase letters because I want to make it part of the getter that it returns uppercase

```js
const person1 = new Person('john', 'doe');
console.log(person1.firstName); //john
console.log(person1.lastName); // doe
```

Let's create a method to capitalize the first letter. I am actually going to put this on to the `prototype`. We don't have to, but why not?

```js
Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

```

Now, let's add to the getters. Let's also create a getter for the `fullName`. In that getter, we can actually use the `firstName` and `lastName` getters. It will automatically be capitalized.

```js
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    },
  });

  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value;
    },
  });

  Object.defineProperty(this, 'fullName', {
    get: function () {
      // Using the getters
      return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
      this._firstName = value;
    },
  });
}
```

Let's try it out:

```js
console.log(person1.firstName); // John
console.log(person1.lastName); // Doe
console.log(person1.fullName); // John Doe
```

## Object Literal Syntax

Let's do the same thing using object literal syntax. We could create a new `capitalizeFirst()` function or we can use the `Person` prototype method.

```js
const PersonObj = {
  _firstName: 'jane',
  _lastName: 'doe',

  get firstName() {
    return Person.prototype.capitalizeFirst(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return Person.prototype.capitalizeFirst(this._lastName);
  },

  set lastName(value) {
    this._lastName = value;
  },

  get fullName() {
    // Using the getters
    return this.firstName + ' ' + this.lastName;
  },
};
```

Now, we can set the `width` and `height` properties and get and set the `area` property. I'm going to use the `Object.create()` method to create a new object that inherits from the `RectangleObj` object, but you could just as well set it directly on the `RectangleObj` object.

```js
const person2 = Object.create(PersonObj);
console.log(person2.firstName); // Jane
console.log(person2.lastName); // Doe
console.log(person2.fullName); // Jane Doe
```
