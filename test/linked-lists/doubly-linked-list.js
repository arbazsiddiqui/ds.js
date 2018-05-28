const test = require('ava');
const LinkedList = require('../../src/data-structures/linked-lists/doubly-linked-list');

test('initializes a ll', t => {
	const ll = new LinkedList();
	t.is(ll.head, null)
});

test('pushes to a end of ll', t => {
	const ll = new LinkedList();
	ll.pushToEnd(1);
	ll.pushToEnd(2);
	ll.pushToEnd(3);
	t.is(ll.head.data, 1);
	t.is(ll.head.next.next.data, 3);
});

test('pushes to begin of ll', t => {
	const ll = new LinkedList();
	ll.pushToStart(3);
	ll.pushToStart(2);
	ll.pushToStart(1);
	t.is(ll.head.data, 1);
	t.is(ll.head.next.next.data, 3);
});

test('gets at an index', t => {
	const ll = new LinkedList();
	ll.pushToEnd(1);
	ll.pushToEnd(2);
	ll.pushToEnd(3);
	t.is(ll.getAtIndex(1).data, 2);
	t.is(ll.getAtIndex(2).data, 3);
	t.is(ll.getAtIndex(6), null)
});

test('deletes at an index', t => {
	const ll = new LinkedList();
	ll.pushToEnd(1);
	ll.pushToEnd(2);
	ll.pushToEnd(3);
	ll.deleteAtIndex(1);
	t.is(ll.getAtIndex(1).data, 3);
	t.throws(() => ll.deleteAtIndex(4))
});