# Remove Meal & Workout

Now we want to be able to remove meals and workouts. We want to remove from the list, but we also want to account for the calories in the tracker. So we are going to start by adding event listeners in the `App` class.

```js
 document
      .getElementById('meal-items')
      .addEventListener('click', this._removeItem.bind(this, 'meal'));

    document
      .getElementById('workout-items')
      .addEventListener('click', this._removeItem.bind(this, 'workout'));
      ```


As you can see, we are using event delegation and putting the event listener on the parent element. We are also passing in the type as a parameter. Now let's create the method.

```js
   _removeItem(type, e) {
    if (
      e.target.classList.contains('delete') ||
      e.target.classList.contains('fa-xmark')
    ) {
      if (confirm('Are you sure?')) {
        const id = e.target.closest('.card').getAttribute('data-id');
        type === 'meal'
          ? this._tracker.removeMeal(id)
          : this._tracker.removeWorkout(id);
        const item = e.target.closest('.card');
        item.remove();
      }
    }
  }
```

We are targeting the `delete` and `fa-xmark` classes. We are also using the `closest` method to get the parent element. We are then getting the `data-id` attribute and passing it to the `removeMeal` or `removeWorkout` method in the `CalorieTracker`. We are also removing the item from the DOM.

## Remove From Tracker

Now, let's create our public `removeMeal()` and `removeWorkout()` methods in the tracker.

```js
 removeMeal(id) {
    const index = this._meals.findIndex((meal) => meal.id === id);
    if (index !== -1) {
      const meal = this._meals[index];
      this._meals.splice(index, 1);
      this._totalCalories -= meal.calories;
      this._render();
    }
  }

  removeWorkout(id) {
    const index = this._workouts.findIndex((workout) => workout.id === id);
    if (index !== -1) {
      const workout = this._workouts[index];
      this._workouts.splice(index, 1);
      this._totalCalories += workout.calories;
      this._render();
    }
  }
```

Now, when we click on the delete button, it will remove the item. We are also updating the total calories.
