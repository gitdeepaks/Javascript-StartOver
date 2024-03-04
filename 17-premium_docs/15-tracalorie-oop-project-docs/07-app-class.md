# App Class, New Meal & Workout

Now that we have our base `CalorieTracker` class, let's create the `App` class. The `App` class is going to be the main class that will control the entire application. It will be responsible for initializing the `CalorieTracker` class and it is where all of the event listeners will be added.

We are going to set the tracker instance as a property on the `App` class.

```js
class App {
  constructor() {
    this._tracker = new CalorieTracker();
  }
}
```

In the final version of the app, we will have an event handler called `_newItem` that will be responsible for adding a new meal or workout to the tracker. For now, we will have two separate event handlers, `_newMeal` and `_newWorkout`. We will add the event listeners in the constructor.

We also need access to the current instance by using the `this` keyword. Since `this._newMeal` and `this._newWorkout` are being passed as callbacks, the `this` keyword will refer to the element that the event was called on. To get around this, we can use the `bind` method to bind the `this` keyword to the `App` class instance.

```js
document
  .getElementById('meal-form')
  .addEventListener('submit', this._newMeal.bind(this, 'meal'));

document
  .getElementById('workout-form')
  .addEventListener('submit', this._newWorkout.bind(this, 'workout'));
```

Let's start with the `_newMeal` event handler. We are going to get the values from the form and create a new `Meal` object. We will then add the meal to the tracker and render the tracker.

```js
  _newMeal(e) {
    e.preventDefault();
    const name = document.getElementById('meal-name');
    const calories = document.getElementById('meal-calories');

    if (name.value === '' || calories.value === '') {
      alert('Please fill in all fields');
      return;
    }

    // Create a new meal
    const meal = new Meal(name.value, +calories.value);

    // Add the meal to the tracker
    this._tracker.addMeal(meal);
  }
```

This will create a new meal and we should see the reflection in the calorie stats. We won't see the meal in the list yet because we haven't rendered that, but it is being added to the tracker.

I also want to clear the form inputs and close the Bootstrap collapse component when we submit, so let's do that.

```js
  _newMeal(e) {
  e.preventDefault();
  const name = document.getElementById('meal-name');
  const calories = document.getElementById('meal-calories');

  if (name.value === '' || calories.value === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new meal
  const meal = new Meal(name.value, +calories.value);

  // Add the meal to the tracker
  this._tracker.addMeal(meal);

  // Clear the form
  name.value = '';
  calories.value = '';

  // Collapse the form
  const collapseMeal = document.getElementById('collapse-meal');
  const bsCollapse = new bootstrap.Collapse(collapseMeal, {
    toggle: true,
  });
}
```

Now to do this for the workout, is very similar. Let's create the `_newWorkout` event handler.

```js
  _newWorkout(e) {
    e.preventDefault();
    const name = document.getElementById('workout-name');
    const calories = document.getElementById('workout-calories');

    if (name.value === '' || calories.value === '') {
      alert('Please fill in all fields');
      return;
    }

    // Create a new workout
    const workout = new Workout(name.value, +calories.value);

    // Add the workout to the tracker
    this._tracker.addWorkout(workout);

    // Clear the form
    name.value = '';
    calories.value = '';

    // Collapse the form
    const collapseWorkout = document.getElementById('collapse-workout');
    const bsCollapse = new bootstrap.Collapse(collapseWorkout, {
      toggle: true,
    });
  }
```

We have to instanciate the `App` class

```js
const app = new App();
```

These two functions are very similar, so in the next lesson, we will refactor a bit and abide by the DRY principle.
