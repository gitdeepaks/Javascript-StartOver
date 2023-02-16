const items = ['table', 'cheers', 'woods', 'grasshopper'];

const users = [
    { name: 'John' },
    { name: 'Kate' },
    { name: 'Isbail' },

]

for (const item of items) {
    console.log(item)

}


for (const user of users) {
    console.log(user.name)
}


//Loops over strings

const str = 'Hello World'
for (const letter of str) {
    console.log(letter)
}


//Loops over Maps

const map = new Map();

map.set('name', 'John');
map.set('age', '30');

for (const [key, value] of map) {
    console.log(key, value)
}
