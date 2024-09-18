Certainly! As a React developer with 4 years of experience preparing for interviews, it's crucial to be well-versed in both fundamental and advanced concepts of React. Below are 21 important React questions, complete with explanations and code examples where applicable, suitable for both oral interviews and machine coding rounds.

---

### **Machine Coding Questions:**

1. **Create a Reusable Button Component**

   - **Question:**
     Build a reusable `Button` component in React that supports different styles and behaviors based on props.

   - **Explanation:**
     The goal is to create a component that can be customized via props, demonstrating understanding of component composition, props, and styling in React.

   - **Code:**

     ```jsx
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

2. **Implement a Controlled Form Component**

   - **Question:**
     Create a `LoginForm` component with controlled inputs for email and password, including form validation.

   - **Explanation:**
     Demonstrates understanding of state management within components, handling user input, form submission, and basic validation.

   - **Code:**

     ```jsx
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

3. **Build a Todo List Application**

   - **Question:**
     Develop a simple Todo List app where users can add, delete, and toggle completion status of todo items.

   - **Explanation:**
     Tests ability to manage lists, state updates, and rendering lists of components.

   - **Code:**

     ```jsx
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

4. **Implement Lazy Loading of Components**

   - **Question:**
     Use React's `lazy` and `Suspense` to lazy-load a component called `HeavyComponent`.

   - **Explanation:**
     Tests understanding of code splitting and performance optimization using dynamic imports.

   - **Code:**

     ```jsx
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

5. **Create a Higher-Order Component (HOC)**

   - **Question:**
     Write a HOC named `withLoading` that adds a loading spinner to any component.

   - **Explanation:**
     Demonstrates understanding of HOCs, a pattern for reusing component logic.

   - **Code:**

     ```jsx
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

     // Usage Example
     const DataComponent = ({ data }) => <div>Data: {data}</div>;
     const DataComponentWithLoading = withLoading(DataComponent);

     // <DataComponentWithLoading isLoading={true} />
     ```

6. **Implement Context API for Theme Switching**

   - **Question:**
     Create a ThemeContext to toggle between light and dark themes in an application.

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

7. **Build a Custom Hook for Fetching Data**

   - **Question:**
     Create a custom hook `useFetch` that fetches data from an API endpoint.

   - **Explanation:**
     Demonstrates ability to create reusable logic with custom hooks.

   - **Code:**

     ```jsx
     import { useState, useEffect } from "react";

     const useFetch = (url) => {
       const [data, setData] = useState(null);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState(null);

       useEffect(() => {
         fetch(url)
           .then((response) => response.json())
           .then((data) => {
             setData(data);
             setLoading(false);
           })
           .catch((error) => {
             setError(error);
             setLoading(false);
           });
       }, [url]);

       return { data, loading, error };
     };

     // Usage Example
     const DataDisplay = () => {
       const { data, loading, error } = useFetch(
         "https://api.example.com/data"
       );

       if (loading) return <div>Loading...</div>;
       if (error) return <div>Error: {error.message}</div>;

       return <div>Data: {JSON.stringify(data)}</div>;
     };

     export default DataDisplay;
     ```

8. **Implement Error Boundaries**

   - **Question:**
     Create an `ErrorBoundary` component that catches JavaScript errors in its child component tree.

   - **Explanation:**
     Tests understanding of error handling in React using error boundaries.

   - **Code:**

     ```jsx
     import React from "react";

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
         console.error("ErrorBoundary caught an error", error, info);
       }

       render() {
         if (this.state.hasError) {
           return <h1>Something went wrong.</h1>;
         }
         return this.props.children;
       }
     }

     // Usage Example
     const FaultyComponent = () => {
       throw new Error("I crashed!");
       return <div>This will not render</div>;
     };

     const App = () => (
       <ErrorBoundary>
         <FaultyComponent />
       </ErrorBoundary>
     );

     export default App;
     ```

9. **Create a Pagination Component**

   - **Question:**
     Build a `Pagination` component that displays a list of items with previous and next navigation.

   - **Explanation:**
     Tests ability to handle state, props, and user interactions.

   - **Code:**

     ```jsx
     import React, { useState } from "react";

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

     // Usage Example
     const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

     const App = () => <Pagination itemsPerPage={10} items={items} />;

     export default App;
     ```

10. **Implement React Router for Navigation**

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

### **Viva (Oral Interview) Questions:**

11. **Explain the Virtual DOM**

    - **Question:**
      What is the Virtual DOM, and how does React use it to optimize performance?

    - **Answer:**
      The Virtual DOM is an in-memory representation of the real DOM. When state or props change, React creates a new Virtual DOM tree and compares it with the previous one using a process called "diffing". It then calculates the minimal set of changes needed and updates the real DOM accordingly. This approach reduces costly DOM manipulations and improves performance.

12. **Component Lifecycle Methods**

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

13. **Difference Between Stateful and Stateless Components**

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

