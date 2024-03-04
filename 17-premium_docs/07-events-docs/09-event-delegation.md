# Event Delegation

Now that you understand how event bubbling works, you'll be able to learn how to use a powerful event handling pattern called event delegation.

## Dealing With Multiple Elements

Where this comes in handy is when we want to have an event handler for multiple elements. Our shopping list is a great example of this. We have a bunch of list items (`li` elements) and we're going to want to be able to click on the x icon to delete a specific item. How would we do this when we have a bunch of the same elements and the number of items is dynamic?

There's actually a couple ways we can do this. One way is to grab the items with `document.querySelectorAll()` and then add an event listener to each one. Let's try that.

I'm not going to target the x icon for this example, we'll just make it so that we can click anywhere on the list item and it will get removed. When we do the project, we'll target the x icon.

```js
const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.target.remove();
  });
});
```

This does work. We click on an item and it gets removed. However, we're adding an event listener on every single item. This is inefficient. Especially when we have a large number of items.

## Using Event Delegation

Instead of adding an event listener on every single item, we can use event delegation. We know that events bubble up, so we can use event delegation to listen for events on the parent element and then target the actual element that was clicked on.

Let's grab the list itself (`ul`) and add an event listener to it. Then we can just check to see if the target of the event is a `li` element and if it is, we can remove it.

```js
const list = document.querySelector('ul');

list.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
```

Now we are not creating multiple event listeners. We're just adding one event listener to the list.

Of course you are not bound to checking the tagName. You could check for a class, etc. You also are not bound to removing the item. You can do anything you want, Let's say that I want to change the item to be the color red when I hover over it.

```js
list.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
```

That `e.target` is always going to be the element that the event was fired on.
