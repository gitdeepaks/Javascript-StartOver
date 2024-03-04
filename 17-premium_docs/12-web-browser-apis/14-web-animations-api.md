# Web Animations API

The Web Animations API lets us construct animations and control their playback with JavaScript. A lot of times we use a combination of CSS and JavaScript, but this API allows us to do all of the animation work in JavaScript.

We are going to build a little project for this section.

## The HTML

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Web Animations API</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <div class="wrapper">
      <div class="controls">
        <button id="play"><i class="fa-solid fa-play"></i></button>
        <button id="pause"><i class="fa-solid fa-pause"></i></button>
        <button id="reverse">
          <i class="fa-solid fa-clock-rotate-left"></i>
        </button>
        <button id="speed-up"><i class="fa-solid fa-plus"></i></button>
        <button id="slow-down">Slow Down</button>
      </div>
      <div id="ball">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="194"
          height="194"
          version="1.1"
        >
          <circle fill="#000000" cx="97" cy="97" r="97" />
          <path
            fill="#ffffff"
            d="m 94,9.2 a 88,88 0 0 0 -55,21.8 l 27,0 28,-14.4 0,-7.4 z m 6,0 0,7.4 28,14.4 27,0 a 88,88 0 0 0 -55,-21.8 z m -67.2,27.8 a 88,88 0 0 0 -20,34.2 l 16,27.6 23,-3.6 21,-36.2 -8.4,-22 -31.6,0 z m 96.8,0 -8.4,22 21,36.2 23,3.6 15.8,-27.4 a 88,88 0 0 0 -19.8,-34.4 l -31.6,0 z m -50,26 -20.2,35.2 17.8,30.8 39.6,0 17.8,-30.8 -20.2,-35.2 -34.8,0 z m -68.8,16.6 a 88,88 0 0 0 -1.8,17.4 88,88 0 0 0 10.4,41.4 l 7.4,-4.4 -1.4,-29 -14.6,-25.4 z m 172.4,0.2 -14.6,25.2 -1.4,29 7.4,4.4 a 88,88 0 0 0 10.4,-41.4 88,88 0 0 0 -1.8,-17.2 z m -106,57.2 -15.4,19 L 77.2,182.6 a 88,88 0 0 0 19.8,2.4 88,88 0 0 0 19.8,-2.4 l 15.4,-26.6 -15.4,-19 -39.6,0 z m -47.8,2.6 -7,4 A 88,88 0 0 0 68.8,180.4 l -14,-24.6 -25.4,-16.2 z m 135.2,0 -25.4,16.2 -14,24.4 a 88,88 0 0 0 46.4,-36.6 l -7,-4 z"
          />
        </svg>
      </div>
    </div>
  </body>
</html>

```

Here we have some buttons for controlling the animation. I will get to those later. First, we want to focus on making the ball roll. We are using an `svg`, but you could use anything.

## The CSS

Before we do anything with JavaScript, I want to show you how we can do the same animation using just CSS.

```CSS
body {
  background: #000;
  color: #fff;
}

html,
body {
  height: 100%;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#ball {
  /* animation: roll infinite 3s linear; */
  color: white;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform: rotate(0) translate3D(-50%, -50%, 0);
  backface-visibility: hidden;
  will-change: transform, color;
}

path {
  fill: currentColor;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 5px;
  background: #333;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: blue;
}

/* The Animation */
@keyframes roll {
  0% {
    transform: rotate(0) translate3D(-50%, -50%, 0);
    color: white;
  }
  30% {
    color: blue;
  }
  100% {
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
    color: white;
  }
}

```

In the CSS keyframe we are moving the ball by starting at one position and then rotating it 360 degrees. We are also changing the color of the ball at 30% of the animation.

Now, comment out the CSS, because we are going to do the same thing using JavaScript.

## The JavaScript

Let's start out by bringing in everything that we need.

```JavaScript
  const ball = document.getElementById('ball');
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const reverse = document.getElementById('reverse');
  const speedUp = document.getElementById('speed-up');
  const slowDown = document.getElementById('slow-down');
```

Now, we will create a keyframe object. We do this by creating an array of multiple objects. Each object represents a key from the original CSS.

```js
const rollAnimation = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: 'white' },
  { color: 'blue', offset: 0.3 },
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: 'white' },
];
```

We can also set the timing in an options object.

```js
const rollOptions = {
  duration: 3000,
  iterations: Infinity,
};
```

Now, let's make the element animate.

```js
const roll = ball.animate(rollAnimation, rollOptions);
```

Now, we get the same animation as we did with CSS. We can also control the animation with JavaScript. Let's add the play and pause button functionality.

```js
play.addEventListener('click', () => roll.play());
pause.addEventListener('click', () => roll.pause());
```

We can also have it go in reverse.

```js
reverse.addEventListener('click', () => roll.reverse());
```

If we want to go from reverse to clicking play again and having it move forward, then we have to add the `playbackRate` to `play`.

```js
play.addEventListener('click', () => {
  roll.playbackRate = 1;
  roll.play();
});
```

Now, it should work.

We can also speed up and slow down the animation using the `playbackRate`.

```js
speedUp.addEventListener(
  'click',
  () => (roll.playbackRate = roll.playbackRate * 2)
);

slowDown.addEventListener(
  'click',
  () => (roll.playbackRate = roll.playbackRate * 0.5)
);
```

This is a very simple animation, but you can imagine how powerful it can be when you get into some really complex animations.
