class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this.root
		}
		this.insertNode(this.root, newNode)
	}

	insertNode(node, newNode) {
		if (node.value > newNode.value) {
			if (!node.left) {
				node.left = newNode
			} else {
				this.insertNode(node.left, newNode)
			}
		} else {
			if (!node.right) {
				node.right = newNode
			} else {
				this.insertNode(node.right, newNode)
			}
		}
		return this.root;
	}

	preOrder(node) {
		return this.preOrderCollect(node, []);
	}

	preOrderCollect(node, res) {
		if (node) {
			res.push(node.value);
			this.preOrderCollect(node.left, res);
			this.preOrderCollect(node.right, res);
		}
		return res
	}

	inOrder(node) {
		return this.inOrderCollect(node, []);
	}

	inOrderCollect(node, res) {
		if (node) {
			this.inOrderCollect(node.left, res);
			res.push(node.value);
			this.inOrderCollect(node.right, res);
		}
		return res
	}

	postOrder(node) {
		return this.postOrderCollect(node, [])
	}

	postOrderCollect(node, res) {
		if (node) {
			this.postOrderCollect(node.left, res);
			this.postOrderCollect(node.right, res);
			res.push(node.value)
		}
		return res
	}

	minNode(){
		return this.minNodeIterator(this.root)
	}

	minNodeIterator(node){
		if(!node)
			return null;
		if(node.left)
			return this.minNodeIterator(node.left);
		return node.value
	}

	maxNode(){
		return this.maxNodeIterator(this.root)
	}

	maxNodeIterator(node){
		if(!node)
			return null;
		if(node.right)
			return this.maxNodeIterator(node.right);
		return node.value
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

module.exports = BST;