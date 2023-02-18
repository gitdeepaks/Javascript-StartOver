function removeClearBtn() {
  document.querySelector('#clear').remove();

}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);

}

// function removeItem(itemNo) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelectorAll('li')[itemNo - 1];
//   ul.removeChild(li);

// }

function removeItem3(itemNo) {
  const li = document.querySelectorAll('li');

  li[itemNo - 1].remove()

}

const removeItem4 = (itemNumbers) =>
  document.querySelectorAll('li')[itemNumbers - 1].remove();

// removeFirstItem()

removeClearBtn()
// removeItem();
removeItem3(2);
removeItem4(1);