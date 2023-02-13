const fName = 'John';
const lName = 'Doe';
const age = 30;

const person = {
    fName,
    lName,
    age,
}

console.log(person.age)

//Destructuring 
const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name: 'John',
    }

};

const { id, title } = todo


console.log(id, title)





