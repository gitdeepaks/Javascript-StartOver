# Remove & Clear Items

Now that we can add items, let's add the ability to remove and clear items.

Let's add an event listener on to the list itself and we will use event delegation to target the button/icon.

```js
itemList.addEventListener('click', removeItem);
```

Create the removeItem function

```js
function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
```

## Clearing all items

We want to make the **Clear All** button function, so let's create an event listener for it.

```js
clearBtn.addEventListener('click', clearItems);
```

Create the clearItems function

```js
function clearItems() {
  if (confirm('Are you sure?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
}
```

There are many ways to clear the items. you could just set the `innerHTML` to an empty string, but I wanted to use a method that is a bit more performant.
