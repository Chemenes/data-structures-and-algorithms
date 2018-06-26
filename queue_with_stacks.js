'use strict'

class Queue {
  constructor () {
    this.arr = ['2','3','4','5'];
    this.arr2 = ['1'];
    this arr3 = ['1','2', '3','4','5']
  }

  enqueue(value) {
    for (let i = 0; i< this.arr.length; i +=1) {
      this.arr.push(this.arr.pop());
    }
    this.arr.push(value);
    for (let i = 0; i < this.arr2.length; i += 1) {

    }
  }

  dequeue() {
    return this.arr3.pop();
  }
};