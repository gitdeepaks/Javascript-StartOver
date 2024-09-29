# JavaScript and React Interview Preparation Guide

This guide provides comprehensive explanations, diagrams, and clean code examples for various JavaScript and React topics. It is designed to help you ace your frontend interviews by deepening your understanding and impressing your interviewer.

---

## JavaScript Topics

### Var, Let, Const

**Explanation:**

- **`var`**: Function-scoped or globally scoped if not inside a function. Can be redeclared and updated.
- **`let`**: Block-scoped. Cannot be redeclared in the same scope but can be updated.
- **`const`**: Block-scoped. Cannot be redeclared or updated. The value must be initialized during declaration.

**Diagram:**

```plaintext
{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); // Accessible
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

**Code Example:**

```javascript
// var example
function varExample() {
  var x = 1;
  if (true) {
    var x = 2; // Same variable
    console.log(x); // 2
  }
  console.log(x); // 2
}

// let example
function letExample() {
  let y = 1;
  if (true) {
    let y = 2; // Different variable
    console.log(y); // 2
  }
  console.log(y); // 1
}

// const example
const z = 1;
// z = 2; // TypeError: Assignment to constant variable
```

---

### Map, Filter, Reduce (and their Polyfills)

**Explanation:**

- **`map()`**: Creates a new array by applying a function to each element of an original array.
- **`filter()`**: Creates a new array with elements that pass a test implemented by a provided function.
- **`reduce()`**: Executes a reducer function on each element of the array, resulting in a single output value.

**Code Examples:**

```javascript
// map example
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]

// filter example
const evenNumbers = numbers.filter((num) => num % 2 === 0); // [2]

// reduce example
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 6
```

**Polyfills:**

```javascript
// map polyfill
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// filter polyfill
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// reduce polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
```

---

### Functions

**Explanation:**

Functions are blocks of code designed to perform a particular task, executed when "called" (invoked).

**Types of Functions:**

- **Function Declaration:**

  ```javascript
  function greet() {
    console.log("Hello!");
  }
  ```

- **Function Expression:**

  ```javascript
  const greet = function () {
    console.log("Hello!");
  };
  ```

- **Arrow Function:**

  ```javascript
  const greet = () => {
    console.log("Hello!");
  };
  ```

**Code Example:**

```javascript
function add(a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
};

const multiply = (a, b) => a * b;
```

---

### Closures

**Explanation:**

A closure is a function that has access to its own scope, the outer function's scope, and the global scope.

**Diagram:**

```plaintext
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
```

**Code Example:**

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(2)); // 7
console.log(add5(3)); // 8
```

---

### Currying

**Explanation:**

Currying is the process of transforming a function with multiple arguments into a sequence of functions each taking a single argument.

**Code Example:**

```javascript
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = curryAdd(1)(2)(3); // 6
```

---

### Objects

**Explanation:**

Objects are collections of key-value pairs. The values can be properties or methods (functions).

**Code Example:**

```javascript
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Hello, my name is John
```

---

### 'this' Keyword

**Explanation:**

The `this` keyword refers to the object it belongs to. It has different values depending on where it is used.

**Code Example:**

```javascript
const obj = {
  name: "Alice",
  getName() {
    return this.name;
  },
};

console.log(obj.getName()); // Alice
```

---

### Call, Bind & Apply

**Explanation:**

- **`call()`**: Invokes a function with a given `this` value and arguments provided one by one.
- **`apply()`**: Invokes a function with a given `this` value and arguments provided as an array.
- **`bind()`**: Returns a new function, permanently bound to the specified `this` value.

**Code Example:**

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Bob" };

greet.call(person, "Hello", "!"); // Hello, Bob!
greet.apply(person, ["Hi", "."]); // Hi, Bob.
const boundGreet = greet.bind(person);
boundGreet("Hey", "?"); // Hey, Bob?
```

---

### Promises

**Explanation:**

Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

**Code Example:**

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 1000);
});

promise
  .then((result) => console.log(result)) // Data fetched
  .catch((error) => console.error(error));
```

---

example of how `Promise.all()` can be used alongside your initial promise setup. In this case, I’ll use multiple promises that resolve after different timeouts to simulate different asynchronous tasks:

### Example:

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from API 1");
  }, 1000); // 1-second delay
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from API 2");
  }, 2000); // 2-second delay
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from API 3");
  }, 1500); // 1.5-second delay
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved successfully:");
    console.log(results); // Output: ["Data from API 1", "Data from API 2", "Data from API 3"]
  })
  .catch((error) => {
    console.error("One or more promises failed:", error);
  });
```

### Explanation:

- Three promises (`promise1`, `promise2`, `promise3`) are created, each resolving after different delays.
- `Promise.all()` waits for all three promises to resolve and then logs the results as an array.
- If any of the promises are rejected, `Promise.all()` will reject with that error and go into the `.catch()` block.

### Integration with Your Original Code Example:

If you want to use `Promise.all()` in conjunction with your original promise:

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data fetch");
  }, 1000);
});

const anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("another data fetch");
  }, 2000);
});

Promise.all([promise, anotherPromise])
  .then((results) => {
    console.log("Both promises resolved:");
    console.log(results); // Output: ["data fetch", "another data fetch"]
  })
  .catch((error) => {
    console.error("One or more promises failed:", error);
  });
```

This version combines your initial promise with an additional one, both being handled in parallel by `Promise.all()`.

### Debouncing

**Explanation:**

Debouncing ensures that a function is only called after a certain amount of time has passed since it was last called.

**Code Example:**

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Resize event debounced");
  }, 500)
);
```

---

### Throttling

**Explanation:**

Throttling ensures that a function is called at most once in a specified time period.

**Code Example:**

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll event throttled");
  }, 1000)
);
```

---

### Event Propagation

**Explanation:**

Event propagation is the order in which events are received on the page (capturing, target, bubbling).

**Diagram:**

```plaintext
[Window] -> [Document] -> [HTML] -> [Body] -> [Parent Div] -> [Child Div]
// Event Capturing Phase (from Window to Target)
// Event Bubbling Phase (from Target back up to Window)
```

**Code Example:**

```html
<div id="parent">
  Parent
  <div id="child">Child</div>
</div>
<script>
  document.getElementById("parent").addEventListener(
    "click",
    () => {
      console.log("Parent clicked");
    },
    false // Bubbling phase
  );

  document.getElementById("child").addEventListener(
    "click",
    () => {
      console.log("Child clicked");
    },
    false
  );
</script>
```

---

### Compose and Pipe

**Explanation:**

- **Compose**: Combines functions from right to left.
- **Pipe**: Combines functions from left to right.

**Code Example:**

