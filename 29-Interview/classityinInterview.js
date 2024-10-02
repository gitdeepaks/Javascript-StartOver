class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make a noise`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // this will call parent constructor
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const animals = new Animal("Generic Animals");

animals.speak();

const dog = new Dog("Dog");
dog.speak();
