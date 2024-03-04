# Search Function & Custom Alert

In this lesson, we will start to add our search functionality. We will also create a custom alert function that will display a message to the user.

## Search Info In Global State

We are going to need to access certain search info in multiple places in our app, so I am going to add a search object to the `global` object. I am also going to move the api key and api url into the global object because we will have a separate function for the search requests and we need those pieces of info in that function.

```js
const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
  },
  api: {
    apiKey: '',
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};
```

The page stuff is for pagination. We will add that later. We are concerned with the search term and the search type right now.

## `search()` Function

Let's create the `search()` function that will fetch the search results from the API and display them. We run a function called `searchAPIData()` to fetch the data from the API. We will create that function next. For now, we are just logging the data.

We also call a function called `showAlert()` to display a message to the user if something went wrong. We will create that function as well.

```js
async function search() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Add the type and term to the global object
  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');

  if (global.search.term !== '' && global.search.term !== null) {
    const results = await searchAPIData();
    console.log(results);
  } else {
    showAlert('Please enter a search term');
  }
}
```

## `searchAPIData()` Function

Notice we used a different function for getting data. We are going to create a function called `searchAPIData()` because the request is a bit different than the other requests we have made.

```js
// Make Request To Search
async function searchAPIData() {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();

  const response = await fetch(
    `${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}`
  );

  const data = await response.json();

  hideSpinner();

  return data;
}
```

Also, change the api key and url lines in the `fetchAPIData()` function to use the global object.

```js
async function fetchAPIData() {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  // ...
}
```

Our form in the html has an `action` attribute that submits to the `search.html` page. We will call the `search()` function within the `switch` statement on the search page.

```js
switch (global.currentPage) {
  case '/search.html':
    search();
    break;
  // ...
}
```

## `showAlert()` Function

We are going to create a function that will display a message to the user. It will take in a message and a class name. The class name will be used to style the alert. It will use the `alert` class and the class name that is passed in. The class name will be `error` by default.

```js
// Show Alert
function showAlert(message, className = 'error') {
  const alertEl = document.createElement('div');
  alertEl.classList.add('alert', className);
  alertEl.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertEl);

  setTimeout(() => alertEl.remove(), 3000);
}
```
