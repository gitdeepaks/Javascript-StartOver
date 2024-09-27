# Ace Your Interview: Comprehensive React and JavaScript Concepts

---

## Table of Contents

1. [React Search Bar Functionality with an API Call](#1-react-search-bar-functionality-with-an-api-call)
2. [Debouncing for Performance Optimization](#2-debouncing-for-performance-optimization)
3. [Lazy Loading - Making the App More Efficient](#3-lazy-loading---making-the-app-more-efficient)
4. [How to Improve React Performance](#4-how-to-improve-react-performance)
5. [JavaScript Output Questions](#5-javascript-output-questions)
6. [Types vs. Interfaces in TypeScript](#6-types-vs-interfaces-in-typescript)
7. [React Hooks Deep Dive](#7-react-hooks-deep-dive)
8. [Custom Hooks vs. Utility Functions](#8-custom-hooks-vs-utility-functions)
9. [Error Handling Best Practices](#9-error-handling-best-practices)
10. [Popular Array and String Methods](#10-popular-array-and-string-methods)
11. [Prop Drilling & State Management in React](#11-prop-drilling--state-management-in-react)
12. [CSS Positioning Challenge](#12-css-positioning-challenge)
13. [Advanced React Patterns](#13-advanced-react-patterns)
14. [State Management Libraries](#14-state-management-libraries)
15. [Testing in React](#15-testing-in-react)
16. [Performance Profiling](#16-performance-profiling)
17. [Webpack and Babel](#17-webpack-and-babel)
18. [Security in Web Applications](#18-security-in-web-applications)
19. [RESTful APIs and GraphQL](#19-restful-apis-and-graphql)
20. [DevOps and CI/CD Practices](#20-devops-and-cicd-practices)
21. [Cloud Services and Infrastructure](#21-cloud-services-and-infrastructure)
22. [Microservices Architecture](#22-microservices-architecture)
23. [Containerization and Orchestration](#23-containerization-and-orchestration)
24. [Software Design Principles](#24-software-design-principles)
25. [Accessibility and Internationalization](#25-accessibility-and-internationalization)
26. [Leadership and Mentoring](#26-leadership-and-mentoring)
27. [Behavioral Questions Preparation](#27-behavioral-questions-preparation)

---

## 1. React Search Bar Functionality with an API Call 🛠️

Implementing a search bar in React that fetches data from an API involves controlled components and handling asynchronous calls.

### Example:

```jsx
import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.example.com/search?q=${query}`);
    const data = await response.json();
    setResults(data.items);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </form>
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
```

---

## 2. Debouncing for Performance Optimization

Debouncing ensures a function is only called after a certain period, improving performance by limiting API calls.

### Example:

```jsx
import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query) {
        fetchResults();
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const fetchResults = async () => {
    const response = await fetch(`https://api.example.com/search?q=${query}`);
    const data = await response.json();
    setResults(data.items);
  };

  return (
    // ...same as above
  );
}
```

Or using Lodash's `debounce` function:

```jsx
import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = async (searchQuery) => {
    const response = await fetch(
      `https://api.example.com/search?q=${searchQuery}`
    );
    const data = await response.json();
    setResults(data.items);
  };

  const debouncedFetch = useCallback(
    debounce((nextValue) => fetchResults(nextValue), 500),
    []
  );

  useEffect(() => {
    if (query) {
      debouncedFetch(query);
    }
  }, [query, debouncedFetch]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </form>
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 3. Lazy Loading - Making the App More Efficient 🌟

Lazy loading delays the loading of components until they're needed, reducing the initial load time.

### Example:

```jsx
import React, { Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

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

---

## 4. How to Improve React Performance 🔍

Enhancing the performance of a React application is crucial for providing a smooth user experience. Below are detailed explanations and code examples for each strategy.

### 1. Memoization: Using `React.memo`, `useMemo`, and `useCallback`

Memoization helps prevent unnecessary re-renders by caching the results of expensive function calls and reusing them when the same inputs occur.

#### **`React.memo`**

`React.memo` is a higher-order component that memoizes functional components, preventing re-renders if the props haven't changed.

**Example without `React.memo`:**

```jsx
import React from "react";

function ChildComponent({ data }) {
  console.log("ChildComponent re-rendered");
  return <div>{data}</div>;
}

function ParentComponent() {
  const [count, setCount] = React.useState(0);
  const data = "Some static data";

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;
```

**Issue:** Every time the `ParentComponent` re-renders (e.g., when `count` changes), `ChildComponent` also re-renders, even though `data` hasn't changed.

**Optimized with `React.memo`:**

```jsx
import React from "react";

const ChildComponent = React.memo(({ data }) => {
  console.log("ChildComponent re-rendered");
  return <div>{data}</div>;
});

function ParentComponent() {
  const [count, setCount] = React.useState(0);
  const data = "Some static data";

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;
```

**Result:** `ChildComponent` will not re-render when `ParentComponent` updates unless the `data` prop changes.

---

#### **`useMemo`**

`useMemo` memoizes the result of a function, recomputing it only when its dependencies change.

**Example without `useMemo`:**

```jsx
function ExpensiveComponent({ num }) {
  function computeExpensiveValue(n) {
    console.log("Computing expensive value...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += n * i;
    }
    return total;
  }

  const value = computeExpensiveValue(num);

  return <div>Value: {value}</div>;
}

function App() {
  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <ExpensiveComponent num={num} />
    </div>
  );
}
```

**Issue:** `computeExpensiveValue` runs on every render, even if `num` hasn't changed.

**Optimized with `useMemo`:**

```jsx
function ExpensiveComponent({ num }) {
  const value = React.useMemo(() => {
    console.log("Computing expensive value...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += num * i;
    }
    return total;
  }, [num]);

  return <div>Value: {value}</div>;
}
```

**Result:** `computeExpensiveValue` only runs when `num` changes, saving computation time.

---

#### **`useCallback`**

`useCallback` returns a memoized version of a callback function, preventing unnecessary re-creation of functions during re-renders.

**Example without `useCallback`:**

```jsx
function ChildComponent({ onClick }) {
  console.log("ChildComponent re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function ParentComponent() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Parent Re-render</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```

**Issue:** `ChildComponent` re-renders every time `ParentComponent` re-renders because `handleClick` is a new function on each render.

**Optimized with `useCallback`:**

```jsx
function ChildComponent({ onClick }) {
  console.log("ChildComponent re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function ParentComponent() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Parent Re-render</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```

**Result:** `ChildComponent` doesn't re-render when `ParentComponent` re-renders because `handleClick` remains the same between renders.

---

### 2. Code Splitting: Implementing Lazy Loading and Dynamic Imports

Code splitting allows you to split your code into various bundles, which can then be loaded on demand. This can significantly improve the initial load time.

**Dynamic Imports with `React.lazy` and `Suspense`**

**Example:**

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

**Explanation:** `HeavyComponent` is only loaded when it's rendered, not during the initial load of the app.

---

### 3. Avoid Anonymous Functions: Define Functions Outside Render Methods

Defining functions inside render methods can cause unnecessary re-creations, leading to re-renders of child components.

**Example with Inline Functions:**

```jsx
function ParentComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <ChildComponent onClick={() => console.log("Clicked")} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Issue:** The arrow function inside `onClick` is re-created on every render, causing `ChildComponent` to re-render.

**Optimized by Defining Functions Outside:**

```jsx
function ParentComponent() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Result:** `handleClick` remains the same across renders, preventing unnecessary re-renders of `ChildComponent`.

---

### 4. Optimize Rendering Lists: Use Keys Properly and Avoid Re-rendering Unchanged Items

When rendering lists, improper use of keys or re-rendering the entire list can degrade performance.

**Using Stable Keys**

**Example with Index as Key (Not Recommended):**

```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
```

**Issue:** If items are added or removed, keys change, causing unnecessary re-renders.

**Optimized with Unique IDs as Keys:**

```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

**Result:** React can track items accurately, minimizing re-renders.

---

**Avoid Re-rendering Unchanged Items**

**Example without Optimization:**

```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  console.log(`Rendering item ${item.id}`);
  return <li>{item.name}</li>;
}
```

**Issue:** All `Item` components re-render even if only one item changes.

**Optimized with `React.memo`:**

```jsx
const Item = React.memo(function Item({ item }) {
  console.log(`Rendering item ${item.id}`);
  return <li>{item.name}</li>;
});
```

**Result:** Only the `Item` components with changed props re-render.

---

### 5. Use Immutable Data Structures

Using immutable data structures helps in efficient change detection, as comparing references is faster than deep comparisons.

**Example with Mutable Updates (Not Recommended):**

```jsx
function App() {
  const [items, setItems] = React.useState([{ id: 1, name: "Item 1" }]);

  const addItem = () => {
    items.push({ id: items.length + 1, name: `Item ${items.length + 1}` });
    setItems(items); // Mutating state directly
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {/* Render items */}
    </div>
  );
}
```

**Issue:** React may not detect the change because the reference to `items` hasn't changed.

**Optimized with Immutable Updates:**

```jsx
function App() {
  const [items, setItems] = React.useState([{ id: 1, name: "Item 1" }]);

  const addItem = () => {
    const newItems = [
      ...items,
      { id: items.length + 1, name: `Item ${items.length + 1}` },
    ];
    setItems(newItems); // Creating a new array
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {/* Render items */}
    </div>
  );
}
```

**Result:** React detects the new reference to `items` and updates the component accordingly.

---

**Using Libraries for Immutability**

You can use libraries like **Immutable.js** or **Immer** to manage immutable data structures.

**Example with Immer:**

```jsx
import produce from "immer";

function App() {
  const [items, setItems] = React.useState([{ id: 1, name: "Item 1" }]);

  const addItem = () => {
    setItems(
      produce(items, (draft) => {
        draft.push({ id: items.length + 1, name: `Item ${items.length + 1}` });
      })
    );
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {/* Render items */}
    </div>
  );
}
```

**Explanation:** `produce` creates a new immutable state based on changes made to the draft.

---

## 5. JavaScript Output Questions 📜

### Event Loop

JavaScript is single-threaded but can handle asynchronous operations via the event loop.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output:**

```
Start
End
Promise
Timeout
```

**Explanation:**

- **Synchronous Code**: `console.log('Start');` and `console.log('End');` execute first.
- **Microtask Queue**: Promises go here; `console.log('Promise');` executes after the synchronous code.
- **Macrotask Queue**: `setTimeout` callbacks go here; `console.log('Timeout');` executes last.

---

### Closures

A closure gives access to an outer function's scope from an inner function.

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(2)); // Outputs 7
```

**Explanation:** The inner function retains access to `x` even after `makeAdder` has finished executing.

---

### Lexical Scope

Variables are resolved in their lexical context.

```javascript
var a = 5;
function foo() {
  console.log(a);
}
function bar() {
  var a = 10;
  foo();
}
bar(); // Outputs 5
```

**Explanation:** `foo` looks for `a` in its own scope and then the global scope, ignoring `a` inside `bar`.

---

### Hoisting

Variable and function declarations are hoisted to the top of their scope.

```javascript
console.log(a); // Outputs undefined
var a = 5;
```

**Explanation:** The declaration `var a;` is hoisted, but the assignment `a = 5;` is not, so `a` is `undefined` when logged.

---

## 6. Types vs. Interfaces in TypeScript 💻

- **Interfaces**: Can only describe object shapes.
- **Types**: Can represent primitives, unions, tuples, and more.

### Example:

```typescript
// Interface
interface User {
  name: string;
  age: number;
}

// Type
type User = {
  name: string;
  age: number;
};
```

**Differences:**

- **Declaration Merging**: Interfaces can be merged; types cannot.

  ```typescript
  interface User {
    name: string;
  }

  interface User {
    age: number;
  }

  // Merged Interface:
  // interface User {
  //   name: string;
  //   age: number;
  // }
  ```

- **Use Cases**: Use interfaces for public APIs and types for complex type definitions.

---

## 7. React Hooks Deep Dive 🔍

### `useState`

Manages state in functional components.

```jsx
const [count, setCount] = useState(0);
```

- **Updating State**:

  ```jsx
  setCount((prevCount) => prevCount + 1);
  ```

### `useEffect`

Performs side effects.

```jsx
useEffect(() => {
  // Side effect here
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

- **Common Uses**: Data fetching, subscriptions, DOM manipulations.

### `useCallback`

Returns a memoized callback.

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

- **Use Case**: Prevents functions from being recreated unless dependencies change.

### `useMemo`

Memoizes expensive calculations.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- **Use Case**: Avoids unnecessary computations on every render.

### `useRef`

Creates a mutable ref object.

```jsx
const refContainer = useRef(initialValue);
```

- **Use Cases**: Accessing DOM elements, storing mutable variables that persist across renders.

---

## 8. Custom Hooks vs. Utility Functions 🤔

- **Custom Hooks**: Leverage React's hooks to share stateful logic.

  ```jsx
  function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then(setData);
    }, [url]);
    return data;
  }
  ```

- **Utility Functions**: Stateless functions used across components.

  ```javascript
  export function formatDate(date) {
    // Formatting logic
    return formattedDate;
  }
  ```

**Key Difference**: Custom hooks can use other hooks and manage state; utility functions are pure JavaScript functions without state or side effects.

---

## 9. Error Handling Best Practices

- **Try/Catch Blocks**: Handle synchronous errors.

  ```javascript
  try {
    // Code that may throw
  } catch (error) {
    // Handle error
  }
  ```

- **Promise Catch**: Handle asynchronous errors.

  ```javascript
  fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  ```

- **Async/Await with Try/Catch**:

  ```javascript
  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  ```

- **Error Boundaries in React**: Catch errors in the component tree.

  ```jsx
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render shows the fallback UI.
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      logErrorToService(error, info);
    }

    render() {
      if (this.state.hasError) {
        // Fallback UI
        return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
    }
  }
  ```

---

## 10. Popular Array and String Methods

### Array Methods

- **`map`**: Creates a new array by applying a function to each element.

  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map((n) => n * 2); // [2, 4, 6]
  ```

- **`filter`**: Creates a new array with elements that pass a test.

  ```javascript
  const numbers = [1, 2, 3, 4];
  const even = numbers.filter((n) => n % 2 === 0); // [2, 4]
  ```

### String Methods

- **`slice`**: Extracts a section of a string.

  ```javascript
  const str = "Hello World";
  console.log(str.slice(0, 5)); // 'Hello'
  ```

- **`startsWith`**: Checks if a string starts with specified characters.

  ```javascript
  const str = "Hello World";
  console.log(str.startsWith("Hello")); // true
  ```

- **`splice`**: Note that `splice` is an array method that changes the content of an array.

  ```javascript
  const fruits = ["Apple", "Banana", "Cherry"];
  fruits.splice(1, 1, "Blueberry"); // ['Apple', 'Blueberry', 'Cherry']
  ```

---

## 11. Prop Drilling & State Management in React 💡

**Prop Drilling**: Passing props through multiple layers.

### Problem:

```jsx
function Grandparent() {
  const [state, setState] = useState();
  return <Parent state={state} />;
}

function Parent({ state }) {
  return <Child state={state} />;
}

function Child({ state }) {
  return <div>{state}</div>;
}
```

### Solutions:

- **Context API**: Provides a way to pass data through the component tree without props.

  ```jsx
  const MyContext = React.createContext();

  function Grandparent() {
    const [state, setState] = useState();
    return (
      <MyContext.Provider value={state}>
        <Parent />
      </MyContext.Provider>
    );
  }

  function Parent() {
    return <Child />;
  }

  function Child() {
    const state = useContext(MyContext);
    return <div>{state}</div>;
  }
  ```

- **State Management Libraries**: Use Redux, MobX, or Zustand for complex state.

---

## 12. CSS Positioning Challenge 🕹️

### Positioning Types:

- **Static**: Default position; elements are rendered in order.
- **Relative**: Positioned relative to its normal position.
- **Absolute**: Positioned relative to the nearest positioned ancestor.
- **Fixed**: Positioned relative to the viewport.
- **Sticky**: Toggles between relative and fixed based on scroll.

### Real-World Example:

**Create a sticky header that stays at the top while scrolling.**

**HTML:**

```html
<header>
  <h1>My Website</h1>
</header>
<div class="content">
  <!-- Page content -->
</div>
```

**CSS:**

```css
header {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
}

.content {
  padding-top: 60px; /* Height of the header */
}
```

**Explanation:** The `position: sticky;` makes the header stick to the top of the viewport when you scroll past it.

---

## 13. Advanced React Patterns

### Higher-Order Components (HOCs)

HOCs are functions that take a component and return a new component, allowing for code reuse.

**Example:**

```jsx
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Loading...</p>;
  };
}

// Usage
const EnhancedComponent = withLoading(MyComponent);
```

### Render Props

Render props are techniques for sharing code between components using a prop whose value is a function.

**Example:**

```jsx
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<MouseTracker
  render={({ x, y }) => (
    <h1>
      Mouse position: {x}, {y}
    </h1>
  )}
/>;
```

### Context API

The Context API allows you to share state across the component tree without passing props down manually.

**Example:**

```jsx
const ThemeContext = React.createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Button</button>;
}
```

---

## 14. State Management Libraries

### Redux

Redux is a predictable state container for JavaScript apps.

**Basic Concepts:**

- **Store**: Holds the application state.
- **Actions**: Plain objects describing what happened.
- **Reducers**: Functions that return the next state.

**Example:**

```javascript
// Action
const increment = () => ({ type: "INCREMENT" });

// Reducer
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}
```

### MobX

MobX is a state management library that makes state observable.

**Example:**

```javascript
import { observable, action } from "mobx";

class Store {
  @observable count = 0;

  @action increment() {
    this.count += 1;
  }
}

const store = new Store();
```

---

## 15. Testing in React

### Unit Testing with Jest and React Testing Library

**Example Test:**

```jsx
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/My Website/i);
  expect(headerElement).toBeInTheDocument();
});
```

### End-to-End Testing with Cypress

**Example Test:**

```javascript
describe("My First Test", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:3000");
    cy.contains("My Website");
  });
});
```

---

## 16. Performance Profiling

### React Profiler

Use the Profiler API to measure the performance of components.

**Example:**

```jsx
import { Profiler } from "react";

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" or "update"
  actualDuration // time spent rendering the committed update
  // ...other arguments
) {
  // Aggregate or log render timings...
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <MyComponents />
    </Profiler>
  );
}
```

---

## 17. Webpack and Babel

### Module Bundling with Webpack

**Webpack Configuration:**

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
```

### Babel Configuration

**.babelrc:**

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

---

## 18. Security in Web Applications

### Preventing Cross-Site Scripting (XSS)

- **Sanitize Inputs**: Use libraries like DOMPurify.
- **Escape Outputs**: Ensure data rendered to the browser is escaped.

**Example:**

```javascript
import DOMPurify from "dompurify";

function renderContent(dirty) {
  const clean = DOMPurify.sanitize(dirty);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}
```

### Preventing Cross-Site Request Forgery (CSRF)

- **Use CSRF Tokens**: Include tokens in forms and validate them on the server.
- **SameSite Cookies**: Set cookies with `SameSite` attribute.

---

## 19. RESTful APIs and GraphQL

### Designing RESTful APIs

- **Endpoints**: Use nouns and hierarchical structure.
- **HTTP Methods**: GET, POST, PUT, DELETE.

**Example:**

- `GET /api/users` - Retrieve all users.
- `POST /api/users` - Create a new user.

### GraphQL Basics

- **Queries**: Fetch data.
- **Mutations**: Modify data.

**Example Query:**

```graphql
{
  user(id: "1") {
    name
    email
  }
}
```

---

## 20. DevOps and CI/CD Practices

### Continuous Integration with GitHub Actions

**Example Workflow:**

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

### Continuous Deployment

- **Automate Deployments**: Use tools like Jenkins, Travis CI, or GitHub Actions to deploy code after passing tests.

---

## 21. Cloud Services and Infrastructure

### AWS Services

- **EC2**: Virtual servers.
- **S3**: Object storage.
- **Lambda**: Serverless functions.

**Example of AWS Lambda Function:**

```javascript
exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
```

### Infrastructure as Code with Terraform

**Example Terraform Configuration:**

```hcl
provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "b" {
  bucket = "my-tf-test-bucket"
  acl    = "private"
}
```

---

## 22. Microservices Architecture

### Service Mesh with Istio

- **Traffic Management**: Control the flow of traffic and API calls between services.
- **Security**: Provide secure communication with mutual TLS.

### API Gateways

- **Routing**: Direct client requests to the appropriate service.
- **Authentication**: Centralized auth mechanisms.

---

## 23. Containerization and Orchestration

### Docker Basics

**Dockerfile Example:**

```dockerfile
FROM node:14

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### Kubernetes Basics

**Deployment Example:**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app
          image: my-app-image
          ports:
            - containerPort: 3000
```

---

## 24. Software Design Principles

### SOLID Principles

- **Single Responsibility**: A class should have one, and only one, reason to change.
- **Open/Closed**: Software entities should be open for extension, but closed for modification.
- **Liskov Substitution**: Objects of a superclass should be replaceable with objects of a subclass.
- **Interface Segregation**: Many client-specific interfaces are better than one general-purpose interface.
- **Dependency Inversion**: Depend upon abstractions, not concretions.

---

## 25. Accessibility and Internationalization

### Web Accessibility (A11y)

- **Semantic HTML**: Use appropriate HTML elements.
- **ARIA Attributes**: Enhance accessibility where needed.

**Example:**

```jsx
<button aria-label="Close" onClick={handleClose}>
  <span aria-hidden="true">&times;</span>
</button>
```

### Internationalization (i18n)

- **Localization Libraries**: Use libraries like `react-intl` or `i18next`.

**Example with `react-intl`:**

```jsx
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  en: { greeting: "Hello" },
  es: { greeting: "Hola" },
};

function App({ locale }) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <FormattedMessage id="greeting" />
    </IntlProvider>
  );
}
```

---

## 26. Leadership and Mentoring

### Team Management

- **Code Reviews**: Ensure code quality and share knowledge.
- **Mentoring**: Guide junior developers through pair programming, regular check-ins.

### Project Management

- **Agile Methodologies**: Use Scrum or Kanban for iterative development.
- **Sprint Planning**: Define goals and tasks for each sprint.

---

## 27. Behavioral Questions Preparation

### Problem-Solving

- **STAR Method**: Situation, Task, Action, Result.
- **Example**: Describe a challenging bug you fixed, how you diagnosed it, and the outcome.

### Communication

- **Technical Explanations**: Practice explaining complex concepts in simple terms.
- **Active Listening**: Show that you understand questions fully before answering.

### Adaptability

- **Learning New Technologies**: Share experiences where you quickly picked up new tools or frameworks.

### Conflict Resolution

- **Team Conflicts**: Discuss how you resolved disagreements in a professional manner.

---

# Part I

## HTML & CSS

---

### Box-sizing Property

The `box-sizing` CSS property defines how the total width and height of an element are calculated. It affects the calculation of an element's dimensions by including or excluding `padding` and `border`.

- **`content-box`** (default): Width and height include only the content, not `padding`, `border`, or `margin`.
- **`border-box`**: Width and height include content, `padding`, and `border`, but not `margin`.

**Example:**

```css
/* Apply border-box to all elements */
* {
  box-sizing: border-box;
}
```

By setting `box-sizing` to `border-box`, you simplify layout calculations, as the element's dimensions include the `padding` and `border`.

---

### How to Show Responsive Application in Mobile and Laptop

To create a responsive application that adapts to different screen sizes, you can use:

1. **Viewport Meta Tag**: Ensures proper scaling on mobile devices.

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

2. **Media Queries**: Apply CSS styles based on device characteristics.

   ```css
   /* For mobile devices */
   @media only screen and (max-width: 767px) {
     /* Mobile styles */
   }

   /* For tablets */
   @media only screen and (min-width: 768px) and (max-width: 1024px) {
     /* Tablet styles */
   }

   /* For desktops */
   @media only screen and (min-width: 1025px) {
     /* Desktop styles */
   }
   ```

3. **Flexible Layouts**: Use relative units like percentages, `em`, or CSS Grid and Flexbox.

   ```css
   .container {
     display: flex;
     flex-wrap: wrap;
   }

   .item {
     flex: 1 1 50%; /* Adjusts based on screen size */
   }
   ```

---

### What is Semantic HTML

Semantic HTML uses elements that clearly describe their meaning in both the human and machine-readable code. It improves accessibility and SEO.

**Common Semantic Elements:**

- `<header>`: Defines a header section.
- `<nav>`: Defines navigation links.
- `<main>`: Indicates the main content.
- `<section>`: Defines a section in a document.
- `<article>`: Defines an independent piece of content.
- `<aside>`: Defines content aside from the main content.
- `<footer>`: Defines a footer section.

**Example:**

```html
<article>
  <header>
    <h1>Article Title</h1>
    <p>Author Name</p>
  </header>
  <p>Article content...</p>
  <footer>
    <p>Published on: Date</p>
  </footer>
</article>
```

---

### Different Inline and Block-Level Elements

**Block-Level Elements**:

- Start on a new line and stretch to the full width.
- Examples: `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<li>`, `<section>`, `<article>`.

**Inline Elements**:

- Do not start on a new line and only take up as much width as necessary.
- Examples: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<input>`.

**Inline-Block Elements**:

- Behave like inline elements but respect width and height properties.
- Can be set using `display: inline-block;`.

---

### How to Show Video in Application

Use the HTML `<video>` element to embed videos.

**Example:**

```html
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

**Attributes:**

- `controls`: Displays playback controls.
- `autoplay`: Starts playing the video automatically.
- `loop`: Repeats the video after it ends.
- `muted`: Mutes the video's audio.
- `poster`: Specifies an image to show while the video is downloading.

---

### What is z-index?

The `z-index` CSS property controls the vertical stacking order of positioned elements that overlap.

- Only works on elements with `position` set to `relative`, `absolute`, `fixed`, or `sticky`.
- Elements with a higher `z-index` appear in front of elements with a lower `z-index`.

**Example:**

```css
.div1 {
  position: absolute;
  z-index: 1;
}

.div2 {
  position: absolute;
  z-index: 2;
}
```

In this example, `.div2` will appear above `.div1`.

---

### What is Default Position in CSS

The default `position` value in CSS is `static`.

- **`position: static;`**: The element is positioned according to the normal flow of the document.
- Top, right, bottom, and left properties have no effect.

---

### Difference Between `display: none` and `visibility: hidden`; In Accordion Which One is Used?

- **`display: none;`**

  - The element is completely removed from the document flow.
  - No space is allocated for the element.
  - Child elements are also not displayed.

- **`visibility: hidden;`**

  - The element is hidden but still occupies space in the layout.
  - Child elements are hidden but space is preserved.

**In Accordions:**

- **`display: none;`** is typically used because it collapses the hidden content, allowing other elements to adjust their position accordingly.

**Example:**

```css
/* Using display: none; */
.accordion-content {
  display: none;
}

/* Using visibility: hidden; */
.accordion-content {
  visibility: hidden;
}
```

---

## ReactJS

---

### useReducer

The `useReducer` Hook is an alternative to `useState`. It is preferable when you have complex state logic or when the next state depends on the previous one.

**Syntax:**

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

**Example:**

```javascript
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unexpected action");
  }
}

function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>–</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
```

---

### React Lifecycle Methods in Hooks

In functional components, you use Hooks to replicate lifecycle methods from class components.

- **`componentDidMount`** → `useEffect` with empty dependency array `[]`.
- **`componentDidUpdate`** → `useEffect` with specific dependencies.
- **`componentWillUnmount`** → Return a cleanup function in `useEffect`.

**Example:**

```javascript
useEffect(() => {
  // ComponentDidMount and ComponentDidUpdate logic

  return () => {
    // ComponentWillUnmount logic (cleanup)
  };
}, [dependencies]); // Empty array [] for ComponentDidMount
```

---

### How Function-Based Components are Different from Class-Based Components

- **Syntax**:

  - **Function Components**: Simple JavaScript functions.
    ```javascript
    function MyComponent() {
      return <div>Hello</div>;
    }
    ```
  - **Class Components**: Use ES6 classes.
    ```javascript
    class MyComponent extends React.Component {
      render() {
        return <div>Hello</div>;
      }
    }
    ```

- **State and Lifecycle**:

  - **Function Components**: Use Hooks (`useState`, `useEffect`) for state and lifecycle methods.
  - **Class Components**: Use `this.state` and lifecycle methods (`componentDidMount`, etc.).

- **Performance**:

  - Function components may have performance benefits due to optimizations like avoiding unnecessary constructor calls.

- **`this` Keyword**:

  - Function components do not use `this`, avoiding potential binding issues.

---

### What is Redux Middleware? What is `redux-thunk` and `redux-saga`

**Redux Middleware** extends Redux capabilities by intercepting actions before they reach the reducer.

- **Purpose**: Handle asynchronous operations, logging, crash reporting, etc.

**`redux-thunk`**:

- Allows you to write action creators that return a function (thunk) instead of an action object.
- The thunk can dispatch actions asynchronously.

**Example:**

```javascript
const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "FETCH_ERROR", error }));
  };
};
```

**`redux-saga`**:

- Uses generator functions to manage side effects.
- More powerful for complex asynchronous workflows.

**Example:**

```javascript
function* fetchDataSaga() {
  try {
    const data = yield call(api.fetchData);
    yield put({ type: "FETCH_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_ERROR", error });
  }
}

function* watchFetchData() {
  yield takeEvery("FETCH_START", fetchDataSaga);
}
```

---

### Redux Workflow

1. **Action**: An object describing what happened.
2. **Action Creator**: A function that creates an action.
3. **Dispatch**: Sends the action to the Redux store.
4. **Reducers**: Functions that handle actions and update the state.
5. **Store**: Holds the application state.
6. **View**: Displays the state.

**Data Flow Diagram:**

1. User interacts with the **View**.
2. **Action Creator** creates an **Action**.
3. **Dispatch** sends the action to the **Store**.
4. **Reducers** update the **State** in the **Store**.
5. The **View** re-renders based on the new state.

---

### Different React Hooks

- **`useState`**: Manage state in functional components.
- **`useEffect`**: Side effects and lifecycle methods.
- **`useContext`**: Access React context.
- **`useReducer`**: Complex state logic.
- **`useCallback`**: Memoize functions to prevent unnecessary re-renders.
- **`useMemo`**: Memoize expensive calculations.
- **`useRef`**: Access DOM nodes or persist mutable values.
- **`useLayoutEffect`**: Runs synchronously after all DOM mutations.
- **`useImperativeHandle`**: Customize the instance value exposed to parent components.
- **`useDebugValue`**: Display custom hook labels in React DevTools.

---

### Things to Care About During Code Review

- **Code Readability**: Clear and understandable code.
- **Functionality**: Meets requirements and works correctly.
- **Performance**: Efficient code without unnecessary resource usage.
- **Security**: No vulnerabilities or insecure code.
- **Maintainability**: Easy to maintain and extend.
- **Coding Standards**: Adheres to style guides and best practices.
- **Error Handling**: Proper error checking and handling.
- **Testing**: Adequate unit and integration tests.
- **Documentation**: Comments and documentation where necessary.
- **Modularity**: Reusable and modular code structure.

---

### What Will Happen If We Try to Set State Without Using `setState` or `useState`

- **Direct State Mutation**:

  - **Class Components**: Modifying `this.state` directly does not trigger a re-render.
    ```javascript
    this.state.count = 5; // Does not re-render the component
    ```
  - **Function Components**: Changing state variables directly is ineffective.
    ```javascript
    state = 5; // Ineffective; use setState function
    ```

- **Consequence**: The UI will not update to reflect the new state because React is unaware of the change.

---

### What is PureComponent?

`React.PureComponent` is similar to `React.Component`, but it implements `shouldComponentUpdate` with a shallow prop and state comparison.

- **Advantages**:

  - Prevents unnecessary re-renders.
  - Improves performance for components that render the same output given the same props and state.

- **Usage**:

  ```javascript
  class MyComponent extends React.PureComponent {
    // Component code
  }
  ```

- **Note**: Only performs a shallow comparison; may not detect nested data structure changes.

---

### Difference Between Shallow and Mount in React Unit Test

- **Shallow Rendering (`shallow`)**:

  - Renders only the component itself, not its children.
  - Ideal for unit testing individual components.
  - Faster and requires less setup.

  ```javascript
  import { shallow } from "enzyme";
  const wrapper = shallow(<MyComponent />);
  ```

- **Full DOM Rendering (`mount`)**:

  - Renders the component and all its children into the DOM.
  - Allows testing of lifecycle methods and interactions.
  - Requires a DOM (may need tools like JSDOM).

  ```javascript
  import { mount } from "enzyme";
  const wrapper = mount(<MyComponent />);
  ```

---

### What is Merge and Rebase in GIT

- **Merge**:

  - Combines two branches by creating a new merge commit.
  - Preserves the history of both branches.
  - Results in a non-linear history.

  ```bash
  git checkout feature
  git merge master
  ```

- **Rebase**:

  - Moves the entire feature branch to begin on the tip of the master branch.
  - Rewrites project history by creating new commits.
  - Results in a linear history.

  ```bash
  git checkout feature
  git rebase master
  ```

**Diagram:**

- **Merge**:

  ```
  master
    \
     feature
       \
        merge commit
  ```

- **Rebase**:

  ```
  master -> feature
  ```

**Note**: Rebasing can make history cleaner but can cause issues if not used carefully, especially with shared branches.

---

### How to Store Form Values in JavaScript/React (Restore After Network Loss or Browser Close)

- **Use `localStorage` or `sessionStorage`** to persist form data.

**Example:**

```javascript
import React, { useState, useEffect } from "react";

function MyForm() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formData");
    return saved ? JSON.parse(saved) : { name: "", email: "" };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}
```

- **Explanation**:

  - **Initialization**: Retrieve saved data from `localStorage`.
  - **Update**: Save data to `localStorage` whenever form data changes.
  - **Restoration**: Upon reloading, form data is restored from `localStorage`.

---

### What is Event Bubbling and What is the Default Behavior

**Event Bubbling**:

- When an event occurs on an element, it first triggers handlers on that element, then propagates up to its parent elements.

**Default Behavior**:

- **Bubbling Phase**: Event moves from the target element up to the root.
- **Capturing Phase**: (Optional) Event moves from the root down to the target.

**Example:**

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

- Clicking the button logs:

  ```
  Child clicked
  Parent clicked
  ```

---

### How to Subscribe and Unsubscribe the Component Using `useEffect` Hooks

**Subscribe**:

- Perform the subscription inside the `useEffect` callback.

**Unsubscribe**:

- Return a cleanup function from `useEffect` to unsubscribe when the component unmounts or before re-running the effect.

**Example:**

```javascript
useEffect(() => {
  const subscription = dataService.subscribe((data) => {
    setData(data);
  });

  return () => {
    // Unsubscribe on cleanup
    subscription.unsubscribe();
  };
}, []); // Empty dependency array ensures effect runs once
```

---

### `useState` is Synchronous or Asynchronous

- **Asynchronous Nature**:

  - Updates to state using `setState` or the setter function from `useState` are asynchronous.
  - React batches state updates for performance.
  - The updated state value is available on the next render.

- **Implication**:

  - You cannot reliably use the updated state value immediately after calling the setter.

**Example:**

```javascript
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
  console.log(count); // May still log the old value
};
```

---

### What Will Happen If We Return Empty Callback Function in `useEffect`

- **Returning an Empty Function**:

  - The empty function serves as a cleanup function.
  - If no cleanup is needed, you can omit the return statement.

- **Effect**:

  - No adverse effect, but it's unnecessary.
  - It's better to return `undefined` or nothing if no cleanup is needed.

**Example:**

```javascript
useEffect(() => {
  // Effect logic
  return () => {};
}, []);
```

---

### What is Lazy Loading in ReactJS

**Lazy Loading**:

- Technique to defer loading of non-critical components until they are needed.
- Improves performance by reducing initial load time.

**Implementation with `React.lazy` and `Suspense`:**

```javascript
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

- **`React.lazy`**: Dynamically imports the component.
- **`Suspense`**: Provides a fallback UI until the component loads.

---

### What is Code Splitting?

**Code Splitting**:

- Breaking up code into smaller chunks.
- Allows the application to load only the necessary code for the current user interaction.
- Implemented using dynamic `import()` statements.

**Benefits**:

- Reduces initial load time.
- Improves performance and user experience.

**Example with Webpack and React:**

```javascript
// Before code splitting
import HeavyComponent from "./HeavyComponent";

// After code splitting
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));
```

---

### What are Promises

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

- **States**:

  - **Pending**: Initial state.
  - **Fulfilled**: Operation completed successfully.
  - **Rejected**: Operation failed.

- **Usage**:

  ```javascript
  const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (success) {
      resolve(result);
    } else {
      reject(error);
    }
  });

  promise
    .then((result) => {
      // Handle success
    })
    .catch((error) => {
      // Handle error
    });
  ```

---

### What is Closure?

A **Closure** is a function that has access to its own scope, the outer function's scope, and the global scope.

- **Characteristics**:

  - Retains access to variables from the outer scope even after the outer function has returned.
  - Useful for data privacy and implementing private variables.

**Example:**

```javascript
function outerFunction() {
  const outerVariable = "Outer";

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable
  }

  return innerFunction;
}

const inner = outerFunction();
inner(); // Logs: 'Outer'
```

---

### What is Bubble Sort?

**Bubble Sort** is a simple comparison-based sorting algorithm.

- **Algorithm Steps**:

  1. Compare each pair of adjacent items.
  2. Swap them if they are in the wrong order.
  3. Repeat until no swaps are needed.

- **Characteristics**:

  - Time Complexity: O(n²)
  - Space Complexity: O(1)
  - Not efficient for large datasets.

**Example Implementation:**

```javascript
function bubbleSort(array) {
  let n = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Swap elements
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    n--; // Optimizes by reducing the range
  } while (swapped);
  return array;
}

// Usage
const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]
```

---

### How to Do Type Checking in JavaScript

- **`typeof` Operator**: Checks the type of a variable.

  ```javascript
  typeof 42; // "number"
  typeof "Hello"; // "string"
  typeof true; // "boolean"
  typeof undefined; // "undefined"
  typeof null; // "object" (quirk of JS)
  typeof {}; // "object"
  typeof function () {}; // "function"
  ```

- **`instanceof` Operator**: Checks if an object is an instance of a constructor.

  ```javascript
  [] instanceof Array;      // true
  {} instanceof Object;     // true
  new Date() instanceof Date; // true
  ```

- **Strict Equality Checks**:

  ```javascript
  if (Array.isArray(value)) {
    // value is an array
  }
  ```

- **TypeScript or Flow**: Use static type checkers for robust type safety.

---

### What are Iterators & Generators in JavaScript?

#### Iterators

- An **Iterator** is an object that defines a sequence and potentially a return value upon its termination.
- It implements the **`next()`** method that returns an object with `{ value, done }`.

**Example:**

```javascript
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
```

#### Generators

- **Generators** are functions that can be paused and resumed.
- Defined using the `function*` syntax.
- Use the `yield` keyword to pause execution.

**Example:**

```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
```

- **Use Cases**:

  - Simplify asynchronous code.
  - Implement custom iterators.

---

**Good luck with your interview!** Make sure to understand these concepts thoroughly and be prepared to explain them in your own words, drawing from your extensive experience to provide real-world examples.
