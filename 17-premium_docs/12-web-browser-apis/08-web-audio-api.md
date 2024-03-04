# Web Audio API

The Audio API is a powerful tool for creating audio in the browser. It is a low-level API that allows you to create audio nodes and connect them together to create a sound. The nodes can be used to create effects, filters, and more. The API is also used to play audio files.

## `<audio>` Element

The `<audio>` element is used to play audio files. It is a simple element, but you can interact with it using the JavaScript API. The element has a `src` attribute that is used to set the source of the audio file. Of course, you can change this within the JavaScript to play different audio files. I will show you how to do this in the next lesson where we build an audio player. The `<audio>` element also has a `controls` attribute that will show the default browser controls. Let's embed a simple audio file in our HTML.

`summer.mp3` is included in the resources for this lesson. You can also use a remote link to an audio file.

```html
<audio src="summer.mp3" id="audio" controls></audio>
```

Since, I used the `controls` attribute, I can control the audio, however, usually we will create our own interface and control everything using the JavaScript API. Let's look at the JavaScript API.

## JavaScript API

Here are some of the common methods and properties of the audio element.

- `play()`
- `pause()`
- `currentTime`
- `duration`
- `volume`

Let's remove the `controls` attribute and create our own buttons as well as a `current-time` div and a volume slider. This will be really ugly for now, but in another lesson, we will create a really cool looking audio player.

```html
<audio src="summer.mp3" id="audio"></audio>

<button id="play">Play</button>
<button id="pause">Pause</button>
<button id="stop">Stop</button>
<div id="current-time"></div>
<input id="volume" type="range" min="0" max="1" step="0.01" value="1" />
```

In the JavaScript, let's bring all of the elements in

```js
const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');
```

## play() & pause()

Then we can create events for the play and pause buttons and call the `play()` and `pause()` methods.

```js
play.addEventListener('click', () => {
  audio.play();
});

pause.addEventListener('click', () => {
  audio.pause();
});
```

## Stopping Audio

We use `pause()` because there is no `stop()` method. We can use `pause()` and set the `currentTime` to `0` to stop the audio.

```js
const stop = document.getElementById('stop');

stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});
```

Now, the track is reset to the beginning.

## timeUpdate Event

The `timeupdate` event is fired when the `currentTime` is updated. In our project we will create a progress bar, but for now, let's just view the `currentTime`

```js
audio.addEventListener('timeupdate', () => {
  // console.log(audio.currentTime);
  currentTime.innerHTML = audio.currentTime;
});
```

## Volume

We can change the volume, by adding a listener on to the slider

```js
volume.addEventListener('change', () => {
  audio.volume = volume.value;
});
```

## Adding filters & effects

We can create audio interfaces, etc just by bringing in the audio element like we did and then using the API methods, however if you wanted to add filters, effects, etc, you would need to create an audio context and audio nodes. We will cover this in the next lesson.
