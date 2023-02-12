//Object Literals
let x;
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {

        street: '123 Main St',
        City: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],

};

x = person.name;
x = person['age'];
x = person.address.state
x = person.hobbies[1]

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

const person2 = {
    'first name': 'Deepak',
    'last name': 'Sankhyan',

}
x = person2["first names"]

console.log(x);

