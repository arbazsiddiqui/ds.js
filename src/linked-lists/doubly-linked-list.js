class LinkedList {
	constructor() {
		this.head = null;
	}

	pushToEnd(value) {
		const newNode = new Node(value);
		let temp = this.head;
		if (!this.head) {
			this.head = newNode;
			return this.head;
		}
		while (temp.next) {
			temp = temp.next
		}
		temp.next = newNode;
		newNode.prev = temp;
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