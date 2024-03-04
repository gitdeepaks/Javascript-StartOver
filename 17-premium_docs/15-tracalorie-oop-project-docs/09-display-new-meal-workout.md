# Display New Meal & Workout

So we are able to add a meal or workout via the forms and the calories are factored into the stats, but we still don't see the meal or workout. So we are going to create two methods, `_displayNewMeal()` and `_displayNewWorkout()`.

I would suggest removing any dummy items in the list from the HTML if you still have any there.

Let's start by calling them where they need to be called, which is in the public `addMeal()` and `addWorkout()` methods in the `CalorieTracker`.

```js
  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._displayNewMeal(meal);
    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._displayNewWorkout(workout);
    this._render();
  }
```

Now, let's create the `_displayNewMeal()` method in the `CalorieTracker` class.

```js
  _displayNewMeal(meal) {
    const mealsEl = document.getElementById('meal-items');
    const mealEl = document.createElement('div');
    mealEl.classList.add('card', 'my-2');
    mealEl.setAttribute('data-id', meal.id);
    mealEl.innerHTML = `
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between">
        <h4 class="mx-1">${meal.name}</h4>
        <div class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">
          ${meal.calories}
        </div>
        <button class="delete btn btn-danger btn-sm mx-2">
          <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
  </div>
    `;
    mealsEl.appendChild(mealEl);
  }
```

We just selected the element where we want to append the meal, created the element, added some classes and a `data-id` attribute, and then set the inner HTML. We are using the `data-id` attribute to get the ID of the meal when we want to delete it. We are also using the `delete` class to select the delete button when we want to delete the meal.

We will create the `_displayNewWorkout()` method in the same way.

```js
_displayNewWorkout(workout) {
  const workoutsEl = document.getElementById('workout-items');
  const workoutEl = document.createElement('div');
  workoutEl.classList.add('card', 'my-2');
  workoutEl.setAttribute('data-id', workout.id);
  workoutEl.innerHTML = `
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
      <h4 class="mx-1">${workout.name}</h4>
      <div class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5">
        ${workout.calories}
      </div>
      <button class="delete btn btn-danger btn-sm mx-2">
        <i class="fa-solid fa-xmark"></i>
      </button>
  </div>
</div>
  `;
  workoutsEl.appendChild(workoutEl);
}
```

Now when you add a meal or workout, you should see it in the list.
