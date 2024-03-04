# Animated Clock Project - Part 1

In this project, we will use the `canvas` api along with the `requestAnimationFrame` method to create an animated clock. This will be 2 parts. In this part, we will create the clock and animate it. In the next part, we will add a form to change the clocks colors and save the clock as an image.

## The HTML

The HTML is very simple. We just have a `canvas` element. In part 2, we will have a form to change the look of the clock, but for now, we just have the clock on the canvas.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="script.js" defer></script>

    <title>Animated Clock</title>
  </head>
  <body>
    <canvas id="canvas" width="500" height="500"></canvas>
  </body>
</html>

```

Let's start by creating our `clock()` function. This function will be called by the `requestAnimationFrame` method. For now, let's get the current time and create a new canvas context

```js
function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
}

clock();
```

For now, we are not using `requestAnimationFrame` because we just want to test our code without any animation. We will add the `requestAnimationFrame` method later.

## Setting Up the Canvas

Before we draw anything, we need to set some initial values for the canvas and where we will draw the clock. I want to draw in the center of the canvas. Let's add the following code:

```js
function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save(); // Save the default state
  ctx.clearRect(0, 0, 500, 500); // Clear the entire canvas
  ctx.translate(250, 250); // Move the origin to the center of the canvas
  ctx.rotate(-Math.PI / 2); // Rotate the canvas -90 degrees
  // Set some default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
}

clock();
```

Remember, this will run before every frame, so we need to save the default state of the canvas and restore it after we are done drawing. We do this with the `save()` and `restore()` methods. We will also use use these methods before and after we draw certain parts of the clock.

We also need to clear the canvas before we draw anything. We also need to move the origin to the center of the canvas and rotate the canvas -90 degrees. This will make it easier to draw the clock. We then set some default styles for the canvas.

## Draw clock face

Now, let's add the code to draw the clock face and border:

```js
function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save(); // Save the default state
  ctx.clearRect(0, 0, 500, 500); // Clear the entire canvas
  ctx.translate(250, 250); // Move the origin to the center of the canvas
  ctx.rotate(-Math.PI / 2); // Rotate the canvas -90 degrees

  // Set some default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw clock face
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#800000';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  ctx.restore(); // Restore the default state
}

clock();
```

We used the `save()` and `restore()` methods to save the default state of the canvas before we draw the clock border and restore it after we are done drawing the clock border. We also set the `lineWidth` to 14 and the `strokeStyle` to `#800000` before we draw the clock border. We created the circle using the `arc()` method. The `arc()` method takes 6 parameters: the x and y coordinates of the center of the circle, the radius of the circle, the starting angle, the ending angle, and a boolean value that determines if the circle is drawn clockwise or counter-clockwise. We set the starting angle to 0 and the ending angle to `Math.PI * 2` to draw a full circle.

## Draw hour lines

Now, we will draw the hour lines on the clock. I am just going to add this code rather than repeating all of the code again. Just be sure to add it right below the clock border `restore()` and above the last default state `restore()`:

```js
// Draw hour lines
ctx.save();
for (let i = 0; i < 12; i++) {
  ctx.beginPath();
  ctx.rotate(Math.PI / 6);
  ctx.moveTo(100, 0);
  ctx.lineTo(120, 0);
  ctx.stroke();
}
ctx.restore();
```

Here, we used a for loop to draw 12 lines. We used the `rotate()` method to rotate the canvas 30 degrees before drawing each line. We then used the `moveTo()` and `lineTo()` methods to draw the lines.

## Draw minute lines

```js
// Draw minute lines
ctx.save();
ctx.lineWidth = 4;
for (let i = 0; i < 60; i++) {
  // Do not draw on hour lines
  if (i % 5 !== 0) {
    ctx.beginPath();
    ctx.moveTo(117, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.rotate(Math.PI / 30);
}
ctx.restore();
```

We did the same thing here except we used a for loop to draw 60 lines. We used the `rotate()` method to rotate the canvas 6 degrees before drawing each line. We then used the `moveTo()` and `lineTo()` methods to draw the lines. We used the `stroke()` method to draw the lines. We also used an if statement to only draw the lines that are not on the hour marks. We used the `lineWidth` to 4 to make the minute marks thinner than the hour marks.

## Creating the hands

Now we have to create the clock hands. The placement on these are based on the current time. Let's first, get the hours, minutes, and seconds from the current time and log it.

```js
const hr = now.getHours() % 12;
const min = now.getMinutes();
const sec = now.getSeconds();
console.log(`${hr}:${min}:${sec}`);
```

## Set hand colors

Right now, the `strokeStyle` is set to `#000`. I want the hands to be `#800000` like the border. So we need to set that here before we draw the hands:

```js
// Color for hands
ctx.strokeStyle = '#800000';
```

## Draw hour hand

Now, let's draw the hour hand:

```js
// Write Hours
ctx.save();
ctx.rotate(
  (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
);
ctx.lineWidth = 14;
ctx.beginPath();
ctx.moveTo(-20, 0);
ctx.lineTo(80, 0);
ctx.stroke();
ctx.restore();
```

The hour hand will not move yet, because we aren't using `requestAnimationFrame`, but it should be in the correct place based on the time.

We used the `rotate()` method to rotate the canvas based on the current time. We used the `lineWidth` to 14 to make the hour hand thicker than the minute and second hands. We then used the `moveTo()` and `lineTo()` methods to draw the hour hand.

## Draw minute hand

```js
// Draw minute hand
ctx.save();
ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(-28, 0);
ctx.lineTo(112, 0);
ctx.stroke();
ctx.restore();
```

## Draw second hand

```js
// Draw second hand
ctx.save();
ctx.rotate((sec * Math.PI) / 30);
ctx.strokeStyle = '#FF7F50';
ctx.fillStyle = '#FF7F50';
ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(-30, 0);
ctx.lineTo(100, 0);
ctx.stroke();
ctx.beginPath();
ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.restore();
```

We also created the center circle of the clock here with the `arc()` method. We made it the same color as the second hand.

## Animating the clock

Now, we just need to add the `requestAnimationFrame` to animate the clock:

```js
function clock() {
  // ...
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
```

We now have a working clock!
