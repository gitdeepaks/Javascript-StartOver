# Mouse Events

You now know how to listen for an event, but we have only looked at the `click` event. There are many more. Everything from mouse events to events that are part of APIs like the web animation API or websockets. In this video, I want to specifically look at mouse events.

| Event       | Description                     |
| ----------- | ------------------------------- |
| click       | Click left mouse button         |
| dblclick    | Double click left mouse button  |
| contextmenu | Click right mouse button        |
| mousedown   | Click down left mouse button    |
| mouseup     | Release left mouse button       |
| wheel       | Scroll Wheel button             |
| mouseover   | Hover over element              |
| mouseout    | Leave hovering element          |
| dragstart   | Click and start to drag element |
| drag        | Drag element around screen      |
| dragend     | Stop dragging                   |

We can test these events with the following code:

```js
const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => console.log('double click event');
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

// Button
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onWheel);
// Hover
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
// Drag
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
```
