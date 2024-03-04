# Drum Machine Project

In this project, we will create a drum machine that plays sounds when the user presses specific keys. We will use the `Audio` object to play the sounds.

## The HTML

Let's start with the HTML.

```html
<header>
  <h1>Drum Machine</h1>
</header>
<div class="keys">
  <div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
  </div>
  <div data-key="83" class="key">
    <kbd>S</kbd>
    <span class="sound">hihat</span>
  </div>
  <div data-key="68" class="key">
    <kbd>D</kbd>
    <span class="sound">kick</span>
  </div>
  <div data-key="70" class="key">
    <kbd>F</kbd>
    <span class="sound">openhat</span>
  </div>
  <div data-key="71" class="key">
    <kbd>G</kbd>
    <span class="sound">boom</span>
  </div>
  <div data-key="72" class="key">
    <kbd>H</kbd>
    <span class="sound">ride</span>
  </div>
  <div data-key="74" class="key">
    <kbd>J</kbd>
    <span class="sound">snare</span>
  </div>
  <div data-key="75" class="key">
    <kbd>K</kbd>
    <span class="sound">tom</span>
  </div>
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>
<audio data-key="83" src="sounds/hihat.wav"></audio>
<audio data-key="68" src="sounds/kick.wav"></audio>
<audio data-key="70" src="sounds/openhat.wav"></audio>
<audio data-key="71" src="sounds/boom.wav"></audio>
<audio data-key="72" src="sounds/ride.wav"></audio>
<audio data-key="74" src="sounds/snare.wav"></audio>
<audio data-key="75" src="sounds/tom.wav"></audio>
```

We are creating a `div` for each key. We are using the `data-key` attribute to store the key code for each key. We went over key codes in past lessons. We are also adding a `span` element to display the name of the sound. At the bottom, we are adding an `audio` element for each sound. We are using the `data-key` attribute to store the key code for each sound.

## The CSS

Just some simple CSS to style the page.

```css
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700');

html,
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background: #f4f4f4;
}

h1 {
  margin: 0;
  padding: 0;
  text-align: center;
}

.keys {
  font-size: 40px;
  width: 500px;
  margin: 100px auto;
}

.keys kbd {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #eee;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: 300;
}

.keys .playing kbd {
  transform: scale(1.2);
  transition: all 0.07s;
}
```

## The JavaScript

Surprisingly, this will only take about 13 or 14 lines of code.

```js
window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');

  setTimeout(() => {
    key.classList.remove('playing');
  }, 100);
}
```

We are adding an event listener to the `window` object. We are listening for the `keydown` event. When the event fires, we are calling the `playSound` function. The `playSound` function takes an event object as a parameter. We are using the `keyCode` property of the event object to get the key code of the key that was pressed. We are using the `querySelector` method to get the `audio` element and the `key` element that have the same `data-key` attribute as the key code of the key that was pressed. We are using the `play` method to play the sound. We are using the `currentTime` property to rewind the sound to the start. We are using the `classList` property to add the `playing` class to the `key` element. We are using the `setTimeout` method to remove the `playing` class from the `key` element after 100 milliseconds.

Now, when you press a key, the sound will play and the key will animate. Have fun!
