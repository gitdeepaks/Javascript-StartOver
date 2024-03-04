# Typicode Todos Mini-Project

Ok, so in the last lesson, I showed you how to add options to your fetch request including the method, headers and body. I want to take that a little further with another mini project. We're going to use the [JSONPlaceholder API](https://jsonplaceholder.typicode.com). Here are the specs...

- Fetch the todos from https://jsonplaceholder.typicode.com/todos and put them on the page. We already have the HTML and CSS. I also want to be able to add a todo by making a POST request to the api and then adding the todo to the DOM. Now it's important to understand that this data will NOT persist. The API does not actually let us store data, so it will not stick. If we reload the page, any new todos that we added will go away. Later on I will show you another tool by this API developer called `JSON Server` which we can run locally and actually save the data. 

- All of the todos that have the property `completed: true`, will have a class of `.done`, which will give it a light gray background. 

- We click on the todo and it toggles the update value. This means we need to toggle the class in the DOM and make a PUT request to the API to update the `completed` value. Again, this will not stick because we can not actually update their data. It will give us the response though.

- We doouble click and send a DELETE request then delete the todo from the DOM.

## Getting and Displaying the Todos

Let's start by getting and displaying the todos

I am going to use an `init()` function for our event listeners

```JavaScript
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

function getTodos() {
  fetch(`${apiUrl}?_limit=5`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
      	const div = document.createElement('div');
        div.classList.add('todo');
	  	  div.appendChild(document.createTextNode(todo.title));
	  	  div.setAttribute('data-id', todo.id);

	  	  document.getElementById('todo-list').appendChild(div);
	  });
	});
}

function init() {
  document.addEventListener('DOMContentLoaded', getTodos);
}

init();
```

The code above will fetch the data and then loop through it and create a new `div` for each todo and add it to the list.

I added `?_limit=5` on to the end of our apiUrl. JSONPlaceholder allows this to limit the number of resources. I only want to get 5.

I added a custom `data` attribute called `data-id`. That is because we will need the id later. This will let us access it. When you create an attribute that does not exist in HTML, you should prefix it with `data-`. We can then access it later using the 'dataset' object.

## Add background for completed todos

To add a gray background, just check for the completed value and add the `done` class:

```JavaScript
if (todo.completed) {
	div.classList.add('done');
}
```

## Create seperate function to add todo to DOM
When we create a todo, we will also add it to the DOM, so let's create a function for that

```JavaScript
function addTodoToDOM(todo) {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
}
```

Now add it to the foreach in `getTodos()`

```JavaScript
function getTodos() {
  fetch(`${apiUrl}?_limit=5`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
}
```

## Create a todo

Now, let's add the event listener and the `createTodo()` function

```JavaScript
function createTodo(e) {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123',
    },
  })
    .then((response) => response.json())
    .then((data) => addTodoToDOM(data));
}

function init() {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.getElementById('todo-form').addEventListener('submit', createPost);
}

init();
```

## Update completed field

Let's make it so we can click on a todo and update the `completed` field. Again, this will go away on refresh because it does not persist to the database of the API.

```JavaScript
function toggleComplete(e) {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
}

function updateTodo(id, completed) {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function init() {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.getElementById('todo-form').addEventListener('submit', createTodo);
  document
    .getElementById('todo-list')
    .addEventListener('click', toggleComplete);
}

init();
```

## Delete a todo
Let's add a double click event listener and handler to remove the Todo. We will make a DELETE request and get a resonse, but it will not stick.

```JavaScript
function deleteTodo(e) {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
}


function init() {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.getElementById('todo-form').addEventListener('submit', createTodo);
  document
    .getElementById('todo-list')
    .addEventListener('click', toggleComplete);
  document.getElementById('todo-list').addEventListener('dblclick', deleteTodo);
}

init();

```

Here is the final code:

```JavaScript
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

function getTodos() {
  fetch(`${apiUrl}?_limit=5`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
}

function createTodo(e) {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123',
    },
  })
    .then((response) => response.json())
    .then((data) => addTodoToDOM(data));
}

function addTodoToDOM(todo) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
}

function toggleComplete(e) {
  e.target.classList.toggle('done');
  updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
}

function updateTodo(id, completed) {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function deleteTodo(e) {
  const id = e.target.dataset.id;
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then(() => e.target.remove());
}

function init() {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.getElementById('todo-form').addEventListener('submit', createTodo);
  document
    .getElementById('todo-list')
    .addEventListener('click', toggleComplete);
  document.getElementById('todo-list').addEventListener('dblclick', deleteTodo);
}

init();

```
