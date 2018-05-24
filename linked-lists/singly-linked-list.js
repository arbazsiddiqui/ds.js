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

const x = new LinkedList();

x.pushToEnd(5);
x.pushToEnd(6);
x.pushToEnd(7);
x.pushToStart(4);
console.log(x.getAtIndex(2));
x.deleteAtIndex(2);
console.log(JSON.stringify(x, null, 4));