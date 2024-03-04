# Clear Storage Items

Now that we are saving our meals and workouts to local storage, we need a way to clear them. We already have the functionality of clearing them from the UI, so we just need to clear them from local storage.

It is up to you if you want to also clear the **calorie limit**. You may want to keep that but reset the total calories and the item arrays.

Let's create a `clearAll()` method in the `Storage` class:

If you wanted to clear everything including the limit, you could simply use the `.clear()` method on the `localStorage` object:

```js
static clearAll() {
  localStorage.clear();
}
```

If you want to keep the limit, you can just remove the other 3 individually:

```js
static clearAll() {
  localStorage.removeItem('meals');
  localStorage.removeItem('workouts');
  localStorage.removeItem('totalCalories');
}
```

Now in the `CalorieTracker()` class, in the `reset()` method, call the `clearAll()` method in the storage class:

```js
reset() {
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
    Storage.clearAll();
    this._render();
  }
```
