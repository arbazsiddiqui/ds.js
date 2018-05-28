class LinkedList {
	constructor() {
		this.head = null;
	}

	pushToEnd(value){
		const newNode = new Node(value);
		let temp = this.head;
		if(!this.head){
			this.head = newNode;
			return this.head;
		}
		while(temp.next){
			temp = temp.next
		}
		temp.next = newNode;
		newNode.prev = temp;
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