# Details Page Backdrop

The API that we are working with gives us a link to a really cool backdrop image of the movie or show that we are fetching. We can use this image to create a nice background for our details page.

Let's create a function called `displayBackgroundImage` that will take in a type and a path. The type will be either `movie` or `tv` and the path will be the backdrop path that we get from the API.

```js
// Display Backdrop On Details Pages
function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.1';

  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  } else {
    document.querySelector('#show-details').appendChild(overlayDiv);
  }
}
```

So what we are doing here is taking in the type, which will be tv or movie and then the path, which will come from the api. Then we are just setting the image and a bunch of background styles to the overlay div. We are also appending it to the movie details or show details div depending on the type.

We can then call this function in our `displayMovieDetails` and `displayShowDetails` functions.

```js
async function displayMovieDetails() {
  const movieId = window.location.search.split('=')[1];

  const movie = await fetchAPIData(`movie/${movieId}`);

  // Overlay for background image
  displayBackgroundImage('movie', movie.backdrop_path);

  // ...
}

async function displayShowDetails() {
  const showId = window.location.search.split('=')[1];

  const show = await fetchAPIData(`tv/${showId}`);

  // Overlay for background image
  displayBackgroundImage('tv', show.backdrop_path);

  // ...
}
```
