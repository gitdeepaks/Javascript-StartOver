# Speech Synthesis

`SpeechSynthesis` is a Web API that allows you to have your browser speak text. It is part of the [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html).

We are going to learn this by creating a small project that lets us type in a textbox and reads what we type out loud. We will also be able to change the voice. You can get the simple HTML and CSS from the sandbox files.

Let's start by creating a `synth` variable that will hold the `SpeechSynthesis` object.

```js
const synth = window.speechSynthesis;
```

We will add an event listener for the form submit and get the textarea value.

```js
function onSubmit(e) {
  e.preventDefault();

  const textInput = document.getElementById('text-input');
}

document.getElementById('form').addEventListener('submit', onSubmit);
```

We need to create a `SpeechSynthesisUtterance` object that will hold the text we want to speak. Then we can use the `synth.speak()` method to speak the text.

```js
function onSubmit(e) {
  e.preventDefault();

  const textInput = document.getElementById('text-input');

  const utterThis = new SpeechSynthesisUtterance(textInput.value);

  synth.speak(utterThis);
}
```

## Getting the voices

Now, let's create a function that will get the voices and populate the select element with them.

```js
const voiceSelect = document.getElementById('voice-select');
let voices;

function addVoicesToSelect() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} - ${voices[i].lang}`;

    if (voices[i].default) {
      option.textContent += ' - DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
```

We got the select element outside of the function because we will need it in the submit function as well. We also create a `voices` variable to hold the array of voices that we get from the `synth.getVoices()` method.

Then we loop through the voices and create an option element for each one. We set the `textContent` to the name and language of the voice. If the voice is the default one, we add `- DEFAULT` to the text. We also set the `data-lang` and `data-name` attributes to the language and name of the voice. Finally, we append the option to the select element.

We need to call the `addVoicesToSelect()` function once to populate the select element with the voices. We also need to call it again when the voices change. We can do this by adding an event listener for the `voiceschanged` event. We will put this at the bottom above the form event listener.

```js
addVoicesToSelect();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = addVoicesToSelect;
}
```

## Changing the voice

Edit the `onSubmit()` function to change the voice.

```js
function onSubmit(e) {
  e.preventDefault();

  const textInput = document.getElementById('text-input');

  const utterThis = new SpeechSynthesisUtterance(textInput.value);

  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis);
}
```

Here, we get the selected option from the select element. Then we loop through the voices and check if the name of the voice is the same as the selected option. If it is, we set the `utterThis.voice` to the voice.

Now, you should be able to type in the text box, select a voice and have it read out loud.
