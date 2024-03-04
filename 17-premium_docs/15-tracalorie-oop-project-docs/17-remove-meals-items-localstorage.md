# Remove Meals & Workouts From Local Storage

Let's go ahead and add a method called `removeMeal()` to the `CalorieTracker` class:

```js
static removeMeal(id) {
  const meals = Storage.getMeals();
  meals.forEach((meal, index) => {
    if (meal.id === id) {
      meals.splice(index, 1);
    }
  });
  localStorage.setItem('meals', JSON.stringify(meals));
}
```

We simply loop through the meals and if the meal id matches the id we pass in, we remove it from the array. Then we save the array to local storage.

Let's also create `removeWorkout()`

```js
static removeWorkout(id) {
  const workouts = Storage.getWorkouts();
  workouts.forEach((workout, index) => {
    if (workout.id === id) {
      workouts.splice(index, 1);
    }
  });
  localStorage.setItem('workouts', JSON.stringify(workouts));
}
```

Now we will call these methods from the tracker. In the `removeMeal()` method of the `CalorieTracker` class, we will call the `removeMeal()` method of the `Storage` class:

```js
  removeMeal(id) {
    this._meals.forEach((meal, index) => {
      if (meal.id === id) {
        this._totalCalories -= meal.calories;
        this._meals.splice(index, 1);
      }
    });
    Storage.updateCalories(this._totalCalories);
    Storage.removeMeal(id); // Add this line
    this._render();
  }
```

We will do the same with the `removeWorkout()` method:

```js
  removeWorkout(id) {
    this._workouts.forEach((workout, index) => {
      if (workout.id === id) {
        this._totalCalories += workout.calories;
        this._workouts.splice(index, 1);
      }
    });
    Storage.updateCalories(this._totalCalories);
    Storage.removeWorkout(id); // Add this line
    this._render();
  }
```

Now, when you remove a meal or workout, it will stay gone when you reload the page because we removed them from localstorage.
