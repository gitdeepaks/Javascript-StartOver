
const d = new Date(2023, 1, 10, 8, 0, 0);

const month = d.getMonth();
const hour = d.getHours();


switch (month) {
    case 1:
        console.log('It is January')
        break;
    case 2:
        console.log('It is February')
        break;
    case 3:
        console.log('It is March')
        break;
    default:
        break;
}

switch (true) {
    case hour < 12:
        console.log('Good Morning')
        break;

    default:
        console.log('and like that')
        break;
}