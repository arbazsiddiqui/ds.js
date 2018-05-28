class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	pushToEnd(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.size += 1;
			return this.head;
		}
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
		this.size += 1;
		return this.head;
	}

	pushToStart(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.size += 1;
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
		if(index===0){
			this.head = temp.next;
			this.size -= 1;
			return this.head;
		}
		while (temp.next && count < index) {
			temp = temp.next;
			count += 1;
		}
		if (count === index) {
			temp.prev.next = temp.next;
			temp.next.prev = temp.prev;
			temp = null;
			this.size -= 1;
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