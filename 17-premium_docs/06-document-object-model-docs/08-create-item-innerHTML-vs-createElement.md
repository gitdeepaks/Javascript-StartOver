# Create Item - innerHTML vs createElement()

Now that you know the basics of creating an element within your JavaScript, I want to create a function that we can run to add a new item to the shopping list. There are some really important things I want to show you when it comes to the different ways of doing this. There's a quick and dirty solution, which involves just setting the innerHTML to whatever you want and then there's a cleaner and more performant way of creating all of your elements and then inserting them into the DOM. I'm going to show you both ways.

### Quick & Dirty (Using innerHTML)

The first method is to create a `li` element and then simply set the `innerHTML` property to the output that you want, using a template string. 


```js
function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = ` ${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

  document.querySelector('.items').appendChild(li);
}

createListItem('Cereal');
createListItem('Juice');
createListItem('Toothpaste');
```

### Clean & Performant (Creating the elements)

The second way is to actually create all of the elements including the  li element, text node, button element and icon element and appending each one.

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

Now, you could use either method, just know that using innerHTML causes the web browsers to reparse and recreate all the DOM nodes inside the ul element. So this is less efficient than creating a new element and appending to the ul. So the second way is more performant. Also, setting innerHTML will not automatically reattach event handlers to the new elements it creates, so you would have to keep track of them manually. It is just better practice to create your elements, rather than using innerHTML.

