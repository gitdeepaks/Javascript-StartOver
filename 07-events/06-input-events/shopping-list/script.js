const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');
const heading = document.querySelector('h1');


itemInput.addEventListener('input', (e) => {
    heading.textContent = e.target.value;
});


priorityInput.addEventListener('change', (e) => {
    heading.textContent = e.target.value;
});

checkBox.addEventListener('input', (e) => {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'NotChecked';
});

itemInput.addEventListener('focus', (e) => {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
});

checkBox.addEventListener('blur', (e) => {
    console.log('input is not focused');
    itemInput.style.outlineStyle = 'none';
});