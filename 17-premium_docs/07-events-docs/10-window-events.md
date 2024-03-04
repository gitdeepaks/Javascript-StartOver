# Window Events & Page Loading

The global `window` object has a number of events that are fired when the window is interacted with. We're just going to use a simple html page with an `h1` and some `p` tags.

## Page Load Events

Back in the day, we used to put `<script>` tags in the head of a webpage. Now, it is suggested that we put it right before the ending `</body>` tag, unless we use `defer`, which I will talk about in a minute.

Putting the JavaScript in the head of the page will run the script before the page is done loading. Therefore, if you try and access the DOM or any page element, you'll get an era. Let's try to run the script for this section in the head and add the following JavaScript

```JavaScript
document.querySelector('h1').innerHTML = 'Hello';

// Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
```

It will not work because the H1 is not there yet. What we could do and what we used to do all the time, which was sort of a hack, was use the `load` event to make sure the page was loaded first.

## load Event

The `load` event is fired when the page and all of it's resources are finished loading.

```js
window.addEventListener('load', () => {
  document.querySelector('h1').innerHTML = 'Hello';
});
```

Now, it works because we waited until the page was loaded.

You could also use `window.onload`, which does the same thing. This code was very common back in the 2000s

```JavaScript
window.onload = function() {
  document.querySelector('h1').innerHTML = 'Hello';
}
```

## `DOMContentLoaded` Event

The `DOMContentLoaded` event is fired when the DOM is parsed and loaded. Unlike the `load` event, it does not wait for things like images to load. If you want to make sure the DOM is loaded before you run your code, you should use this event.

```js
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').innerHTML = 'Hello';
});
```

If we run both blocks of code and then put a global console log under it.

```js
console.log('Run me!');
```

You will see that the code in the global space with not event will run first, because it did not wait for anything. Next the code in the `DOMContentLoaded` event will run, because it waited for the DOM to be loaded. And finally, the code in the `load` event will run, because it waited for the page to be fully loaded.

## `defer` attribute

A very modern way of doing things is putting the script tags in the head, but using the fairly new `defer` attribute. This will defer the JavaScript from loading until the DOM is ready. This is fine to do. I still prefer putting my scripts at the bottom, but if you want to use `defer` and put them in the head, that's fine as well.

Now let's look at a couple other `window` events

## `resize` Event

The `resize` event is fired when the window is resized. We can get the size of the window using the `innerWidth` and `innerHeight` properties.

Let's display the resized values in the `h1` tag.

```js
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).textContent = `Resized: ${window.innerWidth} x ${window.innerHeight}`;
});
```

## `scroll` Event

The `scroll` event is fired when the window is scrolled. We can get the scroll position using the `scrollX` and `scrollY` properties.

```js
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});
```

There are others as well. You can visit the MDN documentation for more information on `window` events, properties and methods.

You can even use `focus` and `blur` events. The following will turn all the paragraph text blue when you click in the window and back to black when you click outside of it.

```js
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
```

You now know a lot of different event types, you know how to select elements as well as add, remove and replace them, change their styles. With what we have learned so far, there are a lot of cool little things you can build.

In the next section, we are going to create our shopping list functionality.
