# Keycode Mini-project

In the last video, we learned how to get the key that was pressed using the `key`, `keyCode`, and `code` properties. In this mini-project, we will create a simple keyboard event listener that will display all 3 of these properties on the screen. I think you'll be surprised how easy this will be.

## The HTML

The HTML is really simple:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
  </head>
  <body>
    <div id="insert">
      <div class="key">
        Press any key to get the keyCode
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

We have a wrapper div with an id of `insert`. This is where we will display the information.

## The CSS

Here is some basic styling. We have a class of `key` that is styled like a card or a box. We will wrap each output in a `div` with the class of `key`.

```CSS
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #e1e1e1;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.key {
  border: 1px solid #999;
  background-color: #eee;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
  position: relative;
}

.key small {
  position: absolute;
  top: -24px;
  left: 0;
  text-align: center;
  width: 100%;
  color: #555;
  font-size: 14px;
}
```

## The JavaScript

```JavaScript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="key">
  ${e.key === ' ' ? 'Space' : e.key}
  <small>e.key</small>
</div>

<div class="key">
  ${e.keyCode}
  <small>e.keyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>event.code</small>
</div>
  `;
});
```

As you can see, it's very simple. We add an event listener to the window and insert some HTML into the `insert` div. The HTML includes 3 `div`s with the class of `key`. Each `div` has a `small` that displays the 3 properties.
