class EeventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listner) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listner);
  }

  off(event, listnerToRemove) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(
      (listner) => listner !== listnerToRemove
    );
  }
  once(event, listner) {
    const wrapper = (...args) => {
      listner(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach((listner) => listner.apply(this, args));
  }
}
//Usage
const emitter = new EeventEmitter();

function greet(name) {
  console.log(`Hello, ${name}`);
}

emitter.on("greet", greet);
emitter.emit("greet", "Antonio");
emitter.off("greet", greet);
emitter.emit("greet", "Brad");

emitter.once("welcome", (name) => console.log(`Welcome ${name}`));
emitter.emit("welcome", "Antonio");
emitter.emit("welcome", "Antonio");
