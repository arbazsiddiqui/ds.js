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
		return this._insert(this.root, newNode)
	}

	_insert(node, newNode) {
		if (node.value > newNode.value) {
			if (!node.left) {
				node.left = newNode
			} else {
				return this._insert(node.left, newNode)
			}
		} else {
			if (!node.right) {
				node.right = newNode
			} else {
				return this._insert(node.right, newNode)
			}
		}
		return this.root;
	}

	preOrder(node) {
		return this._preOrder(node, []);
	}

	_preOrder(node, res) {
		if (node) {
			res.push(node.value);
			this._preOrder(node.left, res);
			this._preOrder(node.right, res);
		}
		return res
	}

	inOrder(node) {
		return this._inOrder(node, []);
	}

	_inOrder(node, res) {
		if (node) {
			this._inOrder(node.left, res);
			res.push(node.value);
			this._inOrder(node.right, res);
		}
		return res
	}

	postOrder(node) {
		return this._postOrder(node, [])
	}

	_postOrder(node, res) {
		if (node) {
			this._postOrder(node.left, res);
			this._postOrder(node.right, res);
			res.push(node.value)
		}
		return res
	}

	minNode(){
		return this._minNode(this.root)
	}

	_minNode(node){
		if(!node)
			return null;
		if(node.left)
			return this._minNode(node.left);
		return node.value
	}

	maxNode(){
		return this._maxNode(this.root)
	}

	_maxNode(node){
		if(!node)
			return null;
		if(node.right)
			return this._maxNode(node.right);
		return node.value
	}

	search(key){
		 return this._search(key, this.root)
	}

	_search(key, node){
		if(!node)
			return null;
		if(key===node.value)
			return node;
		if(key > node.value)
			return this._search(key, node.right);
		if(key < node.value)
			return this._search(key, node.left);
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