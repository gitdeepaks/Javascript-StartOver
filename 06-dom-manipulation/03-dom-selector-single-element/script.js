//document.getElementById()

console.log(document.getElementById('app-title'))
// console.log((appTitle).id)
// console.log((appTitle).getAttribute('id'))


//set Attributes

// document.getElementById('app-title').id = 'new-id'
document.getElementById('app-title').title = 'Shopping List'
document.getElementById('app-title').setAttribute('class', 'title')

const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent)
title.textContent = 'Hello World'
title.innerText = 'Hello Again!'

title.innerHTML = '<strong> Shopping Strong </strong>';

//change styles


title.style.color = 'red'
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px'


// document.querySelector()

console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const seconfItem = document.querySelector('li:nth-child(2)');

seconfItem.innerText = 'Apple juice'
seconfItem.style.color = 'gray'

//use these methods on other elements

const list = document.querySelector('ul')
console.log(list)
const firstItem = list.querySelector('li')

firstItem.style.color = 'blue'

