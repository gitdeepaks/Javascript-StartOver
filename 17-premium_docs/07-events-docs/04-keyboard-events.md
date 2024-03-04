In this video, we're going to look at events that have to do with keyboards. We usually use these on text input fields.

In the next video, we will look at form and input events, but right now I just want to focus on the actual keyboard button events and getting the buttons that are pressed.

## Keyboard Events

There are 3 main keyboard events that we can listen for:

- `keydown` event is fired when a key is pressed down.
- `keyup` event is fired when a key is released.
- `keypress` event is fired when a key is pressed and released. It does not fire for the left arrow key, home, or end keys. It also fires repeatedly while you hold down the key on the keyboard.

The `keydown` event is usually what I use over the other 2 because it fires for every key and as soon as a key is pressed.

Let's try these out on our input form. We can also get the exact key that was pressed from the `Event` object that we looked at in the previous video.

```js
const itemInput = document.getElementById('item-input');

function onKeyDown(e) {
  console.log('keydown:', e.key);
}

function onKeyUp(e) {
  console.log('keyup:', e.key);
}

function onKeyPress(e) {
  console.log('keypress:', e.key);
}

itemInput.addEventListener('keydown', onKeyDown);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keypress', onKeyPress);
```

Notice that if we hold the key down, the `keydown` and `keypress` event will fire repeatedly.

Also notice that the `keypress` event does not fire for the left arrow key, home, or end keys.

### Getting The Pressed Key

As I showed you above, using the `key` property on the `Event` object, we can get the key that was pressed. This is useful if for instance, you wanted to do something when typing in an input that is not in a form to submit. You could just check for the `enter` key.

```js
function onKeyDown(e) {
  if (e.key === 'Enter') {
    alert('Enter was pressed.');
  }
}
```

### Key Codes

The `key` property is not supported in some older browsers. There are a couple other ways to get keys though.

#### `keyCode` is the numeric value of the key.

Every key on the keyboard has a key code. The key code is a number that represents the key. There is a list of key codes [here](https://www.toptal.com/developers/keycode/table-of-all-keycodes)

The `enter` key has a key code of `13`. So if we wanted to check for it, we could also check the key code:

```js
function onKeyDown(e) {
  if (e.keyCode === 13) {
    alert('Enter was pressed.');
  }
}
```

#### `code` is the name of the key.

```js
if (e.code === 'Digit1') {
  alert('Number 1 key was pressed.');
}
```

## `repeat` Property

We can also check to see if the key is being held down using the `repeat` property.

```js
function onKeyDown(e) {
  console.log('Repeat: ' + e.repeat);
}
```

If you just tap a key, you wil get false, but if you hold the key down, you will get true.

## `shiftKey`, `ctrlkey` & `altkey` Property

These properties will be either true or false if you hold down the shift, ctrl, or alt keys.

```js
function onKeyDown(e) {
  console.log('Shift: ' + e.shiftKey);
  console.log('Ctrl: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    alert('Shift + K was pressed.');
  }
}
```
