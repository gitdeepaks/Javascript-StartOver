# Persist Total Calories to Storage

We want the total calories to be stored in localStorage and we want that number to update when we add a meal or a workout.

Let's create a method to get the total calories from localStorage:

```js
static getTotalCalories(defaultCalories = 0) {
    let totalCalories;
    if (localStorage.getItem('totalCalories') === null) {
      totalCalories = defaultCalories;
    } else {
      totalCalories = +localStorage.getItem('totalCalories');
    }
    return totalCalories;
  }

```

As well as a method to update the calories

```js
static updateCalories(calories) {
    localStorage.setItem('totalCalories', calories);
}
```

Now, let's update the `_totalCalories` property in the tracker to use the `getTotalCalories()` method:

```js
class CalorieTracker {
  constructor() {
    this._totalCalories = Storage.getTotalCalories(0);
    // ...
  }
}
```

When we add a meal or a workout, we need to update the total calories:

```js
addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    Storage.updateCalories(this._totalCalories); // Add this line
    this._render();
  }
```

```js
addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    Storage.updateCalories(this._totalCalories); // Add this line
    this._render();
}
```

We also want to do it when we remove a meal or workout:

```js

removeMeal(id) {
    const index = this._meals.findIndex((meal) => meal.id === id);
    if (index !== -1) {
      const meal = this._meals[index];
      this._meals.splice(index, 1);
      this._totalCalories -= meal.calories;
      Storage.updateCalories(this._totalCalories);
      this._render();
    }
  }

removeWorkout(id) {
    const index = this._workouts.findIndex((workout) => workout.id === id);
    if (index !== -1) {
      const workout = this._workouts[index];
      this._workouts.splice(index, 1);
      this._totalCalories += workout.calories;
      Storage.updateCalories(this._totalCalories);
      this._render();
    }
  }
```

Now, when we refresh the page, the total calories will be the same as before. However, we won't see the meals and workouts because we haven't implemented that in local storage yet.
