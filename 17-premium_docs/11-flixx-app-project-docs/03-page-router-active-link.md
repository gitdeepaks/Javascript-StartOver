# Page Router & Active Link

Since we will have multiple HTML pages in the project and we need to run different JavaScript code on each page, we will be creating a very simple page router using a `switch` statement. We will also be creating a function to add an `active` class to the active link in the navigation.

## App State

At the very top of the JS file, we will have a `global` object for our global state. This will include any values that we will need in multiple places. We will create a `currentPage` property and set it to `window.location.pathname`. This will give us the current page path.

```js
const global = {
  currentPage: window.location.pathname,
};
```

## Init() and Router

We will have an `init()` function that will run when the DOM loads and this is where we will add the router code. Right now, we will just add a `console.log()` statement for each page. We will add the code to the `init()` function later.

```js
// Init App
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movie-details.html':
      console.log('Movie Details');
      break;
    case '/tv-details.html':
      console.log('TV Details');
      break;
    case '/search.html':
      console.log('Search');
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);
```

## Highlight Active Link

Let's create a function to highlight the nav link for the current page. We will add a `active` class to the link. We will also remove the `active` class from any other links. We will call the `highlightActiveLink()` function in the `init()` function.

```js
// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}
```

```js
// Init App
function init() {
  // ...
  highlightActiveLink();
}
```

Now you should see the link highlight and the `console.log()` for each page.