```javascript
const compose =
  (...functions) =>
  (args) =>
    functions.reduceRight((arg, fn) => fn(arg), args);

const pipe =
  (...functions) =>
  (args) =>
    functions.reduce((arg, fn) => fn(arg), args);

// Example functions
const add = (x) => x + 1;
const multiply = (x) => x * 2;

const composedFunction = compose(add, multiply);
console.log(composedFunction(5)); // (5 * 2) + 1 = 11

const pipedFunction = pipe(add, multiply);
console.log(pipedFunction(5)); // (5 + 1) * 2 = 12
```

---

### Prototypes

**Explanation:**

Every JavaScript object has a prototype. The prototype is an object from which other objects inherit properties.

**Code Example:**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};

const person1 = new Person("Eve");
person1.greet(); // Hello, Eve
```

---

### Class and Constructors

**Explanation:**

Classes are syntactic sugar over JavaScript's existing prototype-based inheritance.

**Code Example:**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks
```

---

### Event Loop

**Explanation:**

The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

**Diagram:**

```plaintext
Call Stack        Task Queue
   |                  |
   V                  V
[Main()]        [setTimeout(), Promises]
```

**Code Example:**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
```

---

## React Interview Questions

### How React Works Under the Hood

**Explanation:**

React creates a virtual DOM (a JavaScript representation of the actual DOM). When state changes, React compares the new virtual DOM with the previous one (diffing algorithm), determines the minimal changes required, and updates the real DOM efficiently.

**Diagram:**

```plaintext
[JSX] --> [Virtual DOM] --> [Diffing] --> [Real DOM]
```

---

### React Rendering Process (Virtual DOM and Diffing Algorithm)

**Explanation:**

- **Virtual DOM**: A lightweight copy of the real DOM that React keeps in memory.
- **Diffing Algorithm**: Compares the previous and current virtual DOM trees to find out what has changed.

**Code Example:**

```jsx
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### Most Asked Interview Questions

#### Ques 1: What is React and why is it used?

**Answer:**

React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. React is used because it:

- Enhances performance via the virtual DOM.
- Encourages reusable components.
- Simplifies complex UIs with declarative code.

---

#### Ques 2: What is JSX, and why is it used?

**Answer:**

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML. JSX is used in React to describe the UI structure, making the code more readable and easier to write.

**Code Example:**

```jsx
const element = <h1>Hello, world!</h1>;
```

---

#### Ques 3: What is a React component?

**Answer:**

A React component is a reusable piece of UI that can be either a function or a class. Components accept inputs called props and return React elements describing what should appear on the screen.

---

#### Ques 4: What is the difference between state and props?

**Answer:**

- **Props**: Short for properties, they are read-only inputs passed to a component from its parent.
- **State**: Internal data managed within the component, can change over time, and affects how the component renders.

---

#### Ques 5: What is prop drilling?

**Answer:**

Prop drilling refers to the process where you pass data through multiple nested components that do not need it, just to reach a child component that does.

---

#### Ques 6: What is a React fragment, and why is it used?

**Answer:**

React Fragments let you group a list of children without adding extra nodes to the DOM.

**Code Example:**

```jsx
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>
```

---

#### Ques 7: How do you define and use state in a React Functional component? How are they different from normal variables?

**Answer:**

State in functional components is defined using the `useState` hook. Unlike normal variables, state variables trigger a re-render when updated.

**Code Example:**

```jsx
function Counter() {
  const [count, setCount] = useState(0); // State variable
  let normalCount = 0; // Normal variable

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Normal Count: {normalCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment State Count</button>
      <button onClick={() => normalCount++}>Increment Normal Count</button>
    </div>
  );
}
```

---

#### Ques 8: How do you define and use state in a React class component?

**Answer:**

State is defined in the constructor and updated using `this.setState()`.

**Code Example:**

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

---

#### Ques 9: How do you pass props to a functional component?

**Answer:**

Props are passed to a functional component via its parameters.

**Code Example:**

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Greeting name="Alice" />;
```

---

#### Ques 10: What are PropTypes?

**Answer:**

PropTypes is a type-checking feature to ensure that components receive props of the correct type.

**Code Example:**

```jsx
import PropTypes from "prop-types";

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
```

---

#### Ques 11: How do you use props in a class component?

**Answer:**

Props are accessed via `this.props` in class components.

**Code Example:**

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

#### Ques 12: In how many ways can we export/import things from a JS Module?

**Answer:**

- **Named Exports/Imports**:

  ```javascript
  // Export
  export const name = "Alice";

  // Import
  import { name } from "./module";
  ```

- **Default Exports/Imports**:

  ```javascript
  // Export
  export default function () {}

  // Import
  import myFunction from "./module";
  ```

---

#### Ques 13: What is Virtual DOM?

**Answer:**

The Virtual DOM is an in-memory representation of the real DOM. It allows React to perform efficient updates by calculating the differences between the virtual DOM and the real DOM.

---

#### Ques 14: Reconciliation vs Rendering?

**Answer:**

- **Reconciliation**: The process of updating the DOM with minimal changes after comparing the new virtual DOM with the old one.
- **Rendering**: The initial process of creating the DOM nodes from React components.

---

#### Ques 15: What is the Diff Algorithm?

**Answer:**

React's Diff Algorithm efficiently compares two virtual DOM trees by:

- Comparing elements of the same level.
- Assuming different types of elements lead to different subtrees.
- Using keys to identify elements uniquely.

---

### Map, Filter, and Reduce in React

**Explanation:**

These array methods are commonly used in React to manipulate state and props for rendering lists.

**Code Example:**

```jsx
function NumbersList({ numbers }) {
  const doubled = numbers.map((num) => num * 2);
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <p>Doubled: {doubled.join(", ")}</p>
      <p>Even: {evenNumbers.join(", ")}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}
