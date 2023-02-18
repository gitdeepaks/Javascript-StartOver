//insert Adjecent ELements Example
function insertElement() {
  const fileter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjecent';

  fileter.insertAdjacentElement('beforebegin', h1);

}

//insertAdjacenttext

function insertText() {
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('beforebegin', 'insertAdjacenttext')
}

//insertAdjecentHTML

function insertHTMl() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.insertAdjacentHTML('beforeend', '<h2>insertAdjecentHTML</h2>');
}


//insertBefore Example

function insertBeforItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');

  li.textContent = 'InsertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)')

  ul.insertBefore(li, thirdItem);



}



insertElement();

insertText();

insertHTMl();
insertBeforItem();
