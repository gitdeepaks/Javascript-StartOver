# Event Listeners

Alright, so we've learned quite a bit about manipulating the DOM, however, many of the things that we have learned, are actions that you'll want to happen when some kind of event is triggered. So that's what we're going to be talking about for the next few sections.

## What Are Events?

Events are something that happens within the browser. There are many kinds of events. Even the page loading is an event that we can listen for and respond to. Some other examples of events would be..

    - Clicking on an element, such as a button
    - Typing into a text input field
    - Hovering over an element
    - Submitting a form
    - Closing a window
    - Dragging an element
    - Resizing an element
    - etc.

Like I said, we can listen for events and respond to them. There are a few ways to do this.

## Inline Event Listeners

There are a few ways to listen for an event and react to it. One of the simplest ways is to use the onclick attribute. This is NOT recommended as it is not very flexible and can possibly pose a security risk. With that said, you should still know it exists.

Let's add an `onclick` event listener to the clear button in our shopping list. We will set the value to `alert('Cleared')`, which will show a browser alert popup when we click the button.

```html
<button onclick="alert('Cleared')" id="clear" class="btn-clear">
  Clear All
</button>
```

So as you can see, we can put JavaScript code directly in the HTML attribute. This is not very good practice though. Another thing we could do is use a JavaScript function to handle the event.

```html
<button onclick="onClear()" id="clear" class="btn-clear">Clear All</button>
```

Now create the function onClear() in the linked JS file.

```js
function onClear() {
  console.log('Clear Items');
}
```

Now when you click the button, you'll see the console log show up.

## Event Listeners in JavaScript

Like I mentioned, using inline event listeners is not recommended. Instead, we can use JavaScript to handle the event. There are a couple ways to do this.

One way is to bring in the element and call `onclick` from there.

```js
const clearBtn = document.getElementById('clear');

clearBtn.onclick = function () {
  console.log('Clear Items');
};
```

This is equivalent to the inline event we had in the HTML, but it gives you more control over the scope. One drawback to this is you may only have one inline event assigned. Inline events are stored as an attribute/property of the element it can be overwritten.

## `addEventListener()`

The best way, at least in my opinion, is to use the `addEventListener()` method. It takes in the event type (click, submit, etc) and a callback function. It attaches a listener to an element and will call the callback function when the event is triggered.

Let's look at an example:

```js
clearBtn.addEventListener('click', function () {
  console.log('Clear Items');
});
```

We don't have to pass in an anonymous function. We can pass in another defined function, such as the `onClear()` function.

```js
function onClear() {
  console.log('Clear Events');
}

clearBtn.addEventListener('click', onClear);
```

This is the method that we will be using in the course and what I would suggest in just about every case when using Vanilla JavaScript.

## `removeEventListener()`

We can also remove event listeners from elements. If you're removing an element that has an event listener attached to it. It's good practice to first remove the event listener before removing the element. This can prevent memory leaks, especially in older browsers. For the most part, modern browsers will handle this correctly, but it's still good to know how to do this.

Just like we have `addEventListener()`, we can use the `removeEventListener()` method. It takes in the event type and the same callback function that you used on the `addEventListener()`.

What I'm going to do is create a timer using the `setTimeout()` method. This will be used to remove the event listener after a few seconds. I know we have not talked about `setTimeout()` yet. Later on we will learn more about this method.

```js
setTimeout(() => {
  clearBtn.removeEventListener('click', onClear);
}, 5000);
```

So now, the event listener is removed after 5 seconds and the button will stop logging when it is clicked.

## Triggering Events in JavaScript

There may be times when you want to call an event from JavaScript without having the user do any kind of interaction. You can easily do this by running the event manually.

I'm going to do another `setTimeout()`, because I want the clear button to click after 5 seconds when the page loads. You should comment out the other `setTimeout()` if you're following along.

```js
setTimeout(() => {
  clearBtn.click();
}, 5000);
```

After 5 seconds, the click event fires. We could also use other event types like `submit()` and `mouseover()`. We will talk about other event types soon.

## Clearing The Items
Let's add some code to clear all of the items from the list. I'll give you 3 different ways to make that happen.


```js
function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // Using innerHTML
  itemList.innerHTML = '';

  // Using forEach() and remove()
  items.forEach((item) => item.remove());

  // Using a while loop and firstChild
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}
```