```

---

### Conditional Operators

**Explanation:**

Used in React to conditionally render components.

**Code Example:**

```jsx
function UserGreeting({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please sign up.</p>}</div>
  );
}
```

---

### Classic vs Functional React

**Explanation:**

- **Class Components**: Use ES6 classes, have state and lifecycle methods.
- **Functional Components**: Use functions, can use hooks for state and lifecycle features.

---

### State vs Props

**Explanation:**

- **State**: Data that changes over time, managed within the component.
- **Props**: Data passed to the component, read-only.

---

### Types of Components

- **Functional Components**
- **Class Components**
- **Pure Components**
- **Higher-Order Components**

---

### `useState` (Deep and Under the Hood Explanation)

**Explanation:**

`useState` is a hook that lets you add React state to functional components. It returns a state variable and a function to update it.

**Code Example:**

```jsx
function Counter() {
  const [count, setCount] = useState(0); // Under the hood, React keeps track of state variables in an array

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### `useEffect` (Deep and Under the Hood Explanation)

**Explanation:**

`useEffect` is a hook for performing side effects in functional components (e.g., data fetching, subscriptions).

**Code Example:**

```jsx
function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Runs after every render
    fetchData().then((result) => setData(result));
  }, []); // Empty array ensures it runs only once (componentDidMount)

  return <div>{data}</div>;
}
```

**Under the Hood:**

React keeps track of dependencies, and runs the effect after rendering if dependencies have changed.

---

### `useEffect` Polyfill

**Code Example:**

```javascript
// Simplified polyfill
function useEffect(effect, dependencies) {
  const hasChanged = dependencies.some((dep, i) => dep !== prevDependencies[i]);
  if (hasChanged) {
    cleanupRef.current && cleanupRef.current();
    cleanupRef.current = effect();
    prevDependencies = dependencies;
  }
}
```

---

### `useRef` Hook

**Explanation:**

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument.

**Code Example:**

```jsx
function FocusInput() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // Accessing DOM node directly
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus Input</button>
    </div>
  );
}
```

---

### `useContext` Hook

**Explanation:**

`useContext` lets you consume context values without the need for a Consumer component.

**Code Example:**

```jsx
const ThemeContext = React.createContext("light");

function ThemedButton() {
  const theme = useContext(ThemeContext); // Consuming context
  return <button className={theme}>Click me</button>;
}
```

---

### Context API to Implement Dark and Light Mode in React JS

**Code Example:**

```jsx
// ThemeContext.js
export const ThemeContext = React.createContext();

// App.js
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemedComponent />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

// ThemedComponent.js
function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div className={`theme-${theme}`}>Theme is {theme}</div>;
}
```

---

### `useReducer` Hook

**Explanation:**

`useReducer` is an alternative to `useState`. It accepts a reducer function and an initial state, returning the current state and a dispatch function.

**Code Example:**

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      {state.count}
    </button>
  );
}
```

---

### `useMemo`

**Explanation:**

`useMemo` memoizes a computed value, recomputing it only when dependencies change.

**Code Example:**

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

### `useCallback`

**Explanation:**

`useCallback` returns a memoized callback function, preventing unnecessary re-creations.

**Code Example:**

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

### `useMemo` Polyfill

**Code Example:**

```javascript
function useMemo(factory, dependencies) {
  const hasChanged = dependencies.some((dep, i) => dep !== prevDependencies[i]);
  if (hasChanged) {
    memoizedValue = factory();
    prevDependencies = dependencies;
  }
  return memoizedValue;
}
```

---

### `useImperativeHandle` Hook

**Explanation:**

Customizes the instance value that is exposed to parent components when using `ref`.

**Code Example:**

```jsx
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  return <input ref={inputRef} />;
}

const ForwardedFancyInput = forwardRef(FancyInput);

// Parent Component
function Parent() {
  const ref = useRef();
  return (
    <div>
      <ForwardedFancyInput ref={ref} />
      <button onClick={() => ref.current.focus()}>Focus Input</button>
    </div>
  );
}
```

---

### `forwardRef`

**Explanation:**

`forwardRef` allows your component to accept a `ref` prop that you can pass down to a child component.

---

### `useWindowSize` Custom Hook

**Code Example:**

```jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
```

---

### `useFetch` Custom Hook

**Code Example:**

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isCancelled = false;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (!isCancelled) {
          setData(result);
        }
      });
    return () => {
      isCancelled = true;
    };
  }, [url]);

  return data;
}
```

---

### `useDebounce` Custom Hook

**Code Example:**

```jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

---

### `useLocalStorage` Custom Hook

**Code Example:**

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  );

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
```

---

### `useIntersectionObserver` Hook

**Explanation:**

Observes when a target element intersects with the viewport or a parent element.

**Code Example:**

```jsx
function useIntersectionObserver(elementRef, options) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options]);

  return isIntersecting;
}
```

---

### React Router

**Explanation:**

React Router is a standard library for routing in React applications.

**Code Example:**

```jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
```

---

### Advanced State Management (Redux)

**Explanation:**

Redux is a state management library for JavaScript apps, providing a centralized store for state.

**Code Example:**

```javascript
// actions.js
export const increment = () => ({ type: "INCREMENT" });

// reducer.js
const initialState = { count: 0 };
function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// store.js
import { createStore } from "redux";
const store = createStore(counter);
```

---

### Redux Toolkit Implementation

**Explanation:**

Redux Toolkit simplifies Redux development by providing tools like `configureStore` and `createSlice`.

**Code Example:**

```javascript
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
```

---

## Machine Coding Round Examples

### TODO List in HTML, CSS, JavaScript

**Code Example:**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Add styles here */
    </style>
  </head>
  <body>
    <div id="todo-app">
      <input type="text" id="new-todo" placeholder="Add a todo" />
      <button id="add-button">Add</button>
      <ul id="todo-list"></ul>
    </div>
    <script>
      const todos = [];
      const todoList = document.getElementById("todo-list");
      const addButton = document.getElementById("add-button");
      addButton.addEventListener("click", addTodo);

      function addTodo() {
        const newTodo = document.getElementById("new-todo").value;
        if (newTodo) {
          todos.push(newTodo);
          renderTodos();
          document.getElementById("new-todo").value = "";
        }
      }

      function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
          const li = document.createElement("li");
          li.textContent = todo;
          todoList.appendChild(li);
        });
      }
    </script>
  </body>
