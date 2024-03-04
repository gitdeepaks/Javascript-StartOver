# Display Popular Movies

In this section, we will be displaying the popular movies on the home screen of the app. We will be using the [Get Popular Movies](https://api.themoviedb.org/3/movie/popular) endpoint to get the data. The endpoint returns a list of movies sorted by popularity.

## `fetchAPIData()` function

We are going to create a function called `fetchAPIData()` that will be used to fetch data from the API. We will pass in the URL for the endpoint as a parameter.

```js
async function fetchAPIData(endpoint) {
  const API_KEY = ''; // Put your api key here
  const API_URL = 'https://api.themoviedb.org/3/';

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  return data;
}
```

This function will reach out to the server and get the data that we need using the endpoint that is passed in. It will then return the data as a JavaScript object.

It is important to understand that the API Key is public in this case. This is only for development and small projects. For real production projects, you should not store your API Key in your code. You should store it in a server and make requests from there. That is beyond what we have covered so far. I may do that later on in the course.

## `displayPopularMovies()` function

Now we can create a function to display the popular movies. We will call the `fetchAPIData()` function and pass in the endpoint. We will then loop through the results and display the data. We will add a link to the movie details page as well. This will include the id of the movie.

```js
async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
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
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

    document.querySelector('#popular-movies').appendChild(div);
  });
}
```

## Remove Hardcoded Movies

In the `index.html` file, we have some hardcoded movies. We can remove those now. Every div that has the class of `card` can be removed. So the div with the id of `popular-movies` should be empty.

We will call the `displayPopularMovies()` function in the `switch` statement.

```js
switch (global.currentPage) {
  case '/':
  case '/index.html':
    displayPopularMovies();
    break;
  // ...
}
```

Now you should see 20 popular movies on the page
