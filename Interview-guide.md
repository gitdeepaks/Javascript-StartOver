# Comprehensive JavaScript and React Interview Preparation Guide

Hi Deepak!

I've combined all the JavaScript and React interview questions and answers into a single, easy-to-understand file. This guide is designed to help you quickly grasp the concepts and ace your next coding interview. Each section includes detailed explanations and commented code examples to enhance your understanding.

---

## Table of Contents

1. [JavaScript Interview Questions and Answers](#javascript-questions)

   - Machine Coding Questions
   - Viva (Oral Interview) Questions
   - Additional Important Questions

2. [React Interview Questions and Answers](#react-questions)
   - Machine Coding Questions
   - Viva (Oral Interview) Questions
   - Additional Important Questions

---

<a name="javascript-questions"></a>

# JavaScript Interview Questions and Answers

As a full-stack developer with extensive experience in JavaScript, it's crucial to have a strong grasp of both theoretical concepts and practical implementations. Below is a comprehensive guide to help you prepare for your JavaScript interviews.

---

## Machine Coding Questions

### 1. Implement a Debounce Function

**Question:**  
Write a `debounce` function in JavaScript that delays the execution of a callback until after a specified wait time has elapsed since the last time it was invoked.

**Explanation:**  
Debouncing ensures that a function is not called too frequently. It waits for a pause in events before executing the function. This is especially useful for events like window resizing or keypresses where you don't want to execute the handler multiple times in quick succession.

**Code:**

```javascript
function debounce(func, wait) {
  let timeout;

  // Return a new function that wraps the original function
  return function (...args) {
    const context = this;

    // Clear the previous timer
    clearTimeout(timeout);

    // Set a new timer
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// Usage Example
const handleResize = debounce(() => {
  console.log("Window resized!");
}, 500);

window.addEventListener("resize", handleResize);
```

**Explanation of Code:**

- `timeout` variable holds the timer ID.
- When the returned function is called, it clears the previous timer and sets a new one.
- `func.apply(context, args)` ensures the original function is called with the correct `this` context and arguments.

---

### 2. Create a Deep Clone Function for Objects

**Question:**  
Implement a function to deeply clone a JavaScript object, handling nested objects, arrays, and avoiding issues with circular references.

**Explanation:**  
A deep clone creates a complete copy of an object and its nested structures. Handling circular references prevents infinite recursion.

**Code:**

```javascript
function deepClone(obj, hash = new WeakMap()) {
  // Return primitives and functions as is
  if (obj === null || typeof obj !== "object") return obj;

  // Handle circular references
  if (hash.has(obj)) return hash.get(obj);

  // Create a new object or array
  const clone = Array.isArray(obj) ? [] : {};

  // Store the clone in the WeakMap
  hash.set(obj, clone);

  // Recursively copy properties
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }
  return clone;
}

// Usage Example
const original = { a: 1, b: { c: 2 } };
original.self = original; // Circular reference
const copied = deepClone(original);
console.log(copied);
```

**Explanation of Code:**

- Uses a `WeakMap` to keep track of objects already cloned, preventing infinite loops with circular references.
- Checks if the value is an object or array and creates a corresponding clone.
- Recursively copies each property.

---

### 3. Build a Custom Promise Implementation

**Question:**  
Create a basic implementation of a Promise, supporting `then`, `catch`, and `finally` methods.

**Explanation:**  
Understanding how Promises work internally helps in grasping asynchronous JavaScript and error handling.

**Code:**

```javascript
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.handlers = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;

      if (value && typeof value.then === "function") {
        return value.then(resolve, reject);
      }

      this.state = "fulfilled";
      this.value = value;

      this.handlers.forEach(this.handle);
      this.handlers = [];
    };

    const reject = (error) => {
      if (this.state !== "pending") return;

      this.state = "rejected";
      this.value = error;

      this.handlers.forEach(this.handle);
      this.handlers = [];
    };

    this.handle = (handler) => {
      if (this.state === "pending") {
        this.handlers.push(handler);
      } else {
        if (
          this.state === "fulfilled" &&
          typeof handler.onFulfilled === "function"
        ) {
          handler.onFulfilled(this.value);
        }
        if (
          this.state === "rejected" &&
          typeof handler.onRejected === "function"
        ) {
          handler.onRejected(this.value);
        }
      }
    };

    this.then = (onFulfilled, onRejected) => {
      return new MyPromise((resolve, reject) => {
        this.handle({
          onFulfilled: (value) => {
            if (typeof onFulfilled === "function") {
              try {
                resolve(onFulfilled(value));
              } catch (err) {
                reject(err);
              }
            } else {
              resolve(value);
            }
          },
          onRejected: (error) => {
            if (typeof onRejected === "function") {
              try {
                resolve(onRejected(error));
              } catch (err) {
                reject(err);
              }
            } else {
              reject(error);
            }
          },
        });
      });
    };

    this.catch = (onRejected) => {
      return this.then(null, onRejected);
    };

    this.finally = (callback) => {
      return this.then(
        (value) => {
          callback();
          return value;
        },
        (error) => {
          callback();
          throw error;
        }
      );
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
}

// Usage Example
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

promise.then((value) => console.log(value)); // Logs 'Success!' after 1 second
```

**Explanation of Code:**

- Maintains internal `state`, `value`, and `handlers`.
- `resolve` and `reject` functions update the state and value.
- The `then` method returns a new `MyPromise` for chaining.
- The `catch` method is syntactic sugar for `.then(null, onRejected)`.
- The `finally` method runs a callback regardless of the promise's outcome.

---

### 4. Implement an Event Emitter Class

**Question:**  
Create an `EventEmitter` class with `on`, `off`, `emit`, and `once` methods.

**Explanation:**  
An `EventEmitter` allows for subscribing to events, emitting events, and managing event listeners.

**Code:**

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // Unsubscribe from an event
  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  // Subscribe to an event only once
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }

  // Emit an event
  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((listener) => listener.apply(this, args));
  }
}

