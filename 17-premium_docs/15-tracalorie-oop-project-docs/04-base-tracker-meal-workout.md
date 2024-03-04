# Base Tracker, Meal & Workout Classes

We are going to start of by creating the base `CalorieTracker` class, as well as the `Meal` and `Workout` classes. We will be using the `Meal` and `Workout` classes to instantiate meal and workout objects that we will be passing into the `CalorieTracker` class.
Let's create the class with the constructor and properties.

```js
class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
  }
```

We set the calorieLimit to a hardcoded **2000**, but later on, that will be controlled via the app. We also set the totalCalories to **0** and the meals and workouts to empty arrays.

We are also going to create a class to add a meal and a workout, which will just add the meal or workout to the respective array and add or remove the calories to the total calories. A workout burns calories, so we will subtract the calories from the total calories, and a meal adds calories, so we will add the calories to the total calories.

```js
class CalorieTracker {
  // ...

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
  }
}
```

Now let's create the `Meal` and `Workout` classes. They will be very simple. They will only have a constructor with an `id`, `name` and `calories` property. When we use the `addMeal()` or `addWorkout()` methods in the tracker, we will be passing in an object instance of the `Meal` or `Workout` class.

The ID has to be different for each meal or workout, so I am going to use `Math.Random().toString(16)` which will give us a random hexadecimal string. We will then slice off the first two characters. There are many other ways to create random IDs, this is just one of them.

```js
class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}
```

Now, we should be able to instantiate the `CalorieTracker` class and add meals and workouts to it.

```js
const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);

const run = new Workout('Morning Run', 300);
tracker.addWorkout(run);
```

We can see the results, by logging the properties. Now these are private properties, so we should not be accessing them directly, but for now, we will just log them to the console to see the results.

```js
console.log(tracker._meals); // [Meal { id: '1a2b3c', name: 'Breakfast', calories: 400 }]
console.log(tracker._workouts); // [Workout { id: '4d5e6f', name: 'Morning Run', calories: 300 }]
console.log(tracker._totalCalories); // 100
```
