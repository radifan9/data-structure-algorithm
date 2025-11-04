class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Methods
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; // Point the current tail's next to the new node
    this.tail = newNode; // Update the tail to be the new node
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // Check parameters
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // Check parameters

    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    // Get the node at specified index
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  reverse() {
    // Check if there is only 1 node
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head; // First node
    this.tail = this.head; // Update tail to be the current head
    let second = first.next; // Second node

    // Loop as long as there is a second node
    while (second) {
      const temp = second.next; // Store the "third" node
      second.next = first; // Reverse the pointer to the previous node

      // Move the pointers forward
      first = second;
      second = temp;
    }

    // After completing the loop, update the head and set old head's next to null
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

// Instantiate a class
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.remove(2);
console.log(myLinkedList.printList());

myLinkedList.reverse();
console.log(myLinkedList.printList());
// console.log(myLinkedList);
