# Refactor To Use Multiple Functions

In the last lesson, we created a function to add items to our shopping list. In that function, we created multiple elements. We created a list item, a button and an icon. I think that you should generally have functions do one thing. In this case our function did 3 things. Let's refactor this code into multiple functions that we can reuse if needed. 

Here is the original code.

```JavaScript
function createNewItem(item) {
  const li = document.createElement('li');

  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');

  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');

  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}
```

Let's create a function to create the button. We will take the classes in as arguments

```JavaScript
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  return button;
}
```

We create and return the button. We need to include the icon, so let's create a function to create an icon

```JavaScript
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;

  return icon;
}
```

Now we can add the `createIcon()` function to our `createButton()` function

```JavaScript
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}
```

Now, add the `createButton()` function to our main function

```JavaScript
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  // Add button & icon
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  document.getElementById('item-list').appendChild(li);
}
```

Now we have everything broken up into small funcions. If something goes wrong, it is much easier to debug and the code is more readable and reusable.