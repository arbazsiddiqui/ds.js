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
		if (index === count)
			return temp;
		else
			return null;
	}

	deleteAtIndex(index) {
		let temp = this.head;
		let prevNode;
		let count = 0;
		if(index===0){
			this.head = temp.next;
			return this.head;
		}
		while (temp.next && count < index) {
			prevNode = temp;
			temp = temp.next;
			count += 1;
		}
		if(index === count){
			prevNode.next = temp.next;
			temp = null;
		} else {
			throw new Error("Cant delete on invalid index");
		}
		return this.head;
	}
}

class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}

module.exports = LinkedList;