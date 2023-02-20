const btn = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(3)');

const form = document.querySelector('form');

btn.addEventListener('click', (e) => {
    alert('btn clicked');
    e.stopPropagation();
})

div.addEventListener('click', () => {
    alert('div clicked');
});
form.addEventListener('click', () => {
    alert('form clicked');
});

document.body.addEventListener('click', () => {
    console.log('body clicked');
});