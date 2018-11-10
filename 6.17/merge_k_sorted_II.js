function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeLists_heap = (lists) => {
    const Heap = require('collection/heap');
    let minHeap = new Heap([], null, (node1, node2) => {
        return node2.val - node1.val;
    });
    let dummy = new ListNode(0);
    let tail = dummy;

    for (let list of lists) {
        if (list !== null) {
            minHeap.push(list);
        }
    }

    while (minHeap.length !== 0) {
        let node = minHeap.pop();
        if (node.next !== null) {
            minHeap.push(node.next);
        }

        tail.next = node;
        tail = tail.next;
    }
    return dummy.next;
};
const test = () => {
    let lists, node1, node2;
    node1 = new ListNode(-1);
    node1.next = new ListNode(-6);
    node2 = new ListNode(-3);
    lists = [node1, null, node2];
    console.log(mergeLists_heap(lists));
};

test();