let output;
//DOM Nodes

const parent = document.querySelector('.parent');
output = parent.childNodes;

output = parent.childNodes[0].textContent;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';


output = parent.firstChild
output = parent.lastChild.textContent = 'Hello'


//ParentNode

const child = document.querySelector('.child')

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = 'azure';
child.parentNode.style.padding = '10px';

//Sibling

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output)
