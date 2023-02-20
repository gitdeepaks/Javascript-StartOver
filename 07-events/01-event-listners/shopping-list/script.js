const clearBtn = document.querySelector('#clear');

function onCLear() {
  const itemlist = document.querySelector('ul');

  const items = itemlist.querySelectorAll('li');

  //   itemlist.innerHTML = '';

  // items.forEach((items) => items.remove());

  while (itemlist.firstChild) {
    itemlist.removeChild(itemlist.firstChild);
  }

}


// clearBtn.onclick = function () {
//   alert('Clear Items');
// };


//add eventlistner


// clearBtn.addEventListener('click', () => {
//   alert('Clear Items');
// })
clearBtn.addEventListener('click', onCLear);

// setTimeout(() => clearBtn.removeEventListener('clck', onCLear), 5000);

// setTimeout(() => clearBtn.click(), 5000)