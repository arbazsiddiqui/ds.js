const test = require('ava');
const Queue = require('../../src/data-structures/queues/linear-queue');

test('initializes a queue', t => {
	const queue = new Queue();
	t.is(queue.ll.head, null);
	t.is(queue.ll.tail, null);
});

test('enqueues', t => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	t.is(queue.ll.head.data, 1);
});

test('dequeues', t => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.dequeue();
	t.is(queue.ll.head.data, 2);
	t.is(queue.ll.tail.data, 3);
});