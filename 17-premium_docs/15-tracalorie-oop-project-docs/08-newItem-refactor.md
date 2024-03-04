# newItem() Refactor

So, the `_newMeal()` and `newWorkout()` methods in the last lesson were very similar. We are going to combine them into a single method called `_newItem()`.

First we need to change the event handlers. We are going to change the method name to `_newItem()` and pass in the type of item as a parameter.

```js
document
  .getElementById('meal-form')
  .addEventListener('submit', this._newItem.bind(this, 'meal'));

document
  .getElementById('workout-form')
  .addEventListener('submit', this._newItem.bind(this, 'workout'));
```

Now, let's create the method, which will take in a type parameter.

```js
  _newItem(type, e) {
    e.preventDefault();
    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);

    if (name.value === '' || calories.value === '') {
      alert('Please fill in all fields');
      return;
    }

    if (type === 'meal') {
      const meal = new Meal(name.value, +calories.value);
      this._tracker.addMeal(meal);
    }
    if (type === 'workout') {
      const workout = new Workout(name.value, +calories.value);
      this._tracker.addWorkout(workout);
    }

    name.value = '';
    calories.value = '';

    const collapseItem = document.getElementById(`collapse-${type}`);
    const bsCollapse = new bootstrap.Collapse(collapseItem, {
      toggle: true,
    });
  }
```

As you can see, we just changed a lot of the hardcoded 'meal' and 'workout' strings to the type parameter. We also added a conditional to see which tracker method would be called.
