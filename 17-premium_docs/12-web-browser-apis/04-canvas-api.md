# Canvas API

The Canvas API is used to draw graphics, on the fly, via JavaScript. It is part of the HTML5 specification and is supported by all modern browsers.

## Why use the Canvas API?

The Canvas API is useful for a variety of applications. It's used a lot for gaming and animation, data visualization, photo manipulation and more.

## How does it work?

The Canvas API is based on a 2D rendering context. This context is created by the `<canvas>` element. The `<canvas>` element is a container for graphics, similar to an `<img>` element. The `<canvas>` element has a `width` and `height` attribute, just like an `<img>` element. The `width` and `height` attributes define the size of the canvas, in pixels.

Let's create a simple example. We need to add the `<canvas>` element to our HTML page. You can add a width and a height. Also, add an ID, so that we can access it from our JavaScript. I am also going to put a border on the canvas, so that we can see it.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="script.js" defer></script>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
    <title>Canvas</title>
  </head>
  <body>
    <h1>Canvas</h1>

    <canvas id="my-canvas" width="600" height="600"></canvas>
  </body>
</html>
```

## Creating the rendering context

Now, we need to create the rendering context. We can do this in our JavaScript file. We need to get a reference to the `<canvas>` element, and then call the `getContext()` method. The `getContext()` method takes a string argument, which is the type of context we want. In this case, we want a 2D context, so we pass in the string `"2d"`. This will return a 2D rendering context object, which we can store in a variable.

```js
const canvas = document.getElementById('my-canvas');
// Create a 2D context
const ctx = canvas.getContext('2d');
```

## Drawing on the canvas

Let's start by drawing a rectangle on the canvas:

```js
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

Here we used the context object to set the fill style to green. We then used the `fillRect()` method to draw a rectangle. The `fillRect()` method takes four arguments: the x and y coordinates of the top-left corner, and the width and height of the rectangle.

## Drawing a circle

Let's draw a circle on the canvas. We can do this by using the `arc()` method. The `arc()` method takes five arguments: the x and y coordinates of the center of the circle, the radius, the start angle and the end angle. The start angle and end angle are measured in radians. We can use the `Math.PI` constant to convert degrees to radians. For example, `Math.PI / 2` is 90 degrees, and `Math.PI` is 180 degrees.

```js
ctx.beginPath();
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();
```

## Drawing text

We can draw text on the canvas using the `fillText()` method. The `fillText()` method takes three arguments: the text to draw, the x and y coordinates of the top-left corner of the text.

```js
ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('Hello World', 10, 300);
ctx.strokeText('Hello World', 10, 300);
```

## Drawing lines

We can draw lines from one point to another using the `moveTo()` and `lineTo()` methods. The `moveTo()` method takes two arguments: the x and y coordinates of the starting point. The `lineTo()` method takes two arguments: the x and y coordinates of the ending point.

```js
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.lineTo(10, 300);
ctx.lineTo(300, 10);
ctx.strokeStyle = 'orange';
ctx.stroke();
```

`stroke()` is used to draw the line.

## Drawing an image

We can draw an image on the canvas using the `drawImage()` method. The `drawImage()` method takes five arguments: the image to draw, the x and y coordinates of the top-left corner of the image, and the width and height of the image. The image can be an `<img>` element, a `<video>` element or a `<canvas>` element.

  Let's add an image on the page. I have a `ball.png` image in the sandbox files.

  ```html
<img src="ball.png" width="100" height="100" />
  ```

```js
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => {
  ctx.drawImage(image, 270, 270, 50, 50);
});
```

We brought in the image, and set the display to `none`, so that it is not visible on the page. We then added an event listener to the image, so that we can draw it on the canvas once it has loaded. We used the `drawImage()` method to draw the image on the canvas.

## Draw quadratic curves

We can draw quadratic curves using the `quadraticCurveTo()` method. This method takes four arguments: the x and y coordinates of the control point, and the x and y coordinates of the end point.

```js
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.quadraticCurveTo(300, 300, 10, 300); // (cp1x, cp1y, x, y)
ctx.strokeStyle = 'purple';
ctx.stroke();
```

There are other types of curves that we can draw, such as bezier curves and arcs. You can find more information about these in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes).

This is all very basic and may leave you saying, what is this actually good for? It's actually very powerful, especially when you introduce animation, which we will do in the next lesson.
