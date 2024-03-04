# Update Item & Reset State

We can now set the app to 'edit mode' by clicking on an item. Now we need to add the ability to update the item.

We can do this by checking to see if we are in edit mode in the `onAddItemSubmit()` function. If we are, then we will update the item, otherwise we will add a new item.

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
  }

  // Create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  checkUI();

  itemInput.value = '';
}
```

You can not directly update an item in local storage, so we are basically removing the item and adding a new one. We are also removing the `edit-mode` class from the item element and setting the edit state to false.

To make sure that the UI is reset, we will call the `checkUI()` function. I am also going to add the following to the `checkUI()` function:

```js
function checkUI() {
  itemInput.value = '';

  const items = itemList.querySelectorAll('li');

  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '#333';

  isEditMode = false;
}
```

Just to make sure we set the button back and set edit mode to false whenever we run this function.
