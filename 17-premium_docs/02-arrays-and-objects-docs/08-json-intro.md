# An Intro to JSON

**JSON** is something that you will be working with a lot as a JavaScript developer. **JSON** stands for **JavaScript Object Notation** and is a lightweight data-interchange format. It is essentially a way of storing data in a simple, human-readable format.

In web development, especially in JavaScript, we work with APIs that send and receive data to and from a server. Several years ago, XML (Extensible Markup Language) was the standard for sending data, but in more recent years, JSON has become the standard.

An example of an API that you can make a request to right now and see the JSON response would be the Github API. In your browser, go to the following URL:

https://api.github.com/users/bradtraversy

You will see the result is in JSON format.

The reason I want to talk about JSON right now is because we are talking about JavaScript object literals and the syntax that JSON uses is extremely similar. JSON uses curly braces of key/value pairs. Let's look at an example of a JSON object:

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

The main difference here is that the keys have double quotes around them. These are required and they must be double quotes. As far as the values, strings must be wrapped in double quotes. Numbers and booleans do not.

We have methods available to turn JavaScript objects into JSON strings and vice versa.

```js
const obj = {
  name: 'John',
  age: 30,
  city: 'New York',
};

// Turn object into JSON string
const str = JSON.stringify(obj);
console.log(str); // {"name":"John","age":30,"city":"New York"}

// Turn JSON string into object
const obj2 = JSON.parse(str);
console.log(obj2); // {name: "John", age: 30, city: "New York"}
```

Aside from `stringify()` and `parse()`, there isn't really anything else to learn about the JSON object. You will use these two methods a lot though, whether you are on the front-end or back-end.

We can not access properties from a JSON string.

```js
console.log(str.name); // undefined
```

If we try and get the index of a JSON string, we will get the character, because it is treated as a string.

```js
console.log(str[0]); // "{"
```

### JSON Arrays

We have JSON objects like the one above, but JSON can also have arrays. We can also set arrays as a property value.

```json
[
  {
    "name": "John",
    "age": 30,
    "city": "New York",
    "hobbies": ["basketball", "cooking"]
  },
  {
    "name": "Jane",
    "age": 20,
    "city": "LA",
    "hobbies": ["movies", "sports"]
  },
  {
    "name": "Jack",
    "age": 25,
    "city": "Paris",
    "hobbies": ["music", "painting"]
  }
]
```

We can parse it into a JavaScript object with JSON.parse(). Then we can access the properties.

```js
const arr = JSON.parse(str);
console.log(arr[0].name); // John
```
