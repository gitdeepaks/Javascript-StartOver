# Set Edit Mode

In this section, we will add the ability to click on an item and enable edit mode which will put that item text into the input. We will also make that item in the list a lighter color and change the button from 'Add' to 'Edit'.

Let's start by adding a global variable for the edit state. We will set it to false.

```js
let isEditMode = false;
```

Let's go into the `onClickItem()` function and add an else, which will run if we are clicking in the item, but not on the delete icon. If that is true, then we will call a function called `setItemToEdit()`

```js
function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}
```

Now, let's create the `setItemToEdit()` function. This function will take in the item element and do the following:

- Set the edit state to true
- Add the `edit-mode` class to the item element
- Change the button text, icon and color
- Set the input value to the item text

```js
function setItemToEdit(item) {
  isEditMode = true;
  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
  formBtn.style.backgroundColor = '#228B22';
  itemInput.value = item.textContent;
}
```

Now when we click on an item, it does all of those things, but if you click on another item, the 'edit-mode' class is not removed from the previous item. Let's fix that by removing the class from all items before we add it to the new item.

```js
function setItemToEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll('li')
    .forEach((i) => i.classList.remove('edit-mode'));

  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
  formBtn.style.backgroundColor = '#228B22';
  itemInput.value = item.textContent;
}
```
