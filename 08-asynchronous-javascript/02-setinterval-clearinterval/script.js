// const intervalID = setInterval(myCallback, 1000, 'Hello!');


// function myCallback(a) {
//     console.log(a, Date.now());
// }

let intervalID;

function startChange() {
    if (!intervalID) {
        intervalID = setInterval(changeRandonColor, 1000);
    }
}

// function changeColor() {
//     if (document.body.style.backgroundColor !== 'black') {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }


function changeRandonColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
    clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

