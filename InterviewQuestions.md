"Deepak Sankhyan: Full Stack Developer with 8 years of experience, 3 years in React.js. Currently at Cognizant, focusing on responsive design and performance optimization. Previously developed reusable components and RESTful APIs. Skilled in React, Redux, TypeScript, Next.js, JavaScript, CSS, AWS, DevOps, and Linux. Bachelor's in IT. Passionate about building scalable, high-performance applications."

---

# Comprehensive React and JavaScript Interview Questions and Answers

## Introduction

"Hi, I'm Deepak Sankhyan, a Full Stack Developer with 8 years of experience, including 3 years in React.js. I'm currently at Cognizant, focusing on responsive design and performance optimization. I've previously developed reusable components and RESTful APIs. My skills include React, Redux, TypeScript, Next.js, JavaScript, CSS, AWS, DevOps, and Linux. I hold a Bachelor's in IT and am passionate about building scalable, high-performance applications."

---

## Table of Contents

1. [JavaScript Machine Coding Questions](#javascript-machine-coding-questions)
2. [JavaScript Viva (Oral Interview) Questions](#javascript-viva-oral-interview-questions)
3. [React Machine Coding Questions](#react-machine-coding-questions)
4. [React Viva (Oral Interview) Questions](#react-viva-oral-interview-questions)
5. [Additional Important Questions](#additional-important-questions)

---

## JavaScript Machine Coding Questions

1. [Implement a Debounce Function](#1-implement-a-debounce-function)
2. [Create a Deep Clone Function for Objects](#2-create-a-deep-clone-function-for-objects)
3. [Build a Custom Promise Implementation](#3-build-a-custom-promise-implementation)
4. [Implement an Event Emitter Class](#4-implement-an-event-emitter-class)
5. [Create a Function Currying Utility](#5-create-a-function-currying-utility)
6. [Implement Asynchronous Control Flow](#6-implement-asynchronous-control-flow)
7. [Build a Throttle Function](#7-build-a-throttle-function)
8. [Create Custom Array Methods](#8-create-custom-array-methods)
9. [Flatten a Nested Array](#9-flatten-a-nested-array)
10. [Parse and Stringify Query Parameters](#10-parse-and-stringify-query-parameters)

## JavaScript Viva (Oral Interview) Questions

11. [Explain the Event Loop in JavaScript](#11-explain-the-event-loop-in-javascript)
12. [Understanding the `this` Keyword](#12-understanding-the-this-keyword)
13. [Explain Closures and Their Uses](#13-explain-closures-and-their-uses)
14. [Prototypal Inheritance in JavaScript](#14-prototypal-inheritance-in-javascript)
15. [Differences Between `var`, `let`, and `const`](#15-differences-between-var-let-and-const)
16. [Hoisting in JavaScript](#16-hoisting-in-javascript)
17. [Understanding Asynchronous JavaScript](#17-understanding-asynchronous-javascript)
18. [Event Bubbling and Capturing](#18-event-bubbling-and-capturing)
19. [Explain Modules in JavaScript](#19-explain-modules-in-javascript)
20. [Memory Management and Garbage Collection](#20-memory-management-and-garbage-collection)
21. [Understanding Promises and Async/Await](#21-understanding-promises-and-asyncawait)

## React Machine Coding Questions

22. [Create a Reusable Button Component](#22-create-a-reusable-button-component)
23. [Implement a Controlled Form Component](#23-implement-a-controlled-form-component)
24. [Build a Todo List Application](#24-build-a-todo-list-application)
25. [Implement Lazy Loading of Components](#25-implement-lazy-loading-of-components)
26. [Create a Higher-Order Component (HOC)](#26-create-a-higher-order-component-hoc)
27. [Implement Context API for Theme Switching](#27-implement-context-api-for-theme-switching)
28. [Build a Custom Hook for Fetching Data](#28-build-a-custom-hook-for-fetching-data)
29. [Implement Error Boundaries](#29-implement-error-boundaries)
30. [Create a Pagination Component](#30-create-a-pagination-component)
31. [Implement React Router for Navigation](#31-implement-react-router-for-navigation)

## React Viva (Oral Interview) Questions

32. [Explain the Virtual DOM](#32-explain-the-virtual-dom)
33. [Component Lifecycle Methods](#33-component-lifecycle-methods)
34. [Difference Between Stateful and Stateless Components](#34-difference-between-stateful-and-stateless-components)
35. [Understanding Hooks](#35-understanding-hooks)
36. [useEffect Hook Behavior](#36-useeffect-hook-behavior)
37. [Prop Drilling and Context API](#37-prop-drilling-and-context-api)
38. [Keys in Lists](#38-keys-in-lists)
39. [Pure Components and React.memo](#39-pure-components-and-reactmemo)
40. [State Management with Redux](#40-state-management-with-redux)
41. [Component Communication](#41-component-communication)
42. [Handling Asynchronous Data](#42-handling-asynchronous-data)

## Additional Important Questions

43. [Using TypeScript with React](#43-using-typescript-with-react)
44. [Implementing Server-Side Rendering with Next.js](#44-implementing-server-side-rendering-with-nextjs)
45. [State Management with Redux](#45-state-management-with-redux)
46. [Styling Components with CSS-in-JS](#46-styling-components-with-css-in-js)
47. [Optimizing Performance in React Applications](#47-optimizing-performance-in-react-applications)
48. [Implementing Responsive Design in React](#48-implementing-responsive-design-in-react)
49. [Integrating RESTful APIs with React](#49-integrating-restful-apis-with-react)
50. [Deploying React Applications on AWS](#50-deploying-react-applications-on-aws)
51. [DevOps Practices in Front-End Development](#51-devops-practices-in-front-end-development)
52. [Understanding Microservices Architecture and Front-End Integration](#52-understanding-microservices-architecture-and-front-end-integration)
53. [Service Mesh and Its Relevance to Front-End Development](#53-service-mesh-and-its-relevance-to-front-end-development)

---

## Detailed Content for Each Question

### 1. Implement a Debounce Function

- **Question:**
  Write a debounce function in JavaScript that delays the execution of a callback until after a specified wait time has elapsed since the last time it was invoked.

- **Explanation:**
  Debouncing ensures that a function is only called after a certain period of inactivity. This is useful for performance optimization in events like resizing or typing, where the event fires multiple times in quick succession.

- **Code:**

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
  ```

// Usage Example
const handleResize = debounce(() => {
console.log("Window resized!");
}, 500);

window.addEventListener("resize", handleResize);

````

### 2. Create a Deep Clone Function for Objects

- **Question:**
Implement a function to deeply clone a JavaScript object, handling nested objects, arrays, and avoiding issues with circular references.

- **Explanation:**
A deep clone creates a new object that is a copy of the original, including all nested objects and arrays. It's important to handle circular references to avoid infinite recursion.

- **Code:**

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj); // Handle circular references

  let clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }
  return clone;
}

// Usage Example
const original = { a: 1, b: { c: 2 } };
const copied = deepClone(original);
console.log(copied); // { a: 1, b: { c: 2 } }
````

### 3. Build a Custom Promise Implementation

- **Question:**
  Create a basic implementation of a Promise, supporting `then`, `catch`, and `finally` methods.

- **Explanation:**
  A Promise represents an asynchronous operation that can be in one of three states: pending, fulfilled, or rejected. Implementing a Promise involves handling these states and allowing chaining of `then`, `catch`, and `finally` methods.

- **Code:**

  ```javascript
  class MyPromise {
    constructor(executor) {
      this.state = "pending";
      this.value = undefined;
      this.handlers = [];

      const resolve = (value) => {
        if (this.state !== "pending") return;
        this.state = "fulfilled";
        this.value = value;
        this.handlers.forEach(this.handle);
        this.handlers = null;
      };

      const reject = (error) => {
        if (this.state !== "pending") return;
        this.state = "rejected";
        this.value = error;
        this.handlers.forEach(this.handle);
        this.handlers = null;
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

### 4. Implement an Event Emitter Class

- **Question:**
  Create an `EventEmitter` class with `on`, `off`, `emit`, and `once` methods.

- **Explanation:**
  An EventEmitter allows for subscribing to events (`on`), emitting events (`emit`), unsubscribing (`off`), and handling events that should be triggered only once (`once`).

- **Code:**

  ```javascript
  class EventEmitter {
    constructor() {
      this.events = {};
    }

    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }

    off(event, listenerToRemove) {
      if (!this.events[event]) return;
      this.events[event] = this.events[event].filter(
        (listener) => listener !== listenerToRemove
      );
    }

    once(event, listener) {
      const wrapper = (...args) => {
        listener(...args);
        this.off(event, wrapper);
      };
      this.on(event, wrapper);
    }

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

### 5. Create a Function Currying Utility

- **Question:**
  Write a function `curry` that transforms a function with multiple arguments into a series of functions each taking a single argument.

- **Explanation:**
  Currying transforms a function with multiple arguments into nested unary functions. It is useful for creating higher-order functions and partial application.

- **Code:**

  ```javascript
  function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
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
  ```

### 6. Implement Asynchronous Control Flow

- **Question:**
  Write an `asyncSeries` function that runs an array of asynchronous functions in series, collecting their results.

- **Explanation:**
  Managing asynchronous operations in series requires waiting for each operation to complete before starting the next. This can be achieved using `async`/`await` or chaining Promises.

- **Code:**

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

### 7. Build a Throttle Function

- **Question:**
  Implement a throttle function that ensures a callback is not called more than once in a specified time frame.

- **Explanation:**
  Throttling limits the execution of a function to once every specified period, regardless of how many times it's triggered.

- **Code:**

  ```javascript
  function throttle(func, wait) {
    let lastTime = 0;
    let timeout;
    return function (...args) {
      const now = Date.now();
      const remaining = wait - (now - lastTime);
      const context = this;

      if (remaining <= 0) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        lastTime = now;
        func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(() => {
          lastTime = Date.now();
          timeout = null;
          func.apply(context, args);
        }, remaining);
      }
    };
  }

  // Usage Example
  const throttledFunc = throttle(() => {
    console.log("Throttled Function Executed");
  }, 2000);

  window.addEventListener("scroll", throttledFunc);
  ```

### 8. Create Custom Array Methods

- **Question:**
  Implement custom versions of `Array.prototype.map`, `filter`, and `reduce`.

- **Explanation:**
  Recreating these methods demonstrates an understanding of array iteration, callback functions, and accumulator patterns.

- **Code:**

  ```javascript
  // Custom Map
  Array.prototype.customMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
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

### 9. Flatten a Nested Array

- **Question:**
  Write a function that flattens an arbitrarily nested array of values.

- **Explanation:**
  Flattening reduces a multi-dimensional array into a single-dimensional array. This can be done recursively or using iteration.

- **Code:**

  ```javascript
  function flattenArray(arr) {
    const result = []; // This will hold the flattened array.
    const stack = [...arr]; // Start with a copy of the original array.

    while (stack.length) {
      const next = stack.pop(); // Take the last element of the stack.
      if (Array.isArray(next)) {
        // If it's an array, push each of its elements back onto the stack
        stack.push(...next);
      } else {
        // If it's not an array, add it to the result array
        result.push(next);
      }
    }
    return result.reverse(); // Reverse to restore original order.
  }

  // Usage Example
  const nestedArray = [1, [2, [3, [4]], 5]];
  const flatArray = flattenArray(nestedArray);
  console.log(flatArray); // [1, 2, 3, 4, 5]


  <--------Another Method---------->
  function flattenArray(arr) {
    let result = []; // Initialize the result array that will hold the flattened elements.

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // If the current element is an array, recursively flatten it and concatenate the result
        result = result.concat(flattenArray(arr[i]));
      } else {
        // If it's not an array, simply add the element to the result array
        result.push(arr[i]);
      }
    }
    return result;
  }
  ```

// Usage Example
const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]

````

### 10. Parse and Stringify Query Parameters

- **Question:**
Implement functions to parse a URL query string into an object and stringify an object into a query string.

- **Explanation:**
Parsing and stringifying query parameters involves converting between a string representation and an object representation, handling encoding and decoding.

- **Code:**

```javascript
function parseQueryString(queryString) {
  const params = {};
  const pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&");
  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i].split("=").map(decodeURIComponent);
    if (params[key]) {
      params[key] = [].concat(params[key], value);
    } else {
      params[key] = value;
    }
  }
  return params;
}

function stringifyQueryParams(params) {
  return (
    "?" +
    Object.keys(params)
      .map((key) => {
        const value = params[key];
        if (Array.isArray(value)) {
          return value
            .map(
              (val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
            )
            .join("&");
        } else {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
      })
      .join("&")
  );
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
````

### 11. Explain the Event Loop in JavaScript

- **Question:**
  Describe the event loop in JavaScript and how it handles asynchronous operations.

- **Explanation:**
  The event loop is a mechanism that allows JavaScript to handle asynchronous operations by managing the execution of callbacks. It consists of a call stack, a message queue, and a task queue. The call stack executes synchronous code, while the message queue and task queue hold asynchronous callbacks. The event loop continuously checks the call stack and, when it's empty, dequeues callbacks from the message queue or task queue and pushes them onto the call stack for execution.

### 12. Understanding the `this` Keyword

- **Question:**
  Explain how the `this` keyword works in JavaScript and the different ways it can be bound.

- **Explanation:**
  The `this` keyword in JavaScript refers to the context in which a function is executed. It can be bound to different values depending on how the function is called. There are four main ways to bind `this`: default binding, implicit binding, explicit binding, and new binding. Default binding occurs when `this` is not explicitly bound and refers to the global object (`window` in a browser). Implicit binding occurs when a function is called as a method of an object, and `this` refers to the object that the method is called on. Explicit binding can be achieved using methods like `call`, `apply`, or `bind`, which allow you to explicitly set the value of `this`. New binding occurs when a function is called with the `new` keyword, creating a new object and binding `this` to that object.

### 13. Explain Closures and Their Uses

- **Question:**
  What is a closure, and how does it work? Provide examples of its practical uses.

- **Explanation:**
  A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned. This allows closures to "remember" the environment in which they were created and access those variables later. Closures are commonly used for data privacy, creating private variables, implementing function factories, and creating higher-order functions.

### 14. Prototypal Inheritance in JavaScript

- **Question:**
  Explain how prototypal inheritance works in JavaScript and how it differs from classical inheritance.

- **Explanation:**
  Prototypal inheritance is a mechanism in JavaScript where objects inherit properties and methods from other objects. Each object has a prototype, which is another object that it inherits from. When a property or method is accessed on an object, JavaScript first checks if the object has that property or method. If not, it looks up the prototype chain until it finds the property or method or reaches the end of the chain. This differs from classical inheritance, where objects inherit from classes and are instances of those classes.

### 15. Differences Between `var`, `let`, and `const`

- **Question:**
  Describe the differences between `var`, `let`, and `const` in JavaScript, including their scope and hoisting behavior.

- **Explanation:**
  `var`, `let`, and `const` are used to declare variables in JavaScript. `var` has function scope and is hoisted to the top of its containing function, which means it can be accessed before it's declared. `let` and `const` have block scope and are not hoisted, which means they cannot be accessed before they're declared. `let` allows reassigning the variable, while `const` does not.

### 16. Hoisting in JavaScript

- **Question:**
  Explain what hoisting is in JavaScript and how it affects variable and function declarations.

- **Explanation:**
  Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that variables and functions can be used before they're declared, without causing a reference error. However, only the declarations are hoisted, not the assignments or initializations.

### 17. Understanding Asynchronous JavaScript

- **Question:**
  Discuss the different ways to handle asynchronous operations in JavaScript, including callbacks, Promises, and async/await.

- **Explanation:**
  Asynchronous operations in JavaScript allow for non-blocking execution, which improves performance and responsiveness. There are several ways to handle asynchronous operations, including callbacks, Promises, and async/await. Callbacks are functions passed as arguments to other functions and are executed when the asynchronous operation completes. Promises represent the eventual completion or failure of an asynchronous operation and provide methods for handling its result. Async/await is a syntactic sugar built on top of Promises that allows for writing asynchronous code in a more synchronous and readable style.

### 18. Event Bubbling and Capturing

- **Question:**
  Explain event bubbling and event capturing in JavaScript and how they differ.

- **Explanation:**
  Event bubbling and event capturing are two phases of the event propagation process in JavaScript. Event bubbling starts at the target element and propagates up through its ancestors in the DOM tree, while event capturing starts at the root element and propagates down to the target element. Event bubbling is the default behavior in most browsers, while event capturing can be enabled using the `addEventListener` method with the `useCapture` option set to `true`.

### 19. Explain Modules in JavaScript

- **Question:**
  Discuss the different ways to create and use modules in JavaScript, including CommonJS, AMD, and ES modules.

- **Explanation:**
  Modules in JavaScript allow for better code organization, encapsulation, and reusability. There are several ways to create and use modules, including CommonJS, AMD, and ES modules. CommonJS is a module system used in Node.js that allows for synchronous loading of modules. AMD (Asynchronous Module Definition) is a module system that allows for asynchronous loading of modules. ES modules are a built-in module system in modern JavaScript that allows for static analysis of dependencies and tree shaking.

### 20. Memory Management and Garbage Collection

- **Question:**
  Explain how memory management works in JavaScript and how garbage collection handles memory cleanup.

- **Explanation:**
  Memory management in JavaScript involves allocating memory for variables and objects, and releasing memory when they're no longer needed. JavaScript has automatic memory management through garbage collection, which periodically identifies and frees up memory that's no longer being used. Garbage collection works by tracing the references to objects from the global scope and marking those that are reachable. Objects that are not reachable are considered garbage and are eligible for cleanup.

### 21. Understanding Promises and Async/Await

- **Question:**
  Discuss the differences between Promises and async/await, and when to use each.

- **Explanation:**
  "Hi, my name is Deepak Sankhyan. I'm a Full Stack Developer with 8 years of experience, specializing in React.js for the past 3 years. Currently, at Cognizant in Gurugram, I've focused on implementing responsive designs and improved application performance through back-end optimization. I also developed a single-page web application using React, Redux, and TypeScript to enhance user access to company resources.

Previously, at Napino Auto & Electronics Ltd, I created reusable components and a custom UI library that increased developer productivity and code reuse. I utilized CSS-in-JS to ensure a consistent UI look and feel across devices. Earlier in my career at Enecon Solar Power Ltd, I developed RESTful APIs that improved scalability and reduced latency by 50%.

I'm proficient in Next.js, React.js, JavaScript, CSS, AWS, DevOps, and Linux. I hold a Bachelor's degree in Information Technology from the Global College of Technology in Jaipur. I'm passionate about building high-performance, scalable applications and am excited about the opportunity to contribute my skills to your team."

---

# Comprehensive React Interview Questions and Answers

As a full-stack developer with extensive experience in React.js and related technologies, it's essential to prepare for interview questions that test both your theoretical knowledge and practical skills. This document compiles a set of important React questions, including explanations and code examples, tailored to your experience and skills.

---

## **Table of Contents**

1. **Machine Coding Questions**

   1. [Implement a Debounce Function](#1-implement-a-debounce-function)
   2. [Create a Deep Clone Function for Objects](#2-create-a-deep-clone-function-for-objects)
   3. [Build a Custom Promise Implementation](#3-build-a-custom-promise-implementation)
   4. [Implement an Event Emitter Class](#4-implement-an-event-emitter-class)
   5. [Create a Function Currying Utility](#5-create-a-function-currying-utility)
   6. [Implement Asynchronous Control Flow](#6-implement-asynchronous-control-flow)
   7. [Build a Throttle Function](#7-build-a-throttle-function)
   8. [Create Custom Array Methods](#8-create-custom-array-methods)
   9. [Flatten a Nested Array](#9-flatten-a-nested-array)
   10. [Parse and Stringify Query Parameters](#10-parse-and-stringify-query-parameters)
   11. [Implement a Custom Form Hook](#11-implement-a-custom-form-hook)
   12. [Create a Reusable Modal Component](#12-create-a-reusable-modal-component)

2. **Viva (Oral Interview) Questions**

   1. [Explain the Event Loop in JavaScript](#13-explain-the-event-loop-in-javascript)
   2. [Understanding the `this` Keyword](#14-understanding-the-this-keyword)
   3. [Explain Closures and Their Uses](#15-explain-closures-and-their-uses)
   4. [Prototypal Inheritance in JavaScript](#16-prototypal-inheritance-in-javascript)
   5. [Differences Between `var`, `let`, and `const`](#17-differences-between-var-let-and-const)
   6. [Hoisting in JavaScript](#18-hoisting-in-javascript)
   7. [Understanding Asynchronous JavaScript](#19-understanding-asynchronous-javascript)
   8. [Event Bubbling and Capturing](#20-event-bubbling-and-capturing)
   9. [Explain Modules in JavaScript](#21-explain-modules-in-javascript)
   10. [Memory Management and Garbage Collection](#22-memory-management-and-garbage-collection)
   11. [Understanding Promises and Async/Await](#23-understanding-promises-and-asyncawait)
   12. [React Performance Optimization Techniques](#24-react-performance-optimization-techniques)
   13. [React Hooks Best Practices](#25-react-hooks-best-practices)

3. **Additional Important Questions Considering Your Experience**
   1. [ES6 and Beyond Features](#26-es6-and-beyond-features)
   2. [Working with `this` in Arrow Functions](#27-working-with-this-in-arrow-functions)
   3. [Understanding Event Loop with Async/Await](#28-understanding-event-loop-with-asyncawait)
   4. [JavaScript Design Patterns](#29-javascript-design-patterns)
   5. [Error Handling in JavaScript](#30-error-handling-in-javascript)
   6. [Understanding Generators and Iterators](#31-understanding-generators-and-iterators)
   7. [WeakMap and WeakSet Usage](#32-weakmap-and-weakset-usage)
   8. [Working with Proxies](#33-working-with-proxies)
   9. [Understanding Service Workers](#34-understanding-service-workers)
   10. [Web Security and Best Practices](#35-web-security-and-best-practices)
   11. [JavaScript Performance Optimization](#36-javascript-performance-optimization)
   12. [Micro-Frontends in React](#37-micro-frontends-in-react)
   13. [GraphQL Integration with React](#38-graphql-integration-with-react)

---

## **Machine Coding Questions**

### **1. Implement a Debounce Function**

- **Question:**
  Write a debounce function in JavaScript that delays the execution of a callback until after a specified wait time has elapsed since the last time it was invoked.

- **Explanation:**
  Debouncing ensures that a function is only called after a certain period of inactivity. This is useful for performance optimization in events like resizing or typing, where the event fires multiple times in quick succession.

- **Code:**

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
  ```

// Usage Example
const handleResize = debounce(() => {
console.log("Window resized!");
}, 500);

window.addEventListener("resize", handleResize);

````

### **2. Create a Deep Clone Function for Objects**

- **Question:**
Implement a function to deeply clone a JavaScript object, handling nested objects, arrays, and avoiding issues with circular references.

- **Explanation:**
A deep clone creates a new object that is a copy of the original, including all nested objects and arrays. It's important to handle circular references to avoid infinite recursion.

- **Code:**

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj); // Handle circular references

  let clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }
  return clone;
}

// Usage Example
const original = { a: 1, b: { c: 2 } };
const copied = deepClone(original);
console.log(copied); // { a: 1, b: { c: 2 } }
````

### **3. Build a Custom Promise Implementation**

- **Question:**
  Create a basic implementation of a Promise, supporting `then`, `catch`, and `finally` methods.

- **Explanation:**
  A Promise represents an asynchronous operation that can be in one of three states: pending, fulfilled, or rejected. Implementing a Promise involves handling these states and allowing chaining of `then`, `catch`, and `finally` methods.

- **Code:**

  ```javascript
  class MyPromise {
    constructor(executor) {
      this.state = "pending";
      this.value = undefined;
      this.handlers = [];

      const resolve = (value) => {
        if (this.state !== "pending") return;
        this.state = "fulfilled";
        this.value = value;
        this.handlers.forEach(this.handle);
        this.handlers = null;
      };

      const reject = (error) => {
        if (this.state !== "pending") return;
        this.state = "rejected";
        this.value = error;
        this.handlers.forEach(this.handle);
        this.handlers = null;
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

### **4. Implement an Event Emitter Class**

- **Question:**
  Create an `EventEmitter` class with `on`, `off`, `emit`, and `once` methods.

- **Explanation:**
  An EventEmitter allows for subscribing to events (`on`), emitting events (`emit`), unsubscribing (`off`), and handling events that should be triggered only once (`once`).

- **Code:**

  ```javascript
  class EventEmitter {
    constructor() {
      this.events = {};
    }

    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }

    off(event, listenerToRemove) {
      if (!this.events[event]) return;
      this.events[event] = this.events[event].filter(
        (listener) => listener !== listenerToRemove
      );
    }

    once(event, listener) {
      const wrapper = (...args) => {
        listener(...args);
        this.off(event, wrapper);
      };
      this.on(event, wrapper);
    }

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

### **5. Create a Function Currying Utility**

- **Question:**
  Write a function `curry` that transforms a function with multiple arguments into a series of functions each taking a single argument.

- **Explanation:**
  Currying transforms a function with multiple arguments into nested unary functions. It is useful for creating higher-order functions and partial application.

- **Code:**

  ```javascript
  function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
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
  ```

### **6. Implement Asynchronous Control Flow**

- **Question:**
  Write an `asyncSeries` function that runs an array of asynchronous functions in series, collecting their results.

- **Explanation:**
  Managing asynchronous operations in series requires waiting for each operation to complete before starting the next. This can be achieved using `async`/`await` or chaining Promises.

- **Code:**

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

### **7. Build a Throttle Function**

- **Question:**
  Implement a throttle function that ensures a callback is not called more than once in a specified time frame.

- **Explanation:**
  Throttling limits the execution of a function to once every specified period, regardless of how many times it's triggered.

- **Code:**

  ```javascript
  function throttle(func, wait) {
    let lastTime = 0;
    let timeout;
    return function (...args) {
      const now = Date.now();
      const remaining = wait - (now - lastTime);
      const context = this;

      if (remaining <= 0) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        lastTime = now;
        func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(() => {
          lastTime = Date.now();
          timeout = null;
          func.apply(context, args);
        }, remaining);
      }
    };
  }

  // Usage Example
  const throttledFunc = throttle(() => {
    console.log("Throttled Function Executed");
  }, 2000);

  window.addEventListener("scroll", throttledFunc);
  ```

### **8. Create Custom Array Methods**

- **Question:**
  Implement custom versions of `Array.prototype.map`, `filter`, and `reduce`.

- **Explanation:**
  Recreating these methods demonstrates an understanding of array iteration, callback functions, and accumulator patterns.

- **Code:**

  ```javascript
  // Custom Map
  Array.prototype.customMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
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

### **9. Flatten a Nested Array**

- **Question:**
  Write a function that flattens an arbitrarily nested array of values.

- **Explanation:**
  Flattening reduces a multi-dimensional array into a single-dimensional array. This can be done recursively or using iteration.

- **Code:**

  ```javascript
  function flattenArray(arr) {
    const result = [];
    const stack = [...arr];

    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        result.push(next);
      }
    }
    return result.reverse();
  }

  // Usage Example
  const nestedArray = [1, [2, [3, [4]], 5]];
  const flatArray = flattenArray(nestedArray);
  console.log(flatArray); // [1, 2, 3, 4, 5]
  ```

### **10. Parse and Stringify Query Parameters**

- **Question:**
  Implement functions to parse a URL query string into an object and stringify an object into a query string.

- **Explanation:**
  Parsing and stringifying query parameters involves converting between a string representation and an object representation, handling encoding and decoding.

- **Code:**

  ```javascript
  function parseQueryString(queryString) {
    const params = {};
    const pairs = (
      queryString[0] === "?" ? queryString.substr(1) : queryString
    ).split("&");
    for (let i = 0; i < pairs.length; i++) {
      const [key, value] = pairs[i].split("=").map(decodeURIComponent);
      if (params[key]) {
        params[key] = [].concat(params[key], value);
      } else {
        params[key] = value;
      }
    }
    return params;
  }

  function stringifyQueryParams(params) {
    return (
      "?" +
      Object.keys(params)
        .map((key) => {
          const value = params[key];
          if (Array.isArray(value)) {
            return value
              .map(
                (val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
              )
              .join("&");
          } else {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
        })
        .join("&")
    );
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

# Comprehensive JavaScript Interview Questions and Answers

As a full-stack developer with extensive experience in JavaScript and related technologies, it's essential to prepare for interview questions that test both your theoretical knowledge and practical skills in JavaScript. This document compiles a set of important JavaScript questions, including explanations and code examples, tailored to your experience and skills as highlighted in your resume.

---

## **Table of Contents**

1. **Machine Coding Questions**

   1. [Implement a Debounce Function](#1-implement-a-debounce-function)
   2. [Create a Deep Clone Function for Objects](#2-create-a-deep-clone-function-for-objects)
   3. [Build a Custom Promise Implementation](#3-build-a-custom-promise-implementation)
   4. [Implement an Event Emitter Class](#4-implement-an-event-emitter-class)
   5. [Create a Function Currying Utility](#5-create-a-function-currying-utility)
   6. [Implement Asynchronous Control Flow](#6-implement-asynchronous-control-flow)
   7. [Build a Throttle Function](#7-build-a-throttle-function)
   8. [Create Custom Array Methods](#8-create-custom-array-methods)
   9. [Flatten a Nested Array](#9-flatten-a-nested-array)
   10. [Parse and Stringify Query Parameters](#10-parse-and-stringify-query-parameters)

2. **Viva (Oral Interview) Questions**

   1. [Explain the Event Loop in JavaScript](#11-explain-the-event-loop-in-javascript)
   2. [Understanding the `this` Keyword](#12-understanding-the-this-keyword)
   3. [Explain Closures and Their Uses](#13-explain-closures-and-their-uses)
   4. [Prototypal Inheritance in JavaScript](#14-prototypal-inheritance-in-javascript)
   5. [Differences Between `var`, `let`, and `const`](#15-differences-between-var-let-and-const)
   6. [Hoisting in JavaScript](#16-hoisting-in-javascript)
   7. [Understanding Asynchronous JavaScript](#17-understanding-asynchronous-javascript)
   8. [Event Bubbling and Capturing](#18-event-bubbling-and-capturing)
   9. [Explain Modules in JavaScript](#19-explain-modules-in-javascript)
   10. [Memory Management and Garbage Collection](#20-memory-management-and-garbage-collection)
   11. [Understanding Promises and Async/Await](#21-understanding-promises-and-asyncawait)

3. **Additional Important Questions Considering Your Experience**
   1. [ES6 and Beyond Features](#22-es6-and-beyond-features)
   2. [Working with `this` in Arrow Functions](#23-working-with-this-in-arrow-functions)
   3. [Understanding Event Loop with Async/Await](#24-understanding-event-loop-with-asyncawait)
   4. [JavaScript Design Patterns](#25-javascript-design-patterns)
   5. [Error Handling in JavaScript](#26-error-handling-in-javascript)
   6. [Understanding Generators and Iterators](#27-understanding-generators-and-iterators)
   7. [WeakMap and WeakSet Usage](#28-weakmap-and-weakset-usage)
   8. [Working with Proxies](#29-working-with-proxies)
   9. [Understanding Service Workers](#30-understanding-service-workers)
   10. [Web Security and Best Practices](#31-web-security-and-best-practices)
   11. [JavaScript Performance Optimization](#32-javascript-performance-optimization)

---

## **Machine Coding Questions**

### **1. Implement a Debounce Function**

- **Question:**
  Write a debounce function in JavaScript that delays the execution of a callback until after a specified wait time has elapsed since the last time it was invoked.

- **Explanation:**
  Debouncing ensures that a function is only called after a certain period of inactivity. This is useful for performance optimization in events like resizing or typing, where the event fires multiple times in quick succession.

- **Code:**

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
  ```

// Usage Example
const handleResize = debounce(() => {
console.log("Window resized!");
}, 500);

window.addEventListener("resize", handleResize);

### **2. Create a Deep Clone Function for Objects**

- **Question:**
  Implement a function to deeply clone a JavaScript object, handling nested objects, arrays, and avoiding issues with circular references.

- **Explanation:**
  A deep clone creates a new object that is a copy of the original, including all nested objects and arrays. It's important to handle circular references to avoid infinite recursion.

- **Code:**

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj); // Handle circular references

  let clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }
  return clone;
}

// Usage Example
const original = { a: 1, b: { c: 2 } };
const copied = deepClone(original);
console.log(copied); // { a: 1, b: { c: 2 } }
```

### **3. Build a Custom Promise Implementation**

- **Question:**
  Create a basic implementation of a Promise, supporting `then`, `catch`, and `finally` methods.

- **Explanation:**
  A Promise represents an asynchronous operation that can be in one of three states: pending, fulfilled, or rejected. Implementing a Promise involves handling these states and allowing chaining of `then`, `catch`, and `finally` methods.

## -### **24. React Performance Optimization Techniques**

-- **Question:**

- List and explain some techniques to optimize the performance of React applications.
- -- **Explanation:**
- React performance optimization techniques include:
-
- - **Memoization:** Memoizing expensive calculations or functions using `React.memo` or `useMemo` hook.
- - **Lazy Loading:** Lazily loading components or resources to improve initial load time.
- - **Code Splitting:** Splitting code into smaller chunks and loading them on demand.
- - **Virtualization:** Rendering only a subset of items in a large list, improving rendering performance.
- - **Avoiding Reconciliation:** Minimizing unnecessary re-renders by using `React.PureComponent`, `shouldComponentUpdate`, or `React.memo`.
- - **Optimizing State Updates:** Batching state updates, using `useReducer` hook, or using `useCallback` for event handlers.
- - **Using Production Build:** Using the production build of React for better performance.
- -- **Code:**
-
- ```javascript

  ```

- // Example of using React.memo for memoization
- const MemoizedComponent = React.memo(function MemoizedComponent(props) {
- // Render logic
- });
-
- // Example of using useMemo for memoizing expensive calculations
- const expensiveCalculation = useMemo(() => {
- // Expensive calculation logic
- }, [dependencies]);
-
- // Example of using React.lazy for lazy loading
- const LazyLoadedComponent = React.lazy(() => import("./LazyLoadedComponent"));
-
- // Example of using React.Suspense for fallback while loading
- <React.Suspense fallback={<LoadingSpinner />}>
- <LazyLoadedComponent />
- </React.Suspense>
-
- // Example of using React.PureComponent for avoiding reconciliation
- class PureComponentExample extends React.PureComponent {
- render() {
-      // Render logic
- }
- }
-
- // Example of using shouldComponentUpdate for avoiding reconciliation
- shouldComponentUpdate(nextProps, nextState) {
- // Comparison logic to determine if update is necessary
- }
-
- // Example of using useReducer for batching state updates
- const [state, dispatch] = useReducer(reducer, initialState);
-
- // Example of using useCallback for event handlers
- const handleClick = useCallback(() => {
- // Event handler logic
- }, [dependencies]);
- ```

  ```

- -### **25. React Hooks Best Practices**
- -- **Question:**
- Share some best practices for using React hooks effectively.
- -- **Explanation:**
- React hooks best practices include:
-
- - **Use hooks at the top level:** Always use hooks at the top level of your components, not inside loops, conditions, or nested functions.
- - **Avoid unnecessary re-renders:** Memoize expensive calculations or functions using `React.memo`, `useMemo`, or `useCallback`.
- - **Use hooks for side effects:** Use `useEffect` hook for handling side effects, such as data fetching or event listeners.
- - **Avoid complex state logic:** Use `useReducer` hook for complex state logic that involves multiple sub-values or when the next state depends on the previous one.
- - **Use hooks for derived state:** Use `useMemo` hook for derived state that depends on other state or props.
- - **Use hooks for performance optimization:** Use `useCallback`, `useMemo`, and `React.memo` for performance optimization.
- -- **Code:**
-
- ```javascript

  ```

- // Example of using hooks at the top level
- function Component() {
- const [count, setCount] = useState(0);
- const handleClick = useCallback(() => {
-      setCount(count + 1);
- }, [count]);
- const derivedState = useMemo(() => {
-      // Derived state logic
- }, [dependencies]);
- useEffect(() => {
-      // Side effect logic
- }, [dependencies]);
- return (
-      <div>
-        <p>Count: {count}</p>
-        <button onClick={handleClick}>Increment</button>
-      </div>
- );
- }
-
- // Example of using useReducer for complex state logic
- const initialState = { count: 0 };
- function reducer(state, action) {
- switch (action.type) {
-      case "increment":
-        return { count: state.count + 1 };
-      case "decrement":
-        return { count: state.count - 1 };
-      default:
-        throw new Error();
- }
- }
- function Counter() {
- const [state, dispatch] = useReducer(reducer, initialState);
- return (
-      <div>
-        <p>Count: {state.count}</p>
-        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
-        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
-      </div>
- );
- }
- ```

  ```

- ***
- -## **Additional Important Questions Considering Your Experience**
- -### **26. ES6 and Beyond Features**
- -- **Question:**
- List and explain some significant features introduced in ES6 and later versions.
- -- **Explanation:**
- ES6 (ECMAScript 2015) introduced several new features that improved JavaScript and made it more powerful and expressive. Some of the key features include:
-
- - **Let and const:** Block-scoped variables that are not hoisted.
- - **Arrow functions:** Concise syntax for defining functions.
- - **Template literals:** Enhanced string interpolation.
- - **Destructuring:** Easier way to extract values from objects and arrays.
- - **Default parameters:** Default values for function parameters.
- - **Rest and spread:** Easier way to work with arrays and objects.
- - **Classes:** Syntactic sugar for constructor functions and prototypes.
- - **Modules:** Native module system for importing and exporting code.
- - **Promises:** Built-in support for asynchronous operations.
- - **Generators and async/await:** Easier way to work with asynchronous code.
- -- **Code:**
-
- ```javascript

  ```

- // Example of using let and const
- function example() {
- if (true) {
-      let x = 10;
-      const y = 20;
- }
- // console.log(x); // ReferenceError: x is not defined
- // console.log(y); // ReferenceError: y is not defined
- }
-
- // Example of using arrow functions
- const add = (a, b) => a + b;
-
- // Example of using template literals
- const name = "Alice";
- const greeting = `Hello, ${name}!`;
-
- // Example of using destructuring
- const person = { name: "Bob", age: 30 };
- const { name: personName, age } = person;
-
- // Example of using default parameters
- function greet(name = "Guest") {
- console.log(`Hello, ${name}!`);
- }
-
- // Example of using rest and spread
- const numbers = [1, 2, 3, 4, 5];
- const [first, second, ...rest] = numbers;
- const newNumbers = [...numbers, 6, 7];
-
- // Example of using classes
- class Person {
- constructor(name) {
-      this.name = name;
- }
- greet() {
-      console.log(`Hello, my name is ${this.name}`);
- }
- }
-
- // Example of using modules
- import { greet } from "./greet";
- export function sayHello() {
- console.log("Hello from module");
- }
-
- // Example of using promises
- const promise = new Promise((resolve, reject) => {
- setTimeout(() => resolve("Success!"), 1000);
- });
- promise.then((value) => console.log(value)); // Logs 'Success!' after 1 second
-
- // Example of using async/await
- async function fetchData() {
- try {
-      const response = await fetch("https://api.example.com/data");
-      const data = await response.json();
-      console.log(data);
- } catch (error) {
-      console.error("Error fetching data:", error);
- }
- }
- ```

  ```

- -### **27. Working with `this` in Arrow Functions**
- -- **Question:**
- Explain how `this` works in arrow functions and how it differs from regular functions.
- -- **Explanation:**
- Arrow functions in JavaScript do not have their own `this`. Instead, they inherit `this` from the enclosing lexical scope. This means that `this` inside an arrow function refers to the same value as `this` in the surrounding code. Regular functions, on the other hand, have their own `this` that is determined by how the function is called.
- -- **Code:**
-
- ```javascript

  ```

- // Example of using this in a regular function
- function regularFunction() {
- console.log(this);
- }
- regularFunction(); // Logs the global object (window in a browser)
-
- // Example of using this in an arrow function
- const arrowFunction = () => {
- console.log(this);
- };
- arrowFunction(); // Logs the same value as the surrounding code (usually the global object)
-
- // Example of this in a method
- const obj = {
- method: function() {
-      console.log(this);
- },
- arrowMethod: () => {
-      console.log(this);
- },
- };
- obj.method(); // Logs the object
- obj.arrowMethod(); // Logs the same value as the surrounding code (usually the global object)
- ```

  ```

- -### **28. Understanding Event Loop with Async/Await**
- -- **Question:**
- Explain how the event loop works with async/await and how it affects the execution of asynchronous code.
- -- **Explanation:**
- Async/await is built on top of Promises and provides a more synchronous-looking syntax for working with asynchronous code. When an async function is called, it returns a Promise that resolves with the return value of the function. The event loop allows other code to run while the Promise is pending, and when the Promise is resolved, the rest of the async function is executed. This means that async/await code can be non-blocking and still appear to run synchronously.
- -- **Code:**
-
- ```javascript

  ```

- // Example of using async/await with the event loop
- async function example() {
- console.log("Start");
- await new Promise((resolve) => setTimeout(resolve, 1000));
- console.log("End");
- }
- example();
- console.log("After calling example");
- // Output:
- // Start
- // After calling example
- // (wait 1 second)
- // End
- ```

  ```

- -### **29. JavaScript Design Patterns**
- -- **Question:**
- Discuss some common JavaScript design patterns and their use cases.
- -- **Explanation:**
- Design patterns are reusable solutions to common problems in software design. Some common JavaScript design patterns include:
-
- - **Module pattern:** Encapsulating code and data to create a private scope.
- - **Singleton pattern:** Ensuring that a class has only one instance.
- - **Observer pattern:** Allowing objects to subscribe to and publish events.
- - **Factory pattern:** Creating objects without specifying the exact class.
- - **Decorator pattern:** Adding behavior to an object dynamically.
- - **Proxy pattern:** Intercepting and controlling access to an object.
- -- **Code:**
-
- ```javascript

  ```

- // Example of using the module pattern
- const module = (() => {
- let privateVariable = "Private";
- function privateFunction() {
-      console.log("Private function");
- }
- return {
-      publicVariable: "Public",
-      publicFunction: () => {
-        console.log("Public function");
-      },
- };
- })();
-
- // Example of using the singleton pattern
- class Singleton {
- constructor() {
-      if (!Singleton.instance) {
-        Singleton.instance = this;
-      }
-      return Singleton.instance;
- }
- }
-
- // Example of using the observer pattern
- class EventEmitter {
- constructor() {
-      this.events = {};
- }
- on(event, listener) {
-      if (!this.events[event]) {
-        this.events[event] = [];
-      }
-      this.events[event].push(listener);
- }
- emit(event, ...args) {
-      if (!this.events[event]) return;
-      this.events[event].forEach((listener) => listener.apply(this, args));
- }
- }
-
- // Example of using the factory pattern
- class Product {
- constructor(name) {
-      this.name = name;
- }
- }
- class ProductFactory {
- createProduct(name) {
-      return new Product(name);
- }
- }
-
- // Example of using the decorator pattern
- function log(target, name, descriptor) {
- const original = descriptor.value;
- descriptor.value = function(...args) {
-      console.log(`Calling ${name} with arguments:`, args);
-      return original.apply(this, args);
- };
- return descriptor;
- }
- class Calculator {
- @log
- add(a, b) {
-      return a + b;
- }
- }
-
- // Example of using the proxy pattern
- const target = {
- message: "Hello",
- };
- const handler = {
- get(target, prop) {
-      console.log(`Getting property: ${prop}`);
-      return target[prop];
- },
- set(target, prop, value) {
-      console.log(`Setting property: ${prop} = ${value}`);
-      target[prop] = value;
- },
- };
- const proxy = new Proxy(target, handler);
- ```

  ```

- -### **30. Error Handling in JavaScript**
- -- **Question:**
- Discuss best practices for error handling in JavaScript, including try/catch, Promises, and async/await.
- -- **Explanation:**
- Error handling in JavaScript is crucial for building robust and reliable applications. Best practices for error handling include:
-
- - **Using try/catch:** Wrapping potentially error-prone code in try/catch blocks to catch and handle exceptions.
- - **Throwing meaningful errors:** Throwing errors with descriptive messages to aid in debugging.
- - **Using Promises:** Using Promises to handle asynchronous errors and avoid callback hell.
- - **Using async/await:** Using async/await to handle errors in a more synchronous-looking way.
- - **Centralized error handling:** Implementing a centralized error handling mechanism to handle errors consistently.
- -- **Code:**
-
- ```javascript

  ```

- // Example of using try/catch
- try {
- const result = someFunctionThatMightThrow();
- console.log(result);
- } catch (error) {
- console.error("Caught an error:", error.message);
- }
-
- // Example of using Promises
- someAsyncFunction()
- .then((result) => console.log(result))
- .catch((error) => console.error("Caught an error:", error.message));
-
- // Example of using async/await
- async function example() {
- try {
- **Code:**

  ```javascript
  class MyPromise {
    constructor(executor) {
      this.state = "pending";
      this.value = undefined;
      this.handlers = [];

      const resolve = (value) => {
        if (this.state !== "pending") return;
        this.state = "fulfilled";
        this.value = value;
        this.handlers.forEach(this.handle);
        this.handlers = null;
      };

      const reject = (error) => {
        if (this.state !== "pending") return;
        this.state = "rejected";
        this.value = error;
        this.handlers.forEach(this.handle);
        this.handlers = null;
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

### **4. Implement an Event Emitter Class**

- **Question:**
  Create an `EventEmitter` class with `on`, `off`, `emit`, and `once` methods.

- **Explanation:**
  An EventEmitter allows for subscribing to events (`on`), emitting events (`emit`), unsubscribing (`off`), and handling events that should be triggered only once (`once`).

- **Code:**

  ```javascript
  class EventEmitter {
    constructor() {
      this.events = {};
    }

    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }

    off(event, listenerToRemove) {
      if (!this.events[event]) return;
      this.events[event] = this.events[event].filter(
        (listener) => listener !== listenerToRemove
      );
    }

    once(event, listener) {
      const wrapper = (...args) => {
        listener(...args);
        this.off(event, wrapper);
      };
      this.on(event, wrapper);
    }

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

### **5. Create a Function Currying Utility**

- **Question:**
  Write a function `curry` that transforms a function with multiple arguments into a series of functions each taking a single argument.

- **Explanation:**
  Currying transforms a function with multiple arguments into nested unary functions. It is useful for creating higher-order functions and partial application.

- **Code:**

  ```javascript
  function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
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
  ```

### **6. Implement Asynchronous Control Flow**

- **Question:**
  Write an `asyncSeries` function that runs an array of asynchronous functions in series, collecting their results.

- **Explanation:**
  Managing asynchronous operations in series requires waiting for each operation to complete before starting the next. This can be achieved using `async`/`await` or chaining Promises.

- **Code:**

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

### **7. Build a Throttle Function**

- **Question:**
  Implement a throttle function that ensures a callback is not called more than once in a specified time frame.

- **Explanation:**
  Throttling limits the execution of a function to once every specified period, regardless of how many times it's triggered.

- **Code:**

  ```javascript
  function throttle(func, wait) {
    let lastTime = 0;
    let timeout;
    return function (...args) {
      const now = Date.now();
      const remaining = wait - (now - lastTime);
      const context = this;

      if (remaining <= 0) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        lastTime = now;
        func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(() => {
          lastTime = Date.now();
          timeout = null;
          func.apply(context, args);
        }, remaining);
      }
    };
  }

  // Usage Example
  const throttledFunc = throttle(() => {
    console.log("Throttled Function Executed");
  }, 2000);

  window.addEventListener("scroll", throttledFunc);
  ```

### **8. Create Custom Array Methods**

- **Question:**
  Implement custom versions of `Array.prototype.map`, `filter`, and `reduce`.

- **Explanation:**
  Recreating these methods demonstrates an understanding of array iteration, callback functions, and accumulator patterns.

- **Code:**

  ```javascript
  // Custom Map
  Array.prototype.customMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
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

### **9. Flatten a Nested Array**

- **Question:**
  Write a function that flattens an arbitrarily nested array of values.

- **Explanation:**
  Flattening reduces a multi-dimensional array into a single-dimensional array. This can be done recursively or using iteration.

- **Code:**

  ```javascript
  function flattenArray(arr) {
    const result = [];
    const stack = [...arr];

    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        result.push(next);
      }
    }
    return result.reverse();
  }

  // Usage Example
  const nestedArray = [1, [2, [3, [4]], 5]];
  const flatArray = flattenArray(nestedArray);
  console.log(flatArray); // [1, 2, 3, 4, 5]
  ```

### **10. Parse and Stringify Query Parameters**

- **Question:**
  Implement functions to parse a URL query string into an object and stringify an object into a query string.

- **Explanation:**
  Parsing and stringifying query parameters involves converting between a string representation and an object representation, handling encoding and decoding.

- **Code:**

  ```javascript
  function parseQueryString(queryString) {
    const params = {};
    const pairs = (
      queryString[0] === "?" ? queryString.substr(1) : queryString
    ).split("&");
    for (let i = 0; i < pairs.length; i++) {
      const [key, value] = pairs[i].split("=").map(decodeURIComponent);
      if (params[key]) {
        params[key] = [].concat(params[key], value);
      } else {
        params[key] = value;
      }
    }
    return params;
  }

  function stringifyQueryParams(params) {
    return (
      "?" +
      Object.keys(params)
        .map((key) => {
          const value = params[key];
          if (Array.isArray(value)) {
            return value
              .map(
                (val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
              )
              .join("&");
          } else {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
        })
        .join("&")
    );
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

---

## **Viva (Oral Interview) Questions**

### **11. Explain the Event Loop in JavaScript**

- **Question:**
  Can you describe how the JavaScript event loop works?

- **Answer:**
  The JavaScript event loop is a mechanism that handles asynchronous callbacks in a non-blocking way, despite JavaScript being single-threaded.

  - **Call Stack:** Executes JavaScript code; function calls form a stack of frames.
  - **Web APIs:** Browser APIs like `setTimeout`, DOM events, AJAX requests.
  - **Task Queue (Callback Queue):** Holds messages (callbacks) from Web APIs ready for processing.
  - **Microtask Queue:** Holds microtasks like resolved Promises, `MutationObserver` callbacks.
  - **Event Loop:** Continuously checks if the call stack is empty and then pushes tasks from the microtask queue (first) or task queue to the call stack.

  The event loop gives priority to the microtask queue over the task queue, ensuring that microtasks are completed before rendering updates.

### **12. Understanding the `this` Keyword**

- **Question:**
  How does the `this` keyword behave in different contexts in JavaScript?

- **Answer:**
  The value of `this` depends on how a function is called:

  - **Global Context:** In the global scope, `this` refers to the global object (`window` in browsers).
  - **Function Context:**
    - **Regular Functions:** `this` refers to the global object in non-strict mode and `undefined` in strict mode.
    - **Methods:** When a function is called as a method of an object, `this` refers to that object.
  - **Constructor Functions:** When using `new`, `this` refers to the newly created instance.
  - **Arrow Functions:** Do not have their own `this`; they inherit `this` from the enclosing lexical scope.
  - **Explicit Binding:** Using `call`, `apply`, or `bind` methods, you can set `this` explicitly.

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

  obj.regularFunc(); // Alice
  obj.arrowFunc(); // undefined (or global `this.name` if defined)
  ```

### **13. Explain Closures and Their Uses**

- **Question:**
  What are closures in JavaScript, and how are they useful?

- **Answer:**
  A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It retains access to the outer scope even after the outer function has returned.

  **Uses:**

  - **Data Privacy:** Encapsulate variables, emulating private variables.
  - **Stateful Functions:** Maintain state between function calls.
  - **Function Factories:** Create functions with preset parameters.

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
  console.log(counter()); // 1
  console.log(counter()); // 2
  ```

### **14. Prototypal Inheritance in JavaScript**

- **Question:**
  Explain how prototypal inheritance works in JavaScript.

- **Answer:**
  JavaScript uses prototypes to build up inheritance chains. Every object has a hidden `[[Prototype]]` property, accessible via `Object.getPrototypeOf(obj)` or `obj.__proto__`.

  - **Prototype Chain:** When accessing a property, JavaScript looks in the object, and if not found, it looks up the prototype chain until it reaches `null`.
  - **Inheritance:** Objects can inherit properties and methods from their prototype.

  **Example:**

  ```javascript
  function Person(name) {
    this.name = name;
  }

  Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };

  const alice = new Person("Alice");
  alice.greet(); // Hello, my name is Alice
  ```

### **15. Differences Between `var`, `let`, and `const`**

- **Question:**
  What are the differences between `var`, `let`, and `const` in JavaScript?

- **Answer:**

  - **Scope:**
    - `var` is function-scoped.
    - `let` and `const` are block-scoped.
  - **Hoisting:**
    - `var` declarations are hoisted and initialized with `undefined`.
    - `let` and `const` declarations are hoisted but not initialized (Temporal Dead Zone).
  - **Reassignment:**
    - `var` and `let` can be reassigned.
    - `const` cannot be reassigned.
  - **Redeclaration:**
    - `var` allows redeclaration.
    - `let` and `const` do not allow redeclaration in the same scope.

  **Example:**

  ```javascript
  function test() {
    var x = 1;
    if (true) {
      var x = 2; // Same variable
      let y = 3; // Block-scoped
      const z = 4; // Block-scoped
    }
    console.log(x); // 2
    // console.log(y); // ReferenceError
    // console.log(z); // ReferenceError
  }
  ```

### **16. Hoisting in JavaScript**

- **Question:**
  What is hoisting in JavaScript, and how does it affect variable and function declarations?

- **Answer:**
  Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

  - **Function Declarations:** Entire function is hoisted.
  - **Variable Declarations:**
    - `var` declarations are hoisted and initialized with `undefined`.
    - `let` and `const` are hoisted but not initialized (Temporal Dead Zone).

  **Implications:**

  - Using a `var` variable before its declaration returns `undefined`.
  - Using `let` or `const` variables before their declaration results in a `ReferenceError`.

  **Example:**

  ```javascript
  console.log(foo); // undefined
  var foo = "bar";

  console.log(baz); // ReferenceError
  let baz = "qux";
  ```

### **17. Understanding Asynchronous JavaScript**

- **Question:**
  How does JavaScript handle asynchronous operations, and what are the different ways to manage them?

- **Answer:**
  JavaScript uses the event loop to handle asynchronous operations, allowing non-blocking execution.

  **Ways to Manage Asynchronous Operations:**

  - **Callbacks:**
    - Functions passed as arguments and executed after an operation completes.
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

### **18. Event Bubbling and Capturing**

- **Question:**
  What are event bubbling and capturing in JavaScript event handling?

- **Answer:**
  When an event occurs on an element, it first runs handlers on the most specific element (the target) and then on its ancestors.

  - **Event Capturing (Trickling):**
    - The event propagates from the window down to the target element.
    - Handlers can be set to capture phase by passing `true` as the third argument to `addEventListener`.
  - **Event Bubbling:**
    - The event propagates from the target element up to the window.
    - Default behavior when using `addEventListener` without the third argument or with `false`.

  **Stopping Propagation:**

  - **`event.stopPropagation()`:** Stops further propagation of the event in the bubbling or capturing phases.
  - **`event.stopImmediatePropagation()`:** Stops other handlers from being called.

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

### **19. Explain Modules in JavaScript**

- **Question:**
  How do modules work in JavaScript, and what are the differences between CommonJS and ES6 modules?

- **Answer:**
  Modules are reusable pieces of code encapsulated in their own scope.

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

  - Standardized in ES6.
  - Support in browsers with `<script type="module">`.
  - Asynchronous loading.
  - Export using `export` keyword.
  - Import using `import`.

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

### **20. Memory Management and Garbage Collection**

- **Question:**
  How does JavaScript handle memory management and garbage collection?

- **Answer:**
  JavaScript has automatic garbage collection. The engine allocates memory when objects are created and frees it when they are no longer accessible.

  **Garbage Collection Algorithms:**

  - **Mark-and-Sweep:** The most common algorithm. It periodically scans memory for objects that are no longer reachable and frees them.
  - **Reference Counting:** Tracks the number of references to an object; when it reaches zero, the object is collected.

  **Memory Leaks Causes:**

  - **Global Variables:** Unintentionally creating global variables keeps them in memory.
  - **Timers and Callbacks:** Not clearing `setInterval` or `setTimeout` can prevent garbage collection.
  - **Closures:** Functions that retain references to variables can cause memory to be retained.
  - **Detached DOM Elements:** Removing elements from the DOM but keeping references in JavaScript.

  **Best Practices:**

  - Avoid global variables.
  - Clear timers and intervals when done.
  - Nullify references to large data structures when no longer needed.

### **21. Understanding Promises and Async/Await**

- **Question:**
  Explain how Promises work in JavaScript and how `async`/`await` simplifies working with Promises.

- **Answer:**
  **Promises:**

  - Represent the eventual completion or failure of an asynchronous operation.
  - States: `pending`, `fulfilled`, `rejected`.
  - Methods: `then`, `catch`, `finally`.

  **Async/Await:**

  - Syntax sugar over Promises, introduced in ES2017.
  - Functions declared with `async` return a Promise.
  - `await` pauses execution until the Promise is resolved or rejected.
  - Makes asynchronous code look and behave like synchronous code.

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

## **Additional Important Questions Considering Your Experience**

### **22. ES6 and Beyond Features**

- **Question:**
  What are some significant features introduced in ES6 and later versions, and how do they improve JavaScript?

- **Answer:**
  **ES6 (ES2015):**

  - **Arrow Functions:** Concise syntax and lexical `this` binding.
  - **Classes:** Syntactic sugar over prototypal inheritance.
  - **Template Literals:** Multi-line strings and string interpolation.
  - **Destructuring:** Extracting values from arrays and objects.
  - **Modules:** Import and export statements.
  - **Promises:** For asynchronous operations.
  - **`let` and `const`:** Block-scoped variable declarations.
  - **Default Parameters:** Set default values for function parameters.
  - **Spread and Rest Operators:** Spread (`...array`) and rest (`...args`).

  **ES7 and Beyond:**

  - **Async/Await (ES2017):** Simplifies working with Promises.
  - **Object Rest/Spread Properties (ES2018):** Extract and combine objects.
  - **Optional Chaining (ES2020):** Safely access nested properties (`obj?.prop`).
  - **Nullish Coalescing Operator (ES2020):** Default values when `null` or `undefined` (`value ?? default`).

  **Benefits:**

  - Improved code readability and maintainability.
  - More expressive syntax.
  - Enhanced functionality for modern application development.

### **23. Working with `this` in Arrow Functions**

- **Question:**
  How does the `this` keyword behave in arrow functions compared to regular functions?

- **Answer:**

  - **Arrow Functions:**
    - Do not have their own `this` binding.
    - Lexically inherit `this` from the enclosing scope.
    - Cannot be used as constructors (`new` with arrow functions throws an error).
  - **Regular Functions:**
    - `this` is determined by how the function is called.
    - Can have their `this` bound explicitly using `call`, `apply`, or `bind`.
    - Can be used as constructors.

  **Example:**

  ```javascript
  const obj = {
    value: 42,
    regularFunction: function () {
      return function () {
        console.log(this.value);
      };
    },
    arrowFunction: function () {
      return () => {
        console.log(this.value);
      };
    },
  };

  obj.regularFunction()(); // undefined (or global `this.value`)
  obj.arrowFunction()(); // 42
  ```

### **24. Understanding Event Loop with Async/Await**

- **Question:**
  How does the event loop handle `async`/`await` in JavaScript?

- **Answer:**

  - When an `async` function is called, it synchronously returns a Promise.
  - The `await` keyword pauses the execution of the async function, yielding control back to the event loop.
  - The awaited Promise is executed, and once resolved, the async function continues execution.
  - Awaited operations are scheduled in the microtask queue (higher priority than the task queue).

  **Implications:**

  - Code after `await` runs after all currently pending microtasks are completed.
  - Can cause unexpected behavior if not properly understood.

  **Example:**

  ```javascript
  async function asyncFunction() {
    console.log("Async function started");
    await Promise.resolve();
    console.log("Async function resumed");
  }

  console.log("Script start");
  asyncFunction();
  console.log("Script end");

  // Output:
  // Script start
  // Async function started
  // Script end
  // Async function resumed
  ```

### **25. JavaScript Design Patterns**

- **Question:**
  Can you discuss some common design patterns used in JavaScript?

- **Answer:**
  **Singleton Pattern:**

  - Ensures a class has only one instance and provides a global point of access.

  **Module Pattern:**

  - Encapsulates private variables and exposes public methods (IIFE).

  **Observer Pattern:**

  - Defines a one-to-many dependency between objects; when one changes, dependents are notified.

  **Factory Pattern:**

  - Creates objects without specifying the exact class.

  **Prototype Pattern:**

  - Uses a prototype object to create new objects.

  **Example of Module Pattern:**

  ```javascript
  const myModule = (function () {
    let privateVar = "I am private";

    function privateMethod() {
      console.log(privateVar);
    }

    return {
      publicMethod: function () {
        privateMethod();
      },
    };
  })();

  myModule.publicMethod(); // I am private
  ```

### **26. Error Handling in JavaScript**

- **Question:**
  How do you handle errors in JavaScript, and what is the difference between `throw` and `try...catch`?

- **Answer:**

  - **`throw`:** Used to raise an exception.
  - **`try...catch`:** Used to handle exceptions.

  **Error Handling Mechanism:**

  - Wrap code that may throw an error in a `try` block.
  - Catch errors in the `catch` block.
  - Use `finally` for code that runs regardless of the outcome.

  **Example:**

  ```javascript
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Cleanup code");
  }
  ```

### **27. Understanding Generators and Iterators**

- **Question:**
  What are generators and iterators in JavaScript, and how do they work?

- **Answer:**
  **Generators:**

  - Functions that can pause execution (`yield`) and resume.
  - Defined with `function*` syntax.
  - Return an iterator when called.

  **Iterators:**

  - Objects that implement the `next()` method, returning `{ value, done }`.

  **Example:**

  ```javascript
  function* idGenerator() {
    let id = 1;
    while (true) {
      yield id++;
    }
  }

  const gen = idGenerator();
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  ```

### **28. WeakMap and WeakSet Usage**

- **Question:**
  What are `WeakMap` and `WeakSet` in JavaScript, and when would you use them?

- **Answer:**

  - **WeakMap:**
    - Keyed collections where keys are objects and values can be arbitrary values.
    - Keys are weakly referenced; if there are no other references to the key, it can be garbage collected.
  - **WeakSet:**
    - Collections of objects, where each object can only occur once.
    - Objects are weakly referenced.

  **Use Cases:**

  - **Memory Management:** Prevent memory leaks by allowing garbage collection of unused objects.
  - **Private Data Storage:** Store metadata associated with objects without preventing garbage collection.

  **Example:**

  ```javascript
  const weakMap = new WeakMap();
  let obj = {};
  weakMap.set(obj, "some value");

  // After obj is set to null, it can be garbage collected
  obj = null;
  ```

### **29. Working with Proxies**

- **Question:**
  What are Proxies in JavaScript, and how can they be used?

- **Answer:**
  Proxies allow you to intercept and redefine fundamental operations on objects.

  **Use Cases:**

  - **Validation:** Enforce constraints on object properties.
  - **Property Access Control:** Control how properties are accessed or modified.
  - **Tracing and Logging:** Monitor interactions with objects.
  - **Implementing Observables:** Detect changes to objects.

  **Example:**

  ```javascript
  const handler = {
    get: function (target, property) {
      console.log(`Property '${property}' accessed`);
      return target[property];
    },
    set: function (target, property, value) {
      console.log(`Setting property '${property}' to '${value}'`);
      target[property] = value;
      return true;
    },
  };

  const obj = { a: 1 };
  const proxy = new Proxy(obj, handler);

  console.log(proxy.a); // Property 'a' accessed
  proxy.b = 2; // Setting property 'b' to '2'
  ```

### **30. Understanding Service Workers**

- **Question:**
  What are Service Workers, and how do they enhance web applications?

- **Answer:**
  Service Workers are scripts that run in the background, separate from web pages, enabling features like:

  - **Offline Support:** Cache resources to make applications work offline.
  - **Push Notifications:** Receive and display notifications.
  - **Background Sync:** Defer actions until the user has connectivity.
  - **Interception of Network Requests:** Act as a proxy between the web page and network.

  **Lifecycle:**

  - **Registration:** Register the service worker.
  - **Installation:** Install the service worker.
  - **Activation:** Activate and take control.

  **Example:**

  ```javascript
  // In main.js
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(function (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
    });
  }

  // In sw.js
  self.addEventListener("install", function (event) {
    // Perform install steps
  });

  self.addEventListener("fetch", function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  });
  ```

### **31. Web Security and Best Practices**

- **Question:**
  What are common web security vulnerabilities, and how can you mitigate them in JavaScript applications?

- **Answer:**
  **Common Vulnerabilities:**

  - **Cross-Site Scripting (XSS):** Injection of malicious scripts.
    - **Mitigation:** Sanitize user input, use Content Security Policy (CSP), escape output.
  - **Cross-Site Request Forgery (CSRF):** Unauthorized commands transmitted from a user that the website trusts.
    - **Mitigation:** Use anti-CSRF tokens, SameSite cookies.
  - **Clickjacking:** Tricking users into clicking something different from what they perceive.
    - **Mitigation:** Use `X-Frame-Options` header.
  - **Insecure Direct Object References (IDOR):** Accessing unauthorized resources.
    - **Mitigation:** Implement proper authorization checks.

  **Best Practices:**

  - Validate and sanitize all user inputs.
  - Use HTTPS to encrypt data in transit.
  - Implement proper authentication and authorization.
  - Keep dependencies updated to patch known vulnerabilities.
  - Use security linters and tools to detect vulnerabilities.

### **32. JavaScript Performance Optimization**

- **Question:**
  How can you optimize the performance of JavaScript code in web applications?

- **Answer:**
  **Techniques:**

  - **Minimize DOM Access:** Accessing the DOM is slow; cache references.
  - **Debounce and Throttle:** Control frequency of function execution.
  - **Use Web Workers:** Offload heavy computations to background threads.
  - **Avoid Memory Leaks:** Properly manage event listeners and timers.
  - **Optimize Loops:** Use efficient looping constructs.
  - **Lazy Loading:** Load resources only when needed.
  - **Use Efficient Data Structures:** Choose appropriate data structures for the task.

  **Example of Debouncing:**

  ```javascript
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  window.addEventListener(
    "resize",
    debounce(() => {
      console.log("Resize event handled!");
    }, 500)
  );
  ```

---

# Comprehensive React Interview Questions and Answers

As a full-stack developer with extensive experience in React.js and related technologies, it's essential to prepare for interview questions that test both your theoretical knowledge and practical skills. This document compiles a set of important React questions, including explanations and code examples, tailored to your experience and skills.

---

## **Table of Contents**

1. **Machine Coding Questions**

   1. [Create a Reusable Button Component](#1-create-a-reusable-button-component)
   2. [Implement a Controlled Form Component](#2-implement-a-controlled-form-component)
   3. [Build a Todo List Application](#3-build-a-todo-list-application)
   4. [Implement Lazy Loading of Components](#4-implement-lazy-loading-of-components)
   5. [Create a Higher-Order Component (HOC)](#5-create-a-higher-order-component-hoc)
   6. [Implement Context API for Theme Switching](#6-implement-context-api-for-theme-switching)
   7. [Build a Custom Hook for Fetching Data](#7-build-a-custom-hook-for-fetching-data)
   8. [Implement Error Boundaries](#8-implement-error-boundaries)
   9. [Create a Pagination Component](#9-create-a-pagination-component)
   10. [Implement React Router for Navigation](#10-implement-react-router-for-navigation)

2. **Viva (Oral Interview) Questions**

   1. [Explain the Virtual DOM](#11-explain-the-virtual-dom)
   2. [Component Lifecycle Methods](#12-component-lifecycle-methods)
   3. [Difference Between Stateful and Stateless Components](#13-difference-between-stateful-and-stateless-components)
   4. [Understanding Hooks](#14-understanding-hooks)
   5. [useEffect Hook Behavior](#15-useeffect-hook-behavior)
   6. [Prop Drilling and Context API](#16-prop-drilling-and-context-api)
   7. [Keys in Lists](#17-keys-in-lists)
   8. [Pure Components and React.memo](#18-pure-components-and-reactmemo)
   9. [State Management with Redux](#19-state-management-with-redux)
   10. [Component Communication](#20-component-communication)
   11. [Handling Asynchronous Data](#21-handling-asynchronous-data)

3. **Additional Important Questions Considering Your Experience**
   1. [Using TypeScript with React](#22-using-typescript-with-react)
   2. [Implementing Server-Side Rendering with Next.js](#23-implementing-server-side-rendering-with-nextjs)
   3. [State Management with Redux](#24-state-management-with-redux)
   4. [Styling Components with CSS-in-JS](#25-styling-components-with-css-in-js)
   5. [Optimizing Performance in React Applications](#26-optimizing-performance-in-react-applications)
   6. [Implementing Responsive Design in React](#27-implementing-responsive-design-in-react)
   7. [Integrating RESTful APIs with React](#28-integrating-restful-apis-with-react)
   8. [Deploying React Applications on AWS](#29-deploying-react-applications-on-aws)
   9. [DevOps Practices in Front-End Development](#30-devops-practices-in-front-end-development)
   10. [Understanding Microservices Architecture and Front-End Integration](#31-understanding-microservices-architecture-and-front-end-integration)
   11. [Service Mesh and Its Relevance to Front-End Development](#32-service-mesh-and-its-relevance-to-front-end-development)

---

## **Machine Coding Questions**

### **1. Create a Reusable Button Component**

- **Question:**
  Build a reusable `Button` component in React that supports different styles and behaviors based on props.

- **Explanation:**
  The goal is to create a component that can be customized via props, demonstrating understanding of component composition, props, and styling in React.

- **Code:**

  ```jsx
  // Button.js
  import React from "react";

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

  export default Button;

  // Usage Example
  // <Button variant="success" onClick={() => alert('Clicked!')}>Click Me</Button>
  ```

### **2. Implement a Controlled Form Component**

- **Question:**
  Create a `LoginForm` component with controlled inputs for email and password, including form validation.

- **Explanation:**
  Demonstrates understanding of state management within components, handling user input, form submission, and basic validation.

- **Code:**

  ```jsx
  // LoginForm.js
  import React, { useState } from "react";

  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {};
      if (!email) validationErrors.email = "Email is required";
      if (!password) validationErrors.password = "Password is required";
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        // Submit the form
        console.log("Form submitted", { email, password });
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    );
  };

  export default LoginForm;
  ```

### **3. Build a Todo List Application**

- **Question:**
  Develop a simple Todo List app where users can add, delete, and toggle completion status of todo items.

- **Explanation:**
  Tests ability to manage lists, state updates, and rendering lists of components.

- **Code:**

  ```jsx
  // TodoApp.js
  import React, { useState } from "react";

  const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
      if (input.trim()) {
        setTodos([...todos, { text: input, completed: false }]);
        setInput("");
      }
    };

    const toggleTodo = (index) => {
      const newTodos = todos.map((todo, idx) =>
        idx === index ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
    };

    const deleteTodo = (index) => {
      setTodos(todos.filter((_, idx) => idx !== index));
    };

    return (
      <div>
        <h1>Todo List</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => toggleTodo(index)}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default TodoApp;
  ```

### **4. Implement Lazy Loading of Components**

- **Question:**
  Use React's `lazy` and `Suspense` to lazy-load a component called `HeavyComponent`.

- **Explanation:**
  Tests understanding of code splitting and performance optimization using dynamic imports.

- **Code:**

  ```jsx
  // App.js
  import React, { Suspense, lazy } from "react";

  const HeavyComponent = lazy(() => import("./HeavyComponent"));

  const App = () => {
    return (
      <div>
        <h1>My App</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      </div>
    );
  };

  export default App;
  ```

### **5. Create a Higher-Order Component (HOC)**

- **Question:**
  Write a HOC named `withLoading` that adds a loading spinner to any component.

- **Explanation:**
  Demonstrates understanding of HOCs, a pattern for reusing component logic.

- **Code:**

  ```jsx
  // withLoading.js
  import React from "react";

  const withLoading = (WrappedComponent) => {
    return class extends React.Component {
      render() {
        const { isLoading, ...otherProps } = this.props;
        if (isLoading) {
          return <div>Loading...</div>;
        }
        return <WrappedComponent {...otherProps} />;
      }
    };
  };

  export default withLoading;

  // Usage Example
  // DataComponent.js
  const DataComponent = ({ data }) => <div>Data: {data}</div>;
  const DataComponentWithLoading = withLoading(DataComponent);

  // <DataComponentWithLoading isLoading={true} />
  ```

### **6. Implement Context API for Theme Switching**

- **Question:**
  Create a `ThemeContext` to toggle between light and dark themes in an application.

- **Explanation:**
  Tests ability to use the Context API for state management across the component tree.

- **Code:**

  ```jsx
  // ThemeContext.js
  import React, { createContext, useState } from "react";

  export const ThemeContext = createContext();

  export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  // App.js
  import React, { useContext } from "react";
  import { ThemeProvider, ThemeContext } from "./ThemeContext";

  const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };

  const App = () => (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );

  export default App;
  ```

### **7. Build a Custom Hook for Fetching Data**

- **Question:**
  Create a custom hook `useFetch` that fetches data from an API endpoint.

- **Explanation:**
  Demonstrates ability to create reusable logic with custom hooks.

- **Code:**

  ```jsx
  // useFetch.js
  import { useState, useEffect } from 'react';

  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      let isMounted = true; // Prevent setting state if component is unmounted
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (isMounted) {
          setData(data);
          setLoading(false);
          }
        })
        .catch((error) => {
          if (isMounted) {
          setError(error);
          setLoading(false);
        }
        });
      return () => {
        isMounted = false;
      };
    }, [url]);

    return { data, loading, error };
  };

  export default useFetch;

  // Usage Example
  // DataDisplay.js
  import React from 'react';
  import useFetch from './useFetch';

  const DataDisplay = () => {
    const { data, loading, error } = useFetch('https://api.example.com/data');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <div>Data: {JSON.stringify(data)}</div>;
  };

  export default DataDisplay;
  ```

### **8. Implement Error Boundaries**

- **Question:**
  Create an `ErrorBoundary` component that catches JavaScript errors in its child component tree.

- **Explanation:**
  Tests understanding of error handling in React using error boundaries.

- **Code:**

  ```jsx
  // ErrorBoundary.js
  import React from 'react';

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      // You can log the error to an error reporting service
      console.error('ErrorBoundary caught an error', error, info);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;

  // Usage Example
  // FaultyComponent.js
  const FaultyComponent = () => {
    throw new Error('I crashed!');
    // return <div>This will not render</div>;
  };

  // App.js
  import React from 'react';
  import ErrorBoundary from './ErrorBoundary';
  import FaultyComponent from './FaultyComponent';

  const App = () => (
    <ErrorBoundary>
      <FaultyComponent />
    </ErrorBoundary>
  );

  export default App;
  ```

### **9. Create a Pagination Component**

- **Question:**
  Build a `Pagination` component that displays a list of items with previous and next navigation.

- **Explanation:**
  Tests ability to handle state, props, and user interactions.

- **Code:**

  ```jsx
  // Pagination.js
  import React, { useState } from 'react';

  const Pagination = ({ itemsPerPage, items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    return (
      <div>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };

  export default Pagination;

  // Usage Example
  // App.js
  import React from 'react';
  import Pagination from './Pagination';

  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const App = () => <Pagination itemsPerPage={10} items={items} />;

  export default App;
  ```

### **10. Implement React Router for Navigation**

- **Question:**
  Set up routing in a React application with `react-router-dom` to navigate between Home and About pages.

- **Explanation:**
  Tests understanding of client-side routing and navigation in React.

- **Code:**

  ```jsx
  // App.js
  import React from "react";
  import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from "react-router-dom";

  const Home = () => <h2>Home Page</h2>;
  const About = () => <h2>About Page</h2>;

  const App = () => (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );

  export default App;
  ```

---

## **Viva (Oral Interview) Questions**

### **11. Explain the Virtual DOM**

- **Question:**
  What is the Virtual DOM, and how does React use it to optimize performance?

- **Answer:**
  The Virtual DOM is an in-memory representation of the real DOM. When state or props change, React creates a new Virtual DOM tree and compares it with the previous one using a process called "diffing." It then calculates the minimal set of changes needed and updates the real DOM accordingly. This approach reduces costly DOM manipulations and improves performance.

### **12. Component Lifecycle Methods**

- **Question:**
  Can you explain the different lifecycle methods in React components?

- **Answer:**
  In class components, lifecycle methods include:

  - **Mounting:**
    - `constructor()`: Initialization.
    - `componentDidMount()`: Invoked after the component is mounted; ideal for API calls.
  - **Updating:**
    - `shouldComponentUpdate()`: Determines whether to re-render.
    - `componentDidUpdate()`: Invoked after updates.
  - **Unmounting:**
    - `componentWillUnmount()`: Cleanup before the component is removed.

  In functional components, the `useEffect` hook can mimic lifecycle methods by specifying dependencies.

### **13. Difference Between Stateful and Stateless Components**

- **Question:**
  What are the differences between stateful and stateless components in React?

- **Answer:**
  - **Stateful Components:**
    - Also known as class components (before hooks).
    - Manage their own state using `this.state`.
    - Can access lifecycle methods.
  - **Stateless Components:**
    - Also known as functional components.
    - Do not manage their own state (before hooks).
    - With hooks (`useState`, `useEffect`), functional components can now manage state and side effects.

### **14. Understanding Hooks**

- **Question:**
  What are React Hooks, and why were they introduced?

- **Answer:**
  Hooks are functions that let you use state and other React features without writing a class. They were introduced to simplify code, promote code reuse via custom hooks, and eliminate the confusion around the `this` keyword in classes. Common hooks include `useState`, `useEffect`, `useContext`, `useReducer`, etc.

### **15. useEffect Hook Behavior**

- **Question:**
  How does the `useEffect` hook work, and how can you control when it runs?

- **Answer:**
  `useEffect` runs side effects after render. It takes a function and a dependency array. If the dependency array is empty (`[]`), it runs once after the initial render (similar to `componentDidMount`). If you specify dependencies, it runs after every render where the dependencies change. Returning a function from `useEffect` allows you to perform cleanup (similar to `componentWillUnmount`).

### **16. Prop Drilling and Context API**

- **Question:**
  What is prop drilling, and how does the Context API help to solve it?

- **Answer:**
  Prop drilling refers to passing props down multiple levels in a component hierarchy, even if intermediate components don't need them, just to get data to a deeply nested component. The Context API provides a way to share values between components without explicitly passing props through every level. It allows you to create global variables that can be passed around.

### **17. Keys in Lists**

- **Question:**
  Why are keys important in lists, and how should you choose them?

- **Answer:**
  Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings. Using indexes as keys is not recommended if the list can change because it can lead to rendering issues. A unique identifier from your data is the best choice for a key.

### **18. Pure Components and React.memo**

- **Question:**
  What are Pure Components, and how does `React.memo` improve performance?

- **Answer:**
  Pure Components are class components that implement `shouldComponentUpdate` with a shallow prop and state comparison. `React.memo` is a higher-order component that wraps a functional component to prevent unnecessary re-renders by memoizing the rendered output unless props have changed.

### **19. State Management with Redux**

- **Question:**
  How does Redux help in state management, and what are its core principles?

- **Answer:**
  Redux is a predictable state container for JavaScript apps. It helps manage application state in a single, centralized store. Its core principles are:

  - **Single Source of Truth:** The state is stored in an object tree within a single store.
  - **State is Read-Only:** The only way to change the state is to emit an action, an object describing what happened.
  - **Changes are Made with Pure Functions:** Reducers are pure functions that take the previous state and an action and return the next state.

### **20. Component Communication**

- **Question:**
  How do components communicate in React?

- **Answer:**
  - **Parent to Child:** Via props.
  - **Child to Parent:** By passing a function (callback) as a prop to the child, which the child can call with arguments.
  - **Between Siblings:** Through the parent component passing props or using a state management library.
  - **Global Communication:** Using Context API, Redux, or other state management solutions.

### **21. Handling Asynchronous Data**

- **Question:**
  How do you handle asynchronous data fetching in React?

- **Answer:**
  You can use the `useEffect` hook (in functional components) or lifecycle methods like `componentDidMount` (in class components) to initiate data fetching when the component mounts. Promises or async/await syntax can be used to handle asynchronous operations. It's important to handle loading states and potential errors.

---

## **Additional Important Questions Considering Your Experience**

### **22. Using TypeScript with React**

- **Question:**
  How do you integrate TypeScript with React, and what are the benefits of using TypeScript in a React project?

- **Answer:**
  TypeScript is a statically typed superset of JavaScript that adds optional static typing to the language. Integrating TypeScript with React enhances code quality and developer experience by providing type safety, better tooling support, and improved code maintainability.

  **Benefits:**

  - **Type Safety:** Catch type errors during development, reducing runtime errors.
  - **Better IDE Support:** Enhanced IntelliSense, code completion, and refactoring tools.
  - **Documentation:** Types act as documentation for functions and components.
  - **Refactoring:** Easier and safer code refactoring.

  **Integration Steps:**

  - Install TypeScript and necessary typings:
    ```bash
    npm install typescript @types/react @types/react-dom
    ```
  - Configure `tsconfig.json`.
  - Rename files from `.js` to `.tsx` for components.
  - Update code to include type annotations.

  **Code Example:**

  ```tsx
  import React from "react";

  interface ButtonProps {
    onClick: () => void;
    label: string;
  }

  const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
    <button onClick={onClick}>{label}</button>
  );

  export default Button;
  ```

### **23. Implementing Server-Side Rendering with Next.js**

- **Question:**
  What is Next.js, and how does it enable server-side rendering (SSR) in React applications?

- **Answer:**
  Next.js is a React framework that provides infrastructure and simple development experience for server-rendered (SSR) and statically exported React applications.

  **Features:**

  - **SSR and SSG:** Supports both server-side rendering and static site generation.
  - **Automatic Code Splitting:** Optimizes performance by splitting code automatically.
  - **Routing:** Built-in routing system based on file system.
  - **API Routes:** Ability to create API endpoints within the application.

  **Benefits of SSR:**

  - **Improved SEO:** Server-rendered pages are better indexed by search engines.
  - **Faster Initial Load:** Users see content faster since HTML is generated on the server.
  - **Performance Optimization:** Reduced JavaScript bundle size.

  **Code Example:**

  ```jsx
  // pages/index.js
  import React from "react";

  const Home = ({ data }) => (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>Data fetched from server: {data}</p>
    </div>
  );

  export async function getServerSideProps() {
    // Fetch data from an API
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();

    return { props: { data } };
  }

  export default Home;
  ```

### **24. State Management with Redux**

- **Question:**
  How do you integrate Redux with a React application, and what problems does Redux solve?
  ``

- **Answer:**
  Redux is a state management library that helps manage application state in a predictable way.

  **Problems Solved:**

  - **State Sharing:** Makes it easier to share state across components without prop drilling.
  - **Predictability:** State changes are predictable due to pure reducer functions.
  - **Debugging:** Time-travel debugging and logging capabilities.

  **Integration Steps:**

  - Install Redux and React-Redux:

    ```bash
    npm install redux react-redux
    ```

  - Create a store with reducers.
  - Use `Provider` to pass the store to the React application.
  - Use `connect` or React Redux hooks (`useSelector`, `useDispatch`) to interact with the store.

  **Code Example:**

  ```jsx
  // store.js
  import { createStore } from 'redux';

  const initialState = { count: 0 };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      default:
        return state;
    }
  }

  const store = createStore(reducer);

  export default store;

  // App.js
  import React from 'react';
  import { Provider, useDispatch, useSelector } from 'react-redux';
  import store from './store';

  const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      </div>
    );
  };

  const App = () => (
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  export default App;
  ```

### **25. Styling Components with CSS-in-JS**

- **Question:**
  What is CSS-in-JS, and how do you use it to style React components?

- **Answer:**
  CSS-in-JS is a styling approach where CSS is composed using JavaScript instead of defined in external files. Libraries like styled-components and Emotion enable CSS-in-JS in React.

  **Benefits:**

  - **Scoped Styles:** Avoids global namespace collisions.
  - **Dynamic Styling:** Styles can be altered based on props or state.
  - **Maintainability:** Co-locate styles with components.

  **Code Example with styled-components:**

  ```jsx
  import React from "react";
  import styled from "styled-components";

  const Button = styled.button`
    background-color: ${(props) => (props.primary ? "blue" : "gray")};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
  `;

  const App = () => (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
    </div>
  );

  export default App;
  ```

### **26. Optimizing Performance in React Applications**

- **Question:**
  What techniques can you use to optimize the performance of a React application?

- **Answer:**
  **Techniques:**
  - **Memoization:**
    - Use `React.memo` to prevent unnecessary re-renders.
    - Use `useMemo` and `useCallback` hooks.
  - **Code Splitting:**
    - Implement lazy loading with `React.lazy` and `Suspense`.
  - **Avoid Anonymous Functions in JSX:**
    - Declare functions outside of the render method to prevent re-creation on each render.
  - **Virtualization:**
    - Use libraries like `react-window` or `react-virtualized` for long lists.
  - **Optimizing Redux:**
    - Keep the state flat.
    - Use selectors and memoization with `reselect`.
  - **Performance Profiling:**
    - Use React Developer Tools Profiler to identify bottlenecks.

### **27. Implementing Responsive Design in React**

- **Question:**
  How do you implement responsive design in a React application?

- **Answer:**
  **Approaches:**

  - **CSS Media Queries:**
    - Write CSS rules that apply at different screen sizes.
  - **CSS Frameworks:**
    - Use responsive grid systems provided by frameworks like Bootstrap or Material-UI.
  - **CSS-in-JS with Media Queries:**
    - Use media queries within styled-components or Emotion.
  - **React Responsive Libraries:**
    - Use libraries like `react-responsive` to render components conditionally based on screen size.
  - **Viewport Units and Flexbox/Grid:**
    - Utilize CSS units like `vw`, `vh` and CSS Flexbox/Grid for responsive layouts.

  **Code Example with styled-components:**

  ```jsx
  import styled from "styled-components";

  const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `;
  ```

### **28. Integrating RESTful APIs with React**

- **Question:**
  How do you integrate a RESTful API into a React application?

- **Answer:**
  **Steps:**

  - **API Calls:**
    - Use `fetch`, Axios, or other HTTP clients to make API requests.
  - **State Management:**
    - Store API data in component state or global state (Redux, Context API).
  - **Error Handling:**
    - Implement error handling for failed requests.
  - **Data Fetching Patterns:**
    - Use `useEffect` for data fetching on component mount.
    - Consider custom hooks for reusable data fetching logic.

  **Code Example with `fetch`:**

  ```jsx
  import React, { useState, useEffect } from "react";

  const DataFetcher = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://api.example.com/items")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    return <div>Data: {JSON.stringify(data)}</div>;
  };

  export default DataFetcher;
  ```

### **29. Deploying React Applications on AWS**

- **Question:**
  How can you deploy a React application on AWS, and what AWS services can be used?

- **Answer:**
  **AWS Services for Deployment:**

  - **AWS S3 and CloudFront:**
    - Host static React applications on S3 and use CloudFront as a CDN for caching and SSL termination.
  - **AWS Amplify:**
    - Provides a streamlined way to deploy full-stack serverless applications, including CI/CD.
  - **AWS Elastic Beanstalk:**
    - Deploy applications with back-end servers.
  - **AWS EC2:**
    - Use virtual servers for more control over the hosting environment.

  **Deployment Steps with S3 and CloudFront:**

  - Build the React application using `npm run build`.
  - Upload the build artifacts to an S3 bucket configured for static website hosting.
  - Configure CloudFront to serve content from the S3 bucket.
  - Set up DNS records to point to the CloudFront distribution.

### **30. DevOps Practices in Front-End Development**

- **Question:**
  What DevOps practices are relevant to front-end development, and how do you implement them?

- **Answer:**
  **DevOps Practices:**

  - **Continuous Integration (CI):**
    - Automated testing of code changes using tools like Jenkins, Travis CI, or GitHub Actions.
  - **Continuous Deployment (CD):**
    - Automatic deployment of code changes to staging or production environments.
  - **Infrastructure as Code:**
    - Use tools like Terraform or AWS CloudFormation to manage infrastructure.
  - **Monitoring and Logging:**
    - Implement performance monitoring with tools like New Relic or Datadog.
  - **Automated Testing:**
    - Write unit, integration, and end-to-end tests.
  - **Containerization:**
    - Use Docker to containerize applications for consistent deployment environments.

  **Implementation Example:**

  - Set up a CI/CD pipeline using GitHub Actions that runs tests and deploys to AWS S3 upon successful builds.

### **31. Understanding Microservices Architecture and Front-End Integration**

- **Question:**
  How does a microservices architecture affect front-end development, and what considerations are there for integrating with microservices?

- **Answer:**
  **Effects on Front-End Development:**

  - **API Consumption:**
    - Front-end needs to interact with multiple services, each responsible for different data domains.
  - **Data Aggregation:**
    - May require an API gateway or BFF (Backend for Frontend) pattern to aggregate data.
  - **Consistency:**
    - Handling different response formats and error handling across services.
  - **Authentication and Authorization:**
    - Implement consistent security practices across services.

  **Considerations:**

  - **Service Discovery:**
    - Understanding how to discover and communicate with services.
  - **Latency and Performance:**
    - Minimize the number of API calls; consider caching strategies.
  - **Error Handling:**
    - Implement robust error handling for partial failures.

### **32. Service Mesh and Its Relevance to Front-End Development**

- **Question:**
  What is a service mesh, and how is it relevant to front-end applications?

- **Answer:**
  A service mesh is a dedicated infrastructure layer for facilitating service-to-service communications between microservices, often using sidecar proxies.

  **Relevance to Front-End:**

  - While service mesh primarily affects back-end services, it can impact front-end applications in the following ways:
    - **Reliable Communication:**
      - Ensures that API calls from the front-end reach the appropriate services reliably.
    - **Security:**
      - Implements secure communication channels (e.g., mutual TLS), affecting how the front-end authenticates and communicates with services.
    - **Observability:**
      - Enhanced logging and tracing can help debug issues that affect the front-end.

  **Example:**

  - If the front-end communicates with a BFF or API gateway that is part of a service mesh, understanding the mesh's behavior is important for debugging and performance optimization.

---
