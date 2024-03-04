# Animated Clock Project - Part 2

In the last lesson, we used `canvas` to draw an animated clock. In this video, we will add a form with some CSS to change the clock colors and save the clock as an image. This is a good opportunity for you to try the color changing on your own. It is all stuff that we have worked with. You can get the value of the color inputs in the JS and simply add them as the `strokeStyle` and `fillStyle` where needed.

## Creating the form

Here is the HTML for the form. This is actually where we want to sent the default colors. The clock will directly correspond to the colors in the form.

```html
<div class="card">
  <h3>Clock Style</h3>
  <form>
    <div class="form-input">
      <label for="face-color">Face Color</label>
      <input type="color" value="#f4f4f4" id="face-color" />
    </div>
    <div class="form-input">
      <label for="border-color">Border Color</label>
      <input type="color" value="#800000" id="border-color" />
    </div>
    <div class="form-input">
      <label for="line-color">Number Lines Color</label>
      <input type="color" value="#000000" id="line-color" />
    </div>
    <div class="form-input">
      <label for="large-hand-color">Large Hands Color</label>
      <input type="color" value="#800000" id="large-hand-color" />
    </div>
    <div class="form-input">
      <label for="second-hand-color">second-hand Hand Color</label>
      <input type="color" value="#FF7F50" id="second-hand-color" />
    </div>
    <div class="form-input">
      <button id="save-btn" type="submit">Save As Image</button>
    </div>
  </form>
</div>
<canvas id="canvas" width="500" height="500"></canvas>
```

We have a little but of CSS as well...

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}

button {
  background: #333;
  color: #fff;
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.card {
  background: #f4f4f4;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 7px 20px;
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.form-input {
  margin-bottom: 20px;
}

label {
  margin-right: 10px;
  font-weight: bold;
}
```

Now, in the JS, we need to get the values of the inputs. We can set variables to either the elements themselves or the values of the elements. I like to set them to the element and then just add `.value()` to get the value.

```js
const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const lineColor = document.getElementById('line-color');
const largeHandColor = document.getElementById('large-hand-color');
const secondHandColor = document.getElementById('second-hand-color');
```

## Face & Border Color

For the face color, we are using the default `fillStyle`, So we need to add a `fillStyle` to the face code between the `save()` and `restore()`. We will set the `fillStyle` to `faceColor.value`. The `strokeStyle` is the border, so we will set that to `borderColor.value`.

```js
// Draw clock face/border
ctx.save();
ctx.beginPath();
ctx.lineWidth = 14;
ctx.fillStyle = faceColor.value; // Add this
ctx.strokeStyle = borderColor.value; // Add this
ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();
ctx.restore();
```

Now if you change those color inputs, it should reflect on the clock.

## Number Lines Color

For the number lines, we need to add a `strokeStyle` right before the loop for the hour and minute lines. You could also put it inside the loop, but I like to keep it outside. We will set the `strokeStyle` to `lineColor.value`.

```js
// Draw hour lines
ctx.save();
ctx.strokeStyle = lineColor.value; // Add this
for (let i = 0; i < 12; i++) {
  ctx.beginPath();
  ctx.rotate(Math.PI / 6);
  ctx.moveTo(100, 0);
  ctx.lineTo(120, 0);
  ctx.stroke();
}
ctx.restore();

// Draw minute lines
ctx.save();
ctx.lineWidth = 4;
ctx.strokeStyle = lineColor.value; // Add this
for (let i = 0; i < 60; i++) {
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

## Large Hand Color

```js
// Draw hour hand
ctx.save();
ctx.rotate(
  (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
);
ctx.strokeStyle = largeHandColor.value; // Add this
ctx.lineWidth = 14;
ctx.beginPath();
ctx.moveTo(-20, 0);
ctx.lineTo(80, 0);
ctx.stroke();
ctx.restore();

// Draw minute hand
ctx.save();
ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
ctx.strokeStyle = largeHandColor.value; // Add this
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(-28, 0);
ctx.lineTo(112, 0);
ctx.stroke();
ctx.restore();
```

## Second Hand Color

We will add the value to the `strokeStyle` and `fillStyle` for the second hand. The `fillStyle` pertains to the clock center dot.

```js
// Draw second hand
ctx.save();
ctx.rotate((sec * Math.PI) / 30);
ctx.strokeStyle = secondHandColor.value; // Add this
ctx.fillStyle = secondHandColor.value; // Add this
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

## Save As Image

To save a canvas as an image, we can use the `toDataURL()` method. This will return a base64 encoded string. We can then essentially create a link and click it programmatically. We will do this in an event listener for the save button.

```js
document.getElementById('save-btn').addEventListener('click', () => {
  const canvas = document.getElementById('canvas');
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
});
```

Now, you can change the clock to any style that you want and download it as an image.
