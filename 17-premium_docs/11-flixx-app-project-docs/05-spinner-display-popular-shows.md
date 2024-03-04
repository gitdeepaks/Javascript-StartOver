# Spinner and Display Popular Shows

One thing I want to do before we fetch the TV shows, is add a spinner to display while data is being fetched. This will give the user some feedback that the app is working.

In the HTML, there is

```HTML
<div class="spinner"></div>
```

If you add a class of `show` to that div, it will display the spinner. We will add this class when we are fetching the data. Let's create a function to show and hide the spinner.

```js
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}
```

Now in the `fetchAPIData()` function, we can call the `showSpinner()` function before we fetch the data. We can also call the `hideSpinner()` function after the data is fetched.

```js
async function fetchAPIData(endpoint) {
  const API_KEY = '';
  const API_URL = 'https://api.themoviedb.org/3/';

  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  hideSpinner();

  return data;
}
```

## `displayPopularShows()` function

Now we can create a function to display the popular shows. We will call the `fetchAPIData()` function and pass in the endpoint. We will then loop through the results and display the data. We will add a link to the show details page as well. This will include the id of the show.

```js
async function displayPopularShows() {
  const { results } = await fetchAPIData('tv/popular');

  results.forEach((show) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="tv-details.html?id=${show.id}">
            ${
              show.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${show.name}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">Air Date: ${show.first_air_date}</small>
            </p>
          </div>
        `;

    document.querySelector('#popular-shows').appendChild(div);
  });
}
```

Remove all of the hardcoded show divs with the class of `card` in the `shows.html` file. You should now see a list of popular TV shows.

Now add the `displayPopularShows()` function to `switch` statement

```js
// Init App
function init() {
  switch (global.currentPage) {
    // ...
    case '/shows.html':
      displayPopularShows();
      break;
    // ...
  }
}
```
