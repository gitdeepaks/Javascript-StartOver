# Movie Details Page

Right now, when we click a movie on the homepage, it brings us to a url like this:

`/movie-details.html?id=550988`

We need to create a function to get the movie id from the url and then fetch the movie data from the API. We will call it `displayMovieDetails()`.

We will use the `window.location.search` property to get the query string from the url. The query string will look like this: `?id=550988`. We will use the `split()` method to split the string at the `=` sign and then get the second item in the array, which will be the movie id.

We then use the `fetchAPIData()` function to fetch the movie data from the API. We pass in the `movie/${movieId}` as the endpoint. Then we add the movie data to the DOM.

```js
async function displayMovieDetails() {
  const movieId = window.location.search.split('=')[1];

  const movie = await fetchAPIData(`movie/${movieId}`);

  const div = document.createElement('div');

  div.innerHTML = `
  <div class="details-top">
  <div>
  ${
    movie.poster_path
      ? `<img
    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    class="card-img-top"
    alt="${movie.title}"
  />`
      : `<img
  src="../images/no-image.jpg"
  class="card-img-top"
  alt="${movie.title}"
/>`
  }
  </div>
  <div>
    <h2>${movie.title}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${movie.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${movie.release_date}</p>
    <p>
      ${movie.overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
      ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
    </ul>
    <a href="${
      movie.homepage
    }" target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(
      movie.budget
    )}</li>
    <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(
      movie.revenue
    )}</li>
    <li><span class="text-secondary">Runtime:</span> ${
      movie.runtime
    } minutes</li>
    <li><span class="text-secondary">Status:</span> ${movie.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">
    ${movie.production_companies
      .map((company) => `<span>${company.name}</span>`)
      .join(', ')}
  </div>
</div>
  `;

  document.querySelector('#movie-details').appendChild(div);
}
```

Notice that we used a function called `addCommasToNumber()` to add commas to the budget and revenue numbers. Let's create that now.

```js
function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```

This function uses the `replace()` method to replace every three digits with a comma. It takes in a regular expression. We have not gone over regular expressions yet, but it is something that we will get to soon. For now, just know that it is a way to match patterns in strings.

Call the `displayMovieDetails()` function in the `switch` statement:

```js
// Init App
function init() {
  switch (global.currentPage) {
    // ...
    case '/movie-details.html':
      displayMovieDetails();
      break;
    // ...
  }
}
```
