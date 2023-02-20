const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');
}
const onKeyUp = (e) => {
    console.log('keyup');
}
const onKeyDown = (e) => {
    //key
    if (e.key === 'Enter') {
        alert('enter pressed');
    }

    //keyCode
    if (e.keyCode === 13) {
        alert('enter pressed');
    }



    //code

    if (e.code === 'Digit1') {
        console.log('you pressed 1')
    }

    if (e.repeat) {
        console.log('you are holding down' + e.key);
    }

    console.log('Shift' + e.shiftKey);
    console.log('Control' + e.ctrlKey);
    console.log('Alt' + e.altKey);
}

// itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keyup', onKeyDown)