const listItems = document.querySelectorAll('li');
const ul = document.querySelector('ul');
// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });


ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})

ul.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
})