</html>
```

---

### Build a Highly Scalable Carousel Component in React JS

**Explanation:**

A carousel component displays a series of content items one at a time, allowing users to navigate between them.

**Code Example:**

```jsx
function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  const next = () => setCurrentIndex((currentIndex + 1) % items.length);

  return (
    <div className="carousel">
      <button onClick={prev}>Prev</button>
      <div className="carousel-item">{items[currentIndex]}</div>
      <button onClick={next}>Next</button>
    </div>
  );
}
```

---

### Implement Infinite Scrolling in React JS

**Code Example:**

```jsx
function InfiniteScrollList() {
  const [items, setItems] = useState([...initialItems]);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      // Fetch more items or append to list
      setItems((prev) => [...prev, ...moreItems]);
    }
  }, []);

  useEffect(() => {
    const option = { root: null, rootMargin: "20px", threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
      <div ref={loader} />
    </div>
  );
}
```

---

## 1. React App with Posts and Comments Navigation

**Objective:**

- Build a React app that displays a list of posts.
- Users can click on a post to view its details and comments on a separate page.
- Use the API: `https://jsonplaceholder.typicode.com/posts?_limit=50`.
- Implement React Router for navigation.
- Enhance rendering performance and API call efficiency.

**Solution Overview:**

We'll create a React application with two main pages:

1. **Home Page**: Displays a list of posts.
2. **Post Details Page**: Shows the details of a selected post along with its comments.

**Performance Enhancements:**

- **Memoization**: Use `React.memo` and `useMemo` to prevent unnecessary re-renders.
- **Code Splitting**: Implement dynamic imports for route-based code splitting.
- **Efficient API Calls**: Fetch data once and cache it, use pagination if necessary.

**Code Implementation:**

1. **Install Dependencies:**

   ```bash
   npm install react-router-dom axios
   ```

2. **App.js:**

   ```jsx
   import React from "react";
   import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
   import PostsList from "./PostsList";
   import PostDetails from "./PostDetails";

   function App() {
     return (
       <Router>
         <Switch>
           <Route exact path="/" component={PostsList} />
           <Route path="/post/:id" component={PostDetails} />
         </Switch>
       </Router>
     );
   }

   export default App;
   ```

3. **PostsList.js:**

   ```jsx
   import React, { useEffect, useState } from "react";
   import { Link } from "react-router-dom";
   import axios from "axios";

   function PostsList() {
     const [posts, setPosts] = useState([]);

     useEffect(() => {
       axios
         .get("https://jsonplaceholder.typicode.com/posts?_limit=50")
         .then((response) => setPosts(response.data))
         .catch((error) => console.error(error));
     }, []);

     return (
       <div>
         <h1>Posts</h1>
         <ul>
           {posts.map((post) => (
             <li key={post.id}>
               <Link to={`/post/${post.id}`}>{post.title}</Link>
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default React.memo(PostsList);
   ```

4. **PostDetails.js:**

   ```jsx
   import React, { useEffect, useState } from "react";
   import axios from "axios";

   function PostDetails({ match }) {
     const [post, setPost] = useState(null);
     const [comments, setComments] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         const postResponse = await axios.get(
           `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
         );
         setPost(postResponse.data);

         const commentsResponse = await axios.get(
           `https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`
         );
         setComments(commentsResponse.data);
       };
       fetchData();
     }, [match.params.id]);

     if (!post) return <div>Loading...</div>;

     return (
       <div>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
         <h2>Comments</h2>
         <ul>
           {comments.map((comment) => (
             <li key={comment.id}>
               <strong>{comment.name}:</strong> {comment.body}
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default React.memo(PostDetails);
   ```

**Performance Tips:**

- **Memoization**: Wrapped components with `React.memo` to prevent unnecessary re-renders.
- **Data Caching**: Implement caching for API responses to avoid redundant network requests.
- **Pagination**: For large datasets, implement pagination or infinite scrolling.

---

## 2. Progress Bar Component

**Objective:**

- Build a scalable and accessible Progress Bar component in React.
- Display the percentage value in the middle.
- Implement a green progress fill animation (`#00c251`).

**Code Implementation:**

1. **ProgressBar.js:**

   ```jsx
   import React from "react";
   import "./ProgressBar.css";

   function ProgressBar({ progress }) {
     return (
       <div
         className="progress-bar"
         role="progressbar"
         aria-valuenow={progress}
         aria-valuemin="0"
         aria-valuemax="100"
       >
         <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
           <span className="progress-bar-text">{`${progress}%`}</span>
         </div>
       </div>
     );
   }

   export default ProgressBar;
   ```

2. **ProgressBar.css:**

   ```css
   .progress-bar {
     width: 100%;
     background-color: #e0e0e0;
     border-radius: 8px;
     overflow: hidden;
     position: relative;
   }

   .progress-bar-fill {
     display: flex;
     align-items: center;
     justify-content: center;
     height: 30px;
     background-color: #00c251;
     width: 0;
     transition: width 0.5s ease-in-out;
     color: #fff;
     font-weight: bold;
   }

   .progress-bar-text {
     position: absolute;
     width: 100%;
     text-align: center;
   }
   ```

3. **Usage Example:**

   ```jsx
   import React, { useState } from "react";
   import ProgressBar from "./ProgressBar";

   function App() {
     const [progress, setProgress] = useState(50);

     return (
       <div>
         <ProgressBar progress={progress} />
         <button onClick={() => setProgress(progress + 10)}>Increase</button>
       </div>
     );
   }

   export default App;
   ```

**Accessibility Considerations:**

- Added `role="progressbar"` and `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for screen readers.

**Scalability:**

- The component accepts a `progress` prop, making it reusable.
- Styles are kept in a separate CSS file for modularity.

---

## 3. Star Rating Component

**Objective:**

- Create a reusable Star Rating component.
- Features:
  - Displays 5 stars.
  - Users can click to set a rating.
  - Includes hover effects.
  - Accepts props for size, current rating, etc.

**Code Implementation:**

1. **StarRating.js:**

   ```jsx
   import React, { useState } from "react";
   import PropTypes from "prop-types";
   import "./StarRating.css";

   function StarRating({ totalStars = 5, size = 24, rating, onRatingChange }) {
     const [hoverRating, setHoverRating] = useState(0);

     const getStarClass = (index) => {
       if (hoverRating >= index) {
         return "star hovered";
       } else if (!hoverRating && rating >= index) {
         return "star filled";
       }
       return "star";
     };

     return (
       <div className="star-rating" style={{ fontSize: size }}>
         {[...Array(totalStars)].map((_, i) => (
           <span
             key={i}
             className={getStarClass(i + 1)}
             onClick={() => onRatingChange(i + 1)}
             onMouseEnter={() => setHoverRating(i + 1)}
             onMouseLeave={() => setHoverRating(0)}
           >
             ★
           </span>
         ))}
       </div>
     );
   }

   StarRating.propTypes = {
     totalStars: PropTypes.number,
     size: PropTypes.number,
     rating: PropTypes.number.isRequired,
     onRatingChange: PropTypes.func.isRequired,
   };

   export default StarRating;
   ```

2. **StarRating.css:**

   ```css
   .star-rating {
     display: flex;
     cursor: pointer;
   }

   .star {
     color: #ccc;
     transition: color 0.2s;
   }

   .star.filled,
   .star.hovered {
     color: #ffcc00;
   }
   ```

3. **Usage Example:**

   ```jsx
   import React, { useState } from "react";
   import StarRating from "./StarRating";

   function App() {
     const [rating, setRating] = useState(3);

     return (
       <div>
         <h1>Your Rating: {rating}</h1>
         <StarRating
           totalStars={5}
           size={30}
           rating={rating}
           onRatingChange={setRating}
         />
       </div>
     );
   }

   export default App;
   ```

**Enhancements:**

- **Hover Effects**: Stars change color on hover to indicate interactivity.
- **Customization**: Props for `totalStars`, `size`, and initial `rating`.
- **Reusability**: Component can be used across different parts of an application.

---

## 4. E-Commerce Filters in React JS

**Objective:**

- Fetch and display a list of products.
- Implement filters:
  - Sort by price.
  - Show/hide out-of-stock products.
  - Search products.
  - Filter by rating.
- Implement pagination.
- Use production-grade state management.

**Solution Overview:**

- Use **Redux** or **Context API** for state management.
- Implement filtering logic on the client side.
- Use pagination to handle large data sets.

**Code Implementation:**

1. **Install Dependencies:**

   ```bash
   npm install axios react-router-dom
   ```

2. **ProductContext.js:**

   ```jsx
   import React, { createContext, useState, useEffect } from "react";
   import axios from "axios";

   export const ProductContext = createContext();

   export function ProductProvider({ children }) {
     const [products, setProducts] = useState([]);
     const [filters, setFilters] = useState({
       search: "",
       sort: "",
       outOfStock: false,
       rating: 0,
     });

     useEffect(() => {
       axios.get("https://api.example.com/products").then((response) => {
         setProducts(response.data);
       });
     }, []);

     return (
       <ProductContext.Provider value={{ products, filters, setFilters }}>
         {children}
       </ProductContext.Provider>
     );
   }
   ```

3. **ProductList.js:**

   ```jsx
   import React, { useContext } from "react";
   import { ProductContext } from "./ProductContext";

   function ProductList() {
     const { products, filters } = useContext(ProductContext);

     const filteredProducts = products
       .filter((product) => product.name.includes(filters.search))
       .filter((product) => (filters.outOfStock ? true : product.inStock))
       .filter((product) => product.rating >= filters.rating)
       .sort((a, b) => {
         if (filters.sort === "price-low-high") {
           return a.price - b.price;
         } else if (filters.sort === "price-high-low") {
           return b.price - a.price;
         }
         return 0;
       });

     return (
       <div>
         {filteredProducts.map((product) => (
           <div key={product.id}>
             <h2>{product.name}</h2>
             <p>${product.price}</p>
           </div>
         ))}
       </div>
     );
   }

   export default ProductList;
   ```

4. **FiltersComponent.js:**

   ```jsx
   import React, { useContext } from "react";
   import { ProductContext } from "./ProductContext";

   function FiltersComponent() {
     const { filters, setFilters } = useContext(ProductContext);

     return (
       <div>
         <input
           type="text"
           placeholder="Search"
           value={filters.search}
           onChange={(e) => setFilters({ ...filters, search: e.target.value })}
         />
         <select
           value={filters.sort}
           onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
         >
           <option value="">Sort By</option>
           <option value="price-low-high">Price Low to High</option>
           <option value="price-high-low">Price High to Low</option>
         </select>
         <label>
           <input
             type="checkbox"
             checked={filters.outOfStock}
             onChange={(e) =>
               setFilters({ ...filters, outOfStock: e.target.checked })
             }
           />
           Include Out of Stock
         </label>
         <input
           type="number"
           placeholder="Rating"
           value={filters.rating}
           onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
         />
       </div>
     );
   }

   export default FiltersComponent;
   ```

5. **PaginationComponent.js:**

   ```jsx
   import React, { useState } from "react";

   function PaginationComponent({ totalItems, itemsPerPage, onPageChange }) {
     const [currentPage, setCurrentPage] = useState(1);
     const totalPages = Math.ceil(totalItems / itemsPerPage);

     const changePage = (page) => {
       setCurrentPage(page);
       onPageChange(page);
     };

     return (
       <div>
         {Array.from({ length: totalPages }, (_, i) => (
           <button key={i} onClick={() => changePage(i + 1)}>
             {i + 1}
           </button>
         ))}
       </div>
     );
   }

   export default PaginationComponent;
   ```

**Production-Grade State Management:**

- For larger applications, consider using **Redux** or **MobX**.
- This example uses the Context API for simplicity.

---

## 5. E-Commerce Cart using React JS

**Objective:**

- Fetch products from `https://dummyjson.com/products?limit=100`.
- Implement:
  - Add to Cart functionality.
  - Separate Cart page to manage items and display total pricing.
  - Filters from the previous lesson.
  - Production-grade state management.
  - Pagination.

**Solution Overview:**

- Use **Redux Toolkit** for state management.
- Implement cart slice to manage cart state.
- Reuse filter components from the previous lesson.

**Code Implementation:**

1. **Install Dependencies:**

   ```bash
   npm install @reduxjs/toolkit react-redux axios react-router-dom
   ```

2. **store.js:**

   ```jsx
   import { configureStore } from "@reduxjs/toolkit";
   import cartReducer from "./cartSlice";

   export default configureStore({
     reducer: {
       cart: cartReducer,
     },
   });
   ```

3. **cartSlice.js:**

   ```jsx
   import { createSlice } from "@reduxjs/toolkit";

   const cartSlice = createSlice({
     name: "cart",
     initialState: [],
     reducers: {
       addItem: (state, action) => {
         state.push(action.payload);
       },
       removeItem: (state, action) => {
         return state.filter((item) => item.id !== action.payload.id);
       },
     },
   });

   export const { addItem, removeItem } = cartSlice.actions;
   export default cartSlice.reducer;
   ```

4. **ProductList.js:**

   ```jsx
   import React, { useEffect, useState } from "react";
   import { useDispatch } from "react-redux";
   import { addItem } from "./cartSlice";
   import axios from "axios";

   function ProductList() {
     const [products, setProducts] = useState([]);
     const dispatch = useDispatch();

     useEffect(() => {
       axios
         .get("https://dummyjson.com/products?limit=100")
         .then((response) => {
           setProducts(response.data.products);
         });
     }, []);

     return (
       <div>
         {products.map((product) => (
           <div key={product.id}>
             <h2>{product.title}</h2>
             <p>${product.price}</p>
             <button onClick={() => dispatch(addItem(product))}>
               Add to Cart
             </button>
           </div>
         ))}
       </div>
     );
   }

   export default ProductList;
   ```

5. **CartPage.js:**

   ```jsx
   import React from "react";
   import { useSelector, useDispatch } from "react-redux";
   import { removeItem } from "./cartSlice";

   function CartPage() {
     const cart = useSelector((state) => state.cart);
     const dispatch = useDispatch();

     const totalPrice = cart.reduce((total, item) => total + item.price, 0);

     return (
       <div>
         <h1>Shopping Cart</h1>
         {cart.map((item) => (
           <div key={item.id}>
             <h2>{item.title}</h2>
             <p>${item.price}</p>
             <button onClick={() => dispatch(removeItem(item))}>Remove</button>
           </div>
         ))}
         <h2>Total: ${totalPrice}</h2>
       </div>
     );
   }

   export default CartPage;
   ```

6. **Integration with Filters and Pagination:**

   - Reuse the filter components from the previous lesson.
   - Implement pagination logic similar to the previous example.

**State Management:**

- Used **Redux Toolkit** for efficient and scalable state management.
- Cart state is managed globally and can be accessed from any component.

---

## 6. Advanced Tic Tac Toe App with Customizable Board Size

**Objective:**

- Build a Tic Tac Toe game in React.
- Allow customization of the board size via props.

**Solution Overview:**

- The game logic should adapt to any square board size (e.g., 3x3, 4x4).
- Update winning condition checks to accommodate different board sizes.

**Code Implementation:**

1. **GameBoard.js:**

   ```jsx
   import React, { useState } from "react";
   import PropTypes from "prop-types";

   function GameBoard({ size }) {
     const [squares, setSquares] = useState(Array(size * size).fill(null));
     const [isXNext, setIsXNext] = useState(true);

     const handleClick = (i) => {
       if (calculateWinner(squares) || squares[i]) {
         return;
       }
       const newSquares = squares.slice();
       newSquares[i] = isXNext ? "X" : "O";
       setSquares(newSquares);
       setIsXNext(!isXNext);
     };

     const winner = calculateWinner(squares);

     const renderSquare = (i) => (
       <button className="square" onClick={() => handleClick(i)}>
         {squares[i]}
       </button>
     );

     const board = [];
     for (let i = 0; i < size; i++) {
       const row = [];
       for (let j = 0; j < size; j++) {
         row.push(renderSquare(i * size + j));
       }
       board.push(
         <div key={i} className="board-row">
           {row}
         </div>
       );
     }

     return (
       <div>
         <div>
           {winner
             ? `Winner: ${winner}`
             : `Next Player: ${isXNext ? "X" : "O"}`}
         </div>
         {board}
       </div>
     );
   }

   GameBoard.propTypes = {
     size: PropTypes.number.isRequired,
   };

   export default GameBoard;
   ```

2. **Winning Logic (update `calculateWinner` function):**

   ```jsx
   function calculateWinner(squares) {
     const size = Math.sqrt(squares.length);
     const lines = [];

     // Rows and Columns
     for (let i = 0; i < size; i++) {
       lines.push(
         // Rows
         [...Array(size)].map((_, j) => i * size + j),
         // Columns
         [...Array(size)].map((_, j) => i + j * size)
       );
     }

     // Diagonals
     lines.push([...Array(size)].map((_, i) => i * size + i));
     lines.push([...Array(size)].map((_, i) => (i + 1) * (size - 1)));

     for (const line of lines) {
       const [first, ...rest] = line;
       if (squares[first] && rest.every((i) => squares[i] === squares[first])) {
         return squares[first];
       }
     }
     return null;
   }
   ```

3. **Usage Example:**

   ```jsx
   import React from "react";
   import GameBoard from "./GameBoard";

   function App() {
     return <GameBoard size={4} />; // 4x4 board
   }

   export default App;
   ```

**Considerations:**

- The winning logic dynamically creates all possible winning lines based on the board size.
- The UI adjusts to accommodate larger boards.

---

## 7. Scalable Toast/Notification Component

**Objective:**

- Build a scalable Toast/Notification component in React.
- Focus on requirement gathering, high-level design (HLD), low-level design (LLD), and optimizations.

**Requirement Gathering:**

- **Features:**
  - Display notifications with different types (success, error, info).
  - Auto-dismiss after a certain time.
  - Allow stacking multiple notifications.
  - Provide a way to programmatically trigger notifications.

**High-Level Design (HLD):**

- **Components:**
  - `ToastProvider`: Provides context and manages the notification queue.
  - `Toast`: Represents individual notifications.
  - `useToast`: Custom hook to trigger notifications.

**Low-Level Design (LLD):**

- **State Management:**
  - Use Context API to manage the notification queue.
- **Animations:**
  - CSS transitions for showing and hiding toasts.
- **Optimizations:**
  - Memoization to prevent unnecessary re-renders.

**Code Implementation:**

1. **ToastContext.js:**

   ```jsx
   import React, { createContext, useState, useContext } from "react";

   const ToastContext = createContext();

   export function ToastProvider({ children }) {
     const [toasts, setToasts] = useState([]);

     const addToast = (message, type = "info") => {
       const id = Date.now();
       setToasts((prev) => [...prev, { id, message, type }]);
       setTimeout(() => removeToast(id), 3000);
     };

     const removeToast = (id) => {
       setToasts((prev) => prev.filter((toast) => toast.id !== id));
     };

     return (
       <ToastContext.Provider value={addToast}>
         {children}
         <div className="toast-container">
           {toasts.map((toast) => (
             <div key={toast.id} className={`toast ${toast.type}`}>
               {toast.message}
             </div>
           ))}
         </div>
       </ToastContext.Provider>
     );
   }

   export const useToast = () => useContext(ToastContext);
   ```

2. **Usage Example:**

   ```jsx
   import React from "react";
   import { ToastProvider, useToast } from "./ToastContext";

   function App() {
     return (
       <ToastProvider>
         <HomePage />
       </ToastProvider>
     );
   }

   function HomePage() {
     const addToast = useToast();

     return (
       <div>
         <button onClick={() => addToast("This is an info toast")}>
           Show Toast
         </button>
       </div>
     );
   }

   export default App;
   ```

3. **Styles (CSS):**

   ```css
   .toast-container {
     position: fixed;
     top: 10px;
     right: 10px;
     display: flex;
     flex-direction: column;
   }

   .toast {
     background-color: #333;
     color: #fff;
     padding: 10px;
     margin-bottom: 10px;
     border-radius: 4px;
     opacity: 0;
     animation: fadeIn 0.5s forwards;
   }

   @keyframes fadeIn {
     to {
       opacity: 1;
     }
   }

   .toast.info {
     background-color: #2196f3;
   }

   .toast.success {
     background-color: #4caf50;
   }

   .toast.error {
     background-color: #f44336;
   }
   ```

**Optimizations:**

- Used a unique `id` for each toast to help React optimize rendering.
- Toasts auto-dismiss to prevent memory leaks.

---

## 8. Scalable Autocomplete/Typeahead Component

**Objective:**

- Build a scalable Autocomplete component.
- Focus on requirement gathering, HLD, LLD, and optimizations.

**Requirement Gathering:**

- **Features:**
  - Fetch suggestions based on user input.
  - Keyboard navigation support.
  - Debounce input to minimize API calls.

**High-Level Design (HLD):**

- **Components:**
  - `Autocomplete`: Main component handling input and suggestions.
- **Data Fetching:**
  - Use `useEffect` with debouncing to fetch suggestions.

**Low-Level Design (LLD):**

- **State Management:**
  - Manage input value, suggestions, and active suggestion index.
- **Optimizations:**
  - Debounce input changes.
  - Memoize fetched suggestions.

**Code Implementation:**

1. **Autocomplete.js:**

   ```jsx
   import React, { useState, useEffect } from "react";
   import axios from "axios";

   function Autocomplete({ apiEndpoint }) {
     const [inputValue, setInputValue] = useState("");
     const [suggestions, setSuggestions] = useState([]);
     const [activeIndex, setActiveIndex] = useState(-1);

     useEffect(() => {
       const delayDebounceFn = setTimeout(() => {
         if (inputValue) {
           axios.get(`${apiEndpoint}?q=${inputValue}`).then((response) => {
             setSuggestions(response.data);
           });
         } else {
           setSuggestions([]);
         }
       }, 300);

       return () => clearTimeout(delayDebounceFn);
     }, [inputValue, apiEndpoint]);

     const handleKeyDown = (e) => {
       if (e.key === "ArrowDown") {
         setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
       } else if (e.key === "ArrowUp") {
         setActiveIndex((prev) => Math.max(prev - 1, 0));
       } else if (e.key === "Enter" && activeIndex >= 0) {
         setInputValue(suggestions[activeIndex]);
         setSuggestions([]);
         setActiveIndex(-1);
       }
     };

     return (
       <div className="autocomplete">
         <input
           type="text"
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
           onKeyDown={handleKeyDown}
         />
         {suggestions.length > 0 && (
           <ul className="suggestions">
             {suggestions.map((suggestion, index) => (
               <li
                 key={suggestion}
                 className={index === activeIndex ? "active" : ""}
                 onMouseDown={() => {
                   setInputValue(suggestion);
                   setSuggestions([]);
                   setActiveIndex(-1);
                 }}
               >
                 {suggestion}
               </li>
             ))}
           </ul>
         )}
       </div>
     );
   }

   export default Autocomplete;
   ```

**Optimizations:**

- **Debouncing**: Reduces the number of API calls.
- **Memoization**: Cache suggestions if necessary.

---

## 9. Scalable Nested Comments Component

**Objective:**

- Build a nested comments component in React.
- Focus on requirement gathering, HLD, LLD, and optimizations.

**Requirement Gathering:**

- **Features:**
  - Display comments with replies nested.
  - Allow users to add replies.
  - Infinite levels of nesting.

**High-Level Design (HLD):**

- **Components:**
  - `Comment`: Represents a single comment.
  - `CommentList`: Recursively renders comments and their replies.

**Low-Level Design (LLD):**

- **Data Structure:**
  - Each comment has an `id`, `text`, and `replies` array.
- **Recursive Rendering:**
  - Use recursion to render nested comments.

**Code Implementation:**

1. **Comment.js:**

   ```jsx
   import React, { useState } from "react";

   function Comment({ comment }) {
     const [showReply, setShowReply] = useState(false);
     const [replyText, setReplyText] = useState("");

     const handleReply = () => {
       // Logic to add reply to comment.replies
     };

     return (
       <div className="comment">
         <p>{comment.text}</p>
         <button onClick={() => setShowReply(!showReply)}>Reply</button>
         {showReply && (
           <div>
             <textarea
               value={replyText}
               onChange={(e) => setReplyText(e.target.value)}
             />
             <button onClick={handleReply}>Submit</button>
           </div>
         )}
         {comment.replies && comment.replies.length > 0 && (
           <div className="replies">
             {comment.replies.map((reply) => (
               <Comment key={reply.id} comment={reply} />
             ))}
           </div>
         )}
       </div>
     );
   }

   export default Comment;
   ```

**Optimizations:**

- **Virtualization**: For a large number of comments, implement virtualization to improve performance.

---

## 10. Scalable Poll Widget Component

**Objective:**

- Build a Poll Widget Component.
- Focus on requirement gathering, HLD, LLD, API structure, and optimizations.

**Requirement Gathering:**

- **Features:**
  - Display poll question and options.
  - Allow users to vote.
  - Show real-time results.

**High-Level Design (HLD):**

- **Components:**
  - `Poll`: Main component handling poll display and voting.
- **API Structure:**
  - **Endpoints:**
    - `GET /polls/:id`: Fetch poll data.
    - `POST /polls/:id/vote`: Submit a vote.

**Low-Level Design (LLD):**

- **State Management:**
  - Use `useState` and `useEffect` to manage poll data.
- **Optimizations:**
  - Use WebSockets for real-time updates (if applicable).

**Code Implementation:**

1. **Poll.js:**

   ```jsx
   import React, { useState, useEffect } from "react";
   import axios from "axios";

   function Poll({ pollId }) {
     const [poll, setPoll] = useState(null);
     const [selectedOption, setSelectedOption] = useState(null);

     useEffect(() => {
       axios.get(`/polls/${pollId}`).then((response) => setPoll(response.data));
     }, [pollId]);

     const submitVote = () => {
       axios
         .post(`/polls/${pollId}/vote`, { optionId: selectedOption })
         .then((response) => {
           setPoll(response.data);
         });
     };

     if (!poll) return <div>Loading...</div>;

     return (
       <div>
         <h2>{poll.question}</h2>
         {poll.options.map((option) => (
           <div key={option.id}>
             <label>
               <input
                 type="radio"
                 name="poll"
                 value={option.id}
                 onChange={() => setSelectedOption(option.id)}
               />
               {option.text} - {option.votes} votes
             </label>
           </div>
         ))}
         <button onClick={submitVote} disabled={!selectedOption}>
           Vote
         </button>
       </div>
     );
   }

   export default Poll;
   ```

**Optimizations:**

- **Real-Time Updates**: Implement WebSocket connections to update poll results in real-time.
- **Caching**: Use client-side caching to reduce API calls.

---

### Performance Optimizations in React and Frontend Development

Optimizing the performance of your React applications is crucial for delivering a smooth user experience. This guide covers various techniques and best practices, complete with code examples, to help you master performance optimizations in React and frontend development.

---

## 1. Utilizing React DevTools: Components and Profiler Tabs

### Components Tab

The **Components** tab allows you to inspect the component hierarchy, props, state, and hooks of your React application.

#### Key Features:

- **Inspect Props and State**: View and edit props and state of components in real-time.
- **Highlight Updates**: Visualize component re-renders to identify unnecessary updates.

#### How to Use:

1. **Install React DevTools**: Available as a browser extension for Chrome and Firefox.
2. **Open DevTools**: Navigate to the **Components** tab.
3. **Inspect Components**: Click on components to view their props and state.

### Profiler Tab

The **Profiler** tab helps you measure the performance of your application by recording render times.

#### Key Features:

- **Record Performance**: Start and stop profiling sessions.
- **Analyze Render Times**: View commit times and identify slow components.
- **Flame Graphs**: Visualize component hierarchies and render durations.

#### How to Use:

1. **Navigate to Profiler Tab**: In React DevTools, go to the **Profiler** tab.
2. **Record Profiling Session**: Click **Start profiling** and interact with your app.
3. **Stop Profiling**: Click **Stop profiling** to analyze the results.

#### Example:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter render");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

Use the **Profiler** to check if `Counter` re-renders unnecessarily.

---

## 2. Client-Side Rendering (CSR) vs. Server-Side Rendering (SSR)

### Client-Side Rendering (CSR)

In CSR, the browser downloads a minimal HTML page and JavaScript files, which render the content dynamically.

#### Pros:

- Rich interactivity.
- Less server load.

#### Cons:

- Initial load might be slow.
- SEO challenges.

### Server-Side Rendering (SSR)

In SSR, the server renders the initial HTML page, which is sent to the client.

#### Pros:

- Faster initial load.
- Better SEO.

#### Cons:

- Increased server load.
- More complex setup.

### Implementing CSR and SSR

#### CSR with Create React App:

```bash
npx create-react-app my-app
cd my-app
npm start
```

This setup uses CSR by default.

#### SSR with Next.js:

```bash
npx create-next-app my-next-app
cd my-next-app
npm run dev
```

**Example of SSR in Next.js:**

```jsx
// pages/index.js
export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}

function HomePage({ data }) {
  return <div>{/* Render data */}</div>;
}

export default HomePage;
```

---

## 3. Code Splitting and Lazy Loading

Code splitting divides your code into smaller chunks, which can be loaded on-demand, improving load times.

### React Lazy Loading

Use `React.lazy()` and `Suspense` to lazy load components.

#### Example:

```jsx
import React, { Suspense } from "react";

const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

### Webpack Code Splitting

Webpack automatically splits code based on dynamic imports.

#### Example:

```jsx
// Dynamic import
import("./module").then((module) => {
  // Use the module
});
```

---

## 4. Error Boundaries

Error boundaries catch JavaScript errors in components below them, preventing the entire app from crashing.

### Creating an Error Boundary

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to render fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error details.
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Using the Error Boundary

```jsx
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

---

## 5. Web Vitals

Web Vitals are metrics that capture the user experience of web applications.

### Key Metrics:

- **Largest Contentful Paint (LCP)**: Measures loading performance.
- **Cumulative Layout Shift (CLS)**: Measures visual stability.
- **Interaction to Next Paint (INP)**: Measures responsiveness.

### Optimizing LCP

- Optimize images.
- Use efficient caching.
- Preload critical resources.

### Optimizing CLS

- Set size attributes on images and videos.
- Avoid inserting content above existing content.

### Measuring Web Vitals

Use Google's [Web Vitals](https://web.dev/vitals/) library.

#### Example:

```bash
npm install web-vitals
```

```jsx
import { getCLS, getLCP, getFID } from "web-vitals";

getCLS(console.log);
getLCP(console.log);
getFID(console.log);
```

---

## 6. Virtualization

Virtualization renders only the visible portion of large data sets, improving performance.

### Using react-window

Install the library:

```bash
npm install react-window
```

#### Example:

```jsx
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

function App() {
  return (
    <List height={150} itemCount={1000} itemSize={35} width={300}>
      {Row}
    </List>
  );
}

export default App;
```

---

## 7. Accessibility Essentials

### Semantic HTML

Use appropriate HTML tags.

#### Example:

```html
<!-- Bad -->
<div onclick="handleClick()">Click me</div>

<!-- Good -->
<button onclick="handleClick()">Click me</button>
```

### Color Contrast

Ensure text has sufficient contrast with the background.

### Alt Text

Provide `alt` attributes for images.

```html
<img src="logo.png" alt="Company Logo" />
```

### Labels and Placeholders

Use labels for form inputs.

```html
<label for="email">Email:</label> <input id="email" type="email" />
```

### ARIA Tags

Use ARIA attributes to enhance accessibility.

```jsx
<button aria-label="Close" onClick={handleClose}>
  &times;
</button>
```

---

## 8. Higher-Order Components (HOC)

An HOC is a function that takes a component and returns a new component.

### Why Use HOCs?

- Reuse code logic.
- Inject props or state.

### Example:

```jsx
function withLogger(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log("Component mounted");
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLogger;
```

### Using the HOC:

```jsx
function MyComponent(props) {
  return <div>{props.message}</div>;
}

export default withLogger(MyComponent);
```

---

## 9. Carousel Performance Optimization

Optimizing carousels involves:

- Lazy loading images.
- Throttling slide transitions.
- Avoiding unnecessary re-renders.

### Example with Swiper.js:

Install Swiper:

```bash
npm install swiper
```

#### Implementing Lazy Loading:

```jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Carousel() {
  return (
    <Swiper lazy={true}>
      <SwiperSlide>
        <img data-src="image1.jpg" className="swiper-lazy" alt="Slide 1" />
      </SwiperSlide>
      {/* More slides */}
    </Swiper>
  );
}

export default Carousel;
```

---

## 10. Module Pattern in React Apps

The module pattern encapsulates code, exposing only what is necessary.

### Implementing the Module Pattern

#### Counter Module:

```jsx
// counter.js
const CounterModule = (() => {
  let count = 0;

  const increment = () => count++;
  const getCount = () => count;

  return {
    increment,
    getCount,
  };
})();

export default CounterModule;
```

#### Using the Module:

```jsx
import CounterModule from "./counter";

function App() {
  const handleClick = () => {
    CounterModule.increment();
    console.log(CounterModule.getCount());
  };

  return <button onClick={handleClick}>Increment</button>;
}

export default App;
```

---

## 11. Render Props

Render props are techniques for sharing code between components using a prop whose value is a function.

### Example:

#### MouseTracker Component:

```jsx
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
```

#### Using Render Props:

```jsx
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      )}
    />
  );
}

export default App;
```

---

By mastering these performance optimization techniques, you can build React applications that are efficient, accessible, and deliver a superior user experience.

These implementations provide a solid foundation for the requested components and applications. Remember to tailor each solution to fit the specific requirements of your project or interview scenario. Good luck with your frontend interview preparations!

This guide should provide you with a solid understanding of the topics and prepare you for your frontend interviews. Good luck!
