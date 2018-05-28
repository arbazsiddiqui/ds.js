const test = require('ava');
const Queue = require('../../src/queues/linear-queue');

test('initializes a queue correctly', t => {
	const queue = new Queue();
	t.is(queue.ll.head, null);
	t.is(queue.ll.tail, null);
});

test('enqueues correctly', t => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	t.is(queue.ll.head.data, 1);
});

test('dequeues correctly', t => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.dequeue();
	t.is(queue.ll.head.data, 2);
	t.is(queue.ll.tail.data, 3);
});