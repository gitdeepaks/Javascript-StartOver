# Input Events

Now let's look at the events that are fired when the user interacts with inputs. These are events we want to happen right when the user interacts with the input, not on a form submission. We will look at submitting forms in the next video.

## Getting Input Values

In the last video, we saw how to use keyboard events and get the specific keys that were pressed, but usually you want to get the entire input value. Every form input has a `value` property associated with it. We can use the keyboard events and get the value of a text input using the `e.target.value` property.

```js
const itemInput = document.getElementById('item-input');

function onKeyDown(e) {
  console.log(e.target.value);
}

itemInput.addEventListener('keydown', onKeyDown);
```

If you wanted to bind what you are typing to an element like the `h1`, we could do something like this:

```js
function onKeyDown(e) {
  const h1 = document.querySelector('h1');
  h1.innerText = e.target.value;
}
```

## `input` event

The problem with using the `keydown` event is that it only fires when a key is pressed. Some form inputs do not require you to press a key. For instance, if you have a select list and you want to fire something off as soon as you select an option, you can use the `input` event. You can also use it with text inputs. So I would suggest using the `input` event over `keydown`.

We can achieve the same result of outputing the text into the `h1` element by using the `input` event.

```js
const itemInput = document.getElementById('item-input');

function onInput(e) {
  const h1 = document.querySelector('h1');
  h1.innerText = e.target.value;
}

itemInput.addEventListener('input', onInput);
```

Let's try this with a select box. We don't have one in our UI, so we will have to create one. I will a select box for priority it into our form, but you do not necessarily need to have your inputs within a form if you are not submitting the form.

```html
<select id="priority-input" name="priority" class="form-input">
  <option value="0">Select Priority</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
```

Now we should be able to select the select box and output the value to the `h1` element.

```js
const priorityInput = document.getElementById('priority-input');

function onInput(e) {
  const h1 = document.querySelector('h1');
  h1.innerText = e.target.value;
}

priorityInput.addEventListener('input', onInput);
```

## `change` event

The `change` event is fired when the value of an input changes. You could use the `change` event here and it will do the same exact thing.

```js
function onInput(e) {
  const h1 = document.querySelector('h1');
  h1.innerText = e.target.value;
}

priorityInput.addEventListener('change', onInput);
```

There are some limitations to the `change` event. I personally would use the `input` event instead in most cases.

## Checkbox Inputs

Checkbox inputs are a bit different. You can use the `input` or the `change` event, however, if you want to get the value of the checkbox, you should use the `e.target.checked` property. This will show true if the checkbox is checked and false if it is not.

```html
<input type="checkbox" id="checkbox" />
```

```js
const checkbox = document.getElementById('checkbox');

function onCheck(e) {
  console.log(e.target.checked);
  const h1 = document.querySelector('h1');
  h1.innerText = checkbox.checked ? 'Checked' : 'Unchecked';
}

checkbox.addEventListener('input', onCheck);
```

## `focus` & `blur` Events

Text inputs have a `focus` event and a `blur` event. `focus`is fired when we click in the input to make it active and `blur` is fired when we click away from the input. This is useful for adding borders, etc.

Let's make the item input have a green border when we click in it and make it disappear when we click away.

```js
function onFocus(e) {
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}

function onBlur(e) {
  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
```