// Usage Example
const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

emitter.on("greet", greet);
emitter.emit("greet", "Alice"); // Output: Hello, Alice!

emitter.off("greet", greet);
emitter.emit("greet", "Bob"); // No output

emitter.once("welcome", (name) => console.log(`Welcome, ${name}!`));
emitter.emit("welcome", "Charlie"); // Output: Welcome, Charlie!
emitter.emit("welcome", "Dave"); // No output
```

**Explanation of Code:**

- The `events` object stores event names and their listeners.
- `on` adds a listener to an event.
- `off` removes a specific listener from an event.
- `once` adds a listener that is removed after its first invocation.
- `emit` calls all listeners associated with an event.

---

### 5. Create a Function Currying Utility

**Question:**  
Write a `curry` function that transforms a function with multiple arguments into a series of functions each taking a single argument.

**Explanation:**  
Currying transforms a function so that it can be called with fewer arguments than it expects, returning a new function that takes the remaining arguments.

**Code:**

```javascript
function curry(func) {
  return function curried(...args) {
    // If enough arguments are provided, call the original function
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      // Otherwise, return a new function that accepts the remaining arguments
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Usage Example
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // Output: 24
console.log(curriedMultiply(2, 3)(4)); // Output: 24
console.log(curriedMultiply(2)(3, 4)); // Output: 24
```

**Explanation of Code:**

- The `curried` function checks if enough arguments have been provided.
- If so, it calls the original function.
- If not, it returns a new function that collects more arguments.
- `func.length` gives the number of parameters the original function expects.

---

### 6. Implement Asynchronous Control Flow

**Question:**  
Write an `asyncSeries` function that runs an array of asynchronous functions in series, collecting their results.

**Explanation:**  
Executing asynchronous tasks in series means each task waits for the previous one to complete before starting.

**Code:**

```javascript
async function asyncSeries(tasks) {
  const results = [];
  for (const task of tasks) {
    const result = await task();
    results.push(result);
  }
  return results;
}

// Usage Example
const asyncTasks = [
  () => Promise.resolve(1),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
  () => Promise.resolve(3),
];

asyncSeries(asyncTasks).then((results) => console.log(results));
// Output after ~1s: [1, 2, 3]
```

**Explanation of Code:**

- Uses an `async` function to leverage `await`.
- Iterates over tasks, awaiting each one before proceeding.
- Collects results in an array.

---

### 7. Build a Throttle Function

**Question:**  
Implement a `throttle` function that ensures a callback is not called more than once in a specified time frame.

**Explanation:**  
Throttling limits the number of times a function can be called over time, which is useful for events like scrolling.

**Code:**

```javascript
function throttle(func, wait) {
  let lastCall = 0;
  let timeout;

  return function (...args) {
    const now = Date.now();
    const context = this;

    if (now - lastCall >= wait) {
      lastCall = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastCall = Date.now();
        timeout = null;
        func.apply(context, args);
      }, wait - (now - lastCall));
    }
  };
}

