# Display Items From Local Storage

We are now able to add items to localStorage. Now we need to display them on the page when the page loads.

## Getting items from localStorage

We will start by creating a function that we can use in multiple places to get the items from localStorage.

```js
function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}
```

We are just creating a variable called `itemsFromStorage` and setting it to an empty array. Then we are checking to see if there is anything in localStorage. If there is, we are parsing it and setting it to `itemsFromStorage`. If there isn't, we are just returning an empty array.

We can now replace most of the code in `addItemToStorage()` with this function.

```js
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  // Add new item to array
  itemsFromStorage.push(item);

  // Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
```

## Displaying items from localStorage

Next, we will create a function to display the items from localStorage on the page.

```js
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}
```

We are getting the items from localStorage and then looping through them. For each item, we are calling `addItemToDOM()` and passing in the item. Finally, we are checking the UI to see if we need to show the clear items button and filter input.

## Adding an `init()` function

Instead of putting all of the event listeners in the global scope, we will create an `init()` function and put them in there.

```js
function init() {
  // Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
}

init();
```

This will work either way, but I prefer to put them in a function rather than the global space
