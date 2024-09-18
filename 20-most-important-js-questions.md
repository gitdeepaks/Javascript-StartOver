Below are the 20 JavaScript interview questions, each accompanied by explanations and code examples where applicable.

---

### **Machine Coding Questions:**

1. **Implement a Debounce Function**

   - **Question:**
     Write a debounce function in JavaScript that delays the execution of a callback until after a specified wait time has elapsed since the last time it was invoked.

   - **Explanation:**
     Debouncing ensures that a function is only called after a certain period of inactivity. This is useful for performance optimization in events like resizing or typing, where the event fires multiple times in quick succession.

   - **Code:**

     ```javascript
     function debounce(func, wait) {
       let timeout;
       return function (...args) {
         const context = this;
         clearTimeout(timeout);
         timeout = setTimeout(() => func.apply(context, args), wait);
       };
     }

     // Usage Example
     const handleResize = debounce(() => {
       console.log("Resize event handled!");
     }, 500);

     window.addEventListener("resize", handleResize);
     ```

2. **Deep Clone an Object**

   - **Question:**
     Implement a function to deeply clone a JavaScript object, handling nested objects and arrays.

   - **Explanation:**
     A deep clone creates a new object that is a copy of the original, including all nested objects and arrays. This is different from a shallow copy, which only copies top-level properties.

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

3. **Create a Promise Polyfill**

   - **Question:**
     Write a basic implementation of a Promise, supporting `then`, `catch`, and `finally` methods.

   - **Explanation:**
     A Promise is an object representing the eventual completion or failure of an asynchronous operation. Implementing a Promise requires handling its states and chaining callbacks.

   - **Code:**

     ```javascript
     function MyPromise(executor) {
       let state = "pending";
       let value = undefined;
       let handlers = [];

       function fulfill(result) {
         state = "fulfilled";
         value = result;
         handlers.forEach(handle);
         handlers = null;
       }

       function reject(error) {
         state = "rejected";
         value = error;
         handlers.forEach(handle);
         handlers = null;
       }

       function resolve(result) {
         try {
           let then = getThen(result);
           if (then) {
             doResolve(then.bind(result), resolve, reject);
             return;
           }
           fulfill(result);
         } catch (e) {
           reject(e);
         }
       }

       function getThen(value) {
         let t = typeof value;
         if (value && (t === "object" || t === "function")) {
           let then = value.then;
           if (typeof then === "function") {
             return then;
           }
         }
         return null;
       }

       function handle(handler) {
         if (state === "pending") {
           handlers.push(handler);
         } else {
           if (
             state === "fulfilled" &&
             typeof handler.onFulfilled === "function"
           ) {
             handler.onFulfilled(value);
           }
           if (
             state === "rejected" &&
             typeof handler.onRejected === "function"
           ) {
             handler.onRejected(value);
           }
         }
       }

       this.then = function (onFulfilled, onRejected) {
         return new MyPromise((resolve, reject) => {
           handle({
             onFulfilled: function (value) {
               if (typeof onFulfilled === "function") {
                 try {
                   resolve(onFulfilled(value));
                 } catch (e) {
                   reject(e);
                 }
               } else {
                 resolve(value);
               }
             },
             onRejected: function (error) {
               if (typeof onRejected === "function") {
                 try {
                   resolve(onRejected(error));
                 } catch (e) {
                   reject(e);
                 }
               } else {
                 reject(error);
               }
             },
           });
         });
       };

       this.catch = function (onRejected) {
         return this.then(null, onRejected);
       };

       executor(resolve, reject);
     }

     // Usage Example
     const promise = new MyPromise((resolve, reject) => {
       setTimeout(() => resolve("Success!"), 1000);
     });

     promise.then((value) => console.log(value)); // Logs 'Success!' after 1 second
     ```

4. **Flatten a Nested Array**

   - **Question:**
     Write a function that flattens an arbitrarily nested array of values.

   - **Explanation:**
     Flattening reduces a multi-dimensional array into a single-dimensional array. This can be done recursively or using iteration.

   - **Code:**

     ```javascript
     function flattenArray(arr) {
       return arr.reduce((acc, val) => {
         return Array.isArray(val)
           ? acc.concat(flattenArray(val))
           : acc.concat(val);
       }, []);
     }

     // Usage Example
     const nestedArray = [1, [2, [3, [4]], 5]];
     const flatArray = flattenArray(nestedArray);
     console.log(flatArray); // [1, 2, 3, 4, 5]
     ```

