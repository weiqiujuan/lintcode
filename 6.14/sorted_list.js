class List {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const SortList = (head) => {
    if (head === null || head.next === null) {
        return head;
    }

    let middle = findMiddle(head);
    let right = SortList(middle.next);
    middle.next = null;
    let left = SortList(head);

    return mergeList(left, right);
};

const findMiddle = (head) => {

    let slow = head;
    let fast = head.next;
    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const mergeList = (left, right) => {

    let dummy = new List(0);
    let tail = dummy;

    while (left !== null && right !== null) {
        if (left.val < right.val) {
            tail.next = left;
            left = left.next;
        } else {
            tail.next = right;
            right = right.next;
        }

        tail = tail.next;
    }
    if (left !== null) {
        tail.next = left
    }
    if (right !== null) {
        tail.next = right;
    }

    return dummy.next;
};

const test = () => {
    let head;
    head = new List(8);
    head.next = new List(3);
    head.next.next = new List(5);
    console.log(SortList(head));
};
test();