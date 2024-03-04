# bind() & this

So we've talked about the `this` keyword quite a bit. You know that when we create either a constructor function or a class, `this` refers to the current instance. However, if we use it in a regular function or the global scope, it refers to the `window` object. If we use it on an event handler, it refers to the element that the event was triggered on. So the `this` keyword is very dynamic and it changes depending on how we use it. That's why we have certain methods that allow us to set the `this` value manually. Those methods are `call()`, `apply()`, and `bind()`. We already looked at `call()` back in the prototypical inheritance lesson. We'll look at `apply()` later. Right now I'm going to show you how to use `bind()`. We'll need to know this for our project that's coming up as well.

So `bind()` is used to set the `this` value manually. It returns a new function where the `this` value is bound to the value we pass in. One very common use case for `bind()` is when we want to use a callback function.

Let's create a class called `App` and add a property of `serverName` and add an event listener in the constructor to listen for a button click and when that happens, we want to call a class method and use the `this` value from the `App` class.

```js
class App {
  constructor() {
    this.serverName = 'http://localhost:3000';

    document
      .querySelector('button')
      .addEventListener('click', this.handleClick);
  }

  handleClick() {
    console.log(this.serverName);
  }
}

const app = new App();
```

If we run this code, we get **undefined**. This is because the `this` value is the `window` object due to the fact that we are using a callback function, which is a regular function.

If we just log `this` inside the `handleClick()` method, we get the `window` object.

```JavaScript
 handleClick() {
    console.log(this); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
  }
```

So we need to use `bind()` to set the `this` value to the `App` class.

```js
class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.handleClick.bind(this));
  }
  handleClick() {
    console.log(this.serverName);
  }
}

const app = new App();
```

Now, we get the `serverName` property value. If you log `this` inside the `handleClick()` method, you get the `App` class instance.

```js
handleClick() {
    console.log(this); // App {serverName: "localhost"}
  }
```

Methods like `call` and `bind` are very overwhelming to a lot of people, but I gave you two real life examples, which I think helps people understand them better.
