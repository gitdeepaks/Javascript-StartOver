# Add Items To List

The first piece of functionality we want to add is the ability to add items to the list. We already have the HTML and CSS in place, so let's jump right into the JavaScript.

There will be parts of this project that I refactor as we go along.

First, let's bring in the elements from the DOM that we want to work with.

```js
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
```

Let's add and event listener to the form and an `addItem()` function. We want to listen for the `submit` event. We will also do some basic validation to make sure the user has entered something in the input field.

```js
function addItem(e) {
  e.preventDefault();

  // Validate input
  if (itemInput.value === '') {
    alert('Please enter an item');
    return;
  }

  console.log('Success');
}

itemForm.addEventListener('submit', addItem);
```

Now, we want to create a new list item and add it to the list. The list item will include a button with a font-awesome icon inside of it.

I am going to create a separate functions for creating the button and the icon. This is just preference. You could do it all in one function if you wanted.

```js
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}
```
