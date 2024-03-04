# Arrow Functions

Arrow functions were introduced in **ES6** or **ES2015**. They are a shorter syntax for writing functions with some advantages such as being more compact, implicit returns and lexical scope. Let's look at the syntax.

First off, let's look at a simple traditional function:

```js
function add(a, b) {
  return a + b;
}

add(1, 2); // 3
```

Now let's look at the same thing written as an arrow function:

```js
const add = (a, b) => {
  return a + b;
};

add(1, 2); // 3
```

There are a few things to note here. First, we took away the `function` keyword and instead added a variable declaration. This is because arrow functions are always anonymous functions so we need to assign them to a variable in this case.

Secondly, we added what we call a `fat arrow` to the function, which is an equal sign and a greater-than sign. Sometimes, arrow functions are reffered to as `fat-arrow functions`.

#### Implicit Return

We can actually shorten this particular function a bit more, because it only has one line of code that is a single expression. In this case, we can remove the curly braces and the return statement. If there were multiple lines of code (statements), we would need to add the curly braces and the return statement.

```js
const add = (a, b) => a + b;

add(1, 2); // 3
```

Instead of explicitly returning the result, `a + b` will be returned implcitly. When we don't use the `return` keyword, it is called an **implicit return**. If there were more than one line of code in the function, we would have to use the curly braces and the `return` keyword.

#### Returning an object literal

Where you can run into an issue with implicit returns is when you want to return an object literal.

Be sure that you use parenthises around the curly braces if you want to return an object literal implicitly.

```js
const createObj = () => ({ name: 'John' });
```

#### Single argument shorthand

Another cool feature of arrow functions is that we can remove the parenthises around the argument if it is a single argument.

If you are using VS Code with prettier as I am, it may add the parenthises automatically.

```js
const add10 = (a) => a + 10;

add10(1); // 11
```

#### Anonymous Functions

Many times we don't want to use a named function, but instead want to use an anonymous function. This is useful when we want to use a function as a callback. We can use an arrow function in this case as well.

I know we have not gone over high order array methods like forEach() yet (we will very soon), but just to give you an idea of how this works. Let's create an array with some numbers.

```js
const numbers = [1, 2, 3, 4, 5];
```

The forEach() method can be used to iterate over an array. It takes a callback function as an argument. The callback function will be called for each element in the array.

```js
numbers.forEach(function (number) {
  console.log(number);
});
```

To shorten this to one line, we can use an arrow function:

```js
numbers.forEach((number) => console.log(number));
```
