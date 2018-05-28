class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	pushToEnd(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return this.head;
		}
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
		return this.head;
	}

	pushToStart(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		return this.head;
	}

	getAtIndex(index) {
		let temp = this.head;
		let count = 0;
		while (temp.next && count < index) {
			temp = temp.next;
			count += 1;
		}
		if (count === index) {
			return temp
		}
		return null
	}

	deleteAtIndex(index) {
		let temp = this.head;
		let count = 0;
		while (temp.next && count < index) {
			temp = temp.next;
			count += 1;
		}
		if (count === index) {
			temp.prev.next = temp.next;
			temp.next.prev = temp.prev;
			temp = null;
		} else {
			throw new Error("Cant delete on invalid index")
		}
		return this.head;
	}
}

class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
		this.prev = null;
	}
}

module.exports = LinkedList;