// Usage Example
const throttledFunc = throttle(() => {
  console.log("Throttled Function Executed");
}, 2000);

window.addEventListener("scroll", throttledFunc);
```

**Explanation of Code:**

- `lastCall` stores the last execution time.
- If enough time has passed since the last call, the function is executed immediately.
- Otherwise, it schedules execution after the remaining wait time.

---

### 8. Create Custom Array Methods

**Question:**  
Implement custom versions of `Array.prototype.map`, `filter`, and `reduce`.

**Explanation:**  
Recreating these methods demonstrates a deep understanding of array manipulation and higher-order functions.

**Code:**

```javascript
// Custom Map
Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // Ensure the index exists (handles sparse arrays)
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

// Custom Filter
Array.prototype.customFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Custom Reduce
Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // Handle case where initialValue is not provided
  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

// Usage Example
const arr = [1, 2, 3, 4];

const mapped = arr.customMap((x) => x * 2);
console.log(mapped); // [2, 4, 6, 8]

const filtered = arr.customFilter((x) => x % 2 === 0);
console.log(filtered); // [2, 4]

const reduced = arr.customReduce((acc, x) => acc + x, 0);
console.log(reduced); // 10
```

**Explanation of Code:**

- **Map:**
  - Creates a new array by applying a function to each element.
- **Filter:**
  - Creates a new array with elements that pass the test implemented by the provided function.
- **Reduce:**
  - Applies a function against an accumulator and each element to reduce the array to a single value.

---

### 9. Flatten a Nested Array

**Question:**  
Write a function that flattens an arbitrarily nested array of values.

**Explanation:**  
Flattening converts a nested array into a single-level array.

**Code:**

```javascript
function flattenArray(arr) {
  const result = [];

  const flatten = (items) => {
    items.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    });
  };

  flatten(arr);
  return result;
}

// Usage Example
const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // [1, 2, 3, 4, 5]
```

**Explanation of Code:**

- Defines a helper function `flatten` that recursively processes each item.
- If the item is an array, it calls `flatten` on it.
- Otherwise, it adds the item to the `result` array.

---

### 10. Parse and Stringify Query Parameters

**Question:**  
Implement functions to parse a URL query string into an object and stringify an object into a query string.

**Explanation:**  
Converting between query strings and objects is essential for handling URL parameters.

**Code:**

```javascript
function parseQueryString(queryString) {
  const params = {};
  const pairs = queryString[0] === "?" ? queryString.substr(1) : queryString;

  pairs.split("&").forEach((pair) => {
    const [key, value] = pair.split("=").map(decodeURIComponent);
    if (params[key]) {
      params[key] = [].concat(params[key], value);
    } else {
      params[key] = value;
    }
  });

  return params;
}

