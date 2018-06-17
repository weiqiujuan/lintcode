/**
 * Definition for singly-linked list.
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeKLists = (lists) => {
    if (lists === null || lists.length === 0) {
        return [];
    }
    return helper(lists, 0, lists.length - 1);
};

const helper = (lists, start, end) => {
    if (start === end) {
        return lists[start];
    }
    let mid = Math.floor(start + (end - start) / 2);
    let left = helper(lists, start, mid);
    let right = helper(lists, mid + 1, end);

    return mergeTwoList(left, right);
};

const mergeTwoList = (head1, head2) => {
    let dummy = new ListNode(0);
    let curr = dummy;
    let curr1 = head1, curr2 = head2;
    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            curr.next = curr1;
            curr1 = curr1.next;
        } else {
            curr.next = curr2;
            curr2 = curr2.next;
        }
        curr = curr.next;
    }
    if (curr1 !== null) {
        curr.next = curr1;
    }
    if (curr2 !== null) {
        curr.next = curr2;
    }
    return dummy.next;
};

const test = () => {
    let lists, node1, node2;
    node1 = new ListNode(-1);
    node1.next = new ListNode(-6);
    node2 = new ListNode(-3);
    lists = [node1, null, node2];
    console.log(mergeKLists(lists));
};

test();