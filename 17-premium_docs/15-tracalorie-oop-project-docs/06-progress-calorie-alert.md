# Progress Bar & Max Calorie Alert

Before we move on to the `App` class, let's add a progress bar and a max calorie alert. The alert is going to turn the "Calories Remaining" box and the progress bar red by adding the `bg-danger` class.

Bootstrap progress bars work by setting the `width` to a percentage. We can calculate the percentage by dividing the calories consumed by the max calories and multiplying by 100.

Let's create a method in the `CalorieTracker` class called `_displayCaloriesProgress` and add the following code:

```js
 _displayCaloriesProgress() {
    const progressEl = document.getElementById('calorie-progress');
    const percentage = (this._totalCalories / this._calorieLimit) * 100;
    const width = Math.min(percentage, 100);
    progressEl.style.width = `${width}%`;
  }
```

We then want to add call this in the constructor and in the `_render()` method.

```js
class CalorieTracker {
  constructor() {
    //...
    this._displayCalorieProgress();
  }
}
```

```js
class CalorieTracker {
  _render() {
    //...
    this._displayCalorieProgress();
  }
}
```

Now let's add the alert. We want to add the `bg-danger` class to the "Calories Remaining" box and the progress bar if the calories remaining is 0 or less. We can put this in the `_displayCaloriesRemaining` method.

```js
class CalorieTracker {
  _displayCaloriesRemaining() {
    const caloriesRemainingEl = document.getElementById('calories-remaining');
    const progressEl = document.getElementById('calorie-progress');
    const remaining = this._calorieLimit - this._totalCalories;
    caloriesRemainingEl.innerHTML = remaining;
    if (remaining <= 0) {
      caloriesRemainingEl.parentElement.classList.remove('bg-light');
      caloriesRemainingEl.parentElement.classList.add('bg-danger');
      progressEl.classList.add('bg-danger');
      progressEl.classList.remove('bg-success');
    } else {
      caloriesRemainingEl.parentElement.classList.remove('bg-danger');
      caloriesRemainingEl.parentElement.classList.add('bg-light');
      progressEl.classList.remove('bg-danger');
      progressEl.classList.add('bg-success');
    }
  }
}
```
