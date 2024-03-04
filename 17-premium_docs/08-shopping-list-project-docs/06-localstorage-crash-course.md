# Local Storage Crash Course

## What is Local Storage?

Local Storage is a way for web pages to store named key/value pairs locally, within the client web browser. Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the remote web server.

## Why would you want to use Local Storage?

Local Storage is one of the most commonly used web APIs in modern web development. It is used for client-side storage of persistent data. This means that the data stored in the browser will persist even after the browser window has been closed. Local Storage is ideal for storing simple data. It is used for things like user preferences, shopping cart contents, game scores, etc.

## How do you use Local Storage?

Local Storage is very simple to use. You can set, get, and remove data from Local Storage using the `setItem()`, `getItem()`, and `removeItem()` methods. The `setItem()` method takes a key and a value as parameters. The `getItem()` method takes a key as a parameter and returns the value. The `removeItem()` method takes a key as a parameter and removes the key/value pair from Local Storage.

## Adding an item to Local Storage

```js
localStorage.setItem('name', 'John');
```

## Getting an item from Local Storage

```js
const name = localStorage.getItem('name');
```

## Removing an item from Local Storage

```js
localStorage.removeItem('name');
```

## Clearing all items from Local Storage

```js
localStorage.clear();
```

Many times, you will want to save an array or object to Local Storage. You can do this by converting the array or object to a string using `JSON.stringify()` and then saving it to Local Storage. When you want to retrieve the array or object, you can convert it back to an array or object using `JSON.parse()`.

## Saving an array to Local Storage

```js
const todos = [
  {
    text: 'Take out trash',
  },
  {
    text: 'Meeting with boss',
  },
  {
    text: 'Dentist appt',
  },
];

localStorage.setItem('todos', JSON.stringify(todos));
```

## Getting an array from Local Storage

```js
const todos = JSON.parse(localStorage.getItem('todos'));
```

That is pretty much it. Local Storage is very simple to use.
