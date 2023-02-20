const logo = document.querySelector('img');


const onClick = console.log('click event');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }


};

const onRightclick = () => {
  console.log('you clicked mouse down')
}
const onMouseOver = () => {
  console.log('you clicked mouse over')
}
const onMouseOut = () => {
  console.log('you clicked mouse out')
}
const onDragstart = () => {
  console.log('you do dragstart')
}
// Event Listners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightclick);
logo.addEventListener('mousedown', onRightclick);
logo.addEventListener('mouseup', onRightclick);
logo.addEventListener('wheel', onRightclick);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragstart);