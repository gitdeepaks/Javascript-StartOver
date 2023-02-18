// // querySelectorAll

// const listItems = document.querySelectorAll('.items');

// console.log(listItems[1].innerText);

// listItems[1].style.color = 'blue';

// // console.log(listItems[1].innerText);


// // listItems[1].style.color = 'red';

// // listItems.forEach((item, index) => {
// //     item.style.color = 'red';
// //     if (index === 1) {
// //         item.style.color = 'blue';
// //     }

// //     if (index === 0) {
// //         item.innerHTML = `Guava
// //         <button class="remove-item btn-link text-red">
// //           <i class="fa-solid fa-xmark"></i>
// //         </button>`
// //     }
// // })

const listItems2 = document.getElementsByClassName('items')

console.log(listItems2)

const listItemsArr = Array.from(listItems2);

listItemsArr.forEach((item) => {
    console.log(item.innerText);
})

const listItems3 = document.getElementsByTagName('li')
console.log(listItems3[0].innerText);