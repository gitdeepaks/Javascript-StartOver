# Video API

Just like the audio API, the video API is a set of methods and properties that allow you to control the video element. In fact, you'll see that they both use many of the same methods.

First, let's use the HTML5 video element to play a video. I have included a `clouds.mov` video in the sandbox files, but you can use any video that you want.

```html
<vide controls width="700">
  <source src="media/clouds.mov" />
</vide
```

There are some attributes that you can use for the `video` element:

- `controls` - This will show the default controls for the video
- `autoplay` - This will automatically play the video when the page loads
- `muted` - This will mute the video (In Chrome, the video must be muted for autoplay to work)
- `loop` - This will loop the video
- `poster` - This will show an image before the video starts playing
- `width` - This will set the width of the video
- `height` - This will set the height of the video

Let's give the video a poster. We will use the `poster.png` image in the sandbox files.

```html
<video controls width="700" poster="media/poster.png">
  <source src="media/clouds.mov" />
</video>
```

Let's also make it loop and autoplay. It must also be muted for autoplay.

```html
<video controls autoplay loop width="700" poster="media/poster.png" muted>
  <source src="media/clouds.mov" />
</video>
```

## JavaScript API

The JavaScript API for the video element is very similar to the audio element. Let's add a play, pause, stop button and a current-time div to display the time. In the next video, we will create a nice looking video player, but for now, I just want you to learn the basic methods.

Let's add the buttons and also remove all of the attributes except for `width` and `poster`. We will use JavaScript to control the video.

```html
<video width="700">
  <source src="media/clouds.mov" width="700" poster="media/poster.png" />
</video>

<div>
  <button id="play">Play</button>
  <button id="pause">Pause</button>
  <button id="stop">Stop</button>
  <div id="current-time"></div>
</div>
```

In the JavaScript, let's bring in what we need.

```js
const video = document.querySelector('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
```

We will add an event listener on the play and pause button and then call the `play()` and `pause()` methods.

```js
play.addEventListener('click', () => {
  video.play();
});

pause.addEventListener('click', () => {
  video.pause();
});
```

Just like with the audio API, there is no `stop()` method, so we will pause and reset the time.

```js
stop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});
```

To show the current time, we will listen for the `timeupdate` event and then display the current time.

```js
video.addEventListener('timeupdate', () => {
  currentTime.textContent = video.currentTime;
});
```

In the next video, we will get a little more into this and create a custom video player.
