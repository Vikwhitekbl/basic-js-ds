const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.start;
    // remove line with error and write your code here
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.start === null) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    // remove line with error and write your code here
  }

  dequeue() {
    if (this.start === null) {
      return undefined;
    }
    const currentValue = this.start.value;
    this.start = this.start.next;
    if (this.start === null) {
      this.end = null;
    }
    return currentValue;
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
