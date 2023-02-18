//Quirky and Dirty

function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`
  document.querySelector('.items').appendChild(li);
}

//clean and  Performant


function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  const button = creatButton('remove-item btn-link text-red')
  li.appendChild(button);
  console.log(li.innerHTML)
  document.querySelector('.items').appendChild(li);

}


//Refactor To Multiple Functions

function creatButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = creatIcon('fa-solid fa-xmark')
  button.appendChild(icon);
  return button;
}
function creatIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;

}



createListItem('Atta')

createNewItem('Protien')
createNewItem('Saunf')
createNewItem('Asafotida')