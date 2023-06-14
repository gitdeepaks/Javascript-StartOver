class Quesus {
  constructor() {
    this._items = [];
    this._count = 0;
    this.front = 0;
  }

  enqueue(item) {
    this._items[this._count] = item;
    this._count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this._items[this._front];
    for (let i = this._front; i < this._count - 1; i++) {
      this._items[i] = this._items[i + 1];
    }
    this._count--;
    this._items.length = this._count;

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return "No items in the queue";
    }
    return this._items[this._front];
  }

  length() {
    return (this._count = 0 - this._front);
  }

  isEmpty() {
    return this._count === 0;
  }
}

const q = new Queue();

q.enqueue("Item 1");
q.enqueue("Item 2");
q.enqueue("Item 3");

q.dequeue;

console.log("Font item :", q.peek());
console.log("Queue length :", q.length());
