# Audio Context & Nodes For Filtering & Effects

In the last lesson, we saw how to control audio using the web audio API. However, the API is more powerful than just being used to control. We can also add all kinds of effects and filters. I am not going to pretend I know about this stuff, as far as adding "biquad filters" and all that. I'm far from an audio engineer. But I will show you how you can use them.

So we are going to use the same audio file as before. We will create an audio context and then create a source node. We will then create a `biquad filter` and connect the source node to the filter. Then we will connect the filter to the destination. The destination is the speakers. We will also create an oscillator node and connect it to the destination. This will allow us to hear the audio file and the oscillator at the same time.

In our HTML, we have a new `filter` select and filter frequency slider as well as an `oscillator` select and an oscillator frequency slider as well as a stop button for the oscillator.

```html
<audio src="summer.mp3" id="audio"></audio>
<button id="play">Play</button>
<button id="pause">Pause</button>
<button id="stop">Stop</button>
<div id="current-time"></div>

<input id="volume" type="range" min="0" max="1" step="0.01" value="1" />

<h4>Filter</h4>
<!-- Filter Select -->
<select id="filter">
  <option value="none">None</option>
  <option value="lowpass">Lowpass</option>
  <option value="highpass">Highpass</option>
  <option value="bandpass">Bandpass</option>
  <option value="lowshelf">Lowshelf</option>
  <option value="highshelf">Highshelf</option>
  <option value="peaking">Peaking</option>
  <option value="notch">Notch</option>
  <option value="allpass">Allpass</option>
</select>

<label for="filter-frequency">Filter Frequency</label>
<input
  id="filter-frequency"
  type="range"
  min="0"
  max="1000"
  step="1"
  value="440"
/>

<h4>Oscillator</h4>
<select id="oscillator">
  <option value="none">None</option>

  <option value="sine">Sine</option>
  <option value="square">Square</option>
  <option value="sawtooth">Sawtooth</option>
  <option value="triangle">Triangle</option>
</select>

<label for="oscillator-frequency">Oscillator Frequency</label>
<input
  id="oscillator-frequency"
  type="range"
  min="0"
  max="1000"
  step="1"
  value="440"
/>

<button id="oscillator-stop">Stop Oscillator</button>
```

Let's bring in some additional elements:

```js
const filterEl = document.getElementById('filter');
const filterFrequency = document.getElementById('filter-frequency');
const oscillatorEl = document.getElementById('oscillator');
const oscillatorFrequency = document.getElementById('oscillator-frequency');
const oscillatorStop = document.getElementById('oscillator-stop');
```

## Add Context & nodes

In order to do stuff like this, we need to create an `audio context` and then create a `source node`. We don't want to do this in the global scope because Chrome will complain about auto play policies. So we will just create the context variable and then initialize it in the `play` function. We will do the same for the source node.

```js
let audioCtx, gainNode;

play.addEventListener('click', () => {
  // Create an AudioContext & connect the source to the gain node
  audioCtx = new AudioContext();
  const source = audioCtx.createMediaElementSource(audio);
  gainNode = audioCtx.createGain();
  source.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  audio.play();
});
```

Our player still works the same. We can play, pause, etc. We just created the audio context, then the source and we connected the source to the gain node. Then we connected the gain node to the destination. The destination, which are the speakers.

## Filter

Now we are going to make it so that we can select a filter. This is called a `biquad filter`. We will create the filter variable in the global scope so that the frequency event handler can access it.

```js
let filter;
filterEl.addEventListener('change', () => {
  filter = audioCtx.createBiquadFilter();
  filter.type = filterEl.value;
  gainNode.disconnect();
  gainNode.connect(filter);
  filter.connect(audioCtx.destination);
});
```

Let's also add the frequency event handler.

```js
filterFrequency.addEventListener('change', () => {
  filter.frequency.value = filterFrequency.value;
  gainNode.disconnect();
  gainNode.connect(filter);
  filter.connect(audioCtx.destination);
});
```

We created a `biquad filter` and then set the type to the value of the select. We then disconnect the gain node from the destination and connect it to the filter. Then we connect the filter to the destination. This will allow us to hear the audio file with the filter applied. We also created the frequency handler.

Let's try it out and play the audio file. We can select a filter and hear the difference. We can also change the frequency of the filter. We can do this by adding an event listener to the filter frequency slider.

## Oscillator

We can also add an oscillator. We will create the oscillator variable in the global scope so that the frequency event handler can access it. We also need to create a stop button handler.

```js
let oscillator;
oscillatorEl.addEventListener('change', () => {
  oscillator = audioCtx.createOscillator();
  oscillator.type = oscillatorEl.value;
  oscillator.frequency.value = 440; // 440Hz
  oscillator.connect(audioCtx.destination);
  oscillator.start();
});

oscillatorFrequency.addEventListener('change', () => {
  oscillator.frequency.value = oscillatorFrequency.value;
});

oscillatorStop.addEventListener('click', () => {
  oscillator.stop();
});
```

Now if we choose a type of oscillator, we can hear it. It's VERY annoying. We can also change the frequency of the oscillator. We can also stop the oscillator.

Again, I can't really tell you the point of an oscillator. Maybe some of you are really good with audio and can tell me. But this is how you can use it with the audio API.
