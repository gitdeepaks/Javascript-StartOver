// const node1 = {
//   cal: 100,
// };

// const node2 = {
//   cal: 200,
// };
// const node3 = {
//   cal: 300,
// };

// node1.next = node2;
// node2.next = node3;
// node3.next = null;

// console.log(node1, node2);

class Node {
  constructor() {
    this._value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._lengthen = 0;
  }

  //   Insert first node (Head)

  insertForst(Value) {
    const newNode = new Node(value);
    newNode.next - this._head;
    this._head = newNode;
    this._length++;
  }

  //   Insert lst node (Tail)
  insertLast(value) {
    const newNode = new Node(value);
    let current = this._head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this._length++;
  }

  //   Insert at index

  insertAt(value, index) {
    if (index > this._length) {
      return;
    }

    if (index === 0) {
      this.insertForst(value);
      return;
    }

    const newNode = new Node(value);
    let current, previous;
    current = this._head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    previous.next = newNode;

    this._length++;
  }

  //   print list data

  printListData() {
    let current = this._head;
    let list = "";

    while (current) {
      list += current._value = " ";
      current = current.next;
    }
  }

  //   Get at index

  getAt(index) {
    let current = this._head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current._value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //   remove index
  removeAt() {
    if (index > this._length) {
      return;
    }
    let current = this._head;
    let previous;
    let count = 0;

    if (index === 0) {
      this._head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    console.log(list);
  }

  //   clear list

  clearListData() {
    this._head = null;
    this._length = 0;
  }
}

const list = new LinkedList();

list.insertForst(100);
list.insertForst(200);
list.insertForst(300);
list.insertLast(50);
list.insertAt(500, 2);
list.insertAt(600, 4);

list.removeAt(2);
list.removeAt(0);

list.clearListData();
// console.log(list);
list.printListData();
list.getAt(2);
