# Poll Project

In this project, we will create a very simple poll application that uses a `Map` to keep track of the votes. Like with anything else, using a `Map` in an actual project, helps you understand it better.

We will create a poll form to vote for your favorite JavaScript framework. The poll will have 5 options, and the user can only vote for one option. The results will be displayed after the user votes.

## The HTML

I used Bootstrap 5 for this project. Here is the HTML with the Bootstrap classes:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <script src="script.js" defer></script>

    <title>Poll</title>
  </head>
  <body class="bg-light">
    <div class="card w-50 m-auto border-round mt-5 shadow-lg">
      <div class="card-header bg-primary text-white text-center">
        <h1>Favorite JS Framework</h1>
      </div>
      <div class="card-body p-5 fs-4">
        <form id="poll-form">
          <div class="form-check m-2 p-3 border-bottom">
            <input
              class="form-check-input"
              type="radio"
              name="poll-option"
              id="poll-option"
              value="React"
            />
            <label class="form-check-label" for="poll-option"> React </label>
          </div>
          <div class="form-check m-2 p-3 border-bottom">
            <input
              class="form-check-input"
              type="radio"
              name="poll-option"
              id="poll-option"
              value="Vue"
            />
            <label class="form-check-label" for="poll-option"> Vue </label>
          </div>
          <div class="form-check m-2 p-3 border-bottom">
            <input
              class="form-check-input"
              type="radio"
              name="poll-option"
              id="poll-option"
              value="Angular"
            />
            <label class="form-check-label" for="poll-option"> Angular </label>
          </div>

          <div class="form-check m-2 p-3 border-bottom">
            <input
              class="form-check-input"
              type="radio"
              name="poll-option"
              id="poll-option"
              value="Svelte"
            />
            <label class="form-check-label" for="poll-option"> Svelte </label>
          </div>

          <div class="form-check m-2 p-3">
            <input
              class="form-check-input"
              type="radio"
              name="poll-option"
              id="poll-option"
              value="Other"
            />
            <label class="form-check-label" for="poll-option"> Other </label>
          </div>

          <input
            type="submit"
            value="Submit"
            class="btn btn-dark btn-lg btn-block w-100 mt-5"
          />
        </form>

        <div id="results" class="m-4"></div>
      </div>
    </div>
  </body>
</html>
```

## The JavaScript`

Let's create a map to correspond to the options in the poll. The keys will be the options, and the values will be the number of votes for each option. The values will be set to 0 initially.

```js
const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);
```

Let's setup an event listener for the form. When the user submits the form, we will get the value of the selected option, and increment the corresponding value in the map.

```js
document.getElementById('poll-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );

  if (!selectedOption) {
    alert('Please select an option');
    return;
  }

  let voteCount = poll.get(selectedOption.value);
  poll.set(selectedOption.value, voteCount + 1);
  displayResults();
}
```

We are using the `get()` method to get the value of the selected option. We are also using the `set()` method to increment the value of the selected option.

Let's create a function to display the results. We will loop through the map and display the results in a list.

```js
function displayResults() {
  const results = document.getElementById('results');
  results.innerHTML = '';
  for (let [option, votes] of poll) {
    const optionElement = document.createElement('div');
    optionElement.classList.add(
      'border-bottom',
      'p-2',
      'd-flex',
      'justify-content-between'
    );
    optionElement.innerHTML = `<strong>${option}:</strong> ${votes} votes`;
    results.appendChild(optionElement);
  }
}
```

When you vote, you will see each option and the number of votes for that option. TO make it so the user can only vote once, we can disable the form after the user votes.

Add this to the `submitForm()` function:

````js
 // disable form fields and submit button
  document
    .getElementById('poll-form')
    .querySelectorAll('input, button')
    .forEach((el) => {
      el.setAttribute('disabled', true);
    });
    ```
````
