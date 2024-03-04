# Filter & Reset

In this lesson, we are going to add the functionality to filter items and reset the total calories as well as remove all items.

let's start by adding an event listener for a `keyup` event on both the meal and workout filter inputs.

```js
 document
      .getElementById('filter-meals')
      .addEventListener('keyup', this._filterItems.bind(this, 'meal'));

    document
      .getElementById('filter-workouts')
      .addEventListener('keyup', this._filterItems.bind(this, 'workout'));
      ```


We will create the `_filterItems` method in the `App` class.

```js
_filterItems(type, e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(`#${type}-items .card`).forEach((item) => {
      const name = item.firstElementChild.firstElementChild.textContent;
      if (name.toLowerCase().indexOf(text) != -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
```

We are getting the text of the input. Then we are looping through all the items and checking if the text is in the name of the item. If it is, we display the item, otherwise we hide it. We don't need to use the tracker at all because it has nothing to do with manipulating calories or items.

## Adding Reset Functionality

Let's add an event listener for the reset button.

```js
document
  .getElementById('reset')
  .addEventListener('click', this._reset.bind(this));
```

    Create the `_reset` method in the `App` class.

```js
    _reset() {
    if (confirm('Are you sure you want to reset everything?')) {
      this._tracker.reset();
      document.getElementById('meal-items').innerHTML = '';
      document.getElementById('workout-items').innerHTML = '';
      document.getElementById('filter-meals').value = '';
      document.getElementById('filter-workouts').value = '';
    }
  }
```

Anything to do with resetting calories and items will happen in the tracker, so we have a \_tracker.reset() method. We are also clearing the items from the UI and resetting the filter inputs.

Let's create the tracker reset. Remember, this is a public method, so no underscore.

```js
reset() {
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
    this._render();
  }
```

We are clearing the total calories, the meals and workouts arrays, and then we are rendering the tracker/stats.
