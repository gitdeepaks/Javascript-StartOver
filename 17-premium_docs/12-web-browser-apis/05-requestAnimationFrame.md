# requestAnimationFrame

The `requestAnimationFrame()` method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.

Let's go through this very slowly so that I can explain everything in an understandable way.

We are going to create a function called `step` to be called before the next repaint. For now, we will just log 'hello' to the console.

```js
function step() {
  console.log('Hello');
}
```

Now, I am going to call the `requestAnimationFrame()` method, passing in the `step` function as an argument. This will tell the browser to call the `step` function before the next repaint.

```js
requestAnimationFrame(step);
```

No big deal, we just see 'Hello' logged to the console once. That was just a single call to the `requestAnimationFrame()` method. Let's make it a little more interesting. Let's call the `requestAnimationFrame()` method inside the `step` function. This will tell the browser to call the `step` function before the next repaint, and then call the `step` function again before the next repaint, again and again, creating a loop.

```js
function step() {
  console.log('Hello');
  requestAnimationFrame(step);
}

requestAnimationFrame(step);
```

Now, you're seeing 'Hello' logged to the console over and over again, in a never-ending loop.

We can also pass in a timestamp to the `step` function. This is the number of milliseconds since the page was loaded. We can use this to calculate the time that has passed since the last repaint. Let's log this to the console.

```js
function step(timestamp) {
  console.log(timestamp);
  requestAnimationFrame(step);
}
```

Now, you're seeing a number logged to the console over and over again, in a never-ending loop. This number is the number of milliseconds since the page was loaded. We can use this to calculate the time that has passed since the last repaint.

```js
let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;
  console.log(elapsed);

  requestAnimationFrame(step);
}
```

Here, we created some variables and we are using the `start` variable to store the timestamp of the first repaint. We are then using the `elapsed` variable to store the number of milliseconds that have passed since the first repaint. We are then logging this to the console.

Let's make the animation stop after 2 seconds. We can do this by using the `done` variable. We are going to set the `done` variable to `true` after 2 seconds have passed. We are then going to check the `done` variable inside the `step` function. If the `done` variable is `true`, we are going to return from the function. This will stop the animation.

```js
function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  if (elapsed > 2000) {
    done = true;
  }
  if (done) {
    return;
  }
  requestAnimationFrame(step);
}
```

Now let's actually have something happen. Let's move the soccer ball image. Or, I'm sorry, the "football", image for my non-American friends. We will do this by changing the transform property of the image. I am also going to change the animation to 5 seconds.

```js
function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  if (elapsed > 5000) {
    done = true;
  }
  if (done) {
    return;
  }
  image.style.transform = `translateX(${elapsed / 20}px)`;
  requestAnimationFrame(step);
}
```

Let's rotate the ball as well. Just add `rotate` to the transform property.

```js
image.style.transform = `translateX(${elapsed / 20}px) rotate(${
  elapsed / 20
}deg)`;
```

Now that you know how the `canvas` API works as well as the `requestAnimationFrame()` method, in the next lesson, we will create an animated clock project.
