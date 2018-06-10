const reorderList = (head) => {
    if (head === null || head.next === null) {
        return;
    }
    let mid = findMid(head);
    let tail = reverseList(mid.next);
    mid.next = null;
    mergeTwoList(head, tail);
};
const findMid = (head) => {
    //慢的走一步，快的走两步，直到快的走完，慢的刚好到中间
    let slow = head, fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    //利用头插法进行链表逆置
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

const mergeTwoList = (head1, head2) => {
    let dummy = new ListNode(0);
    console.log(dummy);
    let head = dummy;
    let index = 0;

    while (head1 !== null && head2 !== null) {
        if (index % 2 === 0) {
            head.next = head1;
            head1 = head1.next;
        } else {
            head.next = head2;
            head2 = head2.next;
        }
        head = head.next;
        index++;
    }
    if (head1 !== null) {
        head.next = head1;
    } else {
        head.next = head2;
    }
};

reorderList();