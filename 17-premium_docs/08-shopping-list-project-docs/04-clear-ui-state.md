# Clear UI State

This is optional, but I want to make the UI a bit more dynamic by not showing the filter input or the clear all button unless there are actual items in the list. If you still have your hardcoded `<li>` items in the HTML, you can remove them now.

We are going to have a function that we can run to check for the list items and if there are not any, we will hide the 2 elements. If they are there, we will show them.

```js
function checkUI() {
  const items = itemList.querySelectorAll('li');

  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}
```

We are going to call this in a few places. first, we will call it at the end of the file in the global scope. This will run when the page loads and check if there are any items in the list.

```js
checkUI();
```

We also want to add it when we add, remove and clear items.

```js
function addItem() {
  // ...
  checkUI();
}

function removeItem(e) {
  // ...
  checkUI();
}

function clearItems() {
  // ...
  checkUI();
}
```

Now you can test by adding, removing and clearing items. You should see the buttons appear and disappear as you add and remove items.
