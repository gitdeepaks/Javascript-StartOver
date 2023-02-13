const todo = {};

todo.id = 1;

todo.name = 'Buy Milk';
todo.completed = true;


x = todo;

const person = {
    adderess: {
        coords: {
            lat: 42.9382,
            lng: -71.3234,
        },
    },
};


x = person.adderess.coords.lat;

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 2, d: 4 }

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todoss = [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
    { id: 3, name: 'hello' },
];
x = todoss[0].name;

x = Object.values(todoss);
x = Object.entries(todoss);
x = todoss.hasOwnProperty('age')
console.log(x)