# Video Player Project

Now, we are going to create a custom video player using the video API.

## The HTML

The HTML is pretty simple. We have our `video` element and then some custom controls and a time display. We are also including font awesome because we are using it for the icons.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Custom Video Player</title>
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <video
      src="media/clouds.mov"
      poster="media/poster.png"
      id="video"
      class="screen"
    ></video>
    <div class="controls">
      <button class="btn" id="play">
        <i class="fa fa-play fa-2x"></i>
      </button>
      <button class="btn" id="stop">
        <i class="fa fa-stop fa-2x"></i>
      </button>
      <input
        type="range"
        id="progress"
        class="progress"
        min="0"
        max="100"
        step="0.1"
        value="0"
      />
      <span class="timestamp" id="timestamp">00:00</span>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

## The CSS

The CSS is quite long, mostly because we used a custom slider. You don't really need to pay much attention to this part as this is not a CSS course.

```css
@import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Questrial', sans-serif;
  background-color: steelblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  margin: 30px 0;
}

h1 {
  color: #fff;
}

.screen {
  cursor: pointer;
  width: 60%;
  background-color: #000 !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.controls {
  background: #333;
  color: #fff;
  width: 60%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.controls .btn {
  border: 0;
  background: transparent;
  cursor: pointer;
}

.controls .fa-play {
  color: #28a745;
}

.controls .fa-stop {
  color: #dc3545;
}

.controls .fa-pause {
  color: #fff;
}

.controls .timestamp {
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
}

.btn:focus {
  outline: 0;
}

input[type='range'] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type='range']:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type='range']::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/* Special styling for WebKit/Blink */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}

/* All the same stuff for Firefox */
input[type='range']::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type='range']::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type='range']:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}

input[type='range']::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type='range']::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type='range']:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type='range']::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type='range']:focus::-ms-fill-upper {
  background: #367ebd;
}

@media (max-width: 800px) {
  .screen,
  .controls {
    width: 90%;
  }
}
```

## The JavaScript

Let's start by bringing in what we need from the DOM:

```js
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
```

## Play/pause video

Let's create a function to toggle the video between playing and pausing and add the event listeners. I want it on the play button as well as the video itself.

```js
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

video.addEventListener('click', playPause);
play.addEventListener('click', playPause);
```

## Update icon

Now let's update the icon. If it is playing, the icon should show a play icon, if it is paused, it should show a pause icon.

```js
function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
```

## Stop video

Let's create the stop function and event.

```js
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

stop.addEventListener('click', stopVideo);
```

## Progress bar

Let's make the progress bar function. We can use the `timeupdate` event to do so.

```js
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

video.addEventListener('timeupdate', updateProgress);
```

## Set progress bar

We also want to be able to click anywhere on the bar and have it take us to that point in the video.

```js
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

progress.addEventListener('change', setVideoProgress);
```

That's it! We now have a custom video player using the video API.