5. **Implement a Simple Event Emitter**

   - **Question:**
     Create an `EventEmitter` class with `on`, `off`, and `emit` methods.

   - **Explanation:**
     An `EventEmitter` allows you to handle events by registering listeners (`on`), removing them (`off`), and emitting events (`emit`).

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
     ```

6. **Build a Function Currying Utility**

   - **Question:**
     Write a function `curry(f)` that transforms a function `f(a, b, c)` into a curried version `f(a)(b)(c)`.

   - **Explanation:**
     Currying transforms a function with multiple arguments into nested unary functions, each taking one argument.

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

7. **Implement Array Methods**

   - **Question:**
     Create custom implementations of `Array.prototype.map`, `filter`, or `reduce`.

   - **Explanation:**
     Re-implementing these methods helps you understand how they work internally.

   - **Code (Custom Reduce):**

     ```javascript
     Array.prototype.customReduce = function (callback, initialValue) {
       if (this == null) {
         throw new TypeError(
           "Array.prototype.customReduce called on null or undefined"
         );
       }
       if (typeof callback !== "function") {
         throw new TypeError(callback + " is not a function");
       }

       let accumulator = initialValue;
       let index = 0;

       if (accumulator === undefined) {
         if (this.length === 0) {
           throw new TypeError("Reduce of empty array with no initial value");
         }
         accumulator = this[0];
         index = 1;
       }

       for (; index < this.length; index++) {
         if (this.hasOwnProperty(index)) {
           accumulator = callback(accumulator, this[index], index, this);
         }
       }
       return accumulator;
     };

     // Usage Example
     const sum = [1, 2, 3, 4].customReduce((acc, val) => acc + val, 0);
     console.log(sum); // Output: 10
     ```

8. **Throttle Function Implementation**

   - **Question:**
     Implement a throttle function that ensures a callback is not called more than once in a specified time frame.

   - **Explanation:**
     Throttling limits the execution of a function to once every specified period, regardless of how many times it's triggered.

   - **Code:**

     ```javascript
     function throttle(func, wait) {
       let lastTime = 0;
       return function (...args) {
         const now = Date.now();
         if (now - lastTime >= wait) {
           lastTime = now;
           func.apply(this, args);
         }
       };
     }

     // Usage Example
     const throttledFunc = throttle(() => {
       console.log("Throttled Function Executed");
     }, 2000);

     window.addEventListener("scroll", throttledFunc);
     ```

9. **Parse Query Parameters**

   - **Question:**
     Write a function that parses a URL query string into a JavaScript object.

   - **Explanation:**
     Parsing query parameters involves extracting key-value pairs from the URL and converting them into an object.

   - **Code:**

     ```javascript
     function parseQueryString(queryString) {
       const params = {};
       const pairs = (
         queryString[0] === "?" ? queryString.substr(1) : queryString
       ).split("&");
       for (let i = 0; i < pairs.length; i++) {
         const pair = pairs[i].split("=");
         const key = decodeURIComponent(pair[0]);
         const value = decodeURIComponent(pair[1] || "");
         if (params[key]) {
           if (Array.isArray(params[key])) {
             params[key].push(value);
           } else {
             params[key] = [params[key], value];
           }
         } else {
           params[key] = value;
         }
       }
       return params;
     }

     // Usage Example
     const url =
       "http://example.com?name=John&age=30&hobby=sports&hobby=reading";
     const queryString = url.split("?")[1];
     const params = parseQueryString(queryString);
     console.log(params);
     // Output: { name: 'John', age: '30', hobby: ['sports', 'reading'] }
     ```

10. **Asynchronous Control Flow with Async/Await**

    - **Question:**
      Given an array of asynchronous functions, execute them sequentially or in parallel and collect their results.

    - **Explanation:**
      Handling multiple asynchronous operations can be done using `async/await` to write cleaner and more maintainable code.

    - **Code (Sequential Execution):**

      ```javascript
      async function executeSequentially(tasks) {
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

      executeSequentially(asyncTasks).then((results) => console.log(results));
      // Output after ~1s: [1, 2, 3]
      ```

    - **Code (Parallel Execution):**

      ```javascript
      async function executeInParallel(tasks) {
        const promises = tasks.map((task) => task());
        return Promise.all(promises);
      }

      // Usage Example
      executeInParallel(asyncTasks).then((results) => console.log(results));
      // Output almost immediately: [1, 2, 3]
      ```

---

### **Viva (Oral Interview) Questions:**

11. **Explain the Event Loop**

    - **Question:**
      Can you describe how the JavaScript event loop works?

    - **Explanation:**
      The event loop is the mechanism that allows JavaScript to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.

      - **Call Stack:** Contains the functions currently being executed.
      - **Web APIs:** Browser APIs like `setTimeout`, AJAX calls, DOM events.
      - **Callback Queue (Task Queue):** Holds messages from Web APIs ready for processing.
      - **Microtask Queue:** Holds microtasks like promises and mutation observers.
      - **Event Loop:** Continuously checks if the call stack is empty and then pushes tasks from the microtask queue or callback queue to the call stack.

      The event loop gives priority to the microtask queue over the callback queue.

12. **Understanding `this` Keyword**

    - **Question:**
      How does the `this` keyword behave in different contexts, and how do arrow functions affect it?

    - **Explanation:**

      - **Global Context:** `this` refers to the global object (`window` in browsers).
      - **Function Context:** In regular functions, `this` depends on how the function is called.
      - **Method Context:** When a function is called as a method of an object, `this` refers to that object.
      - **Constructor Functions:** When using `new`, `this` refers to the newly created instance.
      - **Arrow Functions:** They do not have their own `this`. Instead, they inherit `this` from the enclosing lexical scope.

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

13. **Prototype and Inheritance**

    - **Question:**
      Explain prototypal inheritance in JavaScript.

    - **Explanation:**
      JavaScript uses prototypes to build up inheritance chains. Every object has a hidden property `[[Prototype]]` that can be accessed via `Object.getPrototypeOf(obj)` or `obj.__proto__`.

      - **Prototype Chain:** When accessing a property, JavaScript first looks at the object itself. If not found, it looks up the prototype chain until it finds the property or reaches `null`.

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

14. **Closures in JavaScript**

    - **Question:**
      What are closures, and how are they useful?

    - **Explanation:**
      A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It retains access to the outer scope even after the outer function has returned.

      **Benefits:**

      - **Data Privacy:** Encapsulate variables.
      - **Stateful Functions:** Maintain state between function calls.

      **Example:**

      ```javascript
      function counter() {
        let count = 0;
        return function () {
          count += 1;
          return count;
        };
      }

      const increment = counter();
      console.log(increment()); // 1
      console.log(increment()); // 2
      ```

15. **Hoisting Concept**

    - **Question:**
      What is hoisting in JavaScript?

    - **Explanation:**
      Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

      - **Function Declarations:** Entire function is hoisted.
      - **Variable Declarations (`var`):** Declarations are hoisted, but not initializations.
      - **`let` and `const`:** Hoisted but not initialized, leading to the "Temporal Dead Zone".

      **Example:**

      ```javascript
      console.log(foo); // undefined
      var foo = "bar";

      // With let/const
      console.log(baz); // ReferenceError
      let baz = "qux";
      ```

16. **Differences Between `var`, `let`, and `const`**

    - **Question:**
      Compare `var`, `let`, and `const` in terms of scope, hoisting, and reassignment.

    - **Explanation:**

      - **Scope:**
        - `var`: Function-scoped.
        - `let` and `const`: Block-scoped.
      - **Hoisting:**
        - `var`: Hoisted and initialized with `undefined`.
        - `let` and `const`: Hoisted but not initialized (Temporal Dead Zone).
      - **Reassignment:**
        - `var` and `let`: Can be reassigned.
        - `const`: Cannot be reassigned.

      **Example:**

      ```javascript
      function test() {
        var x = 1;
        if (true) {
          var x = 2; // Same variable
          let y = 3;
          const z = 4;
        }
        console.log(x); // 2
        // console.log(y); // ReferenceError
        // console.log(z); // ReferenceError
      }
      ```

17. **Event Delegation**

    - **Question:**
      What is event delegation, and why is it useful?

    - **Explanation:**
      Event delegation is a technique of handling events at a higher level in the DOM rather than attaching event listeners to individual elements. It leverages event bubbling to catch events from child elements.

      **Benefits:**

      - Reduces memory footprint by minimizing the number of event listeners.
      - Handles dynamic elements added to the DOM.

      **Example:**

      ```html
      <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      ```

      ```javascript
      const list = document.getElementById("list");
      list.addEventListener("click", function (event) {
        if (event.target && event.target.nodeName === "LI") {
          console.log("List item clicked:", event.target.textContent);
        }
      });
      ```

18. **Understanding `call`, `apply`, and `bind`**

    - **Question:**
      How do `call`, `apply`, and `bind` methods work in JavaScript?

    - **Explanation:**
      These methods are used to set the `this` context of a function.

      - **`call`:**
        - Syntax: `func.call(thisArg, arg1, arg2, ...)`
        - Calls a function with a given `this` value and arguments provided individually.
      - **`apply`:**
        - Syntax: `func.apply(thisArg, [argsArray])`
        - Calls a function with a given `this` value and arguments provided as an array.
      - **`bind`:**
        - Syntax: `const boundFunc = func.bind(thisArg, arg1, arg2, ...)`
        - Returns a new function permanently bound to the provided `this` value.

      **Example:**

      ```javascript
      function greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
      }

      const person = { name: "Bob" };

      greet.call(person, "Hello", "!"); // Hello, Bob!
      greet.apply(person, ["Hi", "?"]); // Hi, Bob?
      const boundGreet = greet.bind(person, "Hey");
      boundGreet("."); // Hey, Bob.
      ```

19. **Asynchronous JavaScript Patterns**

    - **Question:**
      What are the different ways to handle asynchronous operations in JavaScript?

    - **Explanation:**

      - **Callbacks:**
        - Functions passed as arguments to other functions and executed after an operation is completed.
      - **Promises:**
        - Objects representing the eventual completion or failure of an asynchronous operation.
      - **`async`/`await`:**
        - Syntax built on top of Promises to write asynchronous code in a synchronous manner.
      - **Event Emitters:**
        - Objects that emit named events, allowing handlers to subscribe and react to those events.

      **Example using Promises:**

      ```javascript
      function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve("Data received"), 1000);
        });
      }

      fetchData().then((data) => console.log(data));
      ```

20. **Memory Management and Garbage Collection**

    - **Question:**
      How does JavaScript handle memory management, and what can cause memory leaks in a front-end application?

    - **Explanation:**
      JavaScript has automatic garbage collection, which reclaims memory occupied by objects that are no longer reachable.

      **Common Causes of Memory Leaks:**

      - **Global Variables:** Unintentional globals can prevent garbage collection.
      - **Timers and Intervals:** Not clearing `setInterval` or `setTimeout` can retain references.
      - **Event Listeners:** Not removing event listeners can keep objects in memory.
      - **Closures:** Holding onto variables longer than necessary.
      - **Detached DOM Trees:** References to DOM nodes that have been removed from the document.

      **Example of a Memory Leak:**

      ```javascript
      // Not clearing an interval
      const intervalId = setInterval(() => {
        // Some recurring task
      }, 1000);

      // If intervalId is not cleared with clearInterval(intervalId), it continues running indefinitely
      ```

---

**Preparation Tips:**

- **Understand Concepts Thoroughly:** Make sure you can explain each concept in your own words.
- **Practice Coding by Hand:** Write code on paper or a whiteboard to simulate interview conditions.
- **Relate to Real-World Examples:** Draw from your experience to provide practical applications of these concepts.
- **Stay Updated with ES6+ Features:** Be familiar with new syntax and features introduced in modern JavaScript.

You're welcome! Yes, revising these questions each day is a great strategy to become more comfortable with the material. Regular review will reinforce your understanding and help you recall the concepts more quickly during interviews.

**Here are some additional tips to maximize your preparation:**

- **Active Recall Practice:**

  - Try to answer each question without looking at the explanations or code.
  - Write down your answers and compare them with the provided solutions.

- **Code by Hand:**

  - Practice writing code on paper or a whiteboard, as you might need to do this during an interview.

- **Teach Someone Else:**

  - Explain the concepts and solutions to a friend or even to yourself out loud.
  - Teaching helps solidify your understanding and reveals any gaps in your knowledge.

- **Apply the Concepts:**

  - Incorporate these concepts into small projects or coding challenges.
  - For example, build a mini-app that uses debouncing or event delegation.

- **Simulate Interview Conditions:**

  - Time yourself while solving problems to get used to working under pressure.
  - Consider doing mock interviews with peers or use online platforms.

- **Stay Updated:**

  - Keep an eye on new JavaScript features or changes in best practices.
  - Read articles or watch tutorials to deepen your understanding.

- **Diversify Practice Problems:**
  - Look for additional questions that cover similar topics to broaden your exposure.
  - Websites like LeetCode, HackerRank, or JavaScript-specific interview question repositories can be helpful.

**Consistency is Key:**

- Daily revision helps transfer knowledge from short-term to long-term memory.
- Even short, focused study sessions can be highly effective if done consistently.

**Mindset and Rest:**

- Stay positive and confident in your abilities.
- Ensure you also get adequate rest; overworking can be counterproductive.

By thoroughly understanding these concepts and practicing regularly, you'll be well-prepared to tackle both machine coding tests and viva questions confidently. Good luck with your interview preparation!
