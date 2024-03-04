# `url` and `querystring` Modules

These are two different modules, but they are related. The `url` module is used to parse and manipulate URLs. The `querystring` module is used to parse and manipulate query strings.

## url Module

Let's start with the `url` module.

### `url.parse()`

This method takes a URL string and returns an object. The object has properties for each part of the URL. The following code shows how to use this method:

```js
const url = require('url');
```

```js
const myURL = url.parse(
  'https://www.example.com/listing?id=1000&premium=true'
);
console.log(myUrl);
```

```js
{
  host: 'example.com',
  port: null,
  hostname: 'example.com',
  hash: null,
  search: '?id=1000&premium=true',
  query: 'id=1000&premium=true',
  pathname: '/listing',
  path: '/listing?id=1000&premium=true',
  href: 'https://example.com/listing?id=1000&premium=true'
}
```

As you can see, we get a lot of information here. We can use this information to manipulate the URL.

### `url.format()`

This method takes an object and returns a URL string. It is basically the opposite of `url.parse()`. The following code shows how to use this method:

```js
const myURL2 = url.format({
  protocol: 'https',
  host: 'www.example.com',
  pathname: 'listing',
  query: {
    id: 1000,
    premium: true,
  },
});
console.log(myURL2); 
```

## querystring Module

The `querystring` module is used to parse and manipulate query strings. Query strings are the options that you see in a URL after the `?` character.

Let's create a variable with a query string with the year, month and day:

```js
const myQueryString = 'year=2023&month=january&day=20';
```

### `querystring.parse()`

Now, we can use the `querystring.parse()` method to parse the query string into an object:

```js
const q = querystring.parse(myQueryString);
console.log(q.month, q.day, q.year); // january 20 2017
```

We can get the query string from the google url in the previous example:

```js
const googleQuery = querystring.parse(myURL.search.slice(1));
console.log(googleQuery.q); // how to parse url nodejs
```

### `querystring.stringify()`

We can use the `querystring.stringify()` method to convert an object into a query string:

```js
const myQueryString2 = querystring.stringify({
  year: 2023,
  month: 'january',
  day: 20,
});

console.log(myQueryString2); // year=2023&month=january&day=20
```

So, both of these modules can be useful for certain tasks in certain applications.
