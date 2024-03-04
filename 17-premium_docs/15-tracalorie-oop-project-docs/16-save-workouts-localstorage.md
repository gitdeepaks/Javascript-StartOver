# Save Workouts To Local Storage

Now we want to save our workouts. I want you to try this on your own. It is the same exact process we used with meals. The only difference is that we are going to use the `workouts` array instead of the `meals` array.

Let's continue...

We will add a `getWorkouts()` method to the `Storage` class:

```js
static getWorkouts() {
    let workouts;
    if (localStorage.getItem('workouts') === null) {
      workouts = [];
    } else {
      workouts = JSON.parse(localStorage.getItem('workouts'));
    }
    return workouts;
  }
```

As well as a `saveWorkout()` method:

```js
static saveWorkout(workout) {
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
```

We will set the default for `_workouts` to `Storage.getWorkouts()`:

```js
class CalorieTracker {
  constructor() {
    // ...
    this._workouts = Storage.getWorkouts(); // Add this line
  }
}
```

Now call the `saveWorkout()` method in the `addWorkout()` method:

```js
  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    Storage.updateCalories(this._totalCalories);
    Storage.saveWorkout(workout); // Add this line
    this._displayNewWorkout(workout);
    this._render();
  }
```

Finally, to display them on the page, we will add to the `loadItems()` method in the `CalorieTracker` class:

```js
  loadItems() {
    this._meals.forEach(meal => this._displayNewMeal(meal));
    this._workouts.forEach(workout => this._displayNewWorkout(workout));
  }
```
