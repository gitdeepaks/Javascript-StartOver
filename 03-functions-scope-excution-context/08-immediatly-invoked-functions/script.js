//(IIFE)

(function () {
    const user = 'Jhon';
    console.log(user)
    const hello = () => console.log('hello from IIFE')
    hello();
})();

(function (name) {
    console.log('Hello ' + name);
})('Shaun');

// (function hello() {
//     console.log('Hello')
//     // hello();
// })();

