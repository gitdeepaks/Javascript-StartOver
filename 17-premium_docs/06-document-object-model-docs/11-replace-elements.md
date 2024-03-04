# Replacing DOM Elements

In the last video we looked at how to insert elements into the DOM. Now let's look at some methods to replace elements.

We are going to be working with our shopping list UI again. We will be replacing some of the `li` elements in the list. There is more than one way to do this, so I will show you a couple.

### Method 1 - replaceWith()

Let's replace the first `li` element with a new `li` element using the `replaceWith()` method.

```js
// Element to replace
const firstItem = document.querySelector('li:first-child');
// New element
const li = document.createElement('li');
li.textContent = 'Replaced First';

// Replace first element with new element
firstItem.replaceWith(li);
```

We call the `replaceWith()` method on the first `li` element and pass in the new `li` element.

### Method 2 - outerHTML

We could also use the `outerHTML` property to replace the entire element. Let's replace the second item this way.

```js
// Element to replace
const secondItem = document.querySelector('li:nth-child(2)');
// Replace using outerHTML
secondItem.outerHTML = '<li>Replaced Second</li>';
```

### Replacing All Elements

As you know, using `document.querySelector()` will only select one element even if there are more on the page. Let's use `document.querySelectorAll()` to select all of the `li` elements and then loop through and replace them.

```js
// Elements to replace
const lis = document.querySelectorAll('li');
// Loop through and replace all list items
lis.forEach((item) => {
  item.outerHTML = '<li>Replace All</li>';
});
```

If we wanted to edit one of the elements, we could for example change the text of the first item by checking the index.

```js
// Elements to replace
const lis = document.querySelectorAll('li');
// Loop through and replace all list items
lis.forEach((item, index) => {
  item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>';
});
```

## `replaceChild()`

Another way that we can replace something is by selecting the parent element and then using the `replaceChild()` method. Let's replace the `h1` element with an `h2`.

```js
const h1 = document.querySelector('h1');
const header = document.querySelector('header');
const h2 = document.createElement('h2');
h2.id = 'app-title';
h2.textContent = 'Shopping List';
header.replaceChild(h2, h1);
```

`replaceChild()` is called on the parent element and takes two arguments, the new element and the old element.
