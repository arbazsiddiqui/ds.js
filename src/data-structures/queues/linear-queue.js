const LinkedList = require('../linked-lists/doubly-linked-list');

class Queue {
	constructor(){
		this.ll = new LinkedList();
	}

	enqueue(value){
		this.ll.pushToEnd(value);
		return this.ll;
	}

	dequeue(){
		this.ll.deleteAtIndex(0)
	}
}

module.exports = Queue;