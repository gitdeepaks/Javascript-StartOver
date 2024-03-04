# Search Pagination

We are now able to search for movies and TV shows, but we only display 20 at a time. We need to add pagination to the search results.

## Add Dynamic Heading

One thing I want to do before that is show a heading that says "X of Y results found for MOVIE NAME". Let's start by adding `totalResults` to the `global` object:

```js
const global = {
  // ...
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0, // Add this
  },
  // ...
};
```

In the `search()` function, we will add `totalResults` to the global object:

```js
// ...
const { results, total_pages, page, total_results } = await searchAPIData();
global.search.totalResults = total_results;
// ...
```

Now at the bottom of `displaySearchResults()`, right above where we add the results to the DOM, add the following code:

```js
document.querySelector('#search-results-heading').innerHTML = `
              <h2>${results.length} of ${global.search.totalResults} Results for ${global.search.term}</h2>
    `;
```

## Add Pagination

The pagination HTML is in the `search.html` file. We need to cut the following code:

```html
<div class="pagination">
  <button class="btn btn-primary" id="prev">Prev</button>
  <button class="btn btn-primary" id="next">Next</button>
  <div class="page-counter">Page 1 of 5</div>
</div>
```

Keep the div with the `id` of pagination. The class and everything within it can be cut because we will insert it with JavaScript and make it dynamic.

## `displayPagination()` Function

This function will display the HTML and include a `prev` and `next` event listener. When the user clicks on the `prev` or `next` button, it will change the page number and call the `searchAPIData()` function again with the page number needed. Then we will call displaySearchResults() with the new results.

```js
// Create & Display Pagination For Search
function displayPagination() {
  const div = document.createElement('div');
  div.classList.add('pagination');
  div.innerHTML = `
  <button class="btn btn-primary" id="prev">Prev</button>
  <button class="btn btn-primary" id="next">Next</button>
  <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
  `;

  document.querySelector('#pagination').appendChild(div);

  // Disable prev button if on first page
  if (global.search.page === 1) {
    document.querySelector('#prev').disabled = true;
  }

  // Disable next button if on last page
  if (global.search.page === global.search.totalPages) {
    document.querySelector('#next').disabled = true;
  }

  // Next page
  document.querySelector('#next').addEventListener('click', async () => {
    global.search.page++;
    const { results, total_pages } = await searchAPIData();
    displaySearchResults(results);
  });

  // Prev page
  document.querySelector('#prev').addEventListener('click', async () => {
    global.search.page--;
    const { results, total_pages } = await searchAPIData();
    displaySearchResults(results);
  });
}
```

We do need to update the `searchAPIData()` function to include the page number:

```js
const response = await fetch(
  `${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page}`
);
```

That's it! Our application is complete! We can now search for movies and TV shows, and we can paginate through the results.
