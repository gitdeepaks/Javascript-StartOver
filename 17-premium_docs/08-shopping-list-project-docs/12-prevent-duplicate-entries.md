# Prevent Duplicate Entries

In this lesson, we will add a check to prevent duplicate entries from being added to the shopping list.

Let's create a function that will check if the item already exists in the shopping list.

```js
function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return itemsFromStorage.includes(item);
}
```

We are using the `includes()` method to check if the item exists in the array of items from local storage.

Now let's use it in the `onAddItemSubmit()` function.

This is what the final function should look like:

```js
function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert('That item already exists!');
      return;
    }
  }

  // Create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  checkUI();

  itemInput.value = '';
}
```

The reason that we check for edit mode is because if the item is being edited, we want to allow the user to use the same name for the item.
