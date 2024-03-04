# DOM Selectors - Single Elements

In the last video, we looked at many of the properties available on the `document` object including properties that allowed us to select elements from the DOM in the form of HTMLCollections.

In this video, we will look at a much more common way to select elements. With these **single element** selectors, it will only select one element. Even if you have multiple elements that match the selector, it will only select the first one. If you want to select multiple elements, we will look at that in the next video.

We will also look at getting and setting attributes/properties on elements that we select.

## `getElementById()`

The first method we will look at is `document.getElementById()`. This method takes a string as an argument and returns the element with the matching `id` attribute. If no element is found, it returns `null`.

We have a couple IDs in our shopping list, such as on the form and the list itself, but I want to use something simple, so I'm going to use the `id` on the `h1` element of `app-title`.

If we want to select this element, we can use `document.getElementById()` and pass in the ID as a string.

```js
console.log(document.getElementById('app-title'));
// <h1 id="app-title">Shopping List</h1>
```

This is a much easier way than using something like `document.all` and trying to find the element by index.

Now that we can select the element, we can get certain properties/attributes from it. For example, we can get the `id`.

```js
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));
```

We can also assign attributes to it. For instance, we can change the `className` property to add a class.

```js
document.getElementById('app-title').className = 'title';
```

We can also use the `setAttribute()` method to add an attribute.

```js
document.getElementById('app-title').setAttribute('class', 'app-title');
```

It's also very common to assign the result of of these selector methods to a variable. This is because we will often want to use the element we selected in multiple places in our code.

```js
const title = document.getElementById('app-title');
console.log(title);
```

### Styling Elements From JS

We can also use these selectors to style elements. there is a property called `style` that allows us to access the CSS styles of an element. We can then assign a value to a CSS property.

```js
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';
```

Now, usually you wouldn't just style things from JavaScript just for a static site. You would usually have some kind of event and then apply the style. For example you may have a button that when you click it, it applies a style to a specific element. This makes your UI more dynamic. We'll be getting into events soon.

### Adding Content

Another thing we can do is add or change the content of an element. Again, usually you'll do this to add some kind of dynamic functionality using events. There are a few different properties that we can use to modify and access content.

```js
// Read
console.log(title.textContent);
// Write
title.textContent = 'Shopping List';
title.innerText = 'My Shopping List';
title.innerHTML = '<strong>Shopping List</strong>';
```

`textContent` and `innerText` are very similar. The main difference is that `innerText` will not return any hidden elements. For example, if we had a `span` element with a class of `hide` and we set the `display` property to `none`, then `innerText` would not return that element. `textContent` will return the element even if it is hidden. `innerHTML` will return the HTML of the element. We can use all of these to update the content of an element.

## `querySelector()`

Alright, so the next method we will look at is `document.querySelector()`. This method is very similar to `getElementById()`, but it allows us to select elements using CSS selectors. This means we can select elements by their class, tag name, or even by their attributes.

```js
// By tag
console.log(document.querySelector('h1'));
// By id
console.log(document.querySelector('#app-title'));
// By class
console.log(document.querySelector('.container'));
// By attribute
console.log(document.querySelector('input[type="text"]'));
// By pseudo-class
console.log(document.querySelector('li:first-child'));
console.log(document.querySelector('li:nth-child(2)'));
```

As you can see, `querySelector` is very powerful and we can select anything we want. This method put JQuery out of business in my opinion, because it pretty much does the same thing in terms of DOM manipulation, without having to use a library.

Let's say that we want to change the color of the second shopping list item:

```js
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.style.color = 'red';
```

Everything we talked about with `getElementById()` also applies to `querySelector()`. We can get the content, set the content, style the element, etc.

## Selecting an element within an element

With `document.querySelector()` and `document.querySelectorAll()`, which we will look at in the next video, you are not restricted to selecting elements from the `document` object. You can also select elements from other local elements. For example, if we wanted to select the first `li` element within the `ul` element, we could do the following:

```js
const list = document.querySelector('ul');
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
```

`document.getElementById()` is only available as a method of the global document object, This is because ID values must be unique throughout the entire document, so there is no need for "local" versions of the function.

### Which one to use?

Which one you use is really just preference. I use `getElementById()` quite a bit for `ids` and `querySelector()` for classes and other attributes. You could just as well use `querySelector()` for everything. I have been doing that in a few recent projects, and I may switch it up. It is just important to be consistent.
