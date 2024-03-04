# Callback Hell

So, we have seen a bunch of examples of callback functions. They come in handy when we want to make sure that some code is executed after another piece of code has finished executing. But what if we want to make sure that some code is executed after multiple pieces of code have finished executing? This can sometimes result in a lot of nested callbacks, which is called callback hell. There are something called `promises` that can help us with this. We will look at `promises` in the next video, but let's create a situation where we have to have multiple callback functions nested within each other.

I want to create a function called `getData()` that we can use to pass in an endpoint, whether a URL or a file path, and then it will make a request to that endpoint and return the data. We will use the `XMLHttpRequest` object to make the request. Right now, we will just log the data from the function. No callback is being passed in. Let's go ahead and do that.

```js
function getData(endpoint) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}
```

Now, you never know how long a request will take, so in addition to the request, I am adding a `setTimeout()` that will return the response within 1-3 seconds.

Now Let's create some .json files to fetch. These will just be local files, but it could just as well be a URL endpoint.

**File 1 - movies.json**

```json
[
  {
    "title": "Scarface",
    "release_year": "1983"
  },
  {
    "title": "The Godfather",
    "release_year": "1972"
  },
  {
    "title": "Goodfellas",
    "release_year": "1990"
  },
  {
    "title": "A Bronx Tale",
    "release_year": "1993"
  }
]
```

**File 2 - actors.json**

```json
[
  {
    "name": "Al Pacino",
    "age": "78"
  },
  {
    "name": "Robert De Niro",
    "age": "76"
  },
  {
    "name": "Joe Pesci",
    "age": "77"
  },
  {
    "name": "Chazz Palminteri",
    "age": "62"
  }
]
```

**File 3 - directors.json**

```json
[
  {
    "name": "Brian De Palma",
    "age": "78"
  },
  {
    "name": "Francis Ford Coppola",
    "age": "82"
  },
  {
    "name": "Martin Scorsese",
    "age": "76"
  },
  {
    "name": "Robert De Niro",
    "age": "76"
  }
]
```

Now, let's say that we want to get the data from all 3 files. Let's do that.

```js
getData('movies.json');
getData('actors.json');
getData('directors.json');
```

So, the way that we are doing it now, you'll notice that the order that we get the data is not the same order that we are requesting the data. This is because the `setTimeout()` is randomizing the order that the data is returned.

If we want to make sure that the data is returned in the order that we requested it. We can do that by passing in a callback function. Let's change the `getData()` function to accept and run a callback function.

```js
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}
```

Now, we can pass in a callback function when we call the `getData()` function.

```js
getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});
```

So you can see the issue here. We have nested 3 callback functions within each other. This is called callback hell. It is not very readable and it can get very messy very quickly. However it does work, it gets the data in the correct order.

In the next video, we will look at `promises`, which gives us a more elegant solution. We will first look at how they work and then in the video after that, we will address this code using promises.