function stringifyQueryParams(params) {
  const queryString = Object.keys(params)
    .map((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        return value
          .map((val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
          .join("&");
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    })
    .join("&");

  return `?${queryString}`;
}

// Usage Example
const url = "http://example.com?name=John&age=30&hobby=sports&hobby=reading";
const queryString = url.split("?")[1];

const params = parseQueryString(queryString);
console.log(params);
// { name: 'John', age: '30', hobby: ['sports', 'reading'] }

const newQueryString = stringifyQueryParams(params);
console.log(newQueryString);
// '?name=John&age=30&hobby=sports&hobby=reading'
```

**Explanation of Code:**

- **parseQueryString:**
  - Splits the query string into key-value pairs.
  - Handles multiple values for the same key by storing them in an array.
- **stringifyQueryParams:**
  - Converts an object into a query string.
  - Handles arrays by creating multiple key-value pairs for the same key.

---

## Viva (Oral Interview) Questions

### 11. Explain the Event Loop in JavaScript

**Question:**  
Can you describe how the JavaScript event loop works?

**Answer:**  
The event loop is a fundamental concept in JavaScript for handling asynchronous operations. Here's how it works:

1. **Call Stack:** JavaScript uses a call stack to manage execution contexts. Functions are pushed onto the stack when they're called and popped off when they return.

2. **Web APIs:** When you perform asynchronous operations like `setTimeout`, `fetch`, or DOM events, they're handled by Web APIs provided by the browser.

3. **Callback Queue (Task Queue):** Once an asynchronous operation completes, its callback is placed in the callback queue.

4. **Microtask Queue:** Promises and `MutationObserver` callbacks are placed in the microtask queue, which has a higher priority than the callback queue.

5. **Event Loop:** The event loop continuously checks the call stack. If it's empty, it first processes all tasks in the microtask queue before moving to the callback queue.

**Example:**

```javascript
console.log("Script start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("Script end");

// Output:
// Script start
// Script end
// Promise callback
// Timeout callback
```

**Explanation:**

- "Script start" and "Script end" are logged first.
- The Promise's `.then` callback is placed in the microtask queue and executed before the `setTimeout` callback in the task queue.

---

### 12. Understanding the `this` Keyword

**Question:**  
How does the `this` keyword behave in different contexts in JavaScript?

**Answer:**  
The value of `this` depends on how a function is called:

- **Global Context:**

  - In the global scope, `this` refers to the global object (`window` in browsers).

- **Function Context:**

  - **Regular Functions:**
    - In non-strict mode, `this` refers to the global object.
    - In strict mode, `this` is `undefined`.
  - **Methods (Functions called as object properties):**
    - `this` refers to the object owning the method.

- **Constructor Functions (Using `new`):**

  - `this` refers to the newly created instance.

- **Arrow Functions:**

  - Do not have their own `this`.
  - `this` is lexically inherited from the enclosing scope.

- **Explicit Binding:**
  - Using `call`, `apply`, or `bind`, you can set `this` explicitly.

**Example:**

```javascript
const obj = {
  name: "Alice",
  regularFunc: function () {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  },
};

obj.regularFunc(); // Output: Alice
obj.arrowFunc(); // Output: undefined (or global 'name' if defined)
```

**Explanation:**

- In `regularFunc`, `this` refers to `obj`.
- In `arrowFunc`, `this` is inherited from the enclosing scope, which is the global scope.

---

### 13. Explain Closures and Their Uses

**Question:**  
What are closures in JavaScript, and how are they useful?

**Answer:**  
A closure is a function that remembers its outer variables and can access them. Closures are created whenever a function is created, at function creation time.

**Uses of Closures:**

- **Data Privacy:**

  - Emulate private variables by enclosing them within a function scope.

- **Function Factories:**

  - Create functions with preset parameters.

- **Maintaining State:**
  - Remember the state between function calls.

**Example:**

```javascript
function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

**Explanation:**

- The inner function maintains access to `count` even after `makeCounter` has finished executing.
- Each call to `counter()` increments and returns the updated `count`.

---

### 14. Prototypal Inheritance in JavaScript

**Question:**  
Explain how prototypal inheritance works in JavaScript.

**Answer:**  
In JavaScript, objects can inherit properties from other objects via the prototype chain.

- **Prototype Chain:**

  - Every object has a `[[Prototype]]` (accessible via `__proto__` or `Object.getPrototypeOf`), which points to its prototype object.
  - When accessing a property, JavaScript looks in the object itself first. If not found, it looks up the prototype chain.

- **Constructor Functions and `prototype`:**
  - Functions have a `prototype` property that is used when creating new objects with the `new` keyword.
  - The new object's `__proto__` is set to the constructor's `prototype`.

**Example:**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Output: Hello, my name is Alice
```

**Explanation:**

- `alice` doesn't have a `greet` method on itself, but it finds it on `Person.prototype`.
- This demonstrates inheritance through the prototype chain.

---

### 15. Differences Between `var`, `let`, and `const`

**Question:**  
What are the differences between `var`, `let`, and `const` in JavaScript?

**Answer:**

- **Scope:**

  - **`var`:** Function-scoped.
  - **`let` and `const`:** Block-scoped.

- **Hoisting:**

  - **`var`:** Declarations are hoisted and initialized with `undefined`.
  - **`let` and `const`:** Declarations are hoisted but not initialized (Temporal Dead Zone).

- **Reassignment:**

  - **`var` and `let`:** Can be reassigned.
  - **`const`:** Cannot be reassigned.

- **Redeclaration:**
  - **`var`:** Allows redeclaration within the same scope.
  - **`let` and `const`:** Do not allow redeclaration within the same scope.

**Example:**

```javascript
function test() {
  var x = 1;
  if (true) {
    var x = 2; // Same variable, function-scoped
    let y = 3; // Block-scoped
    const z = 4; // Block-scoped
  }
  console.log(x); // Output: 2
  // console.log(y); // ReferenceError
  // console.log(z); // ReferenceError
}
test();
```

---

### 16. Hoisting in JavaScript

**Question:**  
What is hoisting in JavaScript, and how does it affect variable and function declarations?

**Answer:**  
Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

- **Function Declarations:**

  - Entire function declarations are hoisted.

- **Variable Declarations:**
  - **`var`:** Declarations are hoisted and initialized with `undefined`.
  - **`let` and `const`:** Declarations are hoisted but not initialized (Temporal Dead Zone).

**Implications:**

- Accessing a `var` variable before its declaration returns `undefined`.
- Accessing a `let` or `const` variable before its declaration results in a `ReferenceError`.

**Example:**

```javascript
console.log(foo); // Output: undefined
var foo = "bar";

console.log(baz); // ReferenceError: Cannot access 'baz' before initialization
let baz = "qux";
```

---

### 17. Understanding Asynchronous JavaScript

**Question:**  
How does JavaScript handle asynchronous operations, and what are the different ways to manage them?

**Answer:**  
JavaScript is single-threaded but can handle asynchronous operations using the event loop.

**Ways to Manage Asynchronous Operations:**

- **Callbacks:**

  - Functions passed as arguments to be executed after an operation completes.

- **Promises:**

  - Objects representing the eventual completion or failure of an asynchronous operation.
  - Methods: `then`, `catch`, `finally`.

- **Async/Await:**

  - Syntax built on top of Promises for writing asynchronous code in a synchronous style.

- **Generators:**
  - Functions that can pause execution (`yield`) and resume, used with libraries like `co`.

**Example with Async/Await:**

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

**Explanation:**

- `await` pauses execution until the Promise resolves.
- `try...catch` handles any errors during the asynchronous operation.

---

### 18. Event Bubbling and Capturing

**Question:**  
What are event bubbling and capturing in JavaScript event handling?

**Answer:**  
Event propagation in JavaScript has two phases:

- **Event Capturing (Trickling Phase):**

  - The event starts from the window and propagates down to the target element.
  - Handlers set with `{ capture: true }` in `addEventListener` are invoked during this phase.

- **Event Bubbling:**
  - The event propagates from the target element up to the window.
  - Default behavior when using `addEventListener` without the `capture` option.

**Stopping Propagation:**

- **`event.stopPropagation()`:**

  - Stops further propagation of the event in both bubbling and capturing phases.

- **`event.stopImmediatePropagation()`:**
  - Prevents other listeners of the same event from being called.

**Example:**

```javascript
document.getElementById("child").addEventListener("click", (event) => {
  console.log("Child Clicked");
  // event.stopPropagation();
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});
```

**Explanation:**

- Clicking on the `child` element will log both "Child Clicked" and "Parent Clicked" due to bubbling.
- Uncommenting `event.stopPropagation()` will prevent the event from reaching the parent.

---

### 19. Explain Modules in JavaScript

**Question:**  
How do modules work in JavaScript, and what are the differences between CommonJS and ES6 modules?

**Answer:**

**CommonJS Modules:**

- Used in Node.js.
- Synchronous loading.
- Export using `module.exports` or `exports`.
- Import using `require`.

**Example:**

```javascript
// module.js
module.exports = function () {
  console.log("Hello from CommonJS Module");
};

// main.js
const greet = require("./module");
greet();
```

**ES6 Modules:**

- Standardized in ES6 (ES2015).
- Asynchronous loading.
- Export using `export`.
- Import using `import`.
- Supported in modern browsers and tools like Babel/Webpack.

**Example:**

```javascript
// module.mjs
export function greet() {
  console.log("Hello from ES6 Module");
}

// main.mjs
import { greet } from "./module.mjs";
greet();
```

**Differences:**

- **Syntax:** Different keywords (`require` vs. `import`).
- **Loading:** CommonJS is synchronous; ES6 modules are asynchronous.
- **Exporting:** CommonJS exports an object; ES6 modules have named exports and default exports.

---

### 20. Memory Management and Garbage Collection

**Question:**  
How does JavaScript handle memory management and garbage collection?

**Answer:**  
JavaScript automatically allocates memory when objects are created and frees it when they are no longer accessible.

**Garbage Collection Algorithms:**

- **Mark-and-Sweep:**

  - The most common algorithm.
  - Periodically scans memory for objects that are no longer reachable and frees them.

- **Reference Counting:**
  - Keeps track of how many references an object has.
  - When the count reaches zero, the object is collected.

**Memory Leak Causes:**

- **Global Variables:**

  - Unintentionally creating global variables prevents garbage collection.

- **Timers and Callbacks:**

  - Not clearing `setInterval` or `setTimeout` can prevent garbage collection.

- **Closures:**

  - Functions that retain references to variables can cause memory retention.

- **Detached DOM Elements:**
  - Removing elements from the DOM but keeping references in JavaScript.

**Best Practices:**

- Avoid unnecessary global variables.
- Clear timers and intervals when done.
- Nullify references to large data structures when no longer needed.

---

### 21. Understanding Promises and Async/Await

**Question:**  
Explain how Promises work in JavaScript and how `async`/`await` simplifies working with Promises.

**Answer:**

**Promises:**

- Represent the eventual completion or failure of an asynchronous operation.
- **States:**
  - `pending`
  - `fulfilled`
  - `rejected`
- **Methods:**
  - `then` for handling fulfillment.
  - `catch` for handling rejection.
  - `finally` for code that runs regardless of outcome.

**Async/Await:**

- Introduced in ES2017.
- **`async` Functions:**
  - Declared with `async` keyword.
  - Always return a Promise.
- **`await` Keyword:**
  - Pauses execution until the Promise resolves or rejects.
  - Can only be used inside `async` functions.

**Benefits of Async/Await:**

- Simplifies chaining of Promises.
- Makes asynchronous code look synchronous.
- Easier error handling with `try...catch`.

**Example:**

```javascript
// Using Promises
function getData() {
  return fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// Using Async/Await
async function getDataAsync() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

<a name="react-questions"></a>

# React Interview Questions and Answers

As an experienced React developer, you should be well-versed in both foundational concepts and advanced techniques. The following guide covers key topics to help you excel in your React interviews.

---

## Machine Coding Questions

### 1. Create a Reusable Button Component

**Question:**  
Build a reusable `Button` component in React that supports different styles and behaviors based on props.

**Explanation:**  
Creating a reusable component demonstrates understanding of props, default values, and dynamic styling.

**Code:**

```jsx
// Button.js
import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  onClick,
  children,
  variant = "primary",
  disabled = false,
}) => {
  const className = `btn btn-${variant}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;

// Usage Example
// <Button variant="success" onClick={() => alert('Clicked!')}>Click Me</Button>
```

**Explanation of Code:**

- Uses default props for `type`, `variant`, and `disabled`.
- `PropTypes` are used for type checking.
- The `className` is dynamically set based on the `variant` prop.

---

### 2. Implement a Controlled Form Component

**Question:**  
Create a `LoginForm` component with controlled inputs for email and password, including form validation.

**Explanation:**  
A controlled component in React is a form element whose value is controlled by React state. This allows you to validate and manipulate user input in real-time, providing immediate feedback or preventing invalid input.

**Code:**

```jsx
// LoginForm.js
import React, { useState } from "react";

const LoginForm = () => {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Simple validation logic
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    // If no errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", { email, password });
      // Reset form fields
      setEmail("");
      setPassword("");
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Basic email pattern
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Display error message if email is invalid */}
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <br />
      <div>
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Display error message if password is invalid */}
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
```

**Explanation of Code:**

- **State Management:**

  - `email` and `password` store the current values of the input fields.
  - `errors` holds any validation errors to display to the user.

- **Event Handling:**

  - `handleSubmit` validates the inputs and updates the `errors` state.
  - Input fields have `onChange` handlers that update the corresponding state variables.

- **Validation Logic:**

  - Checks if fields are empty and if the email has a valid format using a regular expression.

- **User Feedback:**
  - Error messages are displayed next to the relevant input fields if validation fails.

---

### 3. Build a Todo List Application

**Question:**  
Develop a simple Todo List app where users can add, delete, and toggle the completion status of todo items.

**Explanation:**  
This application tests your ability to manage state, handle user interactions, and render lists dynamically in React.

**Code:**

```jsx
// TodoApp.js
import React, { useState } from "react";

const TodoApp = () => {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  // State for the new todo input
  const [inputValue, setInputValue] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(), // Unique ID
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue(""); // Clear input field
    }
  };

  // Toggle completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Input for new todo */}
      <input
        type="text"
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {/* Display list of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* Toggle completion on click */}
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            {/* Delete button */}
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
```

**Explanation of Code:**

- **State Management:**

  - `todos` array holds the list of todo items.
  - `inputValue` captures the user's input for a new todo.

- **Adding Todos:**

  - `addTodo` function creates a new todo object and updates the `todos` state.

- **Toggling Completion:**

  - `toggleTodo` updates the `completed` status of a todo.

- **Deleting Todos:**

  - `deleteTodo` removes a todo from the `todos` array.

- **Rendering:**
  - Uses the `map` method to render each todo item in a list.

---

### 4. Implement Lazy Loading of Components

**Question:**  
Use React's `lazy` and `Suspense` to lazy-load a component called `HeavyComponent`.

**Explanation:**  
Lazy loading helps improve performance by splitting code into chunks and loading components only when they are needed.

**Code:**

```jsx
// App.js
import React, { Suspense, lazy } from "react";

// Lazy load the HeavyComponent
const HeavyComponent = lazy(() => import("./HeavyComponent"));

const App = () => (
  <div>
    <h1>My App</h1>
    {/* Suspense component shows fallback UI while HeavyComponent is loading */}
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  </div>
);

export default App;
```

```jsx
// HeavyComponent.js
import React from "react";

const HeavyComponent = () => (
  <div>
    <h2>This is a heavy component!</h2>
    <p>{"This component has a lot of content...".repeat(100)}</p>
  </div>
);

export default HeavyComponent;
```

**Explanation of Code:**

- **React.lazy():**

  - Dynamically imports `HeavyComponent` when it's rendered.

- **Suspense:**
  - Wraps the lazy-loaded component and displays a fallback UI (`Loading...`) while it's loading.

---

### 5. Create a Higher-Order Component (HOC)

**Question:**  
Write a HOC named `withLoading` that adds a loading spinner to any component.

**Explanation:**  
A Higher-Order Component (HOC) is a function that takes a component and returns a new component, enhancing it with additional functionality.

**Code:**

```jsx
// withLoading.js
import React from "react";

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
```

```jsx
// DataComponent.js
import React from "react";

const DataComponent = ({ data }) => (
  <div>
    <h2>Data Loaded:</h2>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export default DataComponent;
```

```jsx
// App.js
import React, { useState, useEffect } from "react";
import withLoading from "./withLoading";
import DataComponent from "./DataComponent";

const DataComponentWithLoading = withLoading(DataComponent);

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Hello, World!" });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>HOC Loading Example</h1>
      <DataComponentWithLoading isLoading={isLoading} data={data} />
    </div>
  );
};

export default App;
```

**Explanation of Code:**

- **withLoading HOC:**

  - Checks the `isLoading` prop; if true, displays a loading message; otherwise, renders the wrapped component.

- **DataComponent:**

  - Displays the data passed to it.

- **App Component:**
  - Manages the loading state and simulates fetching data.
  - Uses `DataComponentWithLoading` to display the loading state and data.

---

### 6. Implement Context API for Theme Switching

**Question:**  
Create a `ThemeContext` to toggle between light and dark themes in an application.

**Explanation:**  
The Context API provides a way to share values like themes between components without having to pass props manually at every level.

**Code:**

```jsx
// ThemeContext.js
import React, { createContext, useState } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  // Context value
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
```

```jsx
// ThemedComponent.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Styles based on the current theme
  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <h2>The current theme is {theme}</h2>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

export default ThemedComponent;
```

```jsx
// App.js
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemedComponent from "./ThemedComponent";

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App;
```

**Explanation of Code:**

- **ThemeContext:**

  - Provides `theme` and `toggleTheme` to any component that consumes the context.

- **ThemedComponent:**

  - Uses `useContext` to access `theme` and `toggleTheme`.
  - Applies styles dynamically based on the current theme.

- **App Component:**
  - Wraps the application with `ThemeProvider` to make the theme context available.

---

### 7. Build a Custom Hook for Fetching Data

**Question:**  
Create a custom hook `useFetch` that fetches data from an API endpoint.

**Explanation:**  
Custom hooks allow you to reuse stateful logic across components.

**Code:**

```jsx
// useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  // State variables for data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]); // Re-run effect if URL changes

  // Return the data, loading state, and error
  return { data, loading, error };
};

