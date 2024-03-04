# Web Speech API - Speech Recognition

The Web Speech API is a set of JavaScript APIs that allow you to add speech recognition and speech synthesis to your web applications. In this lesson, we will look at speech recognition.

Speech recognition is the ability to convert spoken words into text. The Web Speech API provides a SpeechRecognition interface that lets you add speech recognition to your web applications.

## Creating a SpeechRecognition Object

To use the SpeechRecognition interface, you need to create a SpeechRecognition object. You can do this by calling the constructor of the SpeechRecognition interface. I am also going to set the language to English. Feel free to use something else.

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
```

## Setting the Speech Recognition Mode

The SpeechRecognition interface has a `continuous` property that lets you set the speech recognition mode. The value of the `continuous` property is a boolean. If the value is `true`, the speech recognition will continue until you stop it. If the value is `false`, the speech recognition will stop after a short pause. Let's set it to `true`.

```js
rec.continuous = true;
```

To start the speech recognition, we use the `start()` method.

```js
rec.start();
```

This will cause the browser to start to listen for speech. We can respond by using the `onresult` event.

```js
rec.onresult = function (e) {
  console.log(e.results);
};
```

The event passed in will include a `results` array, which will contain an object with a `transcript` property. The `transcript` property will contain the text that was recognized.

I want to say a color and have the background of the page change to that color.

```js
const script = e.results[i][0].transcript;
document.body.style.backgroundColor = transcript;
```

This will let us do it once, however, if we want this to be continuous, we have to loop through the array and set the background color for each result.

```js
for (let i = e.resultIndex; i < e.results.length; i++) {
  const script = e.results[i][0].transcript;
  document.body.style.backgroundColor = script;
}
```

Now, we can keep saying colors and it should respond.

Let's make it so if we don't say a color, we get an alert message. We'll create an array of accepted colors.

```js
const acceptedColors = [
  'red',
  'blue',
  'green',
  'yellow',
  'pink',
  'brown',
  'purple',
  'orange',
  'black',
  'white',
];
```

In the loop, let's make the transcript lowercase and trim any whitespace. Then we will check to see if the color is in the array. Here is the final code.

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
  console.log(e.results);

  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white',
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert('Say a color');
    }
  }
};

rec.start();
```
