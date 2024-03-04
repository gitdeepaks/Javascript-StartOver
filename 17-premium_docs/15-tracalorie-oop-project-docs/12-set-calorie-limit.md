# Set Calorie Limit

Before we start to get into localStorage, I want to make it so that when we submit the limit modal form, it changes the limit, which right now is hard-coded to 2000.

Let's add an event listener for the submit event on the limit form.

```js
document
  .getElementById('limit-form')
  .addEventListener('submit', this._setLimit.bind(this));
```

Now, create the `_setLimit` method in the `App` class.

```js
_setLimit(e) {
    e.preventDefault();
    const limit = document.getElementById('limit');

    if (limit.value === '') {
      alert('Please add a limit');
      return;
    }

    this._tracker.setLimit(+limit.value);
    limit.value = '';

    const modalEl = document.getElementById('limit-modal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }
```

So, the actual setting of the calorie limit is done within the tracker. We are also clearing the input and hiding the modal.

let's create the tracker setLimit method. Remember, this is a public method, so no underscore.

```js
  setLimit(calorieLimit) {
    this._calorieLimit = calorieLimit;
    this._displayCalorieLimit();
    this._render();
  }
```

We are setting the calorie limit and then calling the displayCalorieLimit and render methods.

Now whatever you set it to, the rest of the app will use that value. However, it will not stick if you refresh the page. Nothing will right now. So in the next few lessons, we will implement localStorage to save the data.
