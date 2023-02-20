const logo = document.querySelector('img');

function onCkick(e) {
    // console.log(e.target)
    // console.log(e.currentTarget)
    // console.log(e.type)
    // console.log(e.timeStamp)
    // console.log(e.clientX)
    // console.log(e.clientY)
    // console.log(e.offsetX)
    // console.log(e.offsetX)
    // console.log(e.pageX)
    // console.log(e.pageY)
    console.log(e.screenX)
    console.log(e.screenY)
}

logo.addEventListener('click', onCkick)

logo.addEventListener('drag', onDrag2)

function onDrag2(e) {
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`
}


document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();

    console.log('Link clicked')
});



// document.body.addEventListener('click', function (e) {
//     console.log(e.target)
//     console.log(e.currentTarget)
// })