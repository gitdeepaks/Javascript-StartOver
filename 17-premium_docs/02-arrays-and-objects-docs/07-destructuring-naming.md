# Destructuring & Naming

#### Variables with the same name

In some cases, we may have a variable that we want to add as an object property value. If a property name (key) is the same as the variable name for the value, we can withdraw the variable name of the value. For example:

```js
const firstName = 'John';
const lastName = 'Doe';
const age = 30;
```

Here I will put the variables above as the values for each property of the object. I will use the same variable names as the property names.

```js
const person = {
  firstName: firstName
  lastName: lastName
  age: age
};
```

We can shorten this code by removing the variable names from the property values. The variable names are the same as the property names, so we can remove them.

```js
const person = {
  firstName
  lastName
  age
};
```

#### Destructuring an object

Destructuring allows us to pull values/variables out of an object

```js
const todo = {
  id: 1,
  title: 'Take out trash',
};

const { id, title } = todo;

console.log(id, title); // 1, 'take out the trash'
```

We can also go multiple levels deep:

```js
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  user: { name },
} = todo;

console.log(name); // John
```

If we want to rename the properties, we can do that too:

```js
const { id: todoId } = todo;

console.log(todoId); // 1
```

#### Destructuring an array

We can also destructure arrays. I personally don't destructure arrays as much as I do objects

```JavaScript
const numbers = [10, 20, 30, 40];

const [firstNumber, secondNumber] = numbers;

console.log(firstNumber, secondNumber) // 10, 20
```

#### The rest operator

The spread operator (...) can be used here, but in this situation, we call it the `rest operator`. It puts the "rest" of the values in an array

```JavaScript
const [firstNumber, secondNumber, ...rest] = numbers;

console.log(rest) // [30, 40]
```
