class Stack {
	constructor() {
		this.items = []
	}

	push(value) {
		return this.items.push(value)
	}

	pop(){
		return this.items.pop()
	}

	peek(){
		return this.items[this.items.length -1]
	}
}

module.exports = Stack;