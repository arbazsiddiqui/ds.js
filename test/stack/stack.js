const test = require('ava');
const Stack = require('../../src/data-structures/stack/stack');

test('initializes a stack correctly', t => {
	const stack = new Stack();
	t.deepEqual(stack.items, [])
});

test('pushed to a stack correctly', t => {
	const stack = new Stack();
	stack.push(1);
	stack.push(2);
	stack.push(3);
	t.deepEqual(stack.items, [1, 2, 3])
});

test('pops from a stack correctly', t => {
	const stack = new Stack();
	stack.push(1);
	stack.push(2);
	stack.push(3);
	t.is(stack.pop(), 3)
});

test('peeks from a stack correctly', t => {
	const stack = new Stack();
	stack.push(1);
	stack.push(2);
	stack.push(3);
	t.is(stack.peek(), 3)
});