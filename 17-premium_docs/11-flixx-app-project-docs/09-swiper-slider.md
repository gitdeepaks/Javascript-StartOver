# Swiper Slider

The Swiper Slider is a popular slider library. We will use it to display the 'now playing' movies on the home/movies page.

I already included the `swiper.js` and `swiper.css` in the `lib` folder and it is already included in the `index.html` file.

Let's create a function called `displaySwiperSlider` that will take in the movies array and display the slider.

```js
// Display Slider Movies
async function displaySlider() {
  const { results } = await fetchAPIData('movie/now_playing');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      </a>
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
      </h4>
    `;

    document.querySelector('.swiper-wrapper').appendChild(div);

    initSwiper();
  });
}
```

Here we fetched the `now_playing` movies and looped through them. For each movie, we created a `div` element and added the `swiper-slide` class to it. Then we added the movie poster image and the rating. We also are calling a function called `initSwiper` that will initialize the slider.

```js
function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}
```

We need to call the `displaySlider()` function in the `switch` statement on the home/index page

```js
switch (global.currentPage) {
  case '/':
  case '/index.html':
    displaySlider();
    displayPopularMovies();
    break;
  // ...
}
```
