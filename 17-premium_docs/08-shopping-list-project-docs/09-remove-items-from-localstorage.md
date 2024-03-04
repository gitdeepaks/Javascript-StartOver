# Remove Items From Local Storage

Now we want to be able to click the remove button and remove the item from the DOM and localStorage.

I am going to do the same thing that I did with the 'add' functionality and change the event listener function from `removeItem` to `onClickItem`. One reason I am doing this is because we are also going to have 'edit' functionality and that will also be used on a click on the item.

```js
itemList.addEventListener('click', onClickItem);
```

Now we will create the `onClickItem()` function. We will check to see if the target of the click is the remove button. If it is, we will call the `removeItem()` function.

```js
function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  }
}
```

Let's create the `removeItem()` function. We will pass in the item that we want to remove. We will remove it from the DOM and then remove it from localStorage.

```js
function removeItem(item) {
  if (confirm('Are you sure?')) {
    // Remove item from DOM
    item.remove();

    // Remove item from storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
}
```

Let's create the `removeItemFromStorage()` function. We will pass in the text for the item that we want to remove. We will get the items from localStorage, loop through them, and if the item matches the item that we want to remove, we will remove it from the array. Then we will set the new array to localStorage.

```js
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  // Re-set to localstorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
```

## Clearing all items

This is simple. We just need to remove `items` from local storage in the `clearItems()` function.

```js
function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Clear from localStorage
  localStorage.removeItem('items');

  checkUI();
}
```

You could also use `localStorage.clear()` to clear all items from localStorage.
