function greet(greetings, punctuations) {
  console.log(`${greetings}, ${this.name} ${punctuations}`);
}

const person = { name: "Antonio" };

greet.call(person, "Hello", "!");
greet.apply(person, ["Hi", "."]);

const boundGreet = greet.bind(person);
boundGreet("Hey", "?");
