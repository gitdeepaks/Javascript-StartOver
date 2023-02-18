function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child')

  const li = document.createElement('li');
  li.textContent = 'Replaces First'

  firstItem.replaceWith(li);
}

function repSec() {
  const secItem = document.querySelector('li:nth-child(2)');

  secItem.outerHTML = '<li> Replace Second</li>';
}

function replaceAllItems() {

  const lis = document.querySelectorAll('li')
  lis.forEach((item, index) => {
    if (index === 1) {

      item.outerHTML = '<li>Second Item </li>';

    } else

      item.outerHTML = '<li>Replace All </li>';
  });



}

function replaceChildHeading() {

  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');

  h2.id = 'app-title';
  h2.textContent = 'Shopping list';

  header.replaceChild(h2, h1)
}

replaceFirstItem();
repSec();

replaceAllItems();
replaceChildHeading()

