'use strict';

class Node {}

class LinkedList{}

let mergeLists = (l1, l2) => {
  let currentNode = l1.head;
  let newNode = l2.next;

  while(li2.head != null) {
    currentNode.next = l2.head.next;
    l1.head.next = l2.head
    currentNode.next.next = newNode;
  }
  return l1.head;
}
