const test = require('ava');
const BST = require('../../src/data-structures/trees/binary-search-tree');

test('initializes a tree', t => {
	const bst = new BST();
	t.is(bst.root, null)
});

test('inserts in a tree', t => {
	const bst = new BST();
	bst.insert(4);
	bst.insert(1);
	bst.insert(7);
	bst.insert(10);
	t.is(bst.root.left.value, 1);
	t.is(bst.root.right.value, 7);
	t.is(bst.root.right.right.value, 10);
});

test('traverses pre order', t => {
	const bst = new BST();
	bst.insert(4);
	bst.insert(1);
	bst.insert(7);
	bst.insert(10);
	t.deepEqual(bst.preOrder(bst.root), [4, 1, 7, 10])
});

test('traverses in order', t => {
	const bst = new BST();
	bst.insert(4);
	bst.insert(1);
	bst.insert(7);
	bst.insert(10);
	t.deepEqual(bst.inOrder(bst.root), [1, 4, 7, 10])
});

test('traverses post order', t => {
	const bst = new BST();
	bst.insert(4);
	bst.insert(1);
	bst.insert(7);
	bst.insert(10);
	t.deepEqual(bst.postOrder(bst.root), [1, 10, 7, 4])
});

test('min node', t => {
	const bst = new BST();
	bst.insert(4);
	bst.insert(1);
	bst.insert(7);
	bst.insert(10);
	t.is(bst.minNode(), 1)
});

test('max node', t => {
	const bst = new BST();
	bst.insert(4);
	bst.insert(1);
	bst.insert(7);
	bst.insert(10);
	t.is(bst.maxNode(), 10)
});

test('search', t => {
	const bst = new BST();
	bst.insert(4);
	bst.insert(1);
	bst.insert(7);
	bst.insert(10);
	t.is(bst.search(10).value, 10);
	t.is(bst.search(4).value, 4);
	t.is(bst.search(13), null);
});