14. **Understanding Hooks**

    - **Question:**
      What are React Hooks, and why were they introduced?

    - **Answer:**
      Hooks are functions that let you use state and other React features without writing a class. They were introduced to simplify code, promote code reuse via custom hooks, and eliminate the confusion around `this` keyword in classes. Common hooks include `useState`, `useEffect`, `useContext`, `useReducer`, etc.

15. **useEffect Hook Behavior**

    - **Question:**
      How does the `useEffect` hook work, and how can you control when it runs?

    - **Answer:**
      `useEffect` runs side effects after render. It takes a function and a dependency array. If the dependency array is empty (`[]`), it runs once after the initial render (similar to `componentDidMount`). If you specify dependencies, it runs after every render where the dependencies change. Returning a function from `useEffect` allows you to perform cleanup (similar to `componentWillUnmount`).

16. **Prop Drilling and Context API**

    - **Question:**
      What is prop drilling, and how does the Context API help to solve it?

    - **Answer:**
      Prop drilling refers to passing props down multiple levels in a component hierarchy, even if intermediate components don't need them, just to get data to a deeply nested component. The Context API provides a way to share values between components without explicitly passing props through every level. It allows you to create global variables that can be passed around.

17. **Keys in Lists**

    - **Question:**
      Why are keys important in lists, and how should you choose them?

    - **Answer:**
      Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings. Using indexes as keys is not recommended if the list can change because it can lead to rendering issues. A unique identifier from your data is the best choice for a key.

18. **Pure Components and React.memo**

    - **Question:**
      What are Pure Components, and how does `React.memo` improve performance?

    - **Answer:**
      Pure Components are class components that implement `shouldComponentUpdate` with a shallow prop and state comparison. `React.memo` is a higher-order component that wraps a functional component to prevent unnecessary re-renders by memoizing the rendered output unless props have changed.

19. **State Management with Redux**

    - **Question:**
      How does Redux help in state management, and what are its core principles?

    - **Answer:**
      Redux is a predictable state container for JavaScript apps. It helps manage application state in a single, centralized store. Its core principles are:

      - **Single Source of Truth:** The state is stored in an object tree within a single store.
      - **State is Read-Only:** The only way to change the state is to emit an action, an object describing what happened.
      - **Changes are Made with Pure Functions:** Reducers are pure functions that take the previous state and an action and return the next state.

20. **Component Communication**

    - **Question:**
      How do components communicate in React?

    - **Answer:**
      - **Parent to Child:** Via props.
      - **Child to Parent:** By passing a function (callback) as a prop to the child, which the child can call with arguments.
      - **Between Siblings:** Through the parent component passing props or using a state management library.
      - **Global Communication:** Using Context API, Redux, or other state management solutions.

21. **Handling Asynchronous Data**

    - **Question:**
      How do you handle asynchronous data fetching in React?

    - **Answer:**
      You can use the `useEffect` hook (in functional components) or lifecycle methods like `componentDidMount` (in class components) to initiate data fetching when the component mounts. Promises or async/await syntax can be used to handle asynchronous operations. It's important to handle loading states and potential errors.

---

**Additional Explanations and Code Examples:**

22. **Implementing Code Splitting**

    - **Question:**
      How do you implement code splitting in a React application?

    - **Answer:**
      Code splitting can be implemented using dynamic `import()` statements and React's `lazy` and `Suspense`. It allows you to split your code into separate bundles, which can then be loaded on demand.

    - **Code:**

      ```jsx
      import React, { Suspense, lazy } from "react";

      const LazyComponent = lazy(() => import("./LazyComponent"));

      const App = () => (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      );

      export default App;
      ```

23. **Optimizing Performance with `useMemo` and `useCallback`**

    - **Question:**
      What are `useMemo` and `useCallback` hooks, and how do they help in optimizing performance?

    - **Answer:**

      - **`useMemo`:** Memoizes the result of a computation, recomputing it only when its dependencies change. Useful for expensive calculations.
      - **`useCallback`:** Returns a memoized version of a callback function that only changes if one of the dependencies has changed. Useful to prevent unnecessary re-renders when passing callbacks to child components.

    - **Code:**

      ```jsx
      import React, { useState, useMemo, useCallback } from "react";

      const ExpensiveComponent = ({ compute, count }) => {
        const value = useMemo(() => compute(count), [compute, count]);
        return <div>{value}</div>;
      };

      const ParentComponent = () => {
        const [count, setCount] = useState(0);
        const [otherState, setOtherState] = useState(0);

        const compute = useCallback((num) => {
          // Expensive computation
          return num * 2;
        }, []);

        return (
          <div>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setOtherState(otherState + 1)}>
              Increment Other State
            </button>
            <ExpensiveComponent compute={compute} count={count} />
          </div>
        );
      };

      export default ParentComponent;
      ```

