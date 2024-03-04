# `setInterval()` and `clearInterval()`

`setInterval()` is used to run a specific callback function and repeat it at a set interval. The number of miliseconds passed to the function is the amoount of time to wait between each function call. Let's look at a simple example

```js
const intervalID = setInterval(myCallback, 1000);

function myCallback() {
  console.log(a, Date.now());
}
```

This will log the timestamp every second.

We can also pass in parameters

```JavaScript
const intervalID = setInterval(myCallback, 1000, 'Hello');

function myCallback(a) {
  console.log(a, Date.now());
}
```

`clearInterval()`

To clear or stop the interval, we can use `clearInterval()` and pass in the interval ID

```JavaScript
clearInterval(intervalID);
```

Let's create a script to change the body background color every second. We will have buttons to start and stop it.

```JavaScript
let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeBackground, 1000);
  }
}

function changeColor() {
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

function stopChange() {
  clearInterval(intervalID);
}

document
  .getElementById('start')
  .addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

```


We could make it a random color by generating a hex value

```JavaScript
function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}
```