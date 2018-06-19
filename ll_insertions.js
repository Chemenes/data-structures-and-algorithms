'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedLists{
 constructor() {
   this.head = null;
 }
}
//Append
append(value) {
  const node = new Node(Value);
  if(!this.head) {
    this.head = node;
    return this;
  }

let currentNode = this.head;
  while (currentNode.next) {
    currentNode = currentNode.next;
}
  currentNode.next = newNode;
  return this;

};

//InsertBefore
insertBefore(value, newValue) {
  const newNode = new Node (new Value);

  if (!this.head) return null;

  if (this.head.value === value) {
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  let currentNode = this.head;
  while (currentNode.next) {
    if (currentNode.next.value === value) {
      newNode.next = currentNode.next;
      currentNode.next = NewNode;
      return this;
    }
    currentNode = currentNode.next
}
return null;

};

//InsertAfter

insertAfter(value, NewValue) {
  if (!this.head) return null;

  const newNode = new Node(newValue);

  let currentNode = this.head;
  while (currentNode.next) {
    if (currentNode.value === value) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return this;
    }
    currentNode = currentNode.next;
  }

  if (currentNode.value === value) {
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return this;
  }

  return null;
};








