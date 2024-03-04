# Display Stats

In the last lesson, we created a class for the calorie tracker. In this lesson, we will create methods to display the stats on the UI.

We are going to have methods to display the total calories, the calorie limit, the calories consumed, the calories burned, and the calories remaining.

```js
class CalorieTracker {
  // ...

  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.getElementById('calories-consumed');

    const consumed = this._meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );

    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.getElementById('calories-burned');

    const burned = this._workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );

    caloriesBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining() {
    const caloriesRemainingEl = document.getElementById('calories-remaining');

    const remaining = this._calorieLimit - this._totalCalories;

    caloriesRemainingEl.innerHTML = remaining;
  }
}
```

So this is pretty simple. We are grabbing elements from the DOM and inserting data into them based on the data we have in the class. We are also using the `reduce()` method to get the total calories consumed and burned.

Now we need to call these methods in the constructor so that they run as soon as the class is instantiated.

```js
class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
  }
```

Now we need to call these methods in the `addMeal()` and `addWorkout()` methods so that they run whenever a new meal or workout is added. Instead of calling them all in both methods, let's create a private method called `_render()` that will call all of these methods.

```js
class CalorieTracker {
  //...

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
  }

  _render() {
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
  }
}
```

Now let's test it out. We can add a meal and a workout and see if the stats are updated.

```js
const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);

const run = new Workout('Morning Run', 320);
tracker.addWorkout(run);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);
```

As you add meals and workouts, the stats should update. If you refresh the page, the stats should reset to their default values.
