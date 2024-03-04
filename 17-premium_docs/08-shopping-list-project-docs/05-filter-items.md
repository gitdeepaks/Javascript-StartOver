# Filter Items

Now that we can add, remove and clear, we want to be able to type in the filter input and filter the items in the list.

Let's add an event listener to the filter input.

```js
itemFilter.addEventListener('input', filterItems);
```

We are going to use the `filter` method to filter the items.

```js
function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}
```

In the above code, we get the items and whatever is being typed in the filter input. Then we loop through and use the `indexOf` method to see if the item name contains the text. If it does, we show the item, otherwise we hide it.