export default useFetch;
```

```jsx
// DataDisplay.js
import React from "react";
import useFetch from "./useFetch";

const DataDisplay = () => {
  const { data, loading, error } = useFetch("https://api.example.com/data");

  // Handle loading state
  if (loading) {
    return <div>Loading data...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Display the fetched data
  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataDisplay;
```

**Explanation of Code:**

- **useFetch Hook:**

  - Manages fetching data, handling loading and error states.
  - Returns an object with `data`, `loading`, and `error`.

- **DataDisplay Component:**
  - Uses the `useFetch` hook to get data.
  - Displays appropriate UI based on the loading and error states.

---

### 8. Implement Error Boundaries

**Question:**  
Create an `ErrorBoundary` component that catches JavaScript errors in its child component tree.

**Explanation:**  
Error boundaries catch errors during rendering and lifecycle methods, preventing the entire application from crashing.

**Code:**

```jsx
// ErrorBoundary.js
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state when an error is encountered
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error information
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Send error details to an external logging service if needed
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h1>Oops! Something went wrong.</h1>;
    }

    // Render child components if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
```

```jsx
// FaultyComponent.js
import React from "react";

const FaultyComponent = () => {
  // Simulate a render error
  throw new Error("Simulated component error");
};

export default FaultyComponent;
```

```jsx
// App.js
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import FaultyComponent from "./FaultyComponent";

const App = () => (
  <div>
    <h1>Error Boundary Example</h1>
    <ErrorBoundary>
      <FaultyComponent />
    </ErrorBoundary>
  </div>
);

export default App;
```

**Explanation of Code:**

- **ErrorBoundary Component:**

  - Uses `getDerivedStateFromError` to catch errors.
  - Logs error details with `componentDidCatch`.
  - Displays a fallback UI when an error occurs.

- **FaultyComponent:**

  - Deliberately throws an error to demonstrate error handling.

- **App Component:**
  - Wraps `FaultyComponent` with `ErrorBoundary` to catch errors.

---

### 9. Create a Pagination Component

**Question:**  
Build a `Pagination` component that displays a list of items with previous and next navigation.

**Explanation:**  
Pagination helps manage large datasets by dividing them into pages, improving performance and user experience.

**Code:**

```jsx
// Pagination.js
import React, { useState } from "react";

const Pagination = ({ itemsPerPage, items }) => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Navigate to next page
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Navigate to previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      {/* Display current items */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Pagination controls */}
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        {" "}
        Page {currentPage} of {totalPages}{" "}
      </span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
```

```jsx
// App.js
import React from "react";
import Pagination from "./Pagination";

const App = () => {
  // Sample data
  const items = Array.from({ length: 45 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h1>Pagination Example</h1>
      <Pagination itemsPerPage={10} items={items} />
    </div>
  );
};

export default App;
```

**Explanation of Code:**

- **Pagination Logic:**

  - Calculates the indices to slice the `items` array for the current page.
  - Provides `nextPage` and `prevPage` functions to change the page.

- **Rendering:**
  - Displays the items for the current page.
  - Shows pagination controls with buttons to navigate between pages.

---

### 10. Implement React Router for Navigation

**Question:**  
Set up routing in a React application with `react-router-dom` to navigate between Home and About pages.

**Explanation:**  
React Router enables client-side routing, allowing navigation without full page reloads.

**Code:**

```jsx
// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Home component
const Home = () => <h2>Welcome to the Home Page</h2>;

// About component
const About = () => <h2>About Us</h2>;

const App = () => (
  <Router>
    <div>
      {/* Navigation links */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      {/* Route definitions */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* Add a 404 Not Found route if needed */}
      </Switch>
    </div>
  </Router>
);

export default App;
```

**Explanation of Code:**

- **Router Setup:**

  - `BrowserRouter` wraps the application to provide routing capabilities.

- **Navigation:**

  - `Link` components create navigation links that change the URL without reloading the page.

- **Routes:**
  - `Route` components define which component to render based on the URL path.
  - `Switch` renders the first matching `Route`.

---

**Final Note:**

By thoroughly understanding these JavaScript and React questions, along with the explanations and code examples, you'll be well-prepared for your upcoming interviews. Remember to explain your thought process during the interview and demonstrate your problem-solving skills.

Good luck, Deepak!
