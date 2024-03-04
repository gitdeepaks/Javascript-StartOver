# The Event Object

We will look at some other types of events in the next video, but before we do that, I want to talk about the `Event` object. When we run an event handler (The function that runs when the event is triggered), There is an object that is passed in to it that gives us a bunch of information about the element that is attached to that event.

Let's log the `Event` object to the console:

```js
logo.addEventListener('click', function (e) {
  console.log(e);
});
```

You can also use a named function:

```js
function onClick(e) {
  console.log(e);
}

logo.addEventListener('click', onClick);
```

It is important to know that the properties on the event object can vary depending on the event and the element. Let's look at some of the properties that are available on the event object:

- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen

Try logging some of the properties to the console to see what they are.

```js
logo.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
  console.log(e.timeStamp);
  console.log(e.clientX, e.clientY);
  console.log(e.offsetX, e.offsetY);
  console.log(e.pageX, e.pageY);
  console.log(e.screenX, e.screenY);
}
```


## `target` vs `currentTarget`
Sometimes the element that you click on is different than the element that the event is attached to. In the case of the logo, it's the same because there is nothing else nested in that logo/image. If we add an event listener to the body, the body is the `currentTarget`, but whatever we click on, such as one of the `li` elements is the `target`. Try it out.

```JavaScript
document.body.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
});
```

## `e.preventDefault()`

Sometimes we want to prevent the default behavior of an event. For example, if we click on a link, we want to prevent the browser from following the link or we click a form submit button, we want to prevent the form from submitting to an actual file.

Let's add a link around the logo that points to Google:

```html
<a href="https://google.com">
  <img src="images/note.png" alt="" />
</a>
```

Right now, it will send us to Google. If we add an event listener to the link, we can prevent the browser from following the link:

```js
document.querySelector('header a').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Link was clicked.');
});
```

## Dynamic Values

Sometimes the values will change as an event fires off. Let's add a drag event to the logo and output the X and Y position from the `h1`.

```js
function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('drag', onDrag);
```

I would encourage you to play around with this stuff. Even if it is ridiculous UI behavior, you can learn a lot from it.
