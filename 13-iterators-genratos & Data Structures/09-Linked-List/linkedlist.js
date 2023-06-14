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

class LinkedList {
  // Constructor initializes the head of the list and the length of the list
  constructor() {
    this._head = null;
    this._length = 0;
  }

  // Method to insert a new node at the beginning of the list
  insertForst(Value) {
    const newNode = new Node(value); // Creates a new node
    newNode.next - this._head; // Points the new node to the current head
    this._head = newNode; // Sets the new node as the head of the list
    this._length++; // Increases the length of the list by 1
  }

  // Method to insert a new node at the end of the list
  insertLast(value) {
    const newNode = new Node(value); // Creates a new node
    let current = this._head; // Starts at the head of the list
    while (current.next) {
      // Traverses to the end of the list
      current = current.next;
    }

    current.next = newNode; // Inserts the new node at the end of the list
    this._length++; // Increases the length of the list by 1
  }

  // Method to insert a new node at a specific index
  insertAt(value, index) {
    if (index > this._length) {
      // If the index is greater than the length of the list, do nothing
      return;
    }

    if (index === 0) {
      // If the index is 0, insert the new node at the head of the list
      this.insertForst(value);
      return;
    }

    const newNode = new Node(value); // Creates a new node
    let current, previous;
    current = this._head; // Starts at the head of the list
    let count = 0;

    while (count < index) {
      // Traverses to the specified index
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current; // Inserts the new node at the specified index
    previous.next = newNode;

    this._length++; // Increases the length of the list by 1
  }

  // Method to print all the data in the list
  printListData() {
    let current = this._head; // Starts at the head of the list
    let list = "";

    while (current) {
      // Traverses the entire list
      list += current._value + " "; // Adds the value of each node to a string
      current = current.next;
    }
  }

  // Method to print the data at a specific index
  getAt(index) {
    let current = this._head; // Starts at the head of the list
    let count = 0;
    while (current) {
      if (count === index) {
        // When the current node is at the specified index
        console.log(current._value); // Prints the value of the node
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Method to remove a node at a specific index
  removeAt() {
    if (index > this._length) {
      // If the index is greater than the length of the list, do nothing
      return;
    }
    let current = this._head; // Starts at the head of the list
    let previous;
    let count = 0;

    if (index === 0) {
      // If the index is 0, remove the head of the list
      this._head = current.next;
    } else {
      while (count < index) {
        // Traverses to the specified index
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next; // Removes the node at the specified index
    }

    console.log(list);
  }

  // Method to clear all the data in the list
  clearListData() {
    this._head = null; // Sets the head of the list to null
    this._length = 0; // Sets the length of the list to 0
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
