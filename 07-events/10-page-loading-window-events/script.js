window.onload = function () {

    document.querySelectorAll('h1').textContent = 'Hello';
}


window.addEventListener('load', () => {
    console.log('first')

})

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded')

})

console.log('Run me')

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resize to ${window.innerWidth} x ${window.innerHeight}`;

})
window.addEventListener('scroll', () => {
    console.log(`${window.scrollX} x ${window.scrollY}`)

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
})

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'blue';
    })
}
)
window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    })
}
)