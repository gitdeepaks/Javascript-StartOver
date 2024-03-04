So the calories are now being tracked and saved in local storage, but the calories consumed and burned are not being displayed as well as the meals and workouts themselves. This is because we have yet to save them in local storage, so that is what we are going to do now.

Let's create a `getMeals()` method in the `Storage` class:

```js
class Storage {
  // ...
  static getMeals() {
    let meals;
    if (localStorage.getItem('meals') === null) {
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem('meals'));
    }
    return meals;
  }
}
```

We are just checking to see if it exists. If it does not, we return an empty array. If it does, we get it from local storage, parse the array and return the meals.

Let's create a method to store the meals in local storage:

```js
static saveMeal(meal) {
  const meals = Storage.getMeals();
  meals.push(meal);
  localStorage.setItem('meals', JSON.stringify(meals));
}
```

We are getting the meals from local storage, pushing the new meal to the array and then setting the item in local storage.

We are going to change the `_meals()` property to store the array returned from the `getMeals()` method:

```js
class CalorieTracker {
  constructor() {
    this._meals = Storage.getMeals();
    // ...
  }
}
```

We will use the `saveMeal()` method in the `addMeal()` method:

```js
  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    Storage.updateCalories(this._totalCalories);
    Storage.saveMeal(meal);
    this._displayNewMeal(meal);
    this._render();
  }
```

So now we are storing meals in local storage, but we are not displaying them. Let's do that now by creating a `loadItems()` method in the `CalorieTracker` class:

```js
class CalorieTracker {
  loadItems() {
    this._meals.forEach((meal) => this._displayNewMeal(meal));
  }
}
```

We are just looping through the meals and displaying them.

We will call the `loadItems()` method in the `App` constructor:

```js
class App {
  constructor() {
    //...
    this._tracker.loadItems();
  }
}
```

Let's also clean up the `App` constructor by putting all of the event listeners into a single method:

```js
class App {
  constructor() {
    // ...
    this._loadEventListeners();
  }

  _loadEventListeners() {
    document
      .getElementById('meal-form')
      .addEventListener('submit', this._newItem.bind(this, 'meal'));

    document
      .getElementById('workout-form')
      .addEventListener('submit', this._newItem.bind(this, 'workout'));

    document
      .getElementById('meal-items')
      .addEventListener('click', this._removeItem.bind(this, 'meal'));

    document
      .getElementById('workout-items')
      .addEventListener('click', this._removeItem.bind(this, 'workout'));

    document
      .getElementById('filter-meals')
      .addEventListener('keyup', this._filterItems.bind(this, 'meal'));

    document
      .getElementById('filter-workouts')
      .addEventListener('keyup', this._filterItems.bind(this, 'workout'));

    document
      .getElementById('reset')
      .addEventListener('click', this._reset.bind(this));

    document
      .getElementById('limit-form')
      .addEventListener('submit', this._setLimit.bind(this));
  }
}
```
