# Remove DOM Elements

Now let's look at methods to remove elements completely from the DOM.

## `remove()`

Remove is very simple. You use it on the element you want to remove and it will remove it from the DOM. Let's say that we want to remove the clear button from the page.

```js
const clearButton = document.querySelector('#clear');
clearButton.remove();
```

## `removeChild()`

Remove child is a bit more complicated. You use it on the parent element and it will remove the child element from the parent. Let's say that we want to remove the first `li` in the shopping list.

```js
const ul = document.querySelector('ul');
const li = document.querySelector('li:first-child');
ul.removeChild(li);
```

We first select the parent element and then the child element. Then we use `removeChild()` on the parent and pass in the child.

## Removing Specific List Items

Let's create a function to remove a specific list item. I will show you a few ways we can do this.

```js
function removeListItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}
```

Here we select the parent element and then use the function argument in the selector to remove the specific item.

Let's look at another:

```js
function removeListItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}
```

Here, we used the `querySelectorAll()` method to select all the `li` elements and then used the `itemNumber - 1` to select the correct element. We subtracted 1 from the item number because the array/NodeList starts at 0.

One more:

```js
function removeListItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li');

  li[itemNumber - 1].remove();
}
```

This one is similar, but we used `remove()` on the element directly.

As you can see, removing elements is pretty easy.
