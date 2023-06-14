const myMaps = new Map();

myMaps.set("name", "John");
myMaps.set(1, "Blue");
myMaps.set(2, "red");

console.log(myMaps.get("name"));
console.log(myMaps.get(1));
console.log(myMaps.get(2));

console.log(myMaps.size);

console.log(myMaps.has(1));
console.log(myMaps.has(3));

myMaps.delete(2);

console.log(myMaps);


console peopleMap = new Map();

peopleMap.set('deepak', {
    phone: "123",
    email: "deepak@gmail.com"
})
peopleMap.set('jill', {phone: "55667777", email: "jill@gmail.com"});
peopleMap.set('jack', {phone: "55667777", email: "jack@gmail.com"});


peopleMap.forEach((person) => console.log(person.email));

const peopleArr = Array.from(peopleMap);

console.log(peopleArr);
