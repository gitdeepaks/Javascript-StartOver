# Create Elements

So we know how to select elements, navigate to related elements, and manipulate them. Now let's look at how to create elements. With JavaScript, we can create any DOM element we want and then insert it into the document.

In many cases, you'll want to create a new element and then insert it into the document on some kind of event. For instance, when we build the final functionality of our shopping list, we're going to want to create a new list item when we click on the _Add Item_ button.

We will learn about events soon, but right now, I just want to focus on creating elements via JavaScript.

## `document.createElement()`

This is the main method we'll use to create elements. It takes one argument, which is the tag name of the element we want to create. Let's create a `div` element.

```js
const div = document.createElement('div');

console.log(div);
// <div></div>
```

If you do a `console.dir(div)`, you'll see a ton of properties as well as methods in the prototype chain.

We can add any attributes we want to our new `div` element.

```js
// Add a class
div.className = 'my-element';

// Add an id
div.id = 'my-element';

// Add an attribute
div.setAttribute('title', 'My Element');
```

### `document.createTextNode()`

If we want to add text, we could technically do it like this:

```js
div.innerText = 'Hello World';
```

However, using `innerText` is not the best way to do this when creating a new element. It is really meant to get and change the text of an already existing element.

It's better to create a new text node with `document.createTextNode()` and then append it to the element.

```js
// Create a text node
const text = document.createTextNode('Hello World');

// Add the text node to the div
div.appendChild(text);
```

Now if you log the div, you'll see

```js
<div class='my-element' id='my-element' title='My Element'>
  Hello World
</div>
```

### Inserting Elements into the Document

Just like we used `appendChild()` to add the text node, we can use it to add it to the document.

```js
document.body.appendChild(div);
```

That will place it in the body tag as the last element. We can target any element in the document and insert it into another element.

```js
document.querySelector('ul').appendChild(div);
```