24. **Implementing a Reducer with `useReducer` Hook**

    - **Question:**
      How do you use the `useReducer` hook for state management?

    - **Answer:**
      The `useReducer` hook is an alternative to `useState` for managing complex state logic. It accepts a reducer function and an initial state, returning the current state and a dispatch function.

    - **Code:**

      ```jsx
      import React, { useReducer } from "react";

      const initialState = { count: 0 };

      function reducer(state, action) {
        switch (action.type) {
          case "increment":
            return { count: state.count + 1 };
          case "decrement":
            return { count: state.count - 1 };
          default:
            throw new Error();
        }
      }

      const Counter = () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
          <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
          </div>
        );
      };

      export default Counter;
      ```

25. **Handling Forms with Formik or React Hook Form**

    - **Question:**
      How can you simplify form handling in React?

    - **Answer:**
      Libraries like Formik or React Hook Form help manage form state, validation, and submission. They reduce boilerplate code and improve performance by minimizing re-renders.

26. **Understanding JSX and Babel**

    - **Question:**
      What is JSX, and how is it transformed under the hood?

    - **Answer:**
      JSX is a syntax extension for JavaScript that looks similar to XML or HTML. Babel transpiles JSX into `React.createElement` calls, which return JavaScript objects representing React elements.

    - **Example:**

      ```jsx
      // JSX
      const element = <h1>Hello, world!</h1>;

      // Transpiled
      const element = React.createElement("h1", null, "Hello, world!");
      ```

27. **Fragment Usage**

    - **Question:**
      What are Fragments in React, and when would you use them?

    - **Answer:**
      Fragments allow you to group a list of children without adding extra nodes to the DOM. Useful when a component must return multiple elements but doesn't need a wrapper element.

    - **Code:**

      ```jsx
      import React from "react";

      const List = () => (
        <>
          <li>Item 1</li>
          <li>Item 2</li>
        </>
      );

      export default List;
      ```

28. **Handling Events in React**

    - **Question:**
      How do you handle events in React, and how does it differ from handling events in plain HTML/JavaScript?

    - **Answer:**
      React events are named using camelCase, and you pass a function as the event handler, rather than a string. Events in React are synthetic, which means they are wrapped in the SyntheticEvent wrapper that provides cross-browser compatibility.

    - **Example:**
      ```jsx
      const Button = () => (
        <button onClick={() => alert("Clicked!")}>Click Me</button>
      );
      ```

29. **Server-Side Rendering (SSR)**

    - **Question:**
      What is Server-Side Rendering in React, and what are its benefits?

    - **Answer:**
      SSR is the process of rendering React components on the server and sending HTML to the client. Benefits include improved performance on initial load, better SEO, and faster time-to-content.

30. **Strict Mode**

    - **Question:**
      What is React's Strict Mode, and what does it do?

    - **Answer:**
      Strict Mode is a tool for highlighting potential problems in an application. It doesn't render any visible UI but activates additional checks and warnings for its descendants.

    - **Usage:**

      ```jsx
      import React from "react";

      const App = () => (
        <React.StrictMode>
          <MyComponent />
        </React.StrictMode>
      );

      export default App;
      ```

31. **Implementing Portals**

    - **Question:**
      What are Portals in React, and when would you use them?

    - **Answer:**
      Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Useful for modals, tooltips, and other overlay components.

    - **Code:**

      ```jsx
      import React from "react";
      import ReactDOM from "react-dom";

      const Modal = ({ isOpen, children }) => {
        if (!isOpen) return null;
        return ReactDOM.createPortal(
          <div className="modal">{children}</div>,
          document.body
        );
      };

      export default Modal;
      ```

32. **React Fiber**

    - **Question:**
      What is React Fiber, and how does it improve React?

    - **Answer:**
      React Fiber is the new reconciliation engine in React 16+. It allows React to split rendering work into chunks and spread it out over multiple frames, improving responsiveness and the ability to interrupt rendering.

33. **Difference Between Shadow DOM and Virtual DOM**

    - **Question:**
      What's the difference between Shadow DOM and Virtual DOM?

    - **Answer:**
      - **Virtual DOM:** An abstraction of the real DOM used by React to optimize updates.
      - **Shadow DOM:** A browser technology used for scoping variables and CSS in web components, providing encapsulation.

34. **Uncontrolled vs. Controlled Components**

    - **Question:**
      What's the difference between controlled and uncontrolled components in React?

    - **Answer:**
      - **Controlled Components:** Form data is handled by React state. The state is the single source of truth.
      - **Uncontrolled Components:** Form data is handled by the DOM itself. Refs are used to access form values.

35. **React's SyntheticEvent**

    - **Question:**
      What is SyntheticEvent in React?

    - **Answer:**
      SyntheticEvent is a cross-browser wrapper around the browser's native event. It has the same interface as the native event but works identically across all browsers.

---

**Preparation Tips:**

- **Understand Core Concepts:** Deeply understand how React works under the hood.
- **Practice Coding:** Implement small projects or components to solidify concepts.
- **Stay Updated:** Keep up with the latest React features and best practices.
- **Review Documentation:** Refer to the official React documentation for authoritative information.
- **Mock Interviews:** Practice explaining concepts out loud, as if in an interview.

**Good luck with your interviews and your journey as a React developer!